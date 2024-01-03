Sử dụng hook useMutation để thực hiện các thay đổi dữ liệu https://tanstack.com/query/v4/docs/react/guides/mutations

1. mục đích

- Sử dụng khi bạn muốn thực hiện các thay đổi dữ liệu, chẳng hạn như tạo, cập nhật, hoặc xóa.
- Thường được sử dụng trong các biểu mẫu hoặc các tác vụ yêu cầu sự tương tác từ người dùng.
- Hỗ trợ cơ chế như tự động làm mới dữ liệu sau khi mutation thành công và xử lý lỗi.
- Tóm lại, sử dụng useQuery khi bạn muốn lấy dữ liệu, và sử dụng useMutation khi bạn muốn thực hiện các thay đổi dữ liệu và cần xử lý sau khi mutation thành công. Trong nhiều trường hợp, bạn có thể kết hợp cả hai để đảm bảo dữ liệu của bạn luôn được cập nhật sau khi các thay đổi được thực hiện.

```bash
const updateStudentMutation = useMutation({
  mutationFn: (_) => updateStudent(id as string, formState as Student),
  onSuccess: (data) => {
    // Khi mutation thành công, cập nhật dữ liệu trong cache
    queryClient.setQueryData(['student', id], data);
  }
});

```

- onSuccess là một callback được gọi khi mutation hoàn thành mà không có lỗi.
- Trong ví dụ này, khi mutation thành công, bạn sử dụng queryClient.setQueryData để cập nhật dữ liệu trong cache của truy vấn có khóa là ['student', id] (nơi id là id của sinh viên cụ thể).
- Điều này giúp cập nhật ngay lập tức dữ liệu trong cache mà không cần phải làm mới toàn bộ trang hoặc thực hiện lại truy vấn.

- invalidateQueries thường được sử dụng khi bạn muốn đảm bảo dữ liệu mới từ nguồn, trong khi setQueryData thường được sử dụng khi bạn muốn cập nhật dữ liệu trong cache mà không cần làm mới truy vấn từ nguồn dữ liệu.