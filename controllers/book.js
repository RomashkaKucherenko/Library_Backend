const { Book } = require('../models')

module.exports = {
	async booksGet(req, res) {
		try {
			const books = await Book.findAll({
				order: [['id']],
			})
			res.status(200).json(books)
		} catch (err) {
			res.status(500).json({
				message: 'Error fetching books',
				error: err.message,
			})
		}
	},

	async addBook(req, res) {
		try {
			const { title, author, year } = req.body
			const newBook = await Book.create({ title, author, year })
			res.status(201).json(newBook)
		} catch (err) {
			res.status(400).json({
				message: 'Error creating book',
				error: err.message,
			})
		}
	},

	async updateBook(req, res) {
		try {
			const { id } = req.params
			const { title, author, year } = req.body
			const [rowsUpdated] = await Book.update(
				{ title, author, year },
				{ where: { id } },
			)
			if (rowsUpdated === 0) {
				return res
					.status(404)
					.json({ message: `Book with id ${id} not found` })
			}
			res.status(200).json({ message: 'Book updated successfully' })
		} catch (err) {
			res.status(400).json({
				message: `Error updating book with id=${id}`,
				error: err.message,
			})
		}
	},

	async deleteBook(req, res) {
		try {
			const { id } = req.params
			const deletedRows = await Book.destroy({ where: { id } })
			if (deletedRows === 0) {
				return res
					.status(404)
					.json({ message: `Book with id ${id} not found` })
			}
			res.status(200).json({ message: 'Book deleted successfully' })
		} catch (err) {
			res.status(400).json({
				message: `Error deleting book with id=${id}`,
				error: err.message,
			})
		}
	},
}
