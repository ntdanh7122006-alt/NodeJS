
const http = require('http');
const { URL } = require('url');

// Tao Web Server
const server = http.createServer((req, res) => {

    // Su dung doi tuong URL
    const url = new URL(req.url, 'http://localhost:3001');

    // Cau hinh tra ve tieng Viet
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    // Xu ly duong dan /hello
    if (url.pathname === '/hello') {

        const name = url.searchParams.get('name');

        if (name === null || name.trim() === '') {
            res.statusCode = 400;
            res.end('Loi: Thieu tham so name!');
        } else {
            res.statusCode = 200;
           res.end('Xin chào ' + name.trim());
        }
    }

    // Xu ly duong dan /sum
    else if (url.pathname === '/sum') {

        const a = url.searchParams.get('a');
        const b = url.searchParams.get('b');

        if (a === null || b === null ||
            a.trim() === '' || b.trim() === '') {

            res.statusCode = 400;
            res.end('Loi: Thieu tham so a hoac b!');
        }

        else if (
            !Number.isFinite(Number(a)) ||
            !Number.isFinite(Number(b))
        ) {
            res.statusCode = 400;
            res.end('Loi: a va b phai la so hop le!');
        }

        else {
            const tong = Number(a) + Number(b);

            res.statusCode = 200;
           res.end('Tổng = ' + tong);
        }
    }

    // Xu ly duong dan khong ton tai
    else {
        res.statusCode = 404;
        res.end('Loi: Khong tim thay duong dan!');
    }
});

// Khoi dong Server tai cong 3001
server.listen(3001, () => {
    console.log('Web Server dang chay tai http://localhost:3001');
});

// Xu ly loi neu cong da duoc su dung
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log('Cong 3001 dang duoc su dung!');
        console.log('Hay dung Server cu bang Ctrl + C.');
    } else {
        console.log('Loi Server:', err.message);
    }
});
