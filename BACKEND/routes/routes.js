const express= require("express")
const router= express.Router();

router.get("/", (req, res) => {
    res.json({message: "voici mon essaie"});
});

router.post("/", (req, res) => {
    console.log(Req.body);
    res.json({message: "rep.body.message"});
   
});


module.exports= router