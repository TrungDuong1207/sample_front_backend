Sử dụng hooks như useQuery để thực hiện các truy vấn dữ liệu:

1. queryKey xác định một khóa duy nhất cho truy vấn. Nếu giá trị của queryKey thay đổi so với lần render trước, truy vấn sẽ được coi là mới và sẽ được thực hiện lại.
   Trong trường hợp này, ['students', page] là một mảng chứa các giá trị quan trọng cho việc xác định truy vấn. Nếu page thay đổi, truy vấn sẽ được thực hiện lại.

2. queryFn là một hàm mà React Query sẽ gọi để thực hiện truy vấn dữ liệu. Trong trường hợp này, getStudents(page, LIMIT, controller.signal) là hàm được gọi để lấy danh sách sinh viên.
   Trong ví dụ của bạn, bạn đang sử dụng AbortController để hủy bỏ truy vấn sau 5 giây.

3. keepPreviousData là một thuộc tính có giá trị boolean. Khi được đặt thành true, nó cho phép giữ lại dữ liệu từ lần truy vấn trước khi truy vấn mới được kích thích.
   Điều này hữu ích khi bạn muốn giữ lại dữ liệu trước đó để hiển thị khi đang chờ dữ liệu mới.

4. retry xác định số lần thử lại khi truy vấn thất bại. Trong trường hợp của bạn, retry: 0 đồng nghĩa với việc không có lần thử lại nào sẽ được thực hiện khi truy vấn không thành côn
