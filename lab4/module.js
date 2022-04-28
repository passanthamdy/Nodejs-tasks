const fs = require("fs");
var express = require("express");
var app = express();

const signupValidation = (userData) => {
    if (fs.readFileSync('users.json').length === 0){
        let users=[];
        users.push(userData);
        let data = JSON.stringify(users);
        fs.writeFileSync("users.json", data);
        return {
          success: true,
          message: "Your account is created successfully",
        };
  

}else{
    let filedata = fs.readFileSync("users.json");
  
  let users = JSON.parse(filedata);

    if (users.find((user) => user.email === userData.email)){
      return {
        success: false,
        message: "email already exists",
      };
    } else {
      users.push(userData);
      let data = JSON.stringify(users);
      fs.writeFileSync("users.json", data);
      return {
        success: true,
        message: "Your account is created successfully",
      };
    }
}

 
};

const loginValidation = (userData) => {
  let filedata = fs.readFileSync("users.json");
  let users = JSON.parse(filedata);
  if (users.find((user) => user.email === userData.email)) {
    if (users.find((user) => user.password === userData.password)) {
      return {
        success: true,
        message: "Logged in successfully",
      };
    } else {
      return {
        success: false,
        message: "Failed to login",
      };
    }
  } else {
    return {
      success: false,
      message: "Email not Found",
    };
  }
};
module.exports = {
  signupValidation: signupValidation,
  loginValidation: loginValidation,
};
