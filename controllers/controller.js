const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

module.exports = {
    newUser: async (req, res) => {
        try {
            const userObj = new User({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password),
                userName: req.body.userName,
            });
            const successSave = await userObj.save();
            res.json({
                email: successSave.email,
                userName: successSave.userName,
                _id: successSave._id,
            });
        } catch (err) {
            res.send(err)
        }
    },
    getOne: async (req, res) => {
        try {
            const oneUser = await User.findOne({ _id: req.params.id });
            res.json(oneUser);
        } catch (err) {
            res.send(err);
        }
    },
    getAll: async (req, res) => {
        try {
            const oneUser = await User.find({});
            res.json(oneUser);
        } catch (err) {
            res.send(err);
        }
    },
}