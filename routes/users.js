const express =require('express');
const router = express.Router();
const User = require('../models/user');
const passport =require('passport');
const jwt =  require('jsonwebtoken');

//Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });
  User.addUser(newUser, (err, user) => {
    if(err){

      res.json({success: false, msg:'Failed to register user. '+err})
    } else {
      res.json({success: true, msg:'User registered successfully'})
    }
  })
});

//Authentication
router.post('/authentication', (req, res, next) => {
  res.send('AUTHENTICATION');
});
//profile
router.get('/profile', (req, res, next) =>{
  res.send('PROFILE');
});
//Validate
router.get('/validate', (req, res, next) =>{
  res.send('VALIDATION');
})
module.exports = router;
