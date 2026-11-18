
# BÀI 7: XỬ LÝ THAM SỐ URL TRÊN WEB SERVER

**Sinh viên:** Nguyễn Thành Danh

**Môn học:** Module, File System và cơ sở dữ liệu

## 1. Mục tiêu bài thực hành

- Sử dụng module http.
- Sử dụng đối tượng URL.
- Tạo Web Server tại cổng 3001.
- Xử lý tham số URL.
- Kiểm tra tham số thiếu hoặc không hợp lệ.

## 2. Công cụ sử dụng

- Visual Studio Code
- Node.js
- Google Chrome

## 3. Các bước thực hiện

### Bước 1: Tạo file bai07.js

Viết chương trình sử dụng module http và URL để xử lý tham số.

### Bước 2: Chạy chương trình

Mở Terminal và thực hiện lệnh:

```bash
node bai07.js
```

Server chạy tại:

http://localhost:3001

### Bước 3: Kiểm tra chức năng Hello

Truy cập:

http://localhost:3001/hello?name=Minh

Kết quả:

Xin chào Minh

### Bước 4: Kiểm tra chức năng Sum

Truy cập:

http://localhost:3001/sum?a=10&b=20

Kết quả:

Tổng = 30

### Bước 5: Kiểm tra lỗi

Truy cập:

http://localhost:3001/hello

Kết quả: Thông báo thiếu tham số name.

Truy cập:

http://localhost:3001/sum?a=abc&b=20

Kết quả: Thông báo giá trị không hợp lệ.

## 4. Kết quả thực hiện

- Web Server chạy thành công tại cổng 3001.
- Chức năng hello hiển thị đúng lời chào.
- Chức năng sum tính tổng chính xác.
- Chương trình kiểm tra tham số thiếu.
- Chương trình kiểm tra giá trị không hợp lệ.

## 5. Hình ảnh minh chứng

Các ảnh minh chứng được lưu trong thư mục images.

### Ảnh 1: Chạy Web Server
![Chạy Server]![alt text](image-3.png)

### Ảnh 2: Kết quả Xin chào Minh
![Hello]![alt text](image.png)

### Ảnh 3: Kết quả Tổng = 30
![Sum]![alt text](image-1.png)

### Ảnh 4: Kiểm tra lỗi
![Error]![alt text](image-2.png)

### Ảnh 5: Kiểm tra giá trị không hợp lệ
![Error 2]![alt text](image-4.png)
