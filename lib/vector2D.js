"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector2D = (function () {
	function Vector2D(x, y) {
		_classCallCheck(this, Vector2D);

		this._x = x || 0;
		this._y = y || 0;
	}

	_createClass(Vector2D, [{
		key: "x",
		set: function set(vx) {
			this._x = vx;
		},
		get: function get() {
			return this._x;
		}
	}, {
		key: "y",
		set: function set(vy) {
			this._y = vy;
		},
		get: function get() {
			return this._y;
		}
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
		value: function interpolate(v1, v2, l) {
			var v3 = {};
			v3.x = v1.x + (v2.x - v1.x) * l;
			v3.y = v1.y + (v2.y - v1.y) * l;
			return v3;
		}
	}]);

	return Vector2D;
})();

exports["default"] = Vector2D;
module.exports = exports["default"];