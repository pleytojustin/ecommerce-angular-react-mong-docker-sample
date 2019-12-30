const Cart = require('../models/cart.models.js');

    // Create and Save a new Product
    exports.create = (req, res) => {

        // Validate request
        console.log(req.body.productName);
        if(!req.body.productName) {
            return res.status(400).send({
                message: "Product productName can not be empty"
            });
        }

        // Create a Product
        const cart = new Cart({
            productName: req.body.productName, 
            imageUrl: req.body.imageUrl,
            price: req.body.price,
            description: req.body.description,
            variants: req.body.variants.Cart,
            quantity: req.body.quantity
        });
        cart.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });

    };

    // Retrieve and return all products from the database.
    exports.findAll = (req, res) => {
        Cart.find()
        .then(cart => {
            res.send(cart);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
    };

    // Find a single product with a productId
    exports.findOne = (req, res) => {

        Cart.findById(req.params.cartId)
        .then(cart => {
            if(!cart) {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.cartId
                });            
            }
            res.send(cart);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.cartId
                });                
            }
            return res.status(500).send({
                message: "Error retrieving product with id " + req.params.cartId
            });
        });

    };


    // Update a product identified by the productId in the request
    exports.update = (req, res) => {
        // Validate Request
        if(!req.body.productName) {
            return res.status(400).send({
                message: "Product content can not be empty"
            });
        }
        
        // Find product and update it with the request body
        Cart.findByIdAndUpdate(req.params.cartId, {
            productName: req.body.productName, 
            imageUrl: req.body.imageUrl,
            price: req.body.price,
            description: req.body.description,
            variants: req.body.variants,
            quantity: req.body.quantity
        }, {new: true})
        .then(cart => {
            if(!cart) {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.cartId
                });
            }
            res.send(cart);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.cartId
                });                
            }
            return res.status(500).send({
                message: "Error updating product with id " + req.params.cartId
            });
        });

    };

    //Delete a product with the specified productId in the request
    exports.delete = (req, res) => {
        Cart.findByIdAndRemove(req.params.cartId)
        .then(cart => {
            if(!cart) {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.cartId
                });
            }
            res.send({message: "Product deleted successfully!"});
        }).catch(err => {
            if(err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.cartId
                });                
            }
            return res.status(500).send({
                message: "Could not delete product with id " + req.params.cartId
            });
        });
    };


