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
    proce: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Products', productSchema);
export default Product;