const Post = require('../models/postModel');

exports.listAllPosts = async (req, res) => {

    // ES6 asyn/await
    try {
        const posts = await Post.find({});
        res.status(200);
        res.json(posts);

    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur." })
    }
}

exports.createAPost = async (req, res) => {
    const newPost = new Post(req.body);

    try {
        const post = await newPost.save();
        res.status(201);
        res.json(post);

    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur." })
    }

}
exports.getAPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.post_id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
exports.updateAPost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.post_id, req.body, { new: true });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteAPost = async (req, res) => {
    try {
        await Post.findByIdAndRemove(req.params.post_id);
        res.status(200).json({ message: 'Post deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};