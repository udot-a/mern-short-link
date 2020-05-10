const {Router} = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {check, validationResult} = require("express-validator");
const User = require("../models/User");
const config = require("config");
const router = Router();

// Registration
router.post(
    "/register",
    [
        check("email", "Incorrect Email!!!").isEmail(),
        check("password", "Minimal password length 6 symbols").isLength({ min: 6 })
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Incorrect registration data!"
            });
        }
        const {email, password} = req.body;

        const candidate = await User.findOne({ email })

        if (candidate) {
            return res.status(400).json({ message: "Such user exists!" })
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({ email, password: hashedPassword });

        await user.save();

        res.status(200).json({ message: "User create" });

    } catch(e) {
        res.status(500).json({message: "Something wrong..."});
    }
});

// Login
router.post("" +
    "/login",
    [
        check("email", "Input correct email!!!").normalizeEmail().isEmail(),
        check("password", "Input password").exists()
    ],
        async (req, res) => {
            try {
                console.log("BODY", req.body)
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    return res.status(400).json({
                        errors: errors.array(),
                        message: "Incorrect login data!"
                    });
                }

                const {email, password} = req.body;

                const user = await User.findOne({ email });

                if (!user) {
                    return res.status(400).json({ message: "User not found!"});
                }

                const isMatch = await bcrypt.compare(password, user.password);

                if (!isMatch) {
                    return res.status(400).json({ message: "Incorrect password. Try again..."});
                }

                const token = jwt.sign(
                    { userId: user.id},
                    config.get("jwtSecret"),
                    { expiresIn: "1h" }
                );

                res.json({token, userId: user.id})

            } catch (e) {
                res.status(500).json({message: "Something wrong..."});
            }
    }
);

module.exports = router;
