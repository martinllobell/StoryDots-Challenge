const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("Brand", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        logo_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    })
};
