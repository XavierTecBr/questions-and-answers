const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/:name/:lang", (req, res) => {
    let name = req.params.name;
    let lang = req.params.lang;
    let showMessageError = false;

    let products = [
        {name: "laranja", price: 3.5},
        {name: "coca-cola", price: 5.5},
        {name: "leite", price: 1.57}
    ];

    res.render("index", {
        products: products,
        name: name,
        lang: lang,
        companyName: "Chicos",
        totalOfClients: 5200,
        showError: showMessageError
    });
});

app.listen(8080,()=>{console.log("Server is ok.");});