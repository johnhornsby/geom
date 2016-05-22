import Matrix2D from './matrix2D';
import Vector2D from './vector2D';
import Rectangle from './rectangle';


export default class Polygon2D {


	_points = null;

	_transform = null;

	_worldTransform = null;


	constructor(points) {
		let p, x, y;
		this._points = [];

		this._transform = new Matrix2D();
		this._worldTransform = new Matrix2D();

		if (points.constructor === String) {
			this._points = points.split(' ').map((str) => this._importString(str))
		}

		if (points.constructor === Array) {
			this._points = points.map((array) => this._importArray(array))
		}
	}





	/*_______________________________________________________

	Public Methods
	_________________________________________________________*/

	get length() { return this._points.length }


	get x() { return this._worldTransform.tx }
	set x(x) { this._worldTransform.tx = x }


	get y() { return this._worldTransform.ty }
	set y(y) { this._worldTransform.ty = y }


	get transform() { return this._transform }
	set transform(m) { this._transform = m }


	get worldTransform() { return this._worldTransform }


	get bounds() {
		let minX = 9999999;
		let minY = 9999999;
		let maxX = -9999999;
		let maxY = -9999999;

		for (let vector2D of this._points) {
			vector2D = this._transformPoint(vector2D);
			minX = Math.min(minX, vector2D.x);
			minY = Math.min(minY, vector2D.y);
			maxX = Math.max(maxX, vector2D.x);
			maxY = Math.max(maxY, vector2D.y);
		}
		return new Rectangle(minX, minY, maxX, maxY);
	}


	toArray(worldMatrix2D) {
		let x, y, a = [];

		worldMatrix2D = worldMatrix2D || this._worldTransform;
		const collapsedTransform = Matrix2D.multiply(this._transform, worldMatrix2D);

		for (let vector2D of this._points) {

			x = vector2D.x * collapsedTransform.a + vector2D.y * collapsedTransform.c + collapsedTransform.tx;
			y = vector2D.x * collapsedTransform.b + vector2D.y * collapsedTransform.d + collapsedTransform.ty;

			a.push([x, y]);
		}
		return a;
	}


	toString(worldMatrix2D) {
		let x, y, str = "";

		worldMatrix2D = worldMatrix2D || this._worldTransform;
		const collapsedTransform = Matrix2D.multiply(this._transform, worldMatrix2D);

		for (let vector2D of this._points) {

			x = vector2D.x * collapsedTransform.a + vector2D.y * collapsedTransform.c + collapsedTransform.tx;
			y = vector2D.x * collapsedTransform.b + vector2D.y * collapsedTransform.d + collapsedTransform.ty;

			str += `${x},${y} `
		}
		return str.slice(0, - 1);
	}




	/*_______________________________________________________

	Private Methods
	_________________________________________________________*/

	_transformPoint(vector2D) {
		const v = new Vector2D;
		v.x = vector2D.x * this._transform.a + vector2D.y * this._transform.c + this._transform.tx;
		v.y = vector2D.x * this._transform.b + vector2D.y * this._transform.d + this._transform.ty;
		return v;
	}


	_importString(str) {
		const p = str.split(',')
		return new Vector2D(parseFloat(p[0]), parseFloat(p[1]));
	}


	_importArray(array) {
		return new Vector2D(array[0], array[1]);
	}





	
	/*_______________________________________________________

	Static Methods
	_________________________________________________________*/

	static interpolate(p1, p2, f) {
		const a = [];
		const l = p1.length;
		let x, y, d = l;

		if (p1.length === p2.length) {

			p1 = p1.toArray();
			p2 = p2.toArray();

			while(d--) {
				a.unshift([
					[p1[d][0] + ((p2[d][0] - p1[d][0]) * f)],
					[p1[d][1] + ((p2[d][1] - p1[d][1]) * f)]
				]);
			}
		} else {
			throw Error("Can't interpolate Polygons as there are not the same length!");
			return;
		}

		return new Polygon2D(a);
	}
}
