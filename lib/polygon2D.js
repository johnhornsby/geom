'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _matrix2D = require('./matrix2D');

var _matrix2D2 = _interopRequireDefault(_matrix2D);

var _vector2D = require('./vector2D');

var _vector2D2 = _interopRequireDefault(_vector2D);

var _rectangle = require('./rectangle');

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