import userModel from "../models/userModel.js";

export const createUser = async (req, res, next) => {
  try {
    //code here
    //const {firstName, email, password, image} = req.body

    const user = new userModel(req.body);
    await user.save();
    res.status(201).json({ details: user });
  } catch (error) {
    res.send(error.stack);
  }
};

export const getUsers = async (req, res) => {
  try {
    //code here
    const users = await userModel.find();
    res.status(200).json({ details: users });
  } catch (error) {
    res.send(error.stack);
  }
};
