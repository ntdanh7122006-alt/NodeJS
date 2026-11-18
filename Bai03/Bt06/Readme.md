
# BT06 - Module trong Node.js

## 1. Mục tiêu
- Tạo module xử lý điểm sinh viên.
- Sử dụng module.exports để xuất hàm.
- Sử dụng require() để gọi hàm từ module khác.
- Tính điểm trung bình và xếp loại học tập.

## 2. Cấu trúc thư mục

- bai06.js: Chương trình chính.
- xulyDiem.js: Module tính điểm và xếp loại.
- Readme.md: Mô tả bài tập.

## 3. Các chức năng

### File xulyDiem.js
- tinhDiemTB(): Tính điểm trung bình 3 môn.
- xepLoai(): Xếp loại học tập.
- module.exports: Xuất các hàm.

### File bai06.js
- require("./xulyDiem") để gọi module.
- Khởi tạo dữ liệu 3 sinh viên.
- Hiển thị họ tên, điểm trung bình và xếp loại.

## 4. Lệnh thực hiện

Mở Terminal tại thư mục BT06:

```bash
node bai06.js
```

## 5. Kết quả chạy chương trình

Chương trình hiển thị họ tên, điểm trung bình
và xếp loại của 3 sinh viên trên Terminal.

## 6. Hình ảnh minh họa

Thêm ảnh chụp màn hình kết quả chạy chương trình tại đây.
<img width="342" height="35" alt="image" src="https://github.com/user-attachments/assets/c10d3928-38b8-458a-96bd-420fc72e370c" />
<img width="249" height="227" alt="image" src="https://github.com/user-attachments/assets/60d921b6-36c1-46f6-9227-4c175a5818cd" />

