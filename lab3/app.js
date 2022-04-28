const http = require('http');
const fs = require('fs');
var module=require('./module');

http.createServer(function (req, res) {
    if(req.url === '/' || req.url ===  '/home') {
        res.writeHead(200, {'content-type': "text/html"});
        const html = fs.readFileSync('home.html');
        res.write(html);
        res.end();
    }
    else if (req.url === '/signup' && req.method === 'POST') {
        let requestBody = [];
        req.on('data', (chunk) => {
            requestBody.push(chunk);
        }).on('end', () => {
            response = Buffer.concat(requestBody).toString();
            jsonResponse =JSON.parse(response)
            let state = module.signupValidation(jsonResponse);
            if(state.success)
                res.writeHead(200, {'content-type': "application/json"});
            else
               res.writeHead(400, {'content-type': "application/json"});

        let result=JSON.stringify(state);
            res.end(result); 
        });
    } else if (req.url === '/login' && req.method === 'POST') {
        let requestBody = [];
        req.on('data', (chunk) => {
            requestBody.push(chunk);
        }).on('end', () => {
            request = Buffer.concat(requestBody).toString();
            let state = module.loginValidation(JSON.parse(request));
            if(state.success) {
                res.writeHead(200, {'content-type': "application/json"});
                let html = fs.readFileSync('profile.html', 'utf-8');
                res.write(html);
                res.end();
            }
            else {
                res.writeHead(400, {'content-type': "application/json"});
                let result =JSON.stringify(state)
                res.end(result);
            }
        });
    } else {
        res.writeHead(404, {'content-type': "application/json"});
        const result = {
            message: 'Page not found.'
        }
        res.end(JSON.stringify(result));
    }
}).listen(3000);

