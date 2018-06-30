const router = require('express').Router();
const articlesController = require('../../controllers/articlesController')

// /api/articles
router.route('/')
    .get(articlesController.findAll)
    .post(articlesController.create)

// api/articles/id
router.route('/:id')
    .delete(articlesController.remove)

module.exports = router;