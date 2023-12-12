-- Tạo bảng sales
CREATE TABLE sales (
    sale_id INT PRIMARY KEY,
    sale_date DATE,
    invoice_number INT,
    total_amount DECIMAL(10, 2)
);

-- Chèn dữ liệu vào bảng
INSERT INTO sales (sale_id, sale_date, invoice_number, total_amount)
VALUES
    (1, '2023-01-01', 101, 500.00),
    (2, '2023-01-02', 102, 750.00),
    (3, '2023-01-03', 103, 600.00),
    (4, '2023-01-04', 104, 900.00),
    (5, '2023-01-05', 105, 800.00);

-- Ví dụ 1: Sử dụng ROW_NUMBER() để đánh số thứ tự cho mỗi hóa đơn theo ngày bán
SELECT 
    ROW_NUMBER() OVER (ORDER BY sale_date) AS row_num,
    sale_date,
    invoice_number,
    total_amount
FROM sales;

-- Ví dụ 2: Sử dụng RANK() để xếp hạng các sản phẩm theo doanh số bán được
SELECT 
    RANK() OVER (ORDER BY total_amount DESC) AS ranking,
    sale_date,
    total_amount
FROM sales;

-- Ví dụ 3: Sử dụng SUM() để tính tổng lượng doanh số bán theo thời gian
SELECT 
    sale_date,
    total_amount,
    SUM(total_amount) OVER (ORDER BY sale_date) AS cumulative_total
FROM sales;

-- Ví dụ 4: Sử dụng LEAD() để so sánh giá trị bán hàng hiện tại với giá trị bán hàng tiếp theo
SELECT 
    sale_date,
    total_amount,
    LEAD(total_amount) OVER (ORDER BY sale_date) AS next_sale_amount
FROM sales;
