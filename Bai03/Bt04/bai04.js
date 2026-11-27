
const { MongoClient } = require("mongodb");

// Kết nối MongoDB
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    try {
        // Kết nối đến MongoDB
        await client.connect();
        console.log("Ket noi MongoDB thanh cong!");

        // Chọn database và collection
        const db = client.db("qlsinhvien");
        const collection = db.collection("students");

        // Danh sách sinh viên
        const sinhVien = [
            {
                masv: "SV001",
                hoten: "Nguyen Thanh Danh",
                tuoi: 20,
                diem: 8.5
            },
            {
                masv: "SV002",
                hoten: "Pham Hoang Hai",
                tuoi: 20,
                diem: 7.5
            },
            {
                masv: "SV003",
                hoten: "Huynh Thanh Tung",
                tuoi: 20,
                diem: 9
            }
        ];

        // Thêm nhiều sinh viên
        const result = await collection.insertMany(sinhVien);
        console.log("So sinh vien da them:", result.insertedCount);

        // Hiển thị danh sách sinh viên
        console.log("\n===== DANH SACH SINH VIEN =====");

        const danhSach = await collection.find().toArray();

        danhSach.forEach((sv) => {
            console.log("------------------------");
            console.log("Ma SV:", sv.masv);
            console.log("Ho ten:", sv.hoten);
            console.log("Tuoi:", sv.tuoi);
            console.log("Diem:", sv.diem);
        });

    } catch (error) {
        console.log("Loi:", error);
    } finally {
        // Đóng kết nối
        await client.close();
        console.log("\nDa dong ket noi MongoDB!");
    }
}

main();
