//path
const path = require('path');
//express
const express = require('express');
// morgan fix error middleware to log HTTP requests and errors, and simplifies the process
const morgan = require('morgan');
//name folder
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
// create param route
const route = require('./routes');
//set up mongo db
const db = require('./config/bd');
// setup to use path
app.use(express.static(path.join(__dirname, 'public')));
//db connect
db.connect();

// HTTP logger
app.use(morgan('combined'));
// Template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));
// console.log(path.join(__dirname, "resources/views "));
// use to middleware form data to server
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Route init send app cua express
route(app);

// 127.0.0.1 - localhost

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
