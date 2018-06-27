const express = require('express');
const hbs = require('hbs');
var app = express();

const port = process.env.PORT || 3000;

app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));
app.use((req,res,next) => {
    console.log(`${req.method} ${req.url}`)
    next();
})
app.get('/',(req,res) => {
    res.send("Hello Amal");
});

app.listen(port, () => {
    console.log(port);
});

app.get('/json',(req,res) => {
    res.send({
        name:"Amal",
        hobbies : ['Football','Coding']
    });
});

app.get('/help',(req,res) => {
    res.send(app.use(express.static(__dirname + '/public/help.html')));
});

app.get('/render',(req,res) => {
    res.render('render.hbs',{
        title: "Render Example",
        detail:"Render Detail"
    })
});