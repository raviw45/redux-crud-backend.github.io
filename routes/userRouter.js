const User = require('../models/User');

const router=require('express').Router();


router.get("/",async(req,res)=>{
      const result=await User.findAll();
      res.json(result);
});

router.get("/:id",async(req,res)=>{
    const id=req.params.id;
      const result=await User.findAll({
        where:{
            id:id
        }
      });
      res.json(result);
});



router.post("/",async(req,res)=>{
    const body=req.body;
    const result=await User.create(body);
    res.json(result);
});



router.put("/:id",async(req,res)=>{
    const id=req.params.id;
    const body=req.body;
    const updatedObject={
        name:body.name,
        email:body.email,
        phone:body.phone,
        country:body.country
    };
    const result=await User.update(updatedObject,{
        where:{
            id:id
        }
    });
    res.json(result);
});



router.delete("/:id",async(req,res)=>{
    const id=req.params.id;
    const result=await User.destroy({
        where:{
            id:id
        }
    });
    res.json(result);
});


module.exports=router;