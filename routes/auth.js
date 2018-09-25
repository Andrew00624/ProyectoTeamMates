const router = require('express').Router()
const User = require('../models/User')
const passport = require('../helpers/passport')
const sendMail = require ('../helpers/mailer').sendMail


//Sign Up

router.get('/signup',(req, res, next)=>{
  res.render('auth/signup')
})

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
  .then(r=>{
    sendMail(req.body.email,username)
    res.redirect('/login')
  }).catch(error => next(error))
})


//Login

router.get ('/login',(req,res,next)=>{
  res.render('auth/login')
})

router.post('/login',passport.authenticate('local'),(req,res,next)=>{
  res.redirect('/user/profile')
})

module.exports = router












