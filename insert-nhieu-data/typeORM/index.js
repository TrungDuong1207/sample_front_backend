import { createConnection, Entity, PrimaryGeneratedColumn, Column, getConnection, getConnectionOptions } from 'typeorm';

// Định nghĩa Entity (mô hình)
@Entity()
class YourEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    column1: string;

    @Column()
    column2: number;
    // Thêm các trường khác nếu cần
}

// Dữ liệu lớn bạn muốn chèn
const largeData = /* ... */;

// Chia nhỏ dữ liệu thành các phần (ví dụ: 1000 bản ghi mỗi lần)
const chunkSize = 1000;
const chunks = [];
for (let i = 0; i < largeData.length; i += chunkSize) {
    chunks.push(largeData.slice(i, i + chunkSize));
}

// Tạo kết nối
createConnection()
    .then(async connection => {
        const repository = connection.getRepository(YourEntity);

        // Bulk Insert
        for (const chunk of chunks) {
            await repository.save(chunk);
            console.log('Bulk Insert successful');
        }

        // Đóng kết nối sau khi thực hiện xong
        await connection.close();
    })
    .catch(error => console.error('Error during Bulk Insert:', error));
