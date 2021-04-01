const router = require('express').Router();
const art = require('../model/art');
const User = require('../model/user');

router.put('/like', async (req, res) => {
    const data = await art.findByIdAndUpdate(req.body.post_id, { 
        $push: {likes: req.body._id}
    })
    const data_user = await User.findByIdAndUpdate(req.body._id, { 
        $push: {likedart: req.body.post_id}
    })

    return res.send("liked");
})

router.put('/unlike', async (req, res) => {
    const data = await art.findByIdAndUpdate(req.body.post_id, { 
        $pull: {likes: req.body._id}
    })
    const data_user = await User.findByIdAndUpdate(req.body._id, { 
        $pull: {likedart: req.body.post_id}
    })

    return res.send("Unliked");
})

router.get('/art', async (req, res) => {
    const user = await User.findById(req.body._id)
    if(user && user.likedart.includes(req.body.post_id))
     res.status(200).send("found");
    else
     res.status(200).send("notfound");  
})

module.exports = router;