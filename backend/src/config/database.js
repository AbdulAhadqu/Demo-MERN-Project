const mongoose = require('mongoose');
const logger = require('../utils/logger');

const connectDB = async () => {
  try {
    // Debug: Check what URI is being used
    console.log('🔍 Debugging MongoDB connection:');
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);
    console.log('MONGODB_URI starts with mongodb+srv:', process.env.MONGODB_URI?.startsWith('mongodb+srv:'));
    
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI not found in environment variables');
    }

    // Hide password in logs but show structure
    const uriForLog = process.env.MONGODB_URI.replace(/:[^:@]*@/, ':***@');
    console.log('Connection URI:', uriForLog);

    logger.info('Attempting to connect to MongoDB Atlas...');

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    logger.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error('Database connection failed:', error.message);
    console.error('Full connection error:', error);
    
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
};

module.exports = connectDB;
