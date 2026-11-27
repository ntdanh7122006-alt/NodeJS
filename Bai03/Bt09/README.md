# BÀI TẬP 09 - NODEJS MONGODB

## 1. Thông tin bài tập
- Tên bài: Bai09
- Database: qlsinhvien
- Collection: students_test
- Ngôn ngữ: JavaScript (NodeJS)
- Công cụ: Visual Studio Code, MongoDB

## 2. Các chức năng thực hiện
1. Kết nối MongoDB.
2. Sử dụng database qlsinhvien.
3. Tạo collection students_test.
4. Thêm 5 sinh viên mẫu bằng insertMany().
5. Sử dụng deleteOne() xóa sinh viên có mã SV001.
6. Sử dụng deleteMany() xóa sinh viên có điểm dưới 5.
7. Hiển thị số bản ghi đã xóa.
8. Sử dụng find() hiển thị danh sách sinh viên còn lại.
9. Đóng kết nối MongoDB.

## 3. Các lệnh thực hiện

Cài đặt thư viện MongoDB:

```bash
npm install mongodb
```

Chạy chương trình:

```bash
node bai09.js
```

## 4. Kết quả thực hiện

- Thêm thành công 5 sinh viên.
- Xóa 1 sinh viên bằng deleteOne().
- Xóa 2 sinh viên bằng deleteMany().
- Còn lại 2 sinh viên trong collection students_test.
- Kết nối MongoDB được đóng thành công.

## 5. Hình ảnh minh chứng

### Hình 1: Code chương trình
![Code]![alt text](image-2.png)

### Hình 2: Kết quả chạy chương trình
![Kết quả]![alt text](image-1.png)

### Hình 3: Dữ liệu MongoDB
![MongoDB]![alt text](image.png)


## 6. Kết luận

Đã hoàn thành bài thực hành 09 về thao tác xóa dữ liệu trong MongoDB bằng NodeJS, sử dụng deleteOne(), deleteMany() và find().