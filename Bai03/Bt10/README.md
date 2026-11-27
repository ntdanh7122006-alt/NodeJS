# BÀI TẬP 10 - MONGODB AGGREGATE VÀ LOOKUP

## 1. Thông tin bài tập
- Ngôn ngữ: JavaScript (NodeJS)
- Database: qlsinhvien
- Collection 1: departments
- Collection 2: students_join
- Công cụ: Visual Studio Code, MongoDB Compass

## 2. Nội dung thực hiện

- Tạo collection departments gồm 2 khoa.
- Tạo collection students_join gồm 4 sinh viên.
- Sử dụng insertMany() để thêm dữ liệu.
- Sử dụng aggregate() kết hợp $lookup để liên kết sinh viên với khoa thông qua makhoa.
- Sử dụng $unwind để tách thông tin khoa.
- Sử dụng $project để hiển thị mã sinh viên, họ tên, mã khoa và tên khoa.

## 3. Các lệnh thực hiện

Cài đặt thư viện:

```bash
npm install mongodb
```

Chạy chương trình:

```bash
node bai10.js
```

## 4. Kết quả

- Thêm thành công 2 khoa.
- Thêm thành công 4 sinh viên.
- Liên kết thành công sinh viên với khoa bằng $lookup.
- Hiển thị đầy đủ mã sinh viên, họ tên, mã khoa và tên khoa tương ứng.

## 5. Hình ảnh minh chứng

### Hình 1: Code chương trình
![Code bai10.js]<img width="327" height="738" alt="image" src="https://github.com/user-attachments/assets/899318d6-dc1c-4868-8ef4-f70746559b8e" />


### Hình 2: Kết quả chạy chương trình
![Ket qua Terminal]<img width="326" height="551" alt="image" src="https://github.com/user-attachments/assets/a700df4c-a603-4f74-92be-2ff389825341" />

### Hình 3: Collection departments
![Du lieu departments]<img width="634" height="108" alt="image" src="https://github.com/user-attachments/assets/8fd5d635-60a1-470f-b964-53efdd70a9ad" />


### Hình 4: Collection students_join
![Du lieu students_join]<img width="773" height="157" alt="image" src="https://github.com/user-attachments/assets/009487f6-11c7-4fdd-8b95-7ab111286c8d" />


## 6. Kết luận

Đã hoàn thành bài thực hành 10 về liên kết dữ liệu giữa hai collection trong MongoDB bằng aggregate() và $lookup. Kết quả hiển thị đầy đủ tên khoa tương ứng với từng sinh viên.
