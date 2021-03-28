const express = require('express');
const app= express();
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const cookieParser = require('cookie-parser'); 
const cookieSession = require('cookie-session');
const refresh = require('passport-oauth2-refresh');
const sanitize = require('mongo-sanitize');

const User = require('./model/user');
const auth = require('./routes/auth');
const posts = require('./routes/post');

const GoogleStrategy = require("passport-google-oauth20").Strategy;
passport.use(cookieParser());


// passport.use(new GoogleStrategy());

// const keys = require("./config/keys");

//Port
const PORT = 2727;

//.env file
dotenv.config();


//Middlewaress
app.use(cors());

// app.options('*', cors()) // enable pre-flight request for DELETE request



app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json());
app.use('/api/auth',auth);
app.use('/api/post',posts);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

    
//connect to DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Database is connected!"));
  


passport.serializeUser((user, done) => {
  done(null, user);
})
passport.deserializeUser((user, done) => {
  done(null, user);
})

const strategy = new GoogleStrategy(
  {
    clientID: process.env.google_client,
    clientSecret: process.env.google_clientsecret,
    callbackURL: "http://localhost:2727/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {

    const email = sanitize(profile.emails[0].value);
    const userExist = await User.findOne({ email:email });
    
    if (userExist) {
        return done(null,userExist);
    }
    else{
      const salt = await bcrypt.genSalt(10);
  const uid= await bcrypt.hash(email, salt);
  const hashedpswd = await bcrypt.hash(profile.id + profile.displayName ,salt);
  const newuser = new User({
     name: profile.name.givenName,
     dname: profile.displayName,
     email: email,
     password: hashedpswd,
     resetPassword:"",
     art: [],
     profile:  profile._json.picture,
     kind: { 
         provider: profile.provider,
         uid: profile.id
     },
     route: "profile",
     followers: [],
     following: [],
     likedart: []

 }) 
    const savedUser = await newuser.save();
    return done(null, savedUser)
    }
  }
)


passport.use(strategy);
refresh.use(strategy);

app.use(passport.initialize());
app.use(passport.session());

app.get('/google/logout',(req,res)=>{
  req.logout();
  res.send('logged out :)');
  return res.redirect('/login');
})
app.get("/auth/google", passport.authenticate("google", {
  scope: ["profile", "email"]
}));

app.get("/google/callback",passport.authenticate('google' , {failureRedirect : '/login'}),(req,res) =>{
  
  res.cookie("uid",req.user._id.toString());
  res.redirect('/feed');
});




app.get('/api/getuser/:id', async(req,res)=>{
  const user = await User.findById(req.params.id);
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
app.get('/media/profile/:filename', async(req,res) =>{
  res.sendFile(path.join(__dirname + '/media/profile/' + req.params.filename))
})

app.get('/media/post/:filename' , async(req,res) => {
  res.sendFile(path.join(__dirname + '/media/posts/' + req.params.filename))
})

app.use(express.static('client/build'));
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
})

app.listen(PORT, function() {
    console.log(`App running on port ${PORT}`);
});    