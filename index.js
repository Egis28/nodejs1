const express = require("express");

const app = express();

app.use(express.json());



const products = [

    {  id: 1, title: "Haris poteris"},  {  id: 2, title: "ziedu valdovas"},

    {  id: 3, title: "Vienas namuose"}

]



// 1. turi buti routas


app.get("/api/products", (req, res) => {

    res.send(products)

})



app.get("/api/products/:id", (req, res) => {

    const my_product = products.find(product => product.id === parseInt(req.params.id));

    console.log(typeof req.params.id);

    if(!my_product) res.status(404).send("Not found");

    res.send(my_product);

})


app.post("/api/products", (req, res) => {

    const product = {

        id: products.length + 1,

        title: req.body.title

    };

    products.push(product);

    res.send(products);

});

//esamos prekes atnaujinimas
app.put('/api/products/:id', (req, res)=>{
    const my_product = products.find(product => product.id === parseInt(req.params.id));
    if(!my_product) res.status(404).send("not found");

    my_product.title = req.body.title;
    res.send(my_product);
});

//esamos prekes trynimas,pasalinimas
app.delete('/api/products/:id', (req, res)=>{
    const my_product = products.find(product => product.id === parseInt(req.params.id));
    if(!my_product) res.status(404).send("not found");

    const product_index = products.indexOf(my_product);
    products.splice(product_index, 1);

    res.send(my_product);
});




// 2. sistemos kinstamuosius (.env faile)



const PORT = 8080;


// 3. startuoju web serveri


app.listen(PORT, () => {

   console.log(`server is working on ${PORT}`)

})