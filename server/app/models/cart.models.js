const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    productName: String,
    imageUrl: String,
    price: Number,
    description: String,
    variant: String,
    quantity: Number
}, {
    timestamps: true
});



module.exports = mongoose.model('Cart', CartSchema);