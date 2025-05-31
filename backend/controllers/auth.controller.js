const User = require("../models/user.model")
const bcryptjs = require("bcryptjs"); //used to encrypt the password when storing in database for password protection
const errorHandler = require("../utils/error");

const signup = (async (req, res, next) => {
    const {username, email, password} = req.body;//extract and save stuff into database
    if (!username || !email || !password || username==="" || email==="" || password===""){
        next(errorHandler(400, "All fields required"));
    }

    const encryptedPassword = bcryptjs.hashSync(password, 10)

    const newUser = new User({
        username,
        email,
        password : encryptedPassword
    })

    try {
        await newUser.save();
        res.json({message : "Signup Done!"})
    } catch (error){
        next(error)
    }
})
const login = (async (req, res, next) => {
    const {username, password} = req.body;
    const user = await User.findOne({username})
    if(!user){
        next(errorHandler(401, "Invalid User"))
    }
    const validPassword = await bcryptjs.compareSync(password, user.password);
    if(!validPassword){
        next(errorHandler(401, "Invalid Password"))
    }
    res.status(200).json({message:"Login Successful!"})
})

module.exports = {login, signup}