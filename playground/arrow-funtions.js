var square = (x) => {
    var result = x * x;
    return result;
}

var user = {
    name:"Amal",
    /* display: () => {
        console.log("name");
    } */

    display () {
        console.log(`Hi I am ${this.name}`);
    }
}

user.display();