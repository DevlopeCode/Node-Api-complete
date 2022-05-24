const express = require("express");
const routers = express.Router();
const Post = require("../models/Post");

//get data from server
routers.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

//send Data To the server
routers.post("/my", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savePost = await post.save();
    res.json(savePost);
  } catch (error) {
    res.json(error);
  }
});

//find data
routers.get("/:postId", async (req, res) => {
  const finded = await Post.findById(req.params.postId);
  res.json(finded);
  res.end();
});

//delete api
routers.delete("/:postId", async (req, res) => {
  try {
    const removedData = await Post.remove({ _id: req.params.postId });
    res.json(removedData);
  } catch (error) {
    res.json({
      messages: error,
    });
  }
});

//Update Data

routers.patch("/:postId", async (req, res) => {
  try {
    const update = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
        },
      }
    );
    res.json(update);
  } catch (error) {
    res.json({ masses: error });
  }
});

module.exports = routers;
