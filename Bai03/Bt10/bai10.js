
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    try {
        // 1. Ket noi MongoDB
        await client.connect();
        console.log("Ket noi MongoDB thanh cong!");

        // 2. Su dung database qlsinhvien
        const db = client.db("qlsinhvien");

        // 3. Tao va lay 2 collection
        const departments = db.collection("departments");
        const students = db.collection("students_join");

        // Xoa du lieu cu de tranh trung khi chay lai
        await departments.deleteMany({});
        await students.deleteMany({});

        // 4. Them du lieu khoa
        const departmentData = [
            { makhoa: "CNTT", tenkhoa: "Cong nghe thong tin" },
            { makhoa: "QTKD", tenkhoa: "Quan tri kinh doanh" }
        ];

        await departments.insertMany(departmentData);
        console.log("Da them 2 khoa!");

        // 5. Them du lieu sinh vien
        const studentData = [
            { masv: "SV001", hoten: "Nguyen Thanh Danh", makhoa: "CNTT" },
            { masv: "SV002", hoten: "Nguyen Anh Quan", makhoa: "QTKD" },
            { masv: "SV003", hoten: "Huynh Thanh Tung", makhoa: "CNTT" },
            { masv: "SV004", hoten: "Pham Hoang Hai", makhoa: "QTKD" }
        ];

        await students.insertMany(studentData);
        console.log("Da them 4 sinh vien!");

        // 6. Su dung aggregate va $lookup de lien ket
        const result = await students.aggregate([
            {
                $lookup: {
                    from: "departments",
                    localField: "makhoa",
                    foreignField: "makhoa",
                    as: "thongtin_khoa"
                }
            },
            {
                $unwind: "$thongtin_khoa"
            },
            {
                $project: {
                    _id: 0,
                    masv: 1,
                    hoten: 1,
                    makhoa: 1,
                    tenkhoa: "$thongtin_khoa.tenkhoa"
                }
            }
        ]).toArray();

        // 7. Hien thi ket qua
        console.log("\nDANH SACH SINH VIEN VA KHOA:");
        console.log(result);

    } catch (error) {
        console.error("Loi:", error);
    } finally {
        await client.close();
        console.log("\nDa dong ket noi MongoDB!");
    }
}

main();

