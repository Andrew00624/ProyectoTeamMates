const mongoose = require('mongoose')
const Schema = mongoose.Schema
const plm = require('passport-local-mongoose')


const friendlyGameSchema = new Schema({
  title:String,
  description:String,
  rules:String,
  date:String,
  time:String,
  comments:String,
  participants:[{
  }]
},{
  timestamps:{
    createdAt:"created_at",
    updatedAt:"updated_at"
  }
})

friendlyGameSchema.plugin(plm, {titleField: 'title'})
module.exports = mongoose.model('FriendlyGame', friendlyGameSchema)