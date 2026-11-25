
const fs = require('fs');
const path = require('path');

console.log('===== BÀI 08: MODULE FS =====');

// 1. Tạo thư mục data
const folder = path.join(__dirname, 'data');

if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
    console.log('1. Tạo thư mục data thành công!');
} else {
    console.log('1. Thư mục data đã tồn tại!');
}

// 2. Tạo và ghi nội dung vào ghichu.txt
const fileCu = path.join(folder, 'ghichu.txt');

const noiDung = `Dong 1: Hoc lap trinh NodeJS
Dong 2: Tim hieu module File System
Dong 3: Thuc hanh tao, doc, doi ten va xoa tap tin`;

fs.writeFileSync(fileCu, noiDung, 'utf8');
console.log('2. Tạo và ghi tập tin ghichu.txt thành công!');

// 3. Đổi tên ghichu.txt thành ghichu_moi.txt
const fileMoi = path.join(folder, 'ghichu_moi.txt');

fs.renameSync(fileCu, fileMoi);
console.log('3. Đổi tên tập tin thành ghichu_moi.txt thành công!');

// 4. Đọc và hiển thị nội dung tập tin sau khi đổi tên
const duLieu = fs.readFileSync(fileMoi, 'utf8');

console.log('\n4. Nội dung tập tin ghichu_moi.txt:');
console.log(duLieu);

// 5. Tạo tập tin tam.txt
const fileTam = path.join(folder, 'tam.txt');

fs.writeFileSync(fileTam, 'Day la tap tin tam.');
console.log('\n5. Tạo tập tin tam.txt thành công!');

// 6. Xóa tập tin tam.txt
fs.unlinkSync(fileTam);
console.log('6. Xóa tập tin tam.txt thành công!');

console.log('\n===== HOÀN THÀNH BÀI 08 =====');
