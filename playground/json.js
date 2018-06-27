/* var obj = {
    name:"Amal",
    age:26
}

var jsonfile = '{"name":"Amal", "age":26}';
console.log(JSON.stringify(obj.name));
console.log(JSON.parse(jsonfile)); */

const fs = require('fs');

var fileinput = {
    name:"Akhil",
    age:24
}
/* 
fs.appendFile('hi.txt','Json Output: '+'\nName: '+JSON.stringify(fileinput.name)+'\nAge: '+JSON.stringify(fileinput.age),function(err){
    if(err) {
        console.log("Error");
    } else {
        console.log("File written")
    }
}); */

fs.writeFileync('notes.json',JSON.stringify(fileinput));
var content = fs.readFileSync('notes.json');
console.log(JSON.parse(content));
