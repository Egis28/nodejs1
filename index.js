// const express = require("express");
// const app = express();
// app.use(express.json());


// const products = [

//     {  id: 1, title: "Haris poteris"},  {  id: 2, title: "ziedu valdovas"},

//     {  id: 3, title: "Vienas namuose"}

// ]


// // 1. turi buti routas

// app.get("/api/products", (req, res) => {

//     res.send(products)

// })


// app.get("/api/products/:id", (req, res) => {

//     const my_product = products.find(product => product.id === parseInt(req.params.id));

//     console.log(typeof req.params.id);

//     if(!my_product) res.status(404).send("Not found");

//     res.send(my_product);

// })


// app.post("/api/products", (req, res) => {

//     const product = {

//         id: products.length + 1,

//         title: req.body.title

//     };

//     products.push(product);

//     res.send(products);

// });

// //esamos prekes atnaujinimas
// app.put('/api/products/:id', (req, res)=>{
//     const my_product = products.find(product => product.id === parseInt(req.params.id));
//     if(!my_product) res.status(404).send("not found");

//     my_product.title = req.body.title;
//     res.send(my_product);
// });

// //esamos prekes trynimas,pasalinimas
// app.delete('/api/products/:id', (req, res)=>{
//     const my_product = products.find(product => product.id === parseInt(req.params.id));
//     if(!my_product) res.status(404).send("not found");

//     const product_index = products.indexOf(my_product);
//     products.splice(product_index, 1);

//     res.send(my_product);
// });


// // 2. sistemos kinstamuosius (.env faile)

// const PORT = 8080;

// // 3. startuoju web serveri

// app.listen(PORT, () => {

//    console.log(`server is working on ${PORT}`)

// })


//kuriu serveri
const { Console } = require('console');
const express = require('express');
const app = express();

//duomenys gaunami, perduodami json formatu
app.use(express.json());



const courses = [
    {id: 1, name: "js", youTube_Channel: "CS Dojo"},
    {id: 2, name: "react", youTube_Channel: "Derek Banas"},
    {id: 3, name: "node js", youTube_Channel: "Joshua Fluke"},
]

//1sukurti route
app.get('/api/courses', (req, res) => {
    res.send(courses);
});


app.get('/api/courses/:id', (req, res) => {
    const my_course = courses.find(course => course.id === parseInt(req.params.id));
    if(!my_course) res.status(404).send("not found");
    res.send(my_course);
});

//naujos prekes pridejimas, irasymas
//be patyiktinimu, ar netuscia reiksme siunciama ir tt...

app.post('/api/courses', (req,res)=> {
    const course ={
        id: courses.length +1,
        youTube_Channel: req.body.youTube_Channel
    };

    courses.push(course);
    res.send(course);
});

//esamos prekes atnaujinimas
app.put('/api/courses/:id', (req, res) =>{
    const my_course = courses.find(course => course.id === parseInt(req.params.id));
    if(!my_course) res.status(404).send("not found");

    my_course.youTube_Channel = req.body.youTube_Channel;
    res.send(my_course);
});

//esamos prekes trynimas, pasalinimas
app.delete('/api/courses/:id', (req, res)=>{
    const my_course = courses.find(course => course.id === parseInt(req.params.id));
    if(!my_course) res.status(404).send("not found");

    const course_index = courses.indexOf(my_course);
    courses.splice(course_index, 1);

    res.send(my_course);
});

//apsirasome port'a ant kurio veiks sereveris
const PORT = 8080;


//svarbu.2. tik tada kai sukurtas, egzistuoja route, startuoti serveri

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
});
