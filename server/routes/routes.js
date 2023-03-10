const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

router.post("/register", async (req, res) => {
  try {
    const userIsExits = await User.findOne({ email: req.body.email });

    if (userIsExits) {
      return res.status(404).send({
        message: "The user already exists in the system",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const result = await user.save();

    const { password, ...data } = await result.toJSON();

    res.status(200).send(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).send({
      message: "User not found",
    });
  }

  if (!(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).send({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign({ _id: user._id }, "secret");

  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  res.status(200).send({
    message: "success",
    user,
    accessToken: token,
  });
});

router.get("/user", async (req, res) => {
  try {
    const authorizationHeader = req.headers["authorization"];

    if (!authorizationHeader) {
      return res.status(200).send({
        message: "unauthenticated",
        isValid: false,
      });
    }
    // 'Bearer [token]'
    const token = authorizationHeader.split(" ")[1];
    const claims = jwt.verify(token, "secret");

    if (!claims) {
      return res.status(200).send({
        message: "unauthenticated",
        isValid: false,
      });
    }

    const user = await User.findOne({ _id: claims._id });

    const { password, ...data } = await user.toJSON();

    res.status(200).send({ ...data, isValid: true });
  } catch (e) {
    return res.status(401).send({
      message: "Unauthenticated",
      e,
      isValid: false,
    });
  }
});

router.post("/logout", (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });

    res.status(200).send({
      message: "success",
    });
  } catch (error) {
    return res.status(401).send({
      message: error,
    });
  }
});

module.exports = router;
