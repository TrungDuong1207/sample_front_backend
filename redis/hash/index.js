const redis = require('redis');
const client = redis.createClient();

// 1. HSET key field value
client.hset('myHash', 'field1', 'value1', (err, reply) => {
    console.log(reply); // Thông báo thành công hoặc lỗi
});

// 2. HGET key field
client.hget('myHash', 'field1', (err, reply) => {
    console.log(reply); // Giá trị của field1 trong hash
});

// 3. HDEL key field1 field2 ...
client.hdel('myHash', 'field1', 'field2', (err, reply) => {
    console.log(reply); // Số lượng field đã bị xóa
});

// 4. HEXISTS key field
client.hexists('myHash', 'field1', (err, reply) => {
    console.log(reply); // 1 nếu field tồn tại, 0 nếu không tồn tại
});

// 5. HGETALL key
client.hgetall('myHash', (err, reply) => {
    console.log(reply); // Đối tượng chứa tất cả các field và value của hash
});

// 6. HINCRBY key field n
client.hincrby('myHash', 'field1', 5, (err, reply) => {
    console.log(reply); // Giá trị mới của field1 sau khi tăng 5 đơn vị
});

// 7. HDECRBY key field n
client.hincrby('myHash', 'field1', -3, (err, reply) => {
    console.log(reply); // Giá trị mới của field1 sau khi giảm 3 đơn vị
});

// 8. HINCRBYFLOAT key field f
client.hincrbyfloat('myHash', 'field1', 3.5, (err, reply) => {
    console.log(reply); // Giá trị mới của field1 sau khi tăng 3.5
});

// 9. HDECRBYFLOAT key field n
client.hincrbyfloat('myHash', 'field1', -1.5, (err, reply) => {
    console.log(reply); // Giá trị mới của field1 sau khi giảm 1.5
});

// 10. HKEYS key
client.hkeys('myHash', (err, reply) => {
    console.log(reply); // Mảng chứa tất cả các field của hash
});

// 11. HVALS key
client.hvals('myHash', (err, reply) => {
    console.log(reply); // Mảng chứa tất cả các value của hash
});

// 12. HLEN key
client.hlen('myHash', (err, reply) => {
    console.log(reply); // Số lượng field của hash
});

// 13. HMSET key field1 value1 field2 value2 ...
client.hmset('myHash', 'field1', 'value1', 'field2', 'value2', (err, reply) => {
    console.log(reply); // Thông báo thành công hoặc lỗi
});

// 14. HMGET key field1 field2 ...
client.hmget('myHash', 'field1', 'field2', (err, reply) => {
    console.log(reply); // Mảng giá trị của các field1, field2 trong hash
});
