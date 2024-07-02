import express from "express";
import dbConnect from "./dbConfig/config.js";
import userRoute from "./routes/usersRoute.js"
import productRoute from "./routes/productRoute.js"
const app = express();
const port = 3000;

app.use(express.json());

dbConnect();

app.use('/users', userRoute);
app.use('/products', productRoute);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.listen(3000, () => {
    console.log('Server started at port number 3000..');
});