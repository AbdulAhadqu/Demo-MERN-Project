# Node.js Backend Development - Complete Setup Guide

A comprehensive, production-ready Node.js backend template with modern development practices, security implementations, and scalable architecture.

## 🚀 Project Overview

This repository provides a complete guide and implementation for setting up a robust Node.js backend application. It includes essential security measures, scalable project structure, authentication systems, database integration, and deployment strategies following 2025 best practices.

### Key Features

- ✅ **Modern Express.js Setup** with TypeScript support
- ✅ **Security-First Approach** with JWT authentication, rate limiting, and input validation
- ✅ **Scalable Architecture** with layered design patterns
- ✅ **Database Integration** (MongoDB/MySQL) with proper ORM/ODM
- ✅ **Comprehensive Testing** suite with Jest
- ✅ **Production-Ready** deployment configuration
- ✅ **API Documentation** with OpenAPI/Swagger
- ✅ **Development Tools** with ESLint, Prettier, and Nodemon

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Environment Setup](#environment-setup)
- [Available Scripts](#available-scripts)
- [API Documentation](#api-documentation)
- [Security Features](#security-features)
- [Database Configuration](#database-configuration)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v8.0.0 or higher) or **Yarn** (v1.22.0 or higher)
- **MongoDB** (v5.0.0 or higher) OR **MySQL** (v8.0.0 or higher)
- **Git** (for version control)
- **Docker** (optional, for containerized deployment)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/nodejs-backend-template.git
cd nodejs-backend-template
```

### 2. Install Dependencies

```bash
# Install production and development dependencies
npm install

# Or using Yarn
yarn install
```

### 3. Environment Configuration

```bash
# Copy environment template
cp .env.example .env

# Edit environment variables
nano .env
```

### 4. Database Setup

```bash
# For MongoDB (make sure MongoDB is running)
npm run db:seed

# For MySQL (make sure MySQL is running)
npm run db:migrate
npm run db:seed
```

### 5. Start Development Server

```bash
# Start development server with hot reload
npm run dev

# Server will be running at http://localhost:3000
```

## 📁 Project Structure

```
nodejs-backend-template/
├── src/
│   ├── config/              # Configuration files
│   │   ├── database.js      # Database configuration
│   │   ├── swagger.js       # API documentation config
│   │   └── redis.js         # Redis cache configuration
│   ├── controllers/         # Request handlers
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   └── index.js
│   ├── middleware/          # Custom middleware
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   ├── rate-limit.middleware.js
│   │   └── validation.middleware.js
│   ├── models/              # Database models
│   │   ├── User.model.js
│   │   └── index.js
│   ├── routes/              # API routes
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   └── index.js
│   ├── services/            # Business logic
│   │   ├── auth.service.js
│   │   ├── email.service.js
│   │   └── user.service.js
│   ├── utils/               # Helper functions
│   │   ├── logger.js
│   │   ├── response.js
│   │   └── validation.js
│   ├── validators/          # Input validation schemas
│   │   ├── auth.validator.js
│   │   └── user.validator.js
│   └── app.js              # Express app configuration
├── tests/                   # Test files
│   ├── integration/
│   ├── unit/
│   └── setup.js
├── docs/                    # Documentation
├── scripts/                 # Build and deployment scripts
├── .env.example            # Environment variables template
├── .gitignore             # Git ignore rules
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── docker-compose.yml     # Docker configuration
├── Dockerfile            # Docker build file
├── jest.config.js        # Jest testing configuration
├── package.json          # NPM dependencies and scripts
└── server.js            # Application entry point
```

## ⚙️ Environment Setup

Create a `.env` file in the root directory with the following variables:

```bash
# Server Configuration
NODE_ENV=development
PORT=3000
API_PREFIX=/api/v1

# Database Configuration
DATABASE_URL=mongodb://localhost:27017/your-database
# OR for MySQL
# DATABASE_URL=mysql://username:password@localhost:3306/database_name

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d
JWT_REFRESH_SECRET=your-refresh-token-secret
JWT_REFRESH_EXPIRE=30d

# Redis Configuration (Optional)
REDIS_URL=redis://localhost:6379

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Security
BCRYPT_ROUNDS=12
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=100

# CORS
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001

# File Upload
MAX_FILE_SIZE=10485760
UPLOAD_PATH=./uploads

# Logging
LOG_LEVEL=info
LOG_FILE=./logs/app.log
```

## 📜 Available Scripts

```bash
# Development
npm run dev              # Start development server with nodemon
npm run dev:debug        # Start development server with debugging

# Production
npm start               # Start production server
npm run build          # Build for production (if using TypeScript)

# Database
npm run db:migrate     # Run database migrations
npm run db:seed        # Seed database with sample data
npm run db:reset       # Reset database

# Testing
npm test               # Run all tests
npm run test:watch     # Run tests in watch mode
npm run test:coverage  # Run tests with coverage report
npm run test:unit      # Run unit tests only
npm run test:integration # Run integration tests only

# Code Quality
npm run lint           # Run ESLint
npm run lint:fix       # Fix ESLint errors
npm run format         # Format code with Prettier
npm run format:check   # Check code formatting

# Documentation
npm run docs:generate  # Generate API documentation
npm run docs:serve     # Serve documentation locally

# Docker
npm run docker:build   # Build Docker image
npm run docker:run     # Run Docker container
npm run docker:dev     # Run development environment with Docker Compose
```

## 📚 API Documentation

### Authentication Endpoints

```http
POST /api/v1/auth/register
POST /api/v1/auth/login
POST /api/v1/auth/refresh-token
POST /api/v1/auth/forgot-password
POST /api/v1/auth/reset-password
GET  /api/v1/auth/verify-email/:token
```

### User Management

```http
GET    /api/v1/users          # Get all users (Admin only)
GET    /api/v1/users/profile  # Get current user profile
PUT    /api/v1/users/profile  # Update current user profile
DELETE /api/v1/users/:id      # Delete user (Admin only)
```

### API Response Format

```json
{
  "success": true,
  "message": "Request successful",
  "data": {
    // Response data
  },
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "pages": 10
  }
}
```

### Error Response Format

```json
{
  "success": false,
  "message": "Error description",
  "error": {
    "code": "ERROR_CODE",
    "details": "Detailed error information"
  }
}
```

## 🔒 Security Features

### Implemented Security Measures

- **JWT Authentication** with access and refresh tokens
- **Password Hashing** using bcrypt with configurable rounds
- **Rate Limiting** to prevent brute-force attacks
- **Input Validation** using Joi schemas
- **CORS Protection** with configurable origins
- **Helmet.js** for secure HTTP headers
- **XSS Protection** and SQL injection prevention
- **Request Size Limiting** to prevent DoS attacks
- **API Key Authentication** for service-to-service communication

### Authentication Flow

```javascript
// Example: Protected route implementation
const authMiddleware = require('./middleware/auth.middleware');

router.get('/protected', authMiddleware, (req, res) => {
  res.json({ 
    message: 'Access granted', 
    user: req.user 
  });
});
```

## 🗄️ Database Configuration

### MongoDB Setup

```javascript
// config/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
```

### Model Example

```javascript
// models/User.model.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 8,
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  lastLogin: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Password hashing middleware
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Password comparison method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
```

## 🧪 Testing

### Test Structure

```
tests/
├── integration/
│   ├── auth.test.js
│   └── users.test.js
├── unit/
│   ├── controllers/
│   ├── services/
│   └── utils/
└── setup.js
```

### Example Test

```javascript
// tests/integration/auth.test.js
const request = require('supertest');
const app = require('../../src/app');

describe('Authentication', () => {
  describe('POST /api/v1/auth/register', () => {
    it('should register a new user', async () => {
      const userData = {
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123'
      };

      const response = await request(app)
        .post('/api/v1/auth/register')
        .send(userData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.user.email).toBe(userData.email);
      expect(response.body.data.token).toBeDefined();
    });
  });
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- auth.test.js

# Run tests in watch mode
npm run test:watch
```

## 🚀 Deployment

### Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Start application
CMD ["node", "server.js"]
```

### Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=mongodb://mongo:27017/myapp
      - REDIS_URL=redis://redis:6379
    depends_on:
      - mongo
      - redis
    restart: unless-stopped

  mongo:
    image: mongo:5.0
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db
    restart: unless-stopped

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    restart: unless-stopped

volumes:
  mongo_data:
```

### Production Deployment Checklist

- [ ] Environment variables configured
- [ ] Database connections secured
- [ ] SSL/TLS certificates installed
- [ ] Rate limiting configured
- [ ] Logging and monitoring setup
- [ ] Health checks implemented
- [ ] Backup strategy in place
- [ ] Security headers configured
- [ ] CORS properly configured
- [ ] Error handling implemented

## 🔧 Configuration Management

### Environment-Specific Configs

```javascript
// config/index.js
const config = {
  development: {
    port: process.env.PORT || 3000,
    database: {
      uri: process.env.DATABASE_URL || 'mongodb://localhost:27017/dev',
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    },
    jwt: {
      secret: process.env.JWT_SECRET || 'dev-secret',
      expiresIn: '1d'
    },
    logging: {
      level: 'debug'
    }
  },
  production: {
    port: process.env.PORT || 8080,
    database: {
      uri: process.env.DATABASE_URL,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000
      }
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRE || '7d'
    },
    logging: {
      level: 'info'
    }
  }
};

module.exports = config[process.env.NODE_ENV || 'development'];
```

## 📊 Monitoring and Logging

### Winston Logger Setup

```javascript
// utils/logger.js
const winston = require('winston');

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'api' },
  transports: [
    new winston.transports.File({ 
      filename: 'logs/error.log', 
      level: 'error' 
    }),
    new winston.transports.File({ 
      filename: 'logs/combined.log' 
    })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

module.exports = logger;
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR
- Use semantic commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Express.js team for the fantastic framework
- MongoDB team for the robust database solution
- All contributors who helped improve this template

## 📞 Support

If you have any questions or need help, please:

1. Check the [documentation](docs/)
2. Search existing [issues](https://github.com/yourusername/nodejs-backend-template/issues)
3. Create a new issue if needed
4. Join our [Discord community](https://discord.gg/your-invite)

***

**Made with ❤️ for the Node.js community**

[1](https://dev.to/zand/a-comprehensive-and-user-friendly-project-readmemd-template-2ei8)
[2](https://dev.to/mdkaifansari04/nodedash-a-simple-and-scalable-nodejs-backend-template-me9)
[3](https://blog.bitsrc.io/writing-the-perfect-reademe-for-your-node-library-2d5f24dc1c06)
[4](https://techbylakshay.hashnode.dev/14-steps-to-set-up-a-professional-backend-in-node-js)
[5](https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/)
[6](https://www.drupal.org/docs/develop/managing-a-drupalorg-theme-module-or-distribution-project/documenting-your-project/readmemd-template)
[7](https://www.youtube.com/watch?v=662nRW9SpUE)
[8](https://www.reddit.com/r/node/comments/r0eq8k/productionready_template_for_backends_created/)
[9](https://www.linkedin.com/posts/rushikeshpalande07_nodejs-backenddevelopment-opensource-activity-7300928506895462401-7Ybm)
[10](https://gitlab.espol.edu.ec/Kefrhida/Integradora/-/blob/main/backend/node_modules/express/Readme.md)
