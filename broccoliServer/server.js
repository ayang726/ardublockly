const express = require("express");
const path = require("path")

const app = express();
const PORT = 3000;

// what was I trying to do here? A regular blockly server can be launched
// by using python -3 start.py
// I need to make better notes.

app.use(express.static(path.join(__dirname + "/..")));
console.log(path.join(__dirname + "/.."))
app.get("/", function (req, res) {
    res.redirect("/ardublockly/index.html")
})

app.listen(PORT, function () {
    console.log("Broccoli Server listening on http://localhost:" + PORT);

})