const db = require('../models')

module.exports = {

    findByTitle: (req, res) => {
        
        const title = new RegExp(req.query.title)
         db.Title
            .find({
                'TitleName': {
                    $regex: title,
                    $options: 'i'
                }
            })
            .then(dbTitles => {
                res.json(dbTitles)
            })
            .catch(err => res.json(err))
    }
}