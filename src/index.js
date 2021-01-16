const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

// setup image
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
// app.use(morgan('combined'));
// Template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set("views", path.join(__dirname, "resources/views"));
// console.log(path.join(__dirname, "resources/views "));
// use to midlleware form data to server
app.use(express.urlencoded({
    extended : true
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
   console.log(req.query.q);
        res.render('news');
    })

    app.get('/search', (req, res) => {
       
        res.render('search');
    })
    app.post('/search', (req, res) => {
        console.log(req.body)
        res.render('search');
    })
    // 127.0.0.1 - localhost

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})