const fs = require('fs');

const signupValidation = (userData) => {
    let filedata = fs.readFileSync('users.json');
     let users = JSON.parse(filedata);
     if (users.find((user) => user.email === userData.email)) {
         return {
             success: false,
             message: 'email already exists'
         }
     } else {
         users.push(userData);
         let data = JSON.stringify(users)
         fs.writeFileSync('users.json',data);
         return {
             success: true,
             message: 'your account is created successfully'
         }
     }
     
 }
 
 
 const loginValidation = (userData) => {
     let filedata = fs.readFileSync('users.json');
     let users = JSON.parse(filedata);
     if (users.find((user) => user.email === userData.email)) {
         if (users.find((user) => user.password === userData.password)) {
             return {
                 success : true,
                 message:"Logged in successfully"
             }
             }else{
                 return {
                     success : false,
                     message:"Failed to login"
                 }        }
 
 
     }else{
         return {
             success : false,
             message:"Email not Found"
     }
 }
 
 
     
 }
 module.exports ={
     signupValidation : signupValidation,
     loginValidation : loginValidation,

 }