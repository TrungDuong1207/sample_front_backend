import React from "react";
import XLSX from "xlsx";

function ExcelImport() {
  const [data, setData] = React.useState([]);

  const handleFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      setData(jsonData);
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFile} />
      {data.map((row, index) => (
        <div key={index}>{JSON.stringify(row)}</div>
      ))}
    </div>
  );
}

export default ExcelImport;
