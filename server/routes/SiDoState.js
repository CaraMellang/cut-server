const express = require("express");
const router = express.Router();
const request = require("request");
const convert = require("xml-js");
const { serviceKeyEncoding, serviceKeyDecoding } = require("../lib/ServiceKey");

const now = new Date();
const hour1 = String(now.getFullYear()).padStart(2, "0");
const minute1 = String(now.getMonth() + 1).padStart(2, "0");
const seconds1 = String(now.getDate()).padStart(2, "0");
// console.log(hour1, minute1, seconds1);
const yester = new Date(now.setDate(now.getDate() - 1));
const hour = String(yester.getFullYear()).padStart(2, "0");
const minute = String(yester.getMonth() + 1).padStart(2, "0");
const seconds = String(yester.getDate()).padStart(2, "0");
// console.log(hour, minute, seconds);

const address = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${serviceKeyEncoding}&numOfRows=100`;

router.get("/", (req, res) => {
  request(address, (error, response, body) => {
    if (error) {
      console.log(error);
    }
    let obj = body;
    // console.log(obj);
    let xmlToJson = convert.xml2json(obj, { compact: true, spaces: 4 });
    console.log(xmlToJson);
    res.send(xmlToJson);
  });
});

module.exports = router;