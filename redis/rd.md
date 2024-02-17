STT Command Ý nghĩa

# string

1. SET key value | Đặt giá trị value cho key
2. GET key | Lấy giá trị lưu trữ bởi key
3. GETRANGE key start end | Lấy giá trị lưu trữ bởi key từ (start) đến (end)
4. GETSET key value | Lấy ra giá trị cũ và đặt giá trị mới cho key
5. NSET key1 value1 key2 value 2 | Đặt giá trị hàng loạt
6. MGET key1 key2 .. | Lấy giá trị của nhiều key theo thứ tự
7. SETEX key seconds value | Đặt giá trị và thời gian expire cho key
8. SETNX key value | Đặt giá trị cho key chỉ khi key đó chưa tồn tại
9. RENAMENX key newkey | Đổi tên key sang newkey nếu newkey chưa tồn tại
10. STRLEN key | Lấy độ dài giá trị lưu trữ bởi key
11. APPEND key value | Thêm vào sau giá trị lưu trữ bởi key là value
12. INCR key | Tăng giá trị lưu trữ của key (số nguyên) 1 đơn vị
13. INCRBY key n | Tăng giá trị lưu trữ của key (số nguyên) n đơn vị
14. DECR key | Giảm giá trị lưu trữ của key (số nguyên) 1 đơn vị
15. DECRBY key n | Giảm giá trị lưu trữ của key (số nguyên) n đơn vị

# Hash

1. HSET key field value | Đặt giá trị cho field là value trong hash
2. HGET key field | Lấy giá trị của field trong hash
3. HDEL key field1 field2 ... | xóa field1, field2 ... trong hash
4. HEXISTS key field | Kiểm tra file có tồn tại trong hash không
5. HGETALL key | Lấy tất cả các field và value của nó trong hash
6. HINCRBY key field n | Tăng giá trị của field (số nguyên) lên n đơn vị
7. HDECRBY key field n | Giảm giá trị của field (số nguyên) lên n đơn vị
8. HINCRBYFLOAT key field f | Tăng giá trị của field (số thực) lên f
9. HDECRBYFLOAT key field n | Giảm giá trị của field (số thực) f
10. HKEYS key | Lấy tất cả các field của hash
11. HVALS key | Lấy tất cả các value của hash
12. HLEN key | Lấy số lượng field của hash
13. HMSET key field1 value1 field2 value2 ... | Đặt giá trị cho các field1 giá trị value1 field2 giá trị value2 ...
14. HMGET key field1 field2 ... | Lấy giá trị của các field1 field2 ...
