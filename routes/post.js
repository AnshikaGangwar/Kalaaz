
const router = require('express').Router();
const art = require('../model/art');
const User = require('../model/user');
const multer = require('multer')




const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './media/posts');
     },
    filename: function (req, file, cb) {
        cb(null , Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('file'), async(req,res) => {
    console.log(req.file);
    const newpost = new art({
        title: req.body.title,
        description: req.body.description,
        artist: req.body.artist,
        likescount: "0",
        filename: req.file.filename,
        route: "post",
        visibility: req.body.visibility,
    })

    const savedPost = await newpost.save();
    

    const user = await User.findByIdAndUpdate({_id: req.body.artist}, 
            {
                $push:{ art:savedPost }
            })
      res.status(200).send("Success");      
       
})

module.exports = router;