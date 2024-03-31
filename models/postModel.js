//Importing Mongoose
const mongoose= require("mongoose");
//route Handler
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    // user:{
    //     type:String,
    //     required:true,
    // },
    like:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like"
    }],
    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }]

})
//Export Model
module.exports= mongoose.model("Post",postSchema)