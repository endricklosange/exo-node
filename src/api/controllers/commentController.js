const Comment = require('../models/commentModel ');

exports.listAllComments = async (req, res) => {
    try {
        const comments = await Comment.find({ post_id: req.params.post_id });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

exports.createAComment = async (req, res) => {
    const newComment = new Comment({
        name: req.body.name,
        message: req.body.message,
        post_id: req.params.post_id
    });
    try {
        const comment = await newComment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

exports.getAComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.comment_id);
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateAComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.comment_id, req.body, { new: true });
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteAComment = async (req, res) => {
    try {
        await Comment.findByIdAndRemove(req.params.comment_id);
        res.status(200).json({ message: 'Comment deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
