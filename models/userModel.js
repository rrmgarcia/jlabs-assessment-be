import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import bcrypt from 'bcrypt'

const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const users = await User.findAll();
console.log(users);

export default User;
