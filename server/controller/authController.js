const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerSchema, loginSchema } = require("../validation/authValidation");

exports.register = async (req, res) => {
  try {

    //register validation
    const { error } = registerSchema.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    //checking if the email is already in the db
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist)
      return res.status(400).send("You cannot register, email already exist");

    //checking if the username is already in the db
    const usernameExist = await User.findOne({ username: req.body.username });
    if (usernameExist)
      return res.status(400).send("You cannot register, username already exit");

    //bcrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.login = async (req, res) => {
  try {

    //login validation check
    const { checkUsername,checkPassword  } = req.body;
    const { error } = loginSchema.validate({ checkUsername, checkPassword });
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    //checking if the username is correct
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).json("username or password is wrong");

    //checking if the password is correct
    const pass = await bcrypt.compare(req.body.password, user.password);
    if (!pass) return res.status(400).json("username or password is wrong");

    //access token
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    //get all datas but password
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(400).send(err);
  }
};
