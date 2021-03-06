"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn("Comments", "UserId", {
			type: Sequelize.INTEGER,
			reference: {
				model: "Users",
				key: "id",
			},
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("Comments");
	},
}