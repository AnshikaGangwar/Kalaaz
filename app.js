const express = require('express');
const app= express();
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./model/user');
const auth = require('./routes/auth');



//Port
const PORT = 2727;

//.env file
dotenv.config();


//Middlewaress
app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('client/build'));
app.use(express.json());
app.use('/api/auth',auth);


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
// app.get('*', (req,res) =>{
//       res.sendFile(path.join(__dirname+'/client/build/index.html'));
//     })
    
//connect to DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Database is connected!"));
  
app.get('/api/getuser/:id', async(req,res)=>{
  console.log("flag")
  const user = await User.findById(req.params.id);
  console.log(user)
  if(!user)
   return res.status(404).send("user not found"); 
   res.status(200).send(user);
})
app.get('/api/getuser/post/:id', async (req,res)=>{
  const user = await User.findById(req.params.id);
  if(!user)
   return res.status(404).send("user not found"); 
   res.status(200).send(user.art);
});
app.get('/media/profile/:filename', async(res,req) =>{
  res.sendFile(path.join(__dirname + '/media/profile' + req.params.filename))
})

app.listen(PORT, function() {
    console.log(`App running on port ${PORT}`);
});    