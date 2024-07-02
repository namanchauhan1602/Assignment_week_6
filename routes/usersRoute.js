import express from "express";
import User from "../DataModels/userModel.js"
import e from "express";
const router = express.Router();


router.get('/getUsers', async (req, res) => {
    let users = await User.find();
    if (users) {
        res.send(users);
    } else {
        res.send("no users found");
    }
});

router.get('/getUsers/:userEmail', async (req, res) => {
    let users = await User.findOne({ "email": req.params.userEmail });
    if (users) {
        res.send(users);
    } else {
        res.send("no users found");
    }
});

router.post('/addUser', async (req, res) => {
    let details = User(req.body);
    let user = await User.findOne({ "email": req.body.email });
    if (user) {
        res.send("user already found");
    } else {
        await User.create(details);
        res.send("user created");
    }
});

router.put('/updateUser/:userEmail', async (req, res) => {
    let users = await User.findOne({ "email": req.params.userEmail });
    if (users) {
        await User.findOneAndUpdate({ "email": req.params.userEmail }, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.params.userEmail,
            contact: req.body.contact,
            password: req.body.password
        });
        res.send("user updated");
    } else {
        res.send("user not found");
    }
});

router.delete('/removeUser/:userEmail', async (req, res) => {
    let users = await User.findOne({ "email": req.params.userEmail });
    if (users) {
        await User.findOneAndDelete({ "email": req.params.userEmail });
        res.send("user removed");
    } else {
        res.send("user not found");
    }
});

export default router;
