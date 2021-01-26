const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
// tao bien route
const route = require('./routes');
//set up mongo db
const db = require('./config/bd');
// setup image
app.use(express.static(path.join(__dirname, 'public')));

//db connect
db.connect();

// HTTP logger
// app.use(morgan('combined'));
// Template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log(path.join(__dirname, "resources/views "));
// use to midlleware form data to server
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Route init truyen app cua express
route(app);

// 127.0.0.1 - localhost

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
