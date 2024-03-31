//import Router
const express=require("express");
const router= express.Router();
//Import controller
// const dummylinkk= require("../controllers")
// router.get("/",dummylinkk)
const {createComment}=require("../controllers/commentController.js")
const {createPost}=require("../controllers/postController.js")
const  getAllPost= require("../controllers/getPostController.js");
const createlike = require("../controllers/likeController.js");
const createUnlike = require("../controllers/unlikeController.js");
//Mapping Creation
router.post("/comment/create",createComment);
router.post("/post/create",createPost);
router.get("/post/get",getAllPost);
router.post("/like/create",createlike)
router.post("/like/unlike",createUnlike)
//export module
module.exports= router;