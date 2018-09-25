const mongoose = require('mongoose')
const Schema = mongoose.Schema
const plm = require('passport-local-mongoose')


const friendlyGamesSchema = new Schema({
  title:String,
  description:String,
  rules:String,
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

module.exports = mongoose.model('FriendlyGames', friendlyGamesSchema)