'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Books', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
			},
			author: {
				type: Sequelize.STRING,
			},
			year: {
				type: Sequelize.INTEGER,
			},
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Books')
	},
}
