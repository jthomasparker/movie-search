const router = require('express').Router();
const searchController = require('../controllers/searchController')

router.route('/search?')
        .get(searchController.getMovies)

module.exports = router;