const mongoose = require("mongoose");
const user = require("./models/user");

async function urlMongoConnection(url,user){
    return mongoose.connect(url,user);
};
module.exports = {
    urlMongoConnection
}