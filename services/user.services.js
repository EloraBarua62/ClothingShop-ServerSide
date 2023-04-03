const User = require('../models/User')

// create user
exports.signupService = async(userInfo) => {
  console.log(userInfo)
  const user = await User.create(userInfo)
  return user;
};



// authenticate user
exports.loginService = async (email) => {
  console.log(email);
  const user = await User.findOne({email});
  console.log(user)
  return user;
}; 


// update info
exports.updateUserService = async(emailData , userInfo) => {
  
  const email = { email:emailData};
  console.log(email);
  console.log(userInfo);
  const updateDoc = {
    $set: userInfo
  };
  const options = {upsert: true};
  const result = await User.updateOne({email:emailData}, updateDoc);
  return result;
}
