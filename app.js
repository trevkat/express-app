const express = require('express');
const bodyParser = require('body-parser');

// express app
const app = express();

// create application/json parser
var jsonParser = bodyParser.json()

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    res.render('index');
});


// get request

app.get('/person', (req, res) => {
    res.json({
        "name":"Trevor",
        "age":40,
        "weight":170,
        "height":"6'1",
        "location":"Austin, TX"
    });
});


// post request
app.post('/person', jsonParser, (req, res) => {
    console.log(req.body.name, req.body.age, req.body.weight, req.body.height, req.body.location)
    res.json({
       name: req.body.name,
       age: req.body.age,
       weight: req.body.weight,
       height: req.body.height,
       location: req.body.location
    });
});