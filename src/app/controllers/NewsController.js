class NewController {
    //Get /news
    index(req, res) {
        res.render('news');
    }
    // get news/:slug
    show(req, res) {
        res.send('NEWS DETAILS');
    }
}
// exports new variable controller
module.exports = new NewController();
