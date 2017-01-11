class Cat{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}

	sayname(){
		console.log('我是' + this.name);
	}
}

const cat = new Cat('喵喵',2);
cat.sayname();