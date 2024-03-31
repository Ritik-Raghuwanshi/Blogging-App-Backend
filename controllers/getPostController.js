//Import Post MOdel
const postModel=require("../models/postModel.js")
const getAllPost=async(req,res)=>{
    try {
        const posts= await (postModel.find().populate("like").populate("comment").exec());
        res.json({
            posts,
        })
    } catch (error) {
        return res.status(500).json({
            error:"Error while Fetching Post"
        })
        
    }
};
module.exports= getAllPost