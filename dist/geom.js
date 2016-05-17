(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Geom"] = factory();
	else
		root["Geom"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Polygon2D = exports.Vector2D = exports.Matrix2D = exports.Rectangle = undefined;

	var _rectangle = __webpack_require__(1);

	var _rectangle2 = _interopRequireDefault(_rectangle);

	var _matrix2D = __webpack_require__(2);

	var _matrix2D2 = _interopRequireDefault(_matrix2D);

	var _vector2D = __webpack_require__(3);

	var _vector2D2 = _interopRequireDefault(_vector2D);

	var _polygon2D = __webpack_require__(4);

	var _polygon2D2 = _interopRequireDefault(_polygon2D);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Rectangle = _rectangle2.default;
	exports.Matrix2D = _matrix2D2.default;
	exports.Vector2D = _vector2D2.default;
	exports.Polygon2D = _polygon2D2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Rectangle = function () {
		function Rectangle(left, top, width, height) {
			_classCallCheck(this, Rectangle);

			this._scale = 1;
			this._left = 0;
			this._top = 0;
			this._width = 0;
			this._height = 0;

			this._left = left || 0;
			this._top = top || 0;
			this._width = width || 0;
			this._height = height || 0;
		}

		/*_______________________________________________________
	 	Public Methods
	 _________________________________________________________*/

		_createClass(Rectangle, [{
			key: "contains",
			value: function contains(x, y) {
				if (x >= this._left && x < this._left + this._width && y >= this._top && y < this._top + this._height) {
					return true;
				}
				return false;
			}
		}, {
			key: "containsRect",
			value: function containsRect(x, y, w, h) {
				if (x >= this._left && x + w <= this._left + this._width && y >= this._top && y + h <= this._top + this._height) {
					return true;
				}
				return false;
			}
		}, {
			key: "union",
			value: function union(toUnion) {
				var union = new Rectangle();
				union.left = Math.min(this._left, toUnion.left);
				union.top = Math.min(this._top, toUnion.top);
				union.width = Math.max(this._left + this._width, toUnion.left + toUnion.width) - union.left;
				union.height = Math.max(this._top + this._height, toUnion.top + toUnion.height) - union.top;
				return union;
			}
		}, {
			key: "toString",
			value: function toString() {
				return "Rectangle left:" + this._left + " top:" + this._top + " width:" + this._width + " height:" + this._height;
			}
		}, {
			key: "applyScale",
			value: function applyScale(scale) {
				this._left *= scale;
				this._top *= scale;
				this._width *= scale;
				this._height *= scale;
			}

			/*_______________________________________________________
	  	Static Methods
	  _________________________________________________________*/

		}, {
			key: "left",
			get: function get() {
				return this._left;
			},
			set: function set(value) {
				this._left = value;
			}
		}, {
			key: "top",
			get: function get() {
				return this._top;
			},
			set: function set(value) {
				this._top = value;
			}
		}, {
			key: "x",
			get: function get() {
				return this._left;
			},
			set: function set(value) {
				this._left = value;
			}
		}, {
			key: "y",
			get: function get() {
				return this._top;
			},
			set: function set(value) {
				this._top = value;
			}
		}, {
			key: "width",
			get: function get() {
				return this._width;
			},
			set: function set(value) {
				this._width = value;
			}
		}, {
			key: "height",
			get: function get() {
				return this._height;
			},
			set: function set(value) {
				this._height = value;
			}
		}, {
			key: "bottom",
			get: function get() {
				return this._top + this._height;
			},
			set: function set(value) {
				this._height = value - this._top;
			}
		}, {
			key: "right",
			get: function get() {
				return this._left + this._width;
			},
			set: function set(value) {
				this._width = value - this._left;
			}
		}], [{
			key: "intersect",
			value: function intersect(rect1, rect2) {
				var rectI = new Rectangle();
				rectI.left = Math.max(rect1.left, rect2.left);
				rectI.top = Math.max(rect1.top, rect2.top);
				rectI.right = Math.min(rect1.right, rect2.right);
				rectI.bottom = Math.min(rect1.bottom, rect2.bottom);
				return rectI;
			}
		}]);

		return Rectangle;
	}();

	exports.default = Rectangle;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _vector2D = __webpack_require__(3);

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
		}, {
			key: 'multiply',
			value: function multiply(m2) {
				var m = Matrix2D.multiply(this, m2);
				Matrix2D.copy(this, m);
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
			value: function multiply(m1, m2) {
				var m3 = Matrix2D.identity();
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

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Vector2D = function () {
		function Vector2D(x, y) {
			_classCallCheck(this, Vector2D);

			this._x = 0;
			this._y = 0;

			this._x = x || 0;
			this._y = y || 0;
		}

		/*_______________________________________________________
	 	Public Methods
	 _________________________________________________________*/

		_createClass(Vector2D, [{
			key: "x",
			set: function set(x) {
				this._x = x;
			},
			get: function get() {
				return this._x;
			}
		}, {
			key: "y",
			set: function set(y) {
				this._y = y;
			},
			get: function get() {
				return this._y;
			}

			/*_______________________________________________________
	  	Static Methods
	  _________________________________________________________*/

		}], [{
			key: "distance",
			value: function distance(v1, v2) {
				var v3 = {
					x: v2.x - v1.x,
					y: v2.y - v1.y
				};
				return Math.sqrt(Math.pow(v3.x, 2) + Math.pow(v3.y, 2));
			}
		}, {
			key: "interpolate",
			value: function interpolate(v1, v2, f) {
				var v3 = new Vector2D();
				v3.x = v1.x + (v2.x - v1.x) * f;
				v3.y = v1.y + (v2.y - v1.y) * f;
				return v3;
			}
		}, {
			key: "angleBetweenVectors",
			value: function angleBetweenVectors(hV, aV) {
				return (hV.x * aV.x + hV.y * aV.y) / (Math.sqrt(Math.pow(hV.x, 2) + Math.pow(hV.y, 2)) * Math.sqrt(Math.pow(aV.x, 2) + Math.pow(aV.y, 2)));
			}
		}]);

		return Vector2D;
	}();

	exports.default = Vector2D;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _matrix2D = __webpack_require__(2);

	var _matrix2D2 = _interopRequireDefault(_matrix2D);

	var _vector2D = __webpack_require__(3);

	var _vector2D2 = _interopRequireDefault(_vector2D);

	var _rectangle = __webpack_require__(1);

	var _rectangle2 = _interopRequireDefault(_rectangle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Polygon2D = function () {
		function Polygon2D(points) {
			var _this = this;

			_classCallCheck(this, Polygon2D);

			this._points = null;
			this._transform = null;

			var p = void 0,
			    x = void 0,
			    y = void 0;
			this._points = [];

			this._transform = new _matrix2D2.default();

			if (points.constructor === String) {
				this._points = points.split(' ').map(function (str) {
					return _this._importString(str);
				});
			}

			if (points.constructor === Array) {
				this._points = points.map(function (array) {
					return _this._importArray(array);
				});
			}
		}

		/*_______________________________________________________
	 	Public Methods
	 _________________________________________________________*/

		_createClass(Polygon2D, [{
			key: 'toString',
			value: function toString() {
				var str = "";
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = this._points[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var vector2D = _step.value;

						vector2D = this._transformPoint(vector2D);
						str += vector2D.x + ',' + vector2D.y + ' ';
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				return str.slice(0, -1);
			}
		}, {
			key: 'toArray',
			value: function toArray() {
				var a = [];
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = this._points[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var vector2D = _step2.value;

						vector2D = this._transformPoint(vector2D);
						a.push([vector2D.x, vector2D.y]);
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}

				return a;
			}

			/*_______________________________________________________
	  	Private Methods
	  _________________________________________________________*/

		}, {
			key: '_transformPoint',
			value: function _transformPoint(vector2D) {
				var v = new _vector2D2.default();
				v.x = vector2D.x * this._transform.a + vector2D.y * this._transform.c + this._transform.tx;
				v.y = vector2D.x * this._transform.b + vector2D.y * this._transform.d + this._transform.ty;
				return v;
			}
		}, {
			key: '_importString',
			value: function _importString(str) {
				var p = str.split(',');
				return new _vector2D2.default(parseInt(p[0]), parseInt(p[1]));
			}
		}, {
			key: '_importArray',
			value: function _importArray(array) {
				return new _vector2D2.default(array[0], array[1]);
			}

			/*_______________________________________________________
	  	Static Methods
	  _________________________________________________________*/

		}, {
			key: 'length',
			get: function get() {
				return this._points.length;
			}
		}, {
			key: 'bounds',
			get: function get() {
				var minX = 9999999;
				var minY = 9999999;
				var maxX = -9999999;
				var maxY = -9999999;

				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = this._points[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var vector2D = _step3.value;

						vector2D = this._transformPoint(vector2D);
						minX = Math.min(minX, vector2D.x);
						minY = Math.min(minY, vector2D.y);
						maxX = Math.max(maxX, vector2D.x);
						maxY = Math.max(maxY, vector2D.y);
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}

				return new _rectangle2.default(minX, minY, maxX, maxY);
			}
		}, {
			key: 'transform',
			set: function set(matrix2D) {
				this._transform = matrix2D;
			}
		}], [{
			key: 'interpolate',
			value: function interpolate(p1, p2, f) {
				var a = [];
				var l = p1.length;
				var x = void 0,
				    y = void 0,
				    d = l;

				if (p1.length === p2.length) {

					p1 = p1.toArray();
					p2 = p2.toArray();

					while (d--) {
						a.unshift([[p1[d][0] + (p2[d][0] - p1[d][0]) * f], [p1[d][1] + (p2[d][1] - p1[d][1]) * f]]);
					}
				} else {
					throw Error("Can't interpolate Polygons as there are not the same length!");
					return;
				}

				return new Polygon2D(a);
			}
		}]);

		return Polygon2D;
	}();

	exports.default = Polygon2D;

/***/ }
/******/ ])
});
;