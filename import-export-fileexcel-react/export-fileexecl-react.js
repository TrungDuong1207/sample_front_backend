import React from "react";
import XLSX from "xlsx";

function ExcelExport() {
  const [data, setData] = React.useState([
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 35 },
  ]);

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "data.xlsx");
  };

  return (
    <div>
      <button onClick={handleExport}>Export to Excel</button>
    </div>
  );
}

export default ExcelExport;
