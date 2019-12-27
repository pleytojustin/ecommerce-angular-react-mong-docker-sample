var cors = require('cors')

module.exports = (app) => {
    const products = require('../controllers/product.controller.js');
    app.use(cors());
    
      

    // Create a new Product
    app.post('/products', products.create);

    // Retrieve all products
    app.get('/products', products.findAll);

    // Retrieve a single Product with productId
    app.get('/products/:productId', products.findOne);

    // Update a Product with productId
    app.put('/products/:productId', products.update);

    // Delete a Product with productId
    app.delete('/products/:productId', products.delete);

}