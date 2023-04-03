// import package, service
const {signupService,loginService , updateUserService} = require("../services/user.services");
const bcrypt = require('bcryptjs');
const { generateToken } = require("../utils/token");


//Create signup
exports.signup = async (req,res) => {
    try{
        const user = await signupService(req.body);
        console.log(user);
          
        res.status(200).json({
            status: "success",
            message: "successfully signed up",
            data: user,
        })
    }
    catch(error){
        res.status(400).json({
            status: "failed to signup",
            error,
        })
    }
}



// Create login
exports.login = async(req , res) => {
    try{
        const {email , password} = req.body;

        if(!email || !password)
        {
            return res.status(401).json({
                status : "fail",
                message : "Please provide all credential"
            });
        }
        
        
        const user = await loginService(email);
        if(user)
        {
            const hashPassword = bcrypt.compareSync(password, user.password);
            if (hashPassword) {


                // Token generate
                const token = generateToken(user);
                const { password: pwd, ...others } = user.toObject();

              return res.status(200).json({
                status: "success",
                message: "successfully login",
                data: { 
                    user: others,
                    token
                 },
              });
            } else {
              return res.status(403).json({
                status: "fail",
                message: "password is incorrect",
              });
            } 
        } 
        else{
        return res.status(403).json({
          status: "fail",
          message: "email is incorrect",
        });  }    
    }
    catch(error){
        res.status(400).json({
            status : "failed to login",
            error,
        })
    }
}


// Update user account info
exports.account_info = async(req,res) => {
    try{
        const email = req.params.email;
        console.log(email)
        const result = await updateUserService(email , req.body);
        res.status(200).json({
            status: "success",
            message: "successfully updated user info",
            result
        })
    }
    catch(error){
        res.status(400).json({
          status: "failed to update user info",
          error,
        });
    }
}


// Present user info
exports.get_accountinfo = async(req , res) => {
    try{
        res.status(200).json({
        status: "success get token",
        data: req?.user.email,
        });
    }
    catch(error){
        res.status(500).json({
          status: " fail",
          error,
        });
    }
}

