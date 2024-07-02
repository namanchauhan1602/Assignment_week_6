import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@restapp.uomykxa.mongodb.net/?retryWrites=true&w=majority&appName=restApp');
        console.log('connected to database');
    } catch (err) {
        console.log(err);
    }
}

export default dbConnect;