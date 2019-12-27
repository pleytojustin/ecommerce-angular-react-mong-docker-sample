const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    productName: String,
    imageUrl: String,
    price: Number,
    description: String,
    variants: [String],
    quantity: Number
}, {
    timestamps: true
});



module.exports = mongoose.model('Product', ProductSchema);