const express = require("express");
const app = express();
// const test = require("./routes/test");
const cors = require("cors");
const SiDoState = require("./routes/SiDoState");
const InfectedState = require("./routes/InfectedState");
const AllOverflow = require("./routes/AllOverflow");
const news = require("./routes/news");

let corsOption = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

// app.use("/api",cors(corsOption), test);
app.use("/sidoapi", cors(), SiDoState);
app.use("/infectedapi", cors(), InfectedState);
app.use("/alloverflowapi", cors(), AllOverflow);
app.use("/newsapi", cors(), news);

const port = process.env.PORT || 4000; //노드 서버가 사용할 포트
app.listen(port, () => console.log(`Listening on port ${port}`));
