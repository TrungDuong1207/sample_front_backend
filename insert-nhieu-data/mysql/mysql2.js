const mysql = require('mysql2');

// Kết nối đến MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_user',
    password: 'your_password',
    database: 'your_database',
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
const query = 'INSERT INTO your_table (column1, column2, ...) VALUES ?';
chunks.forEach(chunk => {
    connection.query(query, [chunk], (error, results) => {
        if (error) throw error;
        console.log(`Inserted ${results.affectedRows} rows`);
    });
});

// Đóng kết nối
connection.end();
