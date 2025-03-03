//session tickets to be produced(uuid)
const {v4 : uuidv4} = require("uuid")
const {setUser} = require('../service/auth')
const user = require("../models/user");

async function handleUserSignUp(req,res){
    const {name, email, password} = req.body;
    await user.create({
        name,
        email,
        password,
    });
return res.render('/'); 
}

//user validation not working ----------------------------------------------check-------------------------------------------------------
//validate user(log-in fetch through db)
async function handleUserLogIn(req,res){
    const {email, password} = req.body;
    const applicant = await user.findOne({
        email,
        password,
    })
    if(!applicant) 
        {
            return res.render("user/login",
        {
            error : "Invalid Email or Password"
        }
    )}
    // const sessionId = uuidv4();
    // setUser(sessionId, user);
    // res.cookie('uid',sessionId);
    return res.redirect('/');
}
module.exports = 
{
    handleUserSignUp,
    handleUserLogIn,
};