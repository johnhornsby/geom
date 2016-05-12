export default class Vector2D {
	
	constructor(x, y) {
		this._x = x || 0;
		this._y = y || 0;
	}
	
	static distance(v1, v2) {
		const v3 = {
			x: v2.x - v1.x,
			y: v2.y - v1.y
		};
		return Math.sqrt(Math.pow(v3.x, 2) + Math.pow(v3.y, 2));
	}
	
	static interpolate(v1, v2, l) {
		const v3 = {};
		v3.x = v1.x + ((v2.x - v1.x) * l);
		v3.y = v1.y + ((v2.y - v1.y) * l);
		return v3;
	}
	
	set x(vx) { this._x = vx }
	get x() { return this._x }
	
	set y(vy) { this._y = vy }
	get y() { return this._y }
}

