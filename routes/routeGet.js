const express = require('express');
const router = express.Router();
const UserPosts = require('../models/post');
const mongoose = require('mongoose');
// var ObjectId = require("mongojs").ObjectId;
require('mongoose').Schema.ObjectId;
// var id = new mongoose.Types.ObjectId(stringId);

router.get('/dataGets', (req, res) => {
    UserPosts.find({}, (err, post) => {
        if(err)throw err;
        else {
        res.json({posts:post})
        }
    })
});

router.get('/:subreddId', (req,res) => {
    UserPosts.find({community: req.params.subreddId}, (err, result) => {
        res.json(result);
    });
});

router.get('/comments/:postId', (req, res) => {
    var id = req.params.postId;
    UserPosts.findById(id, (err, post) => {
        if(err)throw(err);
        res.json({post})
    })
})


module.exports = router;
