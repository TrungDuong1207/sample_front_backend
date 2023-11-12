// Thêm hàm này vào mã của bạn để gọi hàm getListCollectionIdsByTitlesGraph một lần và trả về promise
async function getListCollectionIdsByTitlesGraphOnce(domain, shopToken, first, querySearch) {
    // Thực hiện các công việc để gọi hàm getListCollectionIdsByTitlesGraph và trả về promise
    // ...
}

// Tạo một mảng chứa 1000 promises
const promises = Array.from({ length: 1000 }, () => {
    return getListCollectionIdsByTitlesGraphOnce(domain, shopToken, first, querySearch);
});

// Gửi tất cả các promises cùng một lúc và đợi cho đến khi tất cả các promise hoàn thành
await Promise.all(promises);