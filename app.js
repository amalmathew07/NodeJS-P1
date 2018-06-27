console.log('Hello World!');
const fs = require('fs');
const os = require('os');
//User details
const test = require('./nodetest');
const _ = require('lodash');
const url = require('url');
const { send } = require('micro');
const visits = {}
//var filteredArray = _.uniq(['Amal','Amal',1,1]);
//console.log(filteredArray);
//console.log(_.isString('Amal'));
//fs.appendFile('hi.txt',`Hi  ${os.userInfo().username}`,function(err) {
  //  if(err) {
    //    console.log("Error");
    //}
//});
//var addTest = test.addFn();
//console.log(addTest);

//console.log(test.sum(3,5));\

//console.log(process.argv);

//module.exports = function (request, response) {
  //const { pathname } = url.parse(request.url)

  //if (visits[pathname]) {
    //visits[pathname] = visits[pathname] + 1
  //} else {
    //visits[pathname] = 1
  //}

  //send(response, 200, `This page has ${visits[pathname]} visits!`)
//}

const yargs = require('yargs');
console.log(yargs.argv);
//test.addNote(yargs.argv.name,yargs.argv.age); 
//test.removeNote(yargs.argv.name); 
/* var allNotes = test.getAll();
allNotes.forEach(element => {
  console.log("Name----"+element.name);
}); */


const argv = yargs.command('add','ADD',{
  name: {
    describe: "Name",
    demand:true,
    alias:'a'
  }
}).help().argv;

if (argv._[0] === 'add') {
  test.addNote(argv.name,argv.age); 
}




