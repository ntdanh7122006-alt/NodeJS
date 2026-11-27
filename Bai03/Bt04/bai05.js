
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log("Ket noi MongoDB thanh cong!");

        const db = client.db("qlsinhvien");
        const collection = db.collection("students");

        // 1. Tim sinh vien co diem >= 7
        console.log("\n===== SINH VIEN CO DIEM >= 7 =====");

        const danhSach = await collection
            .find({ diem: { $gte: 7 } })
            .sort({ diem: -1 })
            .toArray();

        danhSach.forEach((sv) => {
            console.log("--------------------");
            console.log("Ma SV:", sv.masv);
            console.log("Ho ten:", sv.hoten);
            console.log("Diem:", sv.diem);
        });

        // 2. Cap nhat diem sinh vien theo ma SV
        const masvCanSua = "SV001";
        const diemMoi = 9.5;

        const result = await collection.updateOne(
            { masv: masvCanSua },
            { $set: { diem: diemMoi } }
        );

        console.log("\n===== CAP NHAT DIEM =====");
        console.log("So sinh vien duoc cap nhat:", result.modifiedCount);

        // 3. Hien thi thong tin sau cap nhat
        console.log("\n===== THONG TIN SAU CAP NHAT =====");

        const sinhVien = await collection.findOne({
            masv: masvCanSua
        });

        if (sinhVien) {
            console.log("Ma SV:", sinhVien.masv);
            console.log("Ho ten:", sinhVien.hoten);
            console.log("Tuoi:", sinhVien.tuoi);
            console.log("Diem moi:", sinhVien.diem);
        } else {
            console.log("Khong tim thay sinh vien!");
        }

    } catch (error) {
        console.log("Loi:", error);
    } finally {
        await client.close();
        console.log("\nDa dong ket noi MongoDB!");
    }
}

main();
