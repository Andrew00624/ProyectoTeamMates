const router = require('express').Router()
const Tournament = require('../models/Tournament')
const passport = require('../helpers/passport')
const User = require('../models/User')

// Nuevo torneo 

router.get('/torneoNew',(req, res, next)=>{
  res.render('partidos/torneoNew')
})

router.post('/torneoNew', (req, res, next) => {
  req.body.owner=req.user._id
  Tournament.create(req.body)
  .then(tournament => {
    User.findByIdAndUpdate(req.user._id,{$push:{tournament:tournament._id}})
    .then(user=>console.log(user))
    res.redirect('/juegosList')
  })
  .catch(error => next(error))
})


// Nuevo Amistoso 

router.get('/amistosoNew',(req, res, next)=>{
  res.render('partidos/amistosoNew')
})

router.post('/amistosoNew', (req, res, next) => {
  req.body.owner=req.user._id
  Tournament.create(req.body)
  .then(tournament => {
    User.findByIdAndUpdate(req.user._id,{$push:{tournament:tournament._id}})
    .then(user=>console.log(user))
    res.redirect('/juegosList')
  })
  .catch(error => next(error))
})





module.exports = router