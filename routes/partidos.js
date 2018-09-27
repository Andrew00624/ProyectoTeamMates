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
      res.redirect('/partidos/torneos')
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
      res.redirect('/partidos/amistosos')
    })
  }) .catch(error => next(error))
})


// Lista de torneos 
router.get('/torneos',(req, res, next)=>{
  Tournament.find({})
    .then(tournament => {
      res.render('partidos/torneos', {tournament})
    }) .catch(error => next(error))
})

// Lista de Amistosos 
router.get('/amistosos',(req, res, next)=>{
  FriendlyGame.find({})
  .then(friendly => {
    res.render('partidos/amistosos', {friendly})
  }) .catch(error => next(error))
})


// Detail Torneos

router.get("/detalle-torneo/:id",(req,res,next)=>{
  const {id} = req.params
  const {user} = req
  Tournament.findById(id).populate('participants')
  .then(tournament=>{
    res.render("partidos/detalle-torneo",tournament)
  }).catch(e=>next(e))
 })


 // Detail Amistosos

 router.get("/detalle-amistoso/:id",(req,res,next)=>{
  const {id} = req.params
  const {user} = req
  FriendlyGame.findById(id)
  .then(Friendly=>{
    res.render("partidos/detalle-amistoso",Friendly)
  }).catch(e=>next(e))
 })


 // Participantes Torneos

 router.post('/detalle-torneo/:id', (req, res) => {
  const {_id} = req.user
  console.log()
  Tournament.findByIdAndUpdate(req.params.id, {$push:{participants: _id}}, {new:true})
  .then(tournament => {
    console.log(tournament)
      res.redirect('/partidos/torneos')
  }).catch(error => next(error))
   
 })

// Participantes Amistosos

 router.post('/detalle-amistoso/:id', (req, res) => {
  const {_id} = req.user
  console.log()
  FriendlyGame.findByIdAndUpdate(req.params.id, {$push:{participants: _id}}, {new:true})
  .then(friendly => {
    console.log(friendly)
      res.redirect('/partidos/amistosos')
  }).catch(error => next(error))
   
 })


module.exports = router