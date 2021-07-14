import User from "../models/newUserSchema.js";

const registerUser = async (req, res) => {
  try {
    let mobileExist, emailExist;
    if (Number(req.body.emailORPhone))
      mobileExist = await User.findOne({
        mobileno: Number(req.body.emailORPhone),
      });
    else emailExist = await User.findOne({ email: req.body.emailORPhone });

    if (mobileExist || emailExist) {
      console.log("User exists");
      return res.status(401).json("User already exists");
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
