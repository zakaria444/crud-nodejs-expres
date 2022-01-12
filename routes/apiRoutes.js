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

router.get("/ajouter",async(req,res)=>{
    const depart= await db.departement.findAll()

  res.render('departement.ejs',{
    allDep: depart,

  })
});

//get singel user by id 
router.get("/index/:id", async (req,res)=>{
    const userbyid= await db.user.findOne({ where:{id: req.params.id},})
    const depid= await db.departement.findOne({ where:{id: userbyid.departementId},})

    // res.json(userbyid.departementId)
    res.render('edit.ejs',{
        userid:userbyid,
        Dep :depid,
    }) ;
   
});

router.get("/editdep/:id", async (req,res)=>{
    const depid= await db.departement.findOne({ where:{id: req.params.id},})

    // res.json(userbyid.departementId)
    res.render('editdep.ejs',{
        Dep :depid,
    }) ;
   
});


router.get("/delete/:id", async (req,res)=>{
    const userbyid= await db.user.destroy({ where:{id: req.params.id},})

    // res.json(userbyid.departementId)
    res.redirect("/api/index");

});

router.get("/deletee/:id", async (req,res)=>{
    const userbyid= await db.departement.destroy({ where:{id: req.params.id},})

    // res.json(userbyid.departementId)
    res.redirect("/api/ajouter");

});




router.post("/edit/:id", async (req,res)=>{
    console.log("hello");
    const userbyid= await db.user.findOne({ where:{id: req.params.id}})
    const userbyidi= await userbyid.update({ 
         user: req.body.username ,
         email: req.body.email ,
         password: req.body.password ,


    
    
    })
 
    res.redirect("/api/index");
   
});


router.post("/editdep/:id", async (req,res)=>{
    console.log("hello");
    const userbyid= await db.departement.findOne({ where:{id: req.params.id}})
    const userbyidi= await userbyid.update({ 
         user: req.body.name ,
         description: req.body.description ,
 
    })
 
    res.redirect("/api/ajouter");
   
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