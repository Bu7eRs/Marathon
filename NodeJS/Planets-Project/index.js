const { parse } = require('csv-parse');
const files = require('fs');

const results = [];

files.createReadStream('kepler_data.csv')
    .on('data', (data) => {
        results.push(data);
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        console.log(results);
        console.log('done');

    });


// parse();