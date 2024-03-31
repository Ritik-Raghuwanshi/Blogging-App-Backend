//Import Md]odel post and like
const likeModel = require("../models/likeModel.js");
const postModel = require("../models/postModel.js");
const createUnlike = async (req, res) => {
  try {
    //find and Delete collection me se
    //find id and delete it froom like collection
    const { post, like } = req.body;
    const deletedLike = await likeModel.findOneAndDelete({
      post: post,
      _id: like,
    }); // Iska matlab yeh h ki like model me se bo find karo jisme post or id dono available h or like ki id unique h
    if (!deletedLike) {
      return res.status(404).json({ error: "Like not found" });
    }
    //Update the post
    const updatedPost = await postModel.findByIdAndUpdate(
      post,
      { $pull: { like: deletedLike._id } },
      { new: true }
    );
    res.json({
      post: updatedPost,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while Unliking the Post",
    });
  }
};
module.exports = createUnlike;
//Reverse Case m  pehle data lenge
//Fir id find karenge and Delete karenge like mese
//fir bo deleted id ki id ko post me se delete karenge
