
// Import các hàm từ file xulyDiem.js
const { tinhDiemTB, xepLoai } = require("./xulyDiem");

// Danh sách 3 sinh viên
const sinhVien = [
    {
        hoTen: "Nguyen Thanh Danh",
        toan: 9,
        ly: 8,
        hoa: 8
    },
    {
        hoTen: "Pham Hoang Hai",
        toan: 7,
        ly: 6,
        hoa: 7
    },
    {
        hoTen: "Huynh Thanh Tung",
        toan: 4,
        ly: 5,
        hoa: 4
    }
];

// Hiển thị thông tin sinh viên
console.log("===== KET QUA HOC TAP =====");

sinhVien.forEach((sv) => {
    const diemTB = tinhDiemTB(sv.toan, sv.ly, sv.hoa);
    const loai = xepLoai(diemTB);

    console.log("----------------------------");
    console.log("Ho ten:", sv.hoTen);
    console.log("Diem trung binh:", diemTB.toFixed(2));
    console.log("Xep loai:", loai);
});
