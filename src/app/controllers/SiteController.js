const Course = require('../models/Course');

class NewController {
    //Get /
    index(req, res) {
        Course.find({}, function (err, courses) {
            if (!err) res.json(courses);
            else res.status(400).json({ error: 'ERROR !!!' });
        });
        // res.render('home');
    }
    // get /search
    search(req, res) {
        res.render('search');
    }
}
// dung de xuat no ra
module.exports = new NewController();
