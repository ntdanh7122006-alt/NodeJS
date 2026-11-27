
const { MongoClient } = require("mongodb");

// Kết nối MongoDB
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    try {
        // Kết nối database
        await client.connect();
        console.log("Ket noi MongoDB thanh cong!");

        const db = client.db("qlsinhvien");
        const collection = db.collection("students_test");

        // Xóa dữ liệu cũ để chạy lại không bị trùng
        await collection.deleteMany({});

        // Thêm 5 sinh viên mẫu
        const students = [
            { masv: "SV001", hoten: "Nguyen Thanh Danh", tuoi: 20, diem: 8 },
            { masv: "SV002", hoten: "Vo Thanh Phuc", tuoi: 21, diem: 4 },
            { masv: "SV003", hoten: "Huynh Thanh Tung", tuoi: 19, diem: 6 },
            { masv: "SV004", hoten: "Nguyen Anh Quan", tuoi: 22, diem: 3 },
            { masv: "SV005", hoten: "Pham Hoang Hai", tuoi: 20, diem: 9 }
        ];

        const insertResult = await collection.insertMany(students);
        console.log("So sinh vien da them:", insertResult.insertedCount);

        // Xóa một sinh viên theo mã sinh viên
        const deleteOneResult = await collection.deleteOne({
            masv: "SV001"
        });

        console.log("So sinh vien xoa bang deleteOne:",
            deleteOneResult.deletedCount);

        // Xóa các sinh viên có điểm dưới 5
        const deleteManyResult = await collection.deleteMany({
            diem: { $lt: 5 }
        });

        console.log("So sinh vien xoa bang deleteMany:",
            deleteManyResult.deletedCount);

        // Hiển thị danh sách sinh viên còn lại
        console.log("\nDANH SACH SINH VIEN CON LAI:");

        const remainingStudents = await collection.find({}).toArray();

        console.log(remainingStudents);
        console.log("Tong so sinh vien con lai:",
            remainingStudents.length);

    } catch (error) {
        console.error("Loi:", error);
    } finally {
        await client.close();
        console.log("\nDa dong ket noi MongoDB!");
    }
}

main();
