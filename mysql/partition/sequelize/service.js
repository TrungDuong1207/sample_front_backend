const { sequelize, YourModel } = require('./models');

async function createTableWithPartitioning() {
    try {
        // Tạo bảng với partitioning
        await sequelize.sync({ force: true });

        // Thêm dữ liệu vào bảng
        await YourModel.bulkCreate([
            { name: 'Item 1', created_at: new Date('1990-01-01') },
            { name: 'Item 2', created_at: new Date('2005-05-05') },
            { name: 'Item 3', created_at: new Date('2015-10-10') },
        ]);

        // Truy vấn dữ liệu
        const result = await YourModel.findAll({
            where: { created_at: { [sequelize.Op.between]: [new Date('1990-01-01'), new Date('2010-01-01')] } },
        });

        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Đóng kết nối sau khi thực hiện xong
        sequelize.close();
    }
}

createTableWithPartitioning();
