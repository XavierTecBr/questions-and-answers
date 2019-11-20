const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/:name/:lang", (req, res) => {
    let name = req.params.name;
    let lang = req.params.lang;
    res.render("index", {
        name: name,
        lang: lang,
        companyName: "Chicos",
        totalOfClients: 5200
    });
});

app.listen(8080,()=>{console.log("Server is ok.");});