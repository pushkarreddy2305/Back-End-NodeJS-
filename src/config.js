const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  username: process.env.uname,
  password: process.env.pwd
};
