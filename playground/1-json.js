const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
var data = JSON.parse(dataJSON);

user.name = "Harald";
user.age = "99";

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
