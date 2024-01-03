```bash
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})
```

- refetchOnWindowFocus: chặn việc refetch khi chuyển qua lại các tab
- queryClient.invalidateQueries thường được sử dụng khi bạn muốn đảm bảo dữ liệu mới từ nguồn,
- queryClient.setQueryData thường được sử dụng khi bạn muốn cập nhật dữ liệu trong cache mà không cần làm mới truy vấn từ nguồn dữ liệu.

- queryClient.prefetchQuery Được sử dụng để tải trước dữ liệu cho một truy vấn và lưu nó vào cache.
