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
![Code]<img width="373" height="722" alt="image" src="https://github.com/user-attachments/assets/99777658-f1bf-4ec5-b2b7-9cb8cdd886bd" />


### Hình 2: Kết quả chạy chương trình
![Kết quả]!<img width="328" height="437" alt="image" src="https://github.com/user-attachments/assets/c4a63930-a4df-46ed-92a4-b0ccb0f1a169" />


### Hình 3: Dữ liệu MongoDB
![MongoDB]!<img width="1059" height="117" alt="image" src="https://github.com/user-attachments/assets/eb12b4bd-14d5-4f1d-896a-458c8792c175" />



## 6. Kết luận

Đã hoàn thành bài thực hành 09 về thao tác xóa dữ liệu trong MongoDB bằng NodeJS, sử dụng deleteOne(), deleteMany() và find().
