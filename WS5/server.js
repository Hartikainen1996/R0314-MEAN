//load the things we need
var express = require('express');
var app=express();

//set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
    res.render('pages/index', {
        new_heading: "This was passed from the JS file",
        new_paragraph: "Lorem Ipsum...",
        new_footer: "Here is the new footer"
    });
});

var data = {users:[
    { name: 'Matias', age: 23 },
    { name: 'Eemil', age: 29 },
    { name: 'Matias', age: 2 }
    ]};

    app.get('/users', function(req, res){
res.render('pages/users', data);
 });

app.listen(8081);
console.log('8081 is magic port');