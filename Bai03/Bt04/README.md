BÀI THỰC HÀNH 04 – KẾT NỐI MONGODB BẰNG NODE.JS
1. Mục tiêu
Kết nối MongoDB đang chạy trên máy tính.
Sử dụng database qlsinhvien.
Sử dụng collection students.
Thêm ít nhất 3 sinh viên bằng insertMany().
Sử dụng find() để hiển thị danh sách sinh viên.
Đóng kết nối MongoDB sau khi hoàn thành.
2. Cài đặt thư viện
bash
npm init -y
npm install mongodb

3. Các bước thực hiện

Bước 1: Khởi động MongoDB.

Bước 2: Tạo file bai04.js và viết chương trình kết nối MongoDB.

Bước 3: Chạy chương trình:

bash
node bai04.js


Bước 4: Kiểm tra kết quả trên Terminal.

Bước 5: Mở MongoDB Compass, kiểm tra database qlsinhvien và collection students.

4. Hình ảnh minh chứng
Hình 1: Khởi động MongoDB

![alt text](image.png)

Hình 2: Chạy chương trình bai04.js

C![alt text](image-1.png)

Hình 3: Kiểm tra dữ liệu MongoDB Compass

![alt text](image-2.png)

5. Kết quả
Kết nối MongoDB thành công.
Thêm thành công 3 sinh viên bằng insertMany().
Hiển thị danh sách sinh viên bằng find().
Đóng kết nối MongoDB thành công.
Dữ liệu được lưu trong database qlsinhvien, collection students.
6. Công nghệ sử dụng
Node.js
MongoDB
MongoDB Node.js Driver
MongoDB Compass
