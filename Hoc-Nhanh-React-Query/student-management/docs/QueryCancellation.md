Query Cancellation (Hủy truy vấn) là một kỹ thuật được sử dụng để ngăn chặn việc thực hiện một truy vấn dữ liệu khi không còn cần thiết nữa, chẳng hạn khi người dùng chuyển đến một trang khác hoặc thực hiện một hành động khác. Điều này giúp tối ưu hóa hiệu suất và nguồn lực bằng cách tránh việc tiêu tốn tài nguyên cho các truy vấn không còn được sử dụng.

queryClient.cancelQueries({ queryKey: ['students', page] })
