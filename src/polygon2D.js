import Matrix2D from './matrix2D';
import Vector2D from './vector2D';
import Rectangle from './rectangle';


export default class Polygon2D {


	_points = null;

	_transform = null;


	constructor(points) {
		let p, x, y;
		this._points = [];

		this._transform = new Matrix2D();

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


	set transform(matrix2D) {
		this._transform = matrix2D;
	}


	toString() {
		let str = "";
		for (let vector2D of this._points) {
			vector2D = this._transformPoint(vector2D);
			str += `${vector2D.x},${vector2D.y} `
		}
		return str.slice(0, - 1);
	}


	toArray() {
		let a = [];
		for (let vector2D of this._points) {
			vector2D = this._transformPoint(vector2D);
			a.push([vector2D.x,vector2D.y]);
		}
		return a;
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
		return new Vector2D(parseInt(p[0]), parseInt(p[1]));
	}


	_importArray(array) {
		return new Vector2D(array[0], array[1]);
	}
}
