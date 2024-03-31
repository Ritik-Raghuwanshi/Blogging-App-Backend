//Importing pos model
const PostModel= require("../models/postModel.js");
//create function 
const createPost = async(req,res)=>{
    try {
        //data Liya Model SE
         const{ title,body}=req.body;
        //Object Create Kiya
         const post = new PostModel({
            title,
            body,
         });
         
         const savedPost= await post.save();
         res.json({
            post:savedPost,
         })
    } catch (error) {
        return  res.status(500).json({
            errr:"Error While Creating Post"
        })
    }
};
module.exports={createPost}


