//Import Like Model
const likeModel= require("../models/likeModel.js")
const PostModel=require("../models/postModel.js")
const createlike=async(req,res)=>{
    try {
        const{ user,post}= req.body;
        const like = new likeModel({
            user,
            post,
        });
        const savedLike= await like.save()
        const updatedPost= await PostModel.findByIdAndUpdate(post,{$push:{like:savedLike._id}}, {new:true}).populate("like").exec();
        res.json({
            post:updatedPost,
        })
    } catch (error) {
         res.status(500).json({
            error:"Error While Liking the Post"
         })
    }
}

module.exports= createlike
//controllers ke rule
// data lena
//Object Banan
//Object save karan
//json m object show karana