-- Tạo Sự Kiện:

-- 1. Để tạo sự kiện, bạn sử dụng câu lệnh CREATE EVENT. Dưới đây là một ví dụ về cách tạo một sự kiện đơn giản:

CREATE EVENT my_event
ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 HOUR
DO
  -- Các câu lệnh SQL bạn muốn thực hiện
  SELECT 'Hello, World!' AS message;

-- Trong ví dụ này, sự kiện my_event sẽ được kích hoạt mỗi giờ và thực hiện một câu lệnh SQL đơn giản.

-- 2. Xem Danh Sách Sự Kiện:

-- Bạn có thể xem danh sách các sự kiện hiện tại trong cơ sở dữ liệu bằng cách sử dụng câu lệnh SHOW EVENTS:

SHOW EVENTS;

-- 3. Xem Chi Tiết Sự Kiện:
-- Để xem chi tiết về một sự kiện cụ thể, bạn sử dụng câu lệnh SHOW CREATE EVENT:

SHOW CREATE EVENT my_event;

-- 4. Chỉnh Sửa Sự Kiện:
-- Bạn có thể chỉnh sửa một sự kiện đã tồn tại bằng cách sử dụng câu lệnh ALTER EVENT. Ví dụ:

ALTER EVENT my_event
ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 2 HOURS;

-- Điều này thay đổi lịch trình của sự kiện my_event để kích hoạt mỗi 2 giờ.

-- 5. Xóa Sự Kiện:
-- Để xóa một sự kiện, bạn sử dụng câu lệnh DROP EVENT:

DROP EVENT my_event;

-- Lưu ý rằng sự kiện chỉ hoạt động khi tính năng event scheduler được bật. Bạn có thể kiểm tra và bật event scheduler bằng cách sử dụng câu lệnh sau:

-- Kiểm tra trạng thái của event scheduler
SHOW VARIABLES LIKE 'event_scheduler';

-- Nếu event_scheduler bị tắt, bật nó
SET GLOBAL event_scheduler = ON;

-- Cần chú ý rằng quyền SUPER thường cần thiết để quản lý sự kiện, nên đảm bảo rằng bạn có quyền đó nếu bạn đang gặp vấn đề với các câu lệnh liên quan đến sự kiện.