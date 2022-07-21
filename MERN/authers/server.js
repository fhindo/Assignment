const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const port = 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

require("./server/config/mongoose.config");
require("./server/routes/auther.routes")(app);

app.get("/api", (req, res) => {
    res.json({
        message: "this is a test for the app"
    })
})

app.listen(port, ()=>{console.log(`Listening on port no: ${port}`)});
