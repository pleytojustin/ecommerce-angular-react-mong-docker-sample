var cors = require('cors')

module.exports = (app) => {
    const carts = require('../controllers/cart.controllers.js');
    app.use(cors());


    // Create a new Product
    app.post('/cart', carts.create);

    // Retrieve all products
    app.get('/cart', carts.findAll);

    // Retrieve a single Product with productId
    app.get('/cart/:productId', carts.findOne);

    // Update a Product with productId
    app.put('/cart/:carttId', carts.update);

    // Delete a Product with productId
    app.delete('/cart/:cartId', carts.delete);

}