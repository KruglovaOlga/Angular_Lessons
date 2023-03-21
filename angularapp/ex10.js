class  Person {
    constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}
fullname() {
    return `${this.firstname}  ${this.lastname}`;
    }
}

const p = new Person("John", "Doe");
console.log(p.fullname())

const p2 = new Person("Olga", "Kruglova");
console.log(p2.fullname())