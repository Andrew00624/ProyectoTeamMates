const mongoose = require('mongoose')
const Schema = mongoose.Schema
const plm = require('passport-local-mongoose')


const userSchema = new Schema({
  username:{
    type:String,
    unique:true
  },
  email:String,
  password: String,
  position:String,
  photoURL:String,
  rating:[{
    
  }],
  tournament:[{
    type:Schema.Types.ObjectId,
    ref:'Tournament'
  }],
  friendly:[{
    type:Schema.Types.ObjectId,
    ref:'FriendlyGame'
  }]
},{
  timestamps:{
    createdAt:"created_at",
    updatedAt:"updated_at"
  }
})

userSchema.plugin(plm, {usernameField: 'email'})
module.exports = mongoose.model('User', userSchema)