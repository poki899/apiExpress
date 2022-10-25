const https = require('https');
const csv = require('csvtojson')
exports.getApi = (url, isJSON = false) => {
    return new Promise(function (resolve) {
        https.get(url, {
            headers: {
                "Authorization": `Bearer aSuperSecretKey`
            }
        }, res => {
            let data = [];
            res.on("data", chunk => {
                data.push(chunk);
            });

            res.on("end", () => {
                isJSON ? resolve(JSON.parse(Buffer.concat(data).toString())) : resolve(Buffer.concat(data).toString());

            });
        }
        ).on("error", err => {
            resolve({ "Response": false })
        });
    });
}

exports.transformCsvToJson = (data) => (
    csv({
        noheader: true,
    }).fromString(data).then((csvRow) => {
        return csvRow
    })
)

exports.asyncForEach = async function (array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};


