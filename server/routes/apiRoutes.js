const router = require('express').Router();
const searchController = require('../controllers/searchController')

router.route('/search?')
        .get(searchController.findByTitle)

module.exports = router;