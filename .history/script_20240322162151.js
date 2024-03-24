const express = require("express");
const app = express();

app.get("/", (req, res) => {
   res.send("Connected to /");
});
app.listen(8080, (req, res) => {
   res.send("Listening on 8080");
   console.log("Listening on 8080");
});
