const { Sequelize, DataTypes } = require('sequelize');

// Kết nối đến MySQL
const sequelize = new Sequelize('your_database', 'your_user', 'your_password', {
    host: 'localhost',
    dialect: 'mysql',
});

// Định nghĩa mô hình (model)
const YourModel = sequelize.define('your_table', {
    column1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    column2: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    // Thêm các cột khác nếu cần
});

// Dữ liệu lớn bạn muốn chèn
const largeData = /* ... */;

// Chia nhỏ dữ liệu thành các phần (ví dụ: 1000 bản ghi mỗi lần)
const chunkSize = 1000;
const chunks = [];
for (let i = 0; i < largeData.length; i += chunkSize) {
    chunks.push(largeData.slice(i, i + chunkSize));
}

// Bulk Insert
sequelize
    .sync() // Đồng bộ hóa cấu trúc của mô hình với cơ sở dữ liệu
    .then(() => {
        chunks.forEach(chunk => {
            YourModel.bulkCreate(chunk)
                .then(() => {
                    console.log('Bulk Insert successful');
                })
                .catch(error => {
                    console.error('Error during Bulk Insert:', error);
                });
        });
    })
    .finally(() => {
        // Đóng kết nối sau khi thực hiện xong
        sequelize.close();
    });
