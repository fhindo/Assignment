const express = require("express");
const mongoose = require("mongoose");

const port = 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

require("./server/config/mongoose.config");
require("./server/routes/joke.routes")(app);

app.get("/api", (req, res) => {
    res.json({
        message: "this is a test for the app"
    })
})


app.listen(port, ()=>{console.log(`Listing on port no: ${port}`)});