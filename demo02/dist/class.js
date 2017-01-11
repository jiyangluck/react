'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cat = function () {
	function Cat(name, age) {
		_classCallCheck(this, Cat);

		this.name = name;
		this.age = age;
	}

	_createClass(Cat, [{
		key: 'sayname',
		value: function sayname() {
			console.log('我是' + this.name);
		}
	}]);

	return Cat;
}();

var cat = new Cat('喵喵', 2);
cat.sayname();