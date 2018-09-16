const db = require('../models')

module.exports = {

    getMovies: (req, res) => {
        const { title, genre, actors, year } = req.query
        db.Title
            .find({
                'TitleName' : {
                    $regex: new RegExp(title),
                    $options: 'i'
                },
                'Genres': {
                    $regex: new RegExp(genre),
                    $options: 'i'
                },
                'Participants.Name': {
                    $regex: new RegExp(actors),
                    $options: 'i'
                },
                'ReleaseYear': year.length > 0 ? parseInt(year) : {$gt: 0}
            })
            .then(dbTitles => {
                res.json(dbTitles)
            })
            .catch(err => res.json(err))
    }
}