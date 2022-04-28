var express = require("express");
var app = express();
var module = require("./module");
app.use(express.json());

app.use("/assets", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use("/", function (req, res, next) {
  console.log("Request Url:" + req.url);
  next();
});


app.get("/", function (req, res) {
  res.render("index");
});
app.get("/profile", function (req, res) {
  res.render("profile");
});
app.post("/signup",function (req, res) {
  let state = module.signupValidation(req.body);
  if (state.success) {
    res.statusCode = 200;
  } else {
    res.statusCode = 400;
  }

  res.send(state);
});
app.post('/login', function(req, res) {
    let state = module.loginValidation(req.body);
    if(state.success)
        res.render('profile');
    else {
        res.statusCode = 400;
        res.send(result);
    }
});
console.log("loading..");
app.listen(3000);
