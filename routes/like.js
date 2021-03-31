const router = require('express').Router();
const art = require('../model/art');
const User = require('../model/user');

router.put('/like', async (req, res) => {
    const data = await art.findByIdAndUpdate(req.body.post_id, { 
        $push: {likes: req.body.uid}
    })

    return res.send("liked");
})

router.put('/unlike', async (req, res) => {
    const data = await art.findByIdAndUpdate(req.body.post_id, { 
        $pull: {likes: req.body.uid}
    })

    return res.send("Unliked");
})

router.get('/', async (req, res) => {
    const data = await art.findById(req.body.post_id)
    if(data && data.likes.includes(req.body.uid))
     res.status(200).send("found");
    else
     res.status(404).send("notfound");  
})

module.exports = router;