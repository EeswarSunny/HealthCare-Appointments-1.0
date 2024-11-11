// /server.js
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const adminRoutes = require('./routes/adminRoutes');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const authRoutes = require('./routes/authRoutes');

// Load routes
// const stateRoutes = require('./routes/stateRoutes');
// const districtRoutes = require('./routes/districtRoutes');
// const mandalRoutes = require('./routes/mandalRoutes');
// const doctorRoutes = require('./routes/doctorRoutes');
// const appointmentRoutes = require('./routes/appointmentRoutes');
const connectDB = require('./config/db');
// Load environment variables
dotenv.config();
// Initialize app
const app = express();
app.use(express.urlencoded({ extended: true }));

// Swagger configuration options
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0', // Use OpenAPI 3.0.0 spec
    info: {
      title: 'Healthcare API',
      version: '1.0.0',
      description: 'API for managing healthcare appointments',
      contact: {
        name: 'Support Team',
        url: 'http://example.com',
        email: 'support@example.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the files where APIs are defined
};
// Swagger docs setup
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middleware
// app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(cors({
//   origin: 'http://localhost:3000' // Adjust to your frontend's origin
// }));
// Use admin routes
app.use('/api/admin', adminRoutes);
// Connect to MongoDB
// connectDB();

// Use routes
// app.use('/api/states', stateRoutes);
// app.use('/api/districts', districtRoutes);
// app.use('/api/mandals', mandalRoutes);
// app.use('/api/doctors', doctorRoutes);
// app.use('/api/appointments', appointmentRoutes);
app.use('/api/auth', authRoutes);
app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
// Serve the login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Serve the register page
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT,0.0.0.0, () => {
  console.log(`Server is running on port ${PORT}`);
});
