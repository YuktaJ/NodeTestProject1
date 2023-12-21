const Sequelize = require("sequelize");
const sequelize = require("../connections/database");

const Books = sequelize.define("Library", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, issueDate: {
        type: Sequelize.STRING,
        allowNull: false
    }, returnDate: {
        type: Sequelize.STRING,
        allowNull: false
    }, returnBook: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fine:{
        type:Sequelize.INTEGER,
    }
})

module.exports = Books;