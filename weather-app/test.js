const yargs = require('yargs');

var argv = yargs.command('test','TEST',{
    title: {
        demand:true,
        alias:"a"
    }
}).help().argv;


    console.log(argv.title);
