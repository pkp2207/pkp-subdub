import User from '../models/user.model.js'

export  const getUsers = async (req, res,next) => {
    try {
        const users = await User.find();
        res.status(200).json({success:true, data:users});
    } catch (e) {
        next(e);
    }
}

export const getUser = async (req, res,next) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if(!user){
            const err = new Error('User not found');
            err.status = 404;
            throw err;
        }
        res.status(200).json({success:true, data:user});
    } catch (e) {
        next(e);
    }
}