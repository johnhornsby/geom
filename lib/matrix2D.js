'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector2D = require('./vector2D');

var _vector2D2 = _interopRequireDefault(_vector2D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Matrix2D = function () {
	function Matrix2D() {
		var a = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
		var b = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		var c = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		var d = arguments.length <= 3 || arguments[3] === undefined ? 1 : arguments[3];
		var tx = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
		var ty = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];

		_classCallCheck(this, Matrix2D);

		this.setValues(a, b, c, d, tx, ty);
	}

	/*_______________________________________________________
 	Public Methods
 _________________________________________________________*/

	_createClass(Matrix2D, [{
		key: 'setValues',
		value: function setValues(a, b, c, d, tx, ty) {
			this._a = a;
			this._b = b;
			this._c = c;
			this._d = d;
			this._tx = tx;
			this._ty = ty;
		}
	}, {
		key: 'translate',
		value: function translate(tx, ty) {
			var I = Matrix2D.identity();
			I.tx = tx;
			I.ty = ty;

			var m = Matrix2D.multiply(this, I);
			Matrix2D.copy(this, m);
		}
	}, {
		key: 'scale',
		value: function scale(sx, sy) {
			var I = Matrix2D.identity();
			I.a = sx;
			I.d = sy;

			var m = Matrix2D.multiply(this, I);
			Matrix2D.copy(this, m);
		}
	}, {
		key: 'rotate',
		value: function rotate(theta) {
			var rads = theta * (Math.PI / 180);
			var cos = Math.cos(rads);
			var sin = Math.sin(rads);
			var I = Matrix2D.identity();
			I.a = cos;
			I.b = sin;
			I.d = cos;
			I.c = sin * -1;

			var m = Matrix2D.multiply(this, I);
			Matrix2D.copy(this, m);
		}

		/**
   * Prepends matrix to our matrix
   *
   */
	}, {
		key: 'multiply',
		value: function multiply(m) {
			var a = this.a;
			var b = this.b;
			var c = this.c;
			var d = this.d;
			var tx = this.tx;
			var ty = this.ty;

			this.a = m.a * a + m.c * b;
			this.b = m.b * a + m.d * b;

			this.c = m.a * c + m.c * d;
			this.d = m.b * c + m.d * d;

			this.tx = m.a * tx + m.c * ty + m.tx;
			this.ty = m.b * tx + m.d * ty + m.ty;

			return this;
		}
	}, {
		key: 'transformPoint',
		value: function transformPoint(vector2D) {
			var v = new _vector2D2.default();
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
	}, {
		key: 'a',
		set: function set(a) {
			this._a = a;
		},
		get: function get() {
			return this._a;
		}
	}, {
		key: 'b',
		set: function set(b) {
			this._b = b;
		},
		get: function get() {
			return this._b;
		}
	}, {
		key: 'c',
		set: function set(c) {
			this._c = c;
		},
		get: function get() {
			return this._c;
		}
	}, {
		key: 'd',
		set: function set(d) {
			this._d = d;
		},
		get: function get() {
			return this._d;
		}
	}, {
		key: 'tx',
		set: function set(tx) {
			this._tx = tx;
		},
		get: function get() {
			return this._tx;
		}
	}, {
		key: 'ty',
		set: function set(ty) {
			this._ty = ty;
		},
		get: function get() {
			return this._ty;
		}
	}], [{
		key: 'multiply',
		value: function multiply(matrix1, matrix2) {
			var m3 = Matrix2D.identity();
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
	}, {
		key: 'copy',
		value: function copy(m1, m2) {
			m1.setValues(m2.a, m2.b, m2.c, m2.d, m2.tx, m2.ty);
		}
	}, {
		key: 'identity',
		value: function identity() {
			return new Matrix2D();
		}
	}]);

	return Matrix2D;
}();

exports.default = Matrix2D;