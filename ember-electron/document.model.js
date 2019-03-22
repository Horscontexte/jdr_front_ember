const mongoose = require('mongoose');

const DocumentSchema = mongoose.Schema({
    title: String,
    imgurl: String,
    description: String,
    found: String,
    publish: Boolean,
}, {
    timestamps: true
});

module.exports = mongoose.model('Documents', DocumentSchema);
