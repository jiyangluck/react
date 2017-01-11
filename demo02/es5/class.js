function Cat(name,age){
	this.name = name;
	this.age = age;
	this.sayName = function(){
		console.log('我是' + this.name);
	}
}

var cat = new Cat('喵喵',2);
cat.sayName();

var white = new Cat('小白',2);
white.sayName();