const db = require('../models')

module.exports = {
    findAll: (req, res) => {
        db.Article
        .find(req.query)
        .sort({ date: -1 })
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.status(422).json(err))
    },

    create: (req, res) => {
        db.Article
        .create(req.body)
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.status(422).json(err))
    },

    remove: (req, res) => {
        db.Article
        .findById({ _id: req.params.id })
        .then(dbArticle => dbArticle.remove())
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.status(422).json(err))
    }
}