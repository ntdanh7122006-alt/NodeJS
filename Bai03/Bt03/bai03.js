
const fs = require('fs');

// Thong tin sinh vien
const thongtin = 'Ho ten: Nguyen Thanh Danh\nMa sinh vien: CD-CNTT18A07\n';

// Tao file va ghi thong tin
fs.writeFileSync('thongtin.txt', thongtin);

console.log('=== NOI DUNG BAN DAU ===');

// Doc va hien thi noi dung
let data = fs.readFileSync('thongtin.txt', 'utf8');
console.log(data);

// Ghi noi them ten lop
fs.appendFileSync('thongtin.txt', 'Lop: CNTT18A\n');

console.log('=== NOI DUNG SAU KHI CAP NHAT ===');

// Doc lai file
data = fs.readFileSync('thongtin.txt', 'utf8');
console.log(data);