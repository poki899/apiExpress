
const { listCsvApi, getCsvByName } = require("../services/tbxNet.service")
const { transformCsvToJson, asyncForEach } = require("../utils/helper");

exports.listFilesAllData = async (req, res) => {
    const response = { header: null, rows: [] };
    const csvList = await listCsvApi();
    await asyncForEach(csvList.files, async (item, index) => {
        const data = await getCsvByName(item);
        if (data.search('status') === -1) {
            const json = await transformCsvToJson(data);
            if (index === 0) {
                response.header = json[0]
            }
            json.shift()
            response.rows.push(...json)
        }
    });
    res.send(response);
};

exports.listFiles = async (req, res) => {
    const data = await listCsvApi();
    res.send(data);
};

exports.detailCsv = async (req, res) => {

    const data = await getCsvByName(req.params.name);
    if (data.search('status') === -1) {
        const response = { header: null, rows: [] };
        const json = await transformCsvToJson(data);
        response.header = json[0];
        json.shift()
        response.rows.push(...json)
        res.send(response);
    } else {
        res.status(500).send({
            message: `Error with csv`
        })
    }
}