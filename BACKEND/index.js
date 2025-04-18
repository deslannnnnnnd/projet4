const express = require("express");
const app = express();
const port = 3000;
const mysql = require('mysql');


const db= mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER, 
    port : process.env.DB_PORT,
    password : process.env.DB_PASSWORD , 
        database : process.env.DB_location_films,})
// app.get("/post", (req, res) => {
//     res.json({message: "voici mon essaie"});
// });
app.use("/post", require("./routes/post.routes"));
app.use(express.json());

app.use(express.urlencoded({extended: false}));
app.listen(port, () => console.log("L'application roule sur le port " + port));


