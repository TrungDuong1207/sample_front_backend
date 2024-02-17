const redis = require('redis');
const client = redis.createClient();

// 1. SET key value
client.set('user:1', '{"name": "vip", "age": 30}', (err, reply) => {
    console.log(reply); // Thông báo thành công hoặc lỗi
});

// 2. GET key
client.get('user:1', (err, reply) => {
    console.log(reply); // Giá trị của key
});

// 3. GETRANGE key start end
client.getrange('user:1', 0, -1, (err, reply) => {
    console.log(reply); // Giá trị từ start đến end
});

// 4. GETSET key value
client.getset('user:1', 'new value', (err, reply) => {
    console.log(reply); // Giá trị cũ của key
});

// 5. MSET key1 value1 key2 value2
client.mset('user:1:name', 'vip', 'user:1:age', '30', (err, reply) => {
    console.log(reply); // Thông báo thành công hoặc lỗi
});

// 6. MGET key1 key2 ..
client.mget('user:1:name', 'user:1:age', (err, reply) => {
    console.log(reply); // Mảng giá trị của nhiều key theo thứ tự
});

// 7. SETEX key seconds value
client.setex('user:1', 60, '{"name": "vip", "age": 30}', (err, reply) => {
    console.log(reply); // Thông báo thành công hoặc lỗi
});

// 8. SETNX key value
client.setnx('user:1', '{"name": "vip", "age": 30}', (err, reply) => {
    console.log(reply); // 1 nếu key được đặt, 0 nếu key đã tồn tại
});

// 9. RENAMENX key newkey
client.rename('user:1', 'user:2', (err, reply) => {
    console.log(reply); // 1 nếu key được đổi tên thành công, 0 nếu newkey đã tồn tại
});

// 9. STRLEN key
client.strlen('user:1', (err, reply) => {
    console.log(reply); // Độ dài của giá trị lưu trữ bởi key
});

// 10. APPEND key value
client.append('user:1', ' additional text', (err, reply) => {
    console.log(reply); // Độ dài của giá trị mới lưu trữ bởi key
});

// 11. INCR key
client.incr('counter', (err, reply) => {
    console.log(reply); // Giá trị mới sau khi tăng 1 đơn vị
});

// 12. INCRBY key n
client.incrby('counter', 5, (err, reply) => {
    console.log(reply); // Giá trị mới sau khi tăng n đơn vị
});

// 13. DECR key
client.decr('counter', (err, reply) => {
    console.log(reply); // Giá trị mới sau khi giảm 1 đơn vị
});

// 14. DECRBY key n
client.decrby('counter', 3, (err, reply) => {
    console.log(reply); // Giá trị mới sau khi giảm n đơn vị
});
