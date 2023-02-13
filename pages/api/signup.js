import connect from "./utils/db";
import User from "./utils/userschema";
import crypto from "crypto";

connect();

export default async function handler(req, res) {
  try {
    const name = req.body.name;
    const role = req.body.role;

    if (!name) {
      return res.status(400).json({ status: "Name is required." });
    }

    const email = `${name.toLowerCase().replace(/\s/g, ".")}@sms.com`;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ status: "User with this email already exists." });
    }

    const password = crypto.randomBytes(10).toString("hex");
    const userData = {
      email,
      name,
      password,
      role
    };

    const user = await User.create(userData);
    res.status(200).json({ name, email, password, role });
  } catch (error) {
    res.status(400).json({ status: "Not able to create a new user.", error });
  }
}
