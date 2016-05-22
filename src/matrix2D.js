import Vector2D from './vector2D';


export default class Matrix2D {


	constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
		this.setValues(a, b, c, d, tx, ty);
	}
	





	/*_______________________________________________________

	Public Methods
	_________________________________________________________*/

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
	
	
	/**
	 * Prepends matrix to our matrix
	 *
	 */
	multiply(m) {
		let a = this.a;
		let b = this.b;
		let c = this.c;
		let d = this.d;
		let tx = this.tx;
		let ty = this.ty;

		this.a = m.a * a + m.c * b;
		this.b = m.b * a + m.d * b;

		this.c = m.a * c + m.c * d;
		this.d = m.b * c + m.d * d;

		this.tx = m.a * tx + m.c * ty + m.tx;
		this.ty = m.b * tx + m.d * ty + m.ty;

		return this;
	}


	transformPoint(vector2D) {
		const v = new Vector2D;
		v.x = vector2D.x * this.a + vector2D.y * this.c + this.tx;
		v.y = vector2D.x * this.b + vector2D.y * this.d + this.ty;
		return v;
	}






	/*_______________________________________________________

	Static Methods
	_________________________________________________________*/

	/**
	 * Applies matrix2 to matrix1
	 *
	 */
	static multiply(matrix1, matrix2) {
		const m3 = Matrix2D.identity();
		m3.a = matrix2.a * matrix1.a + matrix2.c * matrix1.b + matrix2.tx * 0;
		m3.b = matrix2.b * matrix1.a + matrix2.d * matrix1.b + matrix2.ty * 0;
		//0 = 0 * matrix1.a + 0 * matrix1.b + 1 * 0;
		m3.c = matrix2.a * matrix1.c + matrix2.c * matrix1.d + matrix2.tx * 0;
		m3.d = matrix2.b * matrix1.c + matrix2.d * matrix1.d + matrix2.ty * 0;
		//0 = 0 * matrix1.c + 0 * matrix1.d + 1 * 0;
		m3.tx = matrix2.a * matrix1.tx + matrix2.c * matrix1.ty + matrix2.tx * 1;
		m3.ty = matrix2.b * matrix1.tx + matrix2.d * matrix1.ty + matrix2.ty * 1;
		// 1 = 0 * matrix1.tx + 0 * matrix1.ty + 1 * 1
		return m3;
	}
	

	static copy(m1, m2) {
		m1.setValues(m2.a, m2.b, m2.c, m2.d, m2.tx, m2.ty);
	}
	
	
	static identity() {
		return new Matrix2D();
	}
}



