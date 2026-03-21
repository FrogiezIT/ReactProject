import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    // Step 1: Read the incoming form data from the frontend request.
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "Please fill all required fields." });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Step 2: Prevent duplicate accounts by checking MongoDB first.
    const existingUser = await User.findOne({ email: normalizedEmail });

    if (existingUser) {
      return res
        .status(409)
        .json({ message: "An account with this email already exists." });
    }

    // Step 3: Hash the password before storing it in the database.
    const hashedPassword = await bcrypt.hash(password, 10);

    // Step 4: Save the user document into MongoDB.
    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword
    });

    // Step 5: Return only safe user fields back to the frontend.
    return res.status(201).json({
      message: "Account created successfully.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error while creating account." });
  }
});

router.post("/login", async (req, res) => {
  try {
    // Step 1: Read the login credentials sent from the frontend form.
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all required fields." });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Step 2: Find the user document by email in MongoDB.
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Step 3: Compare the typed password with the stored hash.
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Step 4: Send the matched user data back to the frontend.
    return res.status(200).json({
      message: "Login successful.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error while logging in." });
  }
});

export default router;
