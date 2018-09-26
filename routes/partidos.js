const router = require('express').Router()
const Tournament = require('../models/Tournament')
const FriendlyGame = require('../models/FriendlyGame')
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
    .then(user=>{
      res.redirect('/partidos/juegos')
    })
  }).catch(error => next(error))
})

//Nuevo Amistoso 

router.get('/amistosoNew',(req, res, next)=>{
  res.render('partidos/amistosoNew')
})

router.post('/amistosoNew', (req, res, next) => {
  req.body.owner=req.user._id
  FriendlyGame.create(req.body)
  .then(friendly => {
    User.findByIdAndUpdate(req.user._id,{$push:{friendly:friendly._id}})
    .then(user=>{
      res.redirect('/partidos/juegos')
    })
  }) .catch(error => next(error))
})

// Lista de juegos 
router.get('/juegos',(req, res, next)=>{
  Tournament.find({})
    .then(tournament => {
      res.render('partidos/juegos', {tournament})
    }) .catch(error => next(error))
})

// Lista de juegos 
router.get('/juegos',(req, res, next)=>{
  FriendlyGame.find({})
  .then(friendly => {
    res.render('partidos/juegos', {friendly})
  }) .catch(error => next(error))
})








module.exports = router