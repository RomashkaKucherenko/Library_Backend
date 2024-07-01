const express = require('express')

const router = express.Router()
const bookController = require('../controllers/book')

router.get('/', bookController.booksGet)
router.post('/', bookController.addBook)
router.put('/', bookController.updateBook)
router.delete('/', bookController.deleteBook)

module.exports = router
