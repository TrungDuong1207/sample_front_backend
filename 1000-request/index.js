// Hàm để gọi API
async function callApi(apiUrl) {
    // Giả sử sử dụng fetch để gọi API, bạn có thể sử dụng thư viện khác tùy thuộc vào dự án của bạn
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}

// Hàm để gọi 3 API đồng thời và đợi cho đến khi tất cả chúng hoàn thành
async function callApisConcurrently(apiUrls) {
    const concurrencyLimit = 3; // Giới hạn đồng thời là 3

    // Chia nhỏ danh sách API thành các phần
    const chunks = [];
    for (let i = 0; i < apiUrls.length; i += concurrencyLimit) {
        chunks.push(apiUrls.slice(i, i + concurrencyLimit));
    }

    // Gọi API theo từng phần
    for (const chunk of chunks) {
        // Sử dụng Promise.all để đợi cho đến khi tất cả các API trong phần hoàn thành
        await Promise.all(chunk.map(apiUrl => callApi(apiUrl)));
        console.log(`Completed ${concurrencyLimit} API calls`);
    }

    console.log('All API calls completed');
}

// Danh sách các API bạn muốn gọi
const apiUrls = [
    'https://api.example.com/1',
    'https://api.example.com/2',
    'https://api.example.com/3',
    // ...Thêm các API khác vào đây
];

// Gọi hàm để thực hiện
callApisConcurrently(apiUrls);
