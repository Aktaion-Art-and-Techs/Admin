const Post = require('../models/post.model');

// Créer une nouvelle publication
const createPost = async (req, res) => {
    try {
        const { titre, description } = req.body;
        const newPost = new Post({ titre, description });
        await newPost.save();
        res.status(201).json({ error: false, data: newPost });
    } catch (error) {
        res.status(500).json({ error: true, msg: error.message });
    }
};

// Obtenir la liste des publications
const listPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({ error: false, data: posts });
    } catch (error) {
        res.status(500).json({ error: true, msg: error.message });
    }
};

// Modifier une publication par son ID
const updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedPost) {
            return res.status(404).json({ error: true, message: 'Publication introuvable' });
        }
        res.status(200).json({ error: false, data: updatedPost });
    } catch (error) {
        res.status(500).json({ error: true, msg: error.message });
    }
};

// Supprimer une publication par son ID
const deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ error: true, message: 'Publication introuvable' });
        }
        res.status(200).json({ error: false, message: 'Publication supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ error: true, msg: error.message });
    }
};

module.exports = { createPost, listPosts, updatePost, deletePost };
