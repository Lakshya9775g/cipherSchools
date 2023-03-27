import User from '../models/User.js';

export const getUser = async (req, res) => {
    //TODO
    try{
        const { userId } = req.params;
        const user = await User.findById(userId);
        res.status(200).json(user);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

export const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const { firstName, lastName, phone } = req.body;
        const user = await User.findByIdAndUpdate(userId, { firstName, lastName, phone }, { new: true }); // Updating user details in DB
        res.status(200).json({ message: 'User profile updated successfully', user });
    } catch (err) {
        res.status(400).json({ message: 'Error updating user profile', error: err.message });
    }
}