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