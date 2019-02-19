class HomeController {
    async index(req, res, next) {
        res.send('home page');
    }
}
exports.HomeController = HomeController;
