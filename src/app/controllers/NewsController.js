class NewController{
    //Get /news
    index(req,res){
        res.render('news');
    }
    // get news/:slug
    show(req,res){
        res.send('NEWS DETAILS')
    }
}
// dung de xuat no ra
module.exports = new NewController;