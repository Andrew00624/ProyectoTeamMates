const mongoose = require('mongoose')
const Schema = mongoose.Schema
const plm = require('passport-local-mongoose')


const friendlyGameSchema = new Schema({
  title:String,
  description:String,
  owner:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  rules:String,
  date:String,
  time:String,
  location:{
    type:{
      type:String,
      default:'point'
    },
    address:String,
    coordinates:[{
      type:Number
    }]
  },
  comments:String,
  participants:[{
    type:Schema.Types.ObjectId,
    ref:'User'
  }]
},{
  timestamps:{
    createdAt:"created_at",
    updatedAt:"updated_at"
  }
})


module.exports = mongoose.model('FriendlyGame', friendlyGameSchema)