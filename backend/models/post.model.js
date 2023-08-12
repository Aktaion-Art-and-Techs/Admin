const mongoose = require('mongoose');

const reqStr = { type: mongoose.Schema.Types.String, required: true };

const postSchema = mongoose.Schema({
    titre: reqStr,
    description: reqStr,
    publishedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);
