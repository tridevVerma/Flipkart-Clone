import User from "../models/newUserSchema.js";

const registerUser = async (req, res) => {
  try {
    const exist = await User.findOne({ mobileno: req.body.mobileno });
    if (exist) {
      console.log("Mobile number already exist");
      return res.status(401).json("Mobile number already exist");
    }
    const newUser = await new User(req.body);
    const result = await newUser.save();
    res.status(201).json("User is successfully registered");
    console.log(result);
  } catch (error) {
    res.status(409).send(error);
    console.log(error);
  }
};

export default registerUser;
