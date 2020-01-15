const sequelize = require("sequelize");
const connection = require("./database");

const ask = connection.define('ask', {
    "title": {
        type: sequelize.STRING,
        allowNull: false,
    },
    "description": {
        type: sequelize.TEXT,
        allowNull: false
    }
});

ask.sync({force: false}).then(() => {console.log('ask table crated')});

module.exports = ask;