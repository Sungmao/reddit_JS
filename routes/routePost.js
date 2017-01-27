const express = require('express');
const router = express.Router();
const UserPosts = require('../models/post');
const mongoose = require( 'mongoose' );

router.post('/dataPosts', (req, res) => {
    UserPosts.create({
        title: req.body.title,
        content: req.body.content,
        comment: ""
    }).then(() => {
        res.json({success:true});
    }).catch((err) => {
        if(err) throw err;
    })
})

router.post('/comments/:id', (req,res) => {
    const id= req.params.id;
    const ObjectId = mongoose.mongo.ObjectID;
     UserPosts.findById(ObjectId(id), (err, post) => {

         if(err) {
            console.log(err);
             return res.json({
                 title: `No post was found by id: ${id}`,
                 error: err
             })
         }
         else {
             post.comments.push(req.body.value);
             console.log(post)
             post.save(function (err, result) {
                 if(err) {
                     return res.status(500).json({
                         title: 'An error occurred when uploading a comment',
                         error: err
                     })
                 }

                 res.json(result);
             });
         }
     });

})





module.exports = router;