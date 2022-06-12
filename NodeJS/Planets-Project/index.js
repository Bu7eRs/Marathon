const { parse } = require('csv-parse');
const fileS = require('fs');

const filteredData = [];

function filterData(data) {
    return data['ASR'] >= '60%';
}

fileS.createReadStream('CommpeakReport.csv')
    .pipe(parse({
        delimiter: ':'
    }))
    .on('data', (data) => {
        if(filterData(data))
        {
        filteredData.push(data);
        }
    })
    .on('error', (err) => {
        console.log(err)
    });

    console.log(filteredData.length);