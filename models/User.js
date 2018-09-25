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
  role:{
    type:String,
    enum:['individual', 'equipo','organizador'],
    default:'individual'
  },
  rating:[]
},{
  timestamps:{
    createdAt:"created_at",
    updatedAt:"updated_at"
  }
})

userSchema.plugin(plm, {usernameField: 'email'})
module.exports = mongoose.model('User', userSchema)