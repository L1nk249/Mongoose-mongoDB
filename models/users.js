
const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://levycedric:Hq4LRnnG7unsP21z@cedric.bnri0mz.mongodb.net/users';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))

  .catch(error => console.error(error));






const userSchema = mongoose.Schema({
   firstName:String,
   lastName: String,
  email:String,
  inscriptionDate:Date,
 
   });
   
   
const User = mongoose.model('users', userSchema);

module.exports = User;