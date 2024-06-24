const Post = require('../models/Postmodel');


const addPost = async (req, res) => {
  try {
      const { title, content, createdBy, city } = req.body;

      const newPost = new Post({
          title,
          content,
          city,
          createdBy
      });

      const savedPost = await newPost.save();
      console.log("this is savedPost",savedPost)
      res.status(201).json({ message: 'Post created successfully', post: savedPost });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};


const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getPost = async (req, res) => {
  const { city, keyword } = req.query;
  console.log("this is city", city, keyword);

  try {
    const posts = await Post.find({
      $or: [
        { title: { $regex: keyword ? String(keyword) : '', $options: 'i' } },
        { content: { $regex: keyword ? String(keyword) : '', $options: 'i' } },
        { city: { $regex: city ? String(city) : '', $options: 'i' } },
      ],
    });

    res.status(200).json({ message: 'Posts retrieved successfully', posts });
  } catch (error) {
    res.status(500).json({ message: 'Error searching posts', error });
  }
};


module.exports = {
    addPost,
    getPost,
    getAllPost
};
