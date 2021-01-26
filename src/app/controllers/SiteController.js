class NewController {
    //Get /
    index(req, res) {
        res.render('home');
    }
    // get /search
    search(req, res) {
        res.render('search');
    }
}
// dung de xuat no ra
module.exports = new NewController();
