
const { getApi } = require('../utils/helper')
const URL_API = `https://echo-serv.tbxnet.com/v1/secret`;

exports.listCsvApi = () => (
    getApi(`${URL_API}/files`, true)
)

exports.getCsvByName = (nameFile) => (
    getApi(`${URL_API}/file/${nameFile}`)
)



