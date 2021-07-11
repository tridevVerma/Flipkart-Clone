import User from "../models/newUserSchema.js";

const loginUser = async (req, res) => {
  try {
    let mobileExist, emailExist;
    if (Number(req.body.emailORPhone))
      mobileExist = await User.findOne({
        mobileno: Number(req.body.emailORPhone),
      });
    else emailExist = await User.findOne({ email: req.body.emailORPhone });
    if (mobileExist || emailExist) {
      let userFound;
      if (mobileExist)
        userFound = await User.findOne({
          $and: [{ mobileno: req.body.emailORPhone }, { PWD: req.body.pass }],
        });
      else
        userFound = await User.findOne({
          $and: [{ email: req.body.emailORPhone }, { PWD: req.body.pass }],
        });
      if (userFound) {
        console.log("Successfull login");
        const { _id, PWD, ...userData } = userFound._doc;
        res.status(200).send(userData);
      } else {
        console.log("Wrong Password");
        res.status(403).send("Wrong Password");
      }
    } else {
      res.status(404).send("User not found");
      console.log("User not found");
    }
  } catch (error) {
    res.status(500).send("Internal Error");
    console.log("Internal Error");
  }
};

export default loginUser;
