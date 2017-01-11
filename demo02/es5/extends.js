function Animal(){}
Animal.prototype.sayName = function(){
	console.log('我是' + this.name);
}

function Cat(name,age){
	this.name = name;
	this.age = age;
}

Cat.prototype = new Animal();

var cat = new Cat('喵喵',2);
cat.sayName();