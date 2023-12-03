const mongoose = require('mongoose');

// Kết nối đến MongoDB
mongoose.connect('mongodb://localhost:27017/your_database', { useNewUrlParser: true, useUnifiedTopology: true });

// Định nghĩa Schema (mô hình)
const YourSchema = new mongoose.Schema({
    column1: String,
    column2: Number,
    // Thêm các trường khác nếu cần
});

const YourModel = mongoose.model('YourModel', YourSchema);

// Dữ liệu lớn bạn muốn chèn
const largeData = /* ... */;

// Chia nhỏ dữ liệu thành các phần (ví dụ: 1000 bản ghi mỗi lần)
const chunkSize = 1000;
const chunks = [];
for (let i = 0; i < largeData.length; i += chunkSize) {
    chunks.push(largeData.slice(i, i + chunkSize));
}

// Bulk Insert
YourModel.insertMany(chunks, (error, docs) => {
    if (error) {
        console.error('Error during Bulk Insert:', error);
    } else {
        console.log('Bulk Insert successful');
    }

    // Đóng kết nối sau khi thực hiện xong
    mongoose.connection.close();
});
