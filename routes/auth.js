const router = require('express').Router();
const user = require('../model/user')
const bcrypt = require('bcryptjs')

router.post('/register', async (req, res) => {
   const data = await user.findOne({email: req.body.email});  
   if(data) return res.send("user already exists");
    const salt = await bcrypt.genSalt(10);
    const uid= await bcrypt.hash(req.body.email, salt);
    const hashedpswd = await bcrypt.hash(req.body.password ,salt);
    const newuser = new user({
       name: req.body.name,
       dname: req.body.dname,
       email: req.body.email,
       password: hashedpswd,
       resetPassword:"",
       art: [],
       profile:"",
       kind: { 
           provider:"Kalaaz",
           uid: uid
       },
       route: "profile",
       followers: [],
       following: [],
       likedart: []

   }) 
  
   try{
       const saveduser = await newuser.save();
       return res.send(saveduser);
   }catch(err){
       return res.status(400).send(err);
   } 
})

router.get('/check/dname/:dname', async (req, res) =>{
    const data =  await user.findOne({dname: req.params.dname});
    if(data){
        res.send("Dname found");
    }
    else
       res.status(200).send("Dname not found");
})
router.post('/login', async (req, res) => {
    const gotuser = await user.findOne({email: req.body.email});
    if(!gotuser)
    return res.status(400).send("email not found");
    const pswd = await bcrypt.compare(req.body.password, gotuser.password);
    if(!pswd)
    return res.status(400).send("invalid password");

    return res.status(200).send(gotuser);
})

module.exports= router;

