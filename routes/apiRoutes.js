const expres = require('express');
const router =expres.Router();
const db =require("../models");
const fs=require("fs");

//get all user
router.get("/index",(req,res)=>{
    db.user.findAll().then(users =>res.render('index.ejs',{
        alluser:users
    }))
});

//get singel user by id 
router.get("/index/:id",(req,res)=>{
    db.user.findAll({
        where:{
            id: req.params.id
        }
    }).then(users =>res.render('index.ejs') );
   
});

//post new user
router.post("/post",(req,res)=>{
    console.log(req.body);
    db.user.create({
        user:req.body.username,
        email:req.body.email,
        password:req.body.password,

       

    }).then(Submiteduser =>res.send(""));
    res.redirect("/api/index");
});


module.exports = router;