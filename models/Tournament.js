const mongoose = require('mongoose')
const Schema = mongoose.Schema
const plm = require('passport-local-mongoose')


const tournamentSchema = new Schema({
  title:String,
  photoURL:String,
  description:String,
  rules:String,
  prize:String,
  schedule:String,
  comments:String,
  participants:[{
  }]
},{
  timestamps:{
    createdAt:"created_at",
    updatedAt:"updated_at"
  }
})

module.exports = mongoose.model('Tournament', tournamentSchema)