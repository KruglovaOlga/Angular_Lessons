function globalFunction(){
    console.log(this.firstName);
}

globalFunction();

const obj = {
    firstName: "john",
    what: globalFunction
}

obj.what()
