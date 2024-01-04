/**
 Vốn cuối cùng = Vốn ban đầu x (1 + Tỷ lệ lãi ngày)^số_ngày 
 */
function tinhVonCuoiCung(vonBanDau, tyLeLaiNgay, soNgay) {
    var vonCuoiCung = vonBanDau * Math.pow(1 + tyLeLaiNgay, soNgay);
    return vonCuoiCung.toFixed(2); // Làm tròn đến 2 chữ số thập phân
}

// Ví dụ sử dụng
var vonBanDau = 100;
var tyLeLaiNgay = 0.05; // 5%
var soNgay = 30 * 2; // 1 năm

var vonCuoiCung = tinhVonCuoiCung(vonBanDau, tyLeLaiNgay, soNgay);
console.log('Vốn cuối cùng sau 1 năm là: $' + vonCuoiCung);