const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
	class Book extends Model {}
	Book.init(
		{
			title: DataTypes.STRING,
			author: DataTypes.STRING,
			year: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Book',
		},
	)

	return Book
}
