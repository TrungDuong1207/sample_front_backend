useIsFetching và useIsMutating là hai hooks được cung cấp để kiểm tra xem có bất kỳ truy vấn nào đang được thực hiện (đang fetching) hoặc có bất kỳ mutation nào đang diễn ra (đang mutating) trong ứng dụng của bạn

```bash
const isFetching = useIsFetching()
  const isMutating = useIsMutating()

  return (
    <div className='App'>
      {isFetching + isMutating !== 0 && <Spinner />}
      <ToastContainer />
      <MainLayout>{elements}</MainLayout>
    </div>
  )

```
