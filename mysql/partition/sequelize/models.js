const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('your_database', 'your_user', 'your_password', {
    host: 'localhost',
    dialect: 'mysql',
});

const YourModel = sequelize.define('your_table', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    created_at: {
        type: DataTypes.DATE,
    },
}, {
    // Bật partitioning
    indexes: [{
        unique: false,
        fields: ['created_at'],
        method: 'BTREE', // Có thể sử dụng 'HASH' cho partitioning theo HASH
    }],
    tableName: 'your_table',
    underscored: true,
    timestamps: false,
    engine: 'InnoDB',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    defaultScope: {
        raw: true,
    },
});

module.exports = { sequelize, YourModel };
