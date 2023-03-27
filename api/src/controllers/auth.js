import express, { Router } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    //check if exists
    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
    }
    try {
        // Check if user already exists
        const emailId = req.body.email;
        const existingUser = await User.find({ emailId });
        if (!existingUser) {
            return res.status(409).json("Username already exists");
        }
        console.log("reached");
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        data.password = hashedPassword;
        const value = await User.create(data);
        res.status(200).json({
            messege: "Registered Successfully",
            data: value
        });
    } catch (e) {
        res.status(409).json({ messege: `Error: ${e}` });
    }

}
export const login = async (req, res) => {
    try {
        const pass = req.body.password;
        const email = req.body.email;

        // Check if email exists in the database
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // Check if the password matches the one in the database
        const isPasswordMatch = await bcrypt.compare(pass, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // Generate and sign a JWT token
        const token = jwt.sign({ userId: user._id }, "my-secret-key");
        // Return the token in tha

        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json("login Successfully"); //! Modification us Required.

    } catch (e) {
        res.status(409).json({ messege: `Error: ${e}` });
    }

}
  
export const logout = async (req, res) => {
    try {
        res.clearCookie("accessToken", {
            secure: true,
            sameSite: "none"
        }).status(200).json("user has been logged out.");
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
}