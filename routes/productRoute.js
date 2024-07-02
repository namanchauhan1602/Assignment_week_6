import express from "express";
const router = express.Router();
import Product from '../DataModels/productModel.js'

router.get('/getProduct', async (req, res) => {
    let products = await Product.find();
    if (products.length != 0) {
        res.send(products);
    } else {
        res.send("no product is added");
    }
});

router.get('/getProduct/:productId', async (req, res) => {
    let product = await Product.findById(req.params.productId);
    if (product) {
        res.send(product);
    } else {
        res.send("Product not found");
    }
});

router.post('/addProduct', async (req, res) => {
    let details = Product(req.body);
    try {
        await Product.create(details);
        res.send("product added");
    } catch (err) {
        res.send("product could not be added");
    }
});

router.put('/updateProduct/:productId', async (req, res) => {
    let product = Product.findOne({ _id: req.params.productId });
    if (product) {
        res.send("Product not found");
    } else {
        await Product.findOneAndUpdate({ _id: req.params.productId }, {
            productName: req.body.productName,
            category: req.body.category,
            size: req.body.size,
            color: req.body.color,
            price: req.body.price
        });
        res.send("product details updated");
    }
});

router.delete('/removeProduct/:productId', async (req, res) => {
    let product = Product.findOne({ _id: req.params.productId });
    if (product) {
        await Product.findOneAndDelete({ productId: req.params.productId });
        res.send("product removed");
    } else {
        res.send("product not found");
    }
});

export default router;