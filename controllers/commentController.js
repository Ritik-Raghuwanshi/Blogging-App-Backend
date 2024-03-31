//Yeh Object Leke Save Karane ki Process h
//Create Karke v Hum Database M Comment Save Kar Sakte h
//Import model//express+mongoose
const Post = require("../models/postModel.js");
const CommentModel = require("../models/commentModel.js");
//writing the Business Logic
const createComment = async (req, res) => {
  try {
    //1.Pehle Data Leke aoo Req.body se
    const { post, user, body } = req.body;
    //2.Data se create object
    const Comment = new CommentModel({//Yaha Name Ekse Nahi Hone Chaiye
      post,
      user, //Yaha Jo Data Chaiye bo Likhenge
      body,
    });
    //Save the comment 
    const savedComment = await Comment.save();
    //Hame ye Comment Post controller me add Karenge taki beh update
    //find post by object and add new comment
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comment: savedComment._id } },
      { new: true }
    )
      .populate("comment")
      .exec();
    //populate("Comment")yeh comment id dene ki Jagha Comment ka Pura Data denga//Populate the comment array with documents
    res.json({ post: updatedPost ,});
  } catch (error) {
    return res.status(500).json({
      error: "Error while Creating Comment",
      
    });
    console.log(error)
  }
};
module.exports = { createComment };
