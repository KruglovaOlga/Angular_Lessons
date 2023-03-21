
//prototype inheritance
function Person(name) {    
    this.name = name;
}

Person.prototype.greet = function() {
        console.log(`Hello my name is ${this.name}`)
    }

let p1 = new Person("John")
let p2 = new Person("John")


p1.greet();

p2.greet();