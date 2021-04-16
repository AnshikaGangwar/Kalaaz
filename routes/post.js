
const router = require('express').Router();
const multer = require('multer')
const art = require('../model/art');
const User = require('../model/user');



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
    const artist = JSON.parse(req.body.artist);
    const newpost = new art({
        title: req.body.title,
        description: req.body.description,
        artist: {id:artist.id,
                 dname:artist.dname,
                 profile:artist.profile
                },
        likes: [],
        filename: req.file.filename,
        route: "post",
        visibility: req.body.visibility,
        date: req.body.date
    })

   
            const savedPost = await newpost.save();
            const user = await User.findByIdAndUpdate({_id:artist.id}, 
                {
                    $push:{ art:savedPost._id }
                })
                            
           return res.status(200).send("posted"); 
       
})

router.get('/', async (req, res) => {
     const artarray = await art.find({});
     res.send(artarray);
});

router.get('/getart/:id', async (req, res) => {
    const artarray = await art.findById(req.params.id);
    if(!artarray)
      res.status(404).send("error");  
    res.send(artarray);
});


module.exports = router;