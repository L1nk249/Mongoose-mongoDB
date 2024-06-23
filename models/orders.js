
const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://levycedric:Hq4LRnnG7unsP21z@cedric.bnri0mz.mongodb.net/orders';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))

  .catch(error => console.error(error));



const orderSchema = mongoose.Schema({
    total: Number,
   shippingFees: Number,
  isPaid:Boolean,
   purchaseDate:Date,
 
   });
   
   
const Order = mongoose.model('orders', orderSchema);

module.exports = Order;