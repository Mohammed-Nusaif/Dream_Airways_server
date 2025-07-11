 const mongoose = require('mongoose');

 const uri = 'mongodb+srv://mymongodb:mongodb%402001@cluster.cmcqrpn.mongodb.net/flightbooking?retryWrites=true&w=majority'


const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection failed', err.message);
    process.exit(1); // Stop the server if connection fails
  }
};

module.exports = connectDB;
