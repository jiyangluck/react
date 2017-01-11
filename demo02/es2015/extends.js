class Animal{
	constructor(name){
		this.name = name;
	}
	sayName(){
		console.log('我是' + this.name);
	}
}

class Cat extends Animal{
	constructor(name,age){
		super(name);
		this.age = age;
	}
}

const cat = new Cat('喵喵',2)
cat.sayName();