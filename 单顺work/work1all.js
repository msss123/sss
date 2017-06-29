var fs = require('fs');
var http = require('http');

http.createServer(function (req, res){
    var url=req.url;//用url保存请求地址
    switch(url){
        case"/"://处理请求

            fs.readFile("work1.html", "utf-8", function (err, data) {
                if (err) {
                    res.end('获取文件失败');
                    console.log(err);
                } else {
                    //设置响应头
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"});
                    res.end(data);
                }
            })
            break


        case "/work1.css":
            fs.readFile("work1.css", "utf-8", function (err, data) {
                if (err) {
                    res.end('获取文件失败');
                    console.log(err);
                } else {
                    //设置响应头
                    res.writeHead(200, {"content-type": "text/css;charset=utf8"});
                    res.end(data);
                }
            });
            break


        case"/48.jpg":
            fs.readFile("48.jpg", function (err, data) {
                if (err) {
                    res.end('获取图片失败');
                    console.log(err);
                } else {  //图片读取成功
                    res.writeHead(200, {"content-type": "image/jpeg;charset=utf8"});
                    res.end(data);
                }
            })
            break

        case"/work1.js":
            fs.readFile("work1.js", "utf-8", function (err, data) {
                if (err) {
                    res.end('获取文件失败');
                    console.log(err);
                } else {
                    res.writeHead(200, {"content-type": "text/javascript"});
                    res.end(data);
                }
            })
            break;

        case "/work1-2.html"://处理请求

            fs.readFile("work1-2.html", "utf-8", function (err, data) {
                if (err) {
                    res.end('获取文件失败');
                    console.log(err);
                } else {
                    //设置响应头
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"});
                    res.end(data);
                }
            })
            break;

        case "/work1-3.html"://处理请求

            fs.readFile("work1-3.html", "utf-8", function (err, data) {
                if (err) {
                    res.end('获取文件失败');
                    console.log(err);
                } else {
                    //设置响应头
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"});
                    res.end(data);
                }
            })
            break;

        case"/work1.html"://处理请求

            fs.readFile("work1.html", "utf-8", function (err, data) {
                if (err) {
                    res.end('获取文件失败');
                    console.log(err);
                } else {
                    //设置响应头
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"});
                    res.end(data);
                }
            })
            break

        default:
            res.end("404 not found!")
    }







}).listen(3000)