const { get } = require("mongoose");
const sessionToIdMap = new Map();

function setUser(id,user){
sessionToIdMap.set(id,user);
};
function getUser(id){
sessionToIdMap.get(id);
};

module.exports = {
    setUser,
    getUser,
}