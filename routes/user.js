const router = require('express').Router()
const User = require('../models/User')
const uploadCloud = require('../helpers/cloudinary')

router.get('/profile', (req, res, next)=>{
  User.findById(req.user._id)
    .then(user=>{
      res.render('user/profile',user)
    }).catch(e=>next(e))
})

router.get('/edit', (req, res, next)=>{
  User.findById(req.user._id)
    .then(user=>{
      res.render('user/edit',user)
    }).catch(e=>next(e))
})

router.post('/edit',  uploadCloud.single('image'), (req, res, next)=>{
  console.log(req.file)
  if(req.file)req.body['photoURL'] = req.file.url
  User.findByIdAndUpdate(req.user._id,{$set:req.body},{new:true})
    .then(user=>{
      res.redirect('/user/profile')
    }).catch(e=>next(e))
})







module.exports = router