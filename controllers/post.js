const Post = require('../models/post')

exports.getPosts = (req, res)=>{
    // res.json({
    //     posts:[
    //         {title: 'First post'},
    //         {title: 'First post'}
    //     ]
    // });
    const posts = Post.find().select("title body")
    .then((posts) => {
        res.json({
            posts
        });
    })
    .catch(err => console.log(err));
};

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    // console.log("Creating Post : ", req.body)

    // post.save((err, result)=>{
    //     res.status(200).json({
    //         post:result
    //     })
    // });

    post.save()
    .then(result => {
        res.status(200).json({
            post:result
        });
    });
};