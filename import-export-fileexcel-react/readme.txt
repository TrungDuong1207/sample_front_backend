##install thư viên
npm install xlsx

##import excel
    1. chúng ta tạo một giao diện cho người dùng để chọn tệp Excel cần nhập 
    bằng cách sử dụng thẻ input với thuộc tính type="file".
    2. Khi người dùng chọn tệp Excel, chúng ta gọi hàm handleFile để đọc tệp Excel bằng cách sử dụng hàm FileReader. 
    3. Sau đó, chúng ta sử dụng hàm XLSX.read() để đọc tệp Excel, 
    lấy bảng dữ liệu từ workbook bằng cách sử dụng hàm XLSX.utils.sheet_to_json(), 
    và lưu trữ dữ liệu được đọc vào state của component bằng cách sử dụng hook useState. 
    4. Cuối cùng, chúng ta hiển thị dữ liệu được lưu trữ bằng cách sử dụng hàm map().

## export excel
    1. chúng ta sử dụng hook useState để lưu trữ danh sách dữ liệu. 
    Khi người dùng bấm vào nút "Export to Excel", chúng ta gọi hàm handleExport, 
    tạo một bảng dữ liệu từ danh sách dữ liệu bằng cách sử dụng hàm XLSX.utils.json_to_sheet(), 
    2. sau đó thêm bảng dữ liệu này vào một workbook mới bằng cách sử dụng hàm XLSX.utils.book_append_sheet(). 
    3. Cuối cùng, chúng ta tạo một tệp Excel mới bằng cách sử dụng hàm XLSX.writeFile() 
    và đặt tên cho tệp Excel là "data.xlsx".