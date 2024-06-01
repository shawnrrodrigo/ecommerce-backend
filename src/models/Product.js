const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    sku:{
        type: String,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;