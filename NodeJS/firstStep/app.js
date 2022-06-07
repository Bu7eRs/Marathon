const http = require('http');


const req = http.request('http://www.google.com',(res) => {
    res.on('data', (das) => {
        console.log(`Data chunk: ${das}`);
    })
    res.on('end', () => {
        console.log('No more data');

    })
    res.on('close', function() { 
        console.log("Function ends");
    })
} );

req.end();