const express = require('express');
const app= express();
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('bodyParser');
const mongoose = require('mongoose');


//Port
const PORT = 6972;

//.env file
dotenv.config();


//Middlewaress
app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('client/build'));
app.use(express.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.get('*', (req,res) =>{
      res.sendFile(path.join(__dirname+'/client/build/index.html'));
    });
    
//connect to DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Database is connected!"));
  
    
app.listen(PORT, function() {
    console.log(`App running on port ${PORT}`);
});    