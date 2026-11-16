
// Class SinhVien
class SinhVien {
    constructor(ma, hoTen, tuoi, diem) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }
}

// Danh sach 5 sinh vien
const danhSach = [
    new SinhVien("SV01", "Pham Hoang Hai", 20, 8),
    new SinhVien("SV02", "Vo Thanh Phuc", 20, 4),
    new SinhVien("SV03", "Huynh Thanh Tung", 20, 7),
    new SinhVien("SV04", "Nguen Anh Quan", 20, 3),
    new SinhVien("SV05", "Nguyen Thanh Danh", 20, 9)
];

// Loc sinh vien co diem tu 5 tro len
const sinhVienDat = danhSach.filter(sv => sv.diem >= 5);

// Hien thi ket qua
console.log("DANH SACH SINH VIEN DAT YEU CAU:");
console.log(sinhVienDat);
