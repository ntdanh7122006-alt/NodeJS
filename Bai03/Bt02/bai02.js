
const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    if (req.url === "/") {
        res.writeHead(200);
        res.end(`
            <h1>Xin chao!</h1>
            <h2>Thong tin sinh vien</h2>
            <p>Ho ten: Nguyen Thanh Danh</p>
            <p>Ma sinh vien: CD-CNTT18A07</p>
        `);
    }
    else if (req.url === "/about") {
        res.writeHead(200);
        res.end(`
            <h1>Gioi thieu ban than</h1>
            <p>Ho ten: Nguyen Thanh Danh</p>
            <p>Toi la sinh vien dang hoc lap trinh Node.js.</p>
            <p>Toi dang tim hieu ve module http va Web Server.</p>
        `);
    }
    else {
        res.writeHead(404);
        res.end("<h1>404 - Khong tim thay trang!</h1>");
    }
});

server.listen(3000, () => {
    console.log("Server dang chay tai http://localhost:3000");
});
