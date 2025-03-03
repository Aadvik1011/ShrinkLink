const { getUser } = require("../service/auth");

async function restrictToLoggedInUserOnly(req, res, next) {
    const userUid = req.cookies?.uid; // Note: req.cookies, not req.cookie, ?-conditional operator
    if (!userUid) {
        return res.render('user/login', {
            error: "You need to be logged in to access this page."
        });
    }
    const user = await getUser(userUid); // Await the getUser function
    if (!user) {
        return res.render('user/login', {
            error: "Invalid Email or Password"
        });
    }
    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedInUserOnly
};
