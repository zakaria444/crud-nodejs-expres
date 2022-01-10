const expres = require('express');
const router =expres.Router();
const db =require("../models");
const fs=require("fs");

//get all user
router.get("/index",async (req,res)=>{
    const users= await db.user.findAll({
        include: {
            model: db.departement,
            as: 'departement'
        }
    })

    // res.json(users)
    const depart= await db.departement.findAll()
    
    res.render('index.ejs',{
        alluser:users,
        allDep: depart,
    })
});

router.get("/ajouter",(req,res)=>{
  res.render('departement.ejs')
});

//get singel user by id 
router.get("/index/:id", async (req,res)=>{
    const userbyid= await db.user.findOne({ where:{id: req.params.id}})
    // res.json(userbyid)
    res.render('edit.ejs',{
        userid:userbyid,
    }) ;
   
});




router.get("/edit/:id", async (req,res)=>{
    const userbyid= await db.user.update({ where:{id: req.params.id}})
    // res.json(userbyid)
    res.render('edit.ejs',{
        userid:userbyid,
    }) ;
   
});

//post new user
router.post("/post",(req,res)=>{
    console.log(req.body);
    db.user.create({
        user:req.body.username,
        email:req.body.email,
        password:req.body.password,
        departementId:req.body.depid,

       

    }).then(Submiteduser =>res.send(""));

    res.redirect("/api/index");
});

//post new departement
router.post("/depart",(req,res)=>{
    console.log(req.body);
    db.departement.create({
        name:req.body.name,
        description:req.body.description,

       

    }).then(Submiteduser =>res.send(""));
    res.redirect("/api/ajouter");
});






















module.exports = router;