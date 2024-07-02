import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Products', productSchema);
export default Product;