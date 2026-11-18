
// Tinh diem trung binh 3 mon
function tinhDiemTB(toan, ly, hoa) {
    return (toan + ly + hoa) / 3;
}

// Xep loai hoc tap
function xepLoai(diemTB) {
    if (diemTB >= 8) {
        return "Gioi";
    } else if (diemTB >= 6.5) {
        return "Kha";
    } else if (diemTB >= 5) {
        return "Trung binh";
    } else {
        return "Yeu";
    }
}

// Xuat cac ham
module.exports = {
    tinhDiemTB,
    xepLoai
};
