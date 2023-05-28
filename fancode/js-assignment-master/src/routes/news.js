const News = require('../controllers/news');
const mysql = require('../lib/mysql');

module.exports = function(app) {
    app.route('/news').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsById(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });
    
    app.route('/news').post(async (req, res, next) => {
        try {
            let params = req.body;
            let result = await News.createNews(params);
            return res.json({ message: 'News inserted successfully' });
        } catch (err) {
            return next(err);
        }
    });
    
}
