// const uuid = require('uuid');

// console.log('Hello my first node');
// console.log('uuid: ' + uuid.v4());
// console.log('uuid: ' + uuid.v4());

// const {person, Person} = require('./person.js');

// console.log(person);

// const p1 = new Person('Jane',50);
// console.log(p1);

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res) => {
    console.log(req.url);
    if(req.url === '/'){
        // res.writeHead(200,{'content-type': 'text/html'});
        // res.end('<h1>This is index.html</h1>')
        fs.readFile(path.join(__dirname, 'public','index.html'),(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/html'});
            res.end(content);
        });
    }else if(req.url === '/about'){
        // res.writeHead(200,{'content-type': 'text/html'});
        // res.end('<h2>This is about page</h2>')
        fs.readFile(path.join(__dirname, 'public','about.html'),(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/html'});
            res.end(content);
        });
    // }else {
    //     // res.writeHead(404,{'content-type': 'text/html'});
    //     // res.end('<h3>Error 404:Not Found</h3>')
    //     fs.readFile(path.join(__dirname, 'public','404.html'),(err,content) => {
    //         if(err) throw err;
    //         res.writeHead(404,{'content-type': 'text/html'});
    //         res.end(content);
    //     });
    }
});

const PORT = process.env.PORT || 5500;
server.listen(PORT ,() => {
    console.log('Server is running on port: '+ PORT);
});