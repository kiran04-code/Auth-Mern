import user from "../model/user.js";
import bcrypt from "bcryptjs";

export const homePage = (req, res) => {
  res.json({
    message: "Hello World",
  });
};

export const updatetheuserdata = async (req, res, next) => {
  const userid = req.params.id;

  // Optional: Prevent users from updating other users
  // if (req.user._id !== userid) {
  //   return res.status(401).json("You can only update your own account");
  // }

  try {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }

    const updatedUser = await user.findByIdAndUpdate(
      userid,
      {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deltete = async (req, res, next) => {
  try {
    const userid = req.params.id;
    await user.findByIdAndDelete(userid);
    res.status(200).json("User has been deleted!");
  } catch (error) {
    next(error);
  }
};
