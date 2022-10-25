module.exports = app => {
    const csv = require("../controllers/csvController.js");

    var router = require("express").Router();
    // Retrieve all Tutorials
    router.get("/listCvsWithDetails", csv.listFilesAllData);
    router.get("/listCsvs", csv.listFiles);
    router.get("/detail/:name", csv.detailCsv);

    app.use("/api", router);
};