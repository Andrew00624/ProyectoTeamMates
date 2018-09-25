const router = require('express').Router()
const Tournament = require('../models/Tournament')
const passport = require('../helpers/passport')


// Nuevo torneo 

router.get('/torneoNew',(req, res, next)=>{
  res.render('partidos/torneoNew')
})

router.post('/torneoNew', (req, res, next) => {
  Tournament.create(req.body,{})
  .then(tournament => {
    User.findbyIdAndUpdate(req.user._id,{$set:req.body},{new:true})
    res.redirect('/listTorneo')
  })
  .catch(error => next(error))
})


module.exports = router