const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//@desc Register the user
//@route POST /api/users/register
//@access public
const registerUser = async (req, res) => {

    try {

        const { first_name, last_name, email, password } = req.body;
        console.log(first_name, last_name, email, password)

        // Updated validation
        if (!first_name || !last_name || !email || !password) {
            return res.status(400).json({
                message: "All inputs are mandatory"
            });
        }

        const userAvailable = await User.findOne({ email });

        if (userAvailable) {
            return res.status(400).json({
                message: "Email already taken"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            first_name,
            last_name,
            email,
            hashed_password: hashedPassword,
        });

        res.status(201).json({
            _id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


//@desc Login the user
//@route POST /api/users/login
//@access public
const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are mandatory"
            });
        }

        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.hashed_password))) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            {
                user: {
                    first_name: user.first_name,
                    last_name: user.last_name,
                    id: user.id,
                    email: user.email,
                },
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "15m" }
        );

        res.status(200).json({ token });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


//@desc Get the current user
//@route GET /api/users/current
//@access private
const getUser = async (req, res) => {
    res.status(200).json(req.user);
};

module.exports = { registerUser, loginUser, getUser };