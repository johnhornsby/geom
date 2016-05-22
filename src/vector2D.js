export default class Vector2D {
	

	_x = 0;

	_y = 0;


	constructor(x, y) {
		this._x = x || 0;
		this._y = y || 0;
	}






	/*_______________________________________________________

	Public Methods
	_________________________________________________________*/

	set x(x) { this._x = x }
	get x() { return this._x }
	
	
	set y(y) { this._y = y }
	get y() { return this._y }





	/*_______________________________________________________

	Static Methods
	_________________________________________________________*/

	static distance(v1, v2) {
		const v3 = {
			x: v2.x - v1.x,
			y: v2.y - v1.y
		};
		return Math.sqrt(Math.pow(v3.x, 2) + Math.pow(v3.y, 2));
	}
	

	static interpolate(v1, v2, f) {
		const v3 = new Vector2D;
		v3.x = v1.x + ((v2.x - v1.x) * f);
		v3.y = v1.y + ((v2.y - v1.y) * f);
		return v3;
	}


	static angleBetweenVectors(hV, aV) {
		return (hV.x * aV.x + hV.y * aV.y) / ((Math.sqrt(Math.pow(hV.x, 2) + Math.pow(hV.y, 2))) * (Math.sqrt(Math.pow(aV.x, 2) + Math.pow(aV.y, 2))));
	}
}
