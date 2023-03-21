class  Person {
    #firstname
    #lastname

    constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
}



get fullname() {
    return this.#firstname + " " + this.lastname
    }
}

set fullname(name) {
    const [firstname,lastname] = name.split(" ")
    this.#firstname = firstname;
    this.#lastname = lastname;
}

const p = new Person("John", "Doe");
console.log(p.fullname())