export default class Matrix2D {

	constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
		this.setValues(a, b, c, d, tx, ty);
	}
	
	setValues(a, b, c, d, tx, ty) {
		this._a = a;
		this._b = b;
		this._c = c;
		this._d = d;
		this._tx = tx;
		this._ty = ty;
	}
	
	set a(a) { this._a = a }
	set b(b) { this._b = b }
	set c(c) { this._c = c }
	set d(d) { this._d = d }
	set tx(tx) { this._tx = tx }
	set ty(ty) { this._ty = ty }
	
	get a() { return this._a }
	get b() { return this._b }
	get c() { return this._c }
	get d() { return this._d }
	get tx() { return this._tx }
	get ty() { return this._ty }
	
	translate(tx, ty) {
		const I = Matrix2D.identity();
		I.tx = tx;
		I.ty = ty;
		
		const m = Matrix2D.multiply(this, I);
		Matrix2D.copy(this, m);
	}
	
	scale(sx, sy) {
		const I = Matrix2D.identity();
		I.a = sx;
		I.d = sy;
		
		const m = Matrix2D.multiply(this, I);
		Matrix2D.copy(this, m);
	}
	
	rotate(theta) {
		const rads = theta * (Math.PI / 180);
		const cos = Math.cos(rads);
		const sin = Math.sin(rads);
		const I = Matrix2D.identity();
		I.a = cos;
		I.b = sin;
		I.d = cos;
		I.c = sin * -1;
		
		const m = Matrix2D.multiply(this, I);
		Matrix2D.copy(this, m);
	}
	
	multiply(m2) {
		const m = Matrix2D.multiply(this, m2);
		Matrix2D.copy(this, m);
	}
	
	static multiply(m1, m2) {
		const m3 = Matrix2D.identity();
		m3.a = m1.a * m2.a + m1.c * m2.b + m1.tx * 0;
		m3.b = m1.b * m2.a + m1.d * m2.b + m1.ty * 0;
		//0 = 0 * m2.a + 0 * m2.b + 1 * 0;
		m3.c = m1.a * m2.c + m1.c * m2.d + m1.tx * 0;
		m3.d = m1.b * m2.c + m1.d * m2.d + m1.ty * 0;
		//0 = 0 * m2.c + 0 * m2.d + 1 * 0;
		m3.tx = m1.a * m2.tx + m1.c * m2.ty + m1.tx * 1;
		m3.ty = m1.b * m2.tx + m1.d * m2.ty + m1.ty * 1;
		// 1 = 0 * m2.tx + 0 * m2.ty + 1 * 1
		return m3;
	}
	
	static copy(m1, m2) {
		m1.setValues(m2.a, m2.b, m2.c, m2.d, m2.tx, m2.ty);
	}
	
	
	static identity() {
		return new Matrix2D();
	}
}



