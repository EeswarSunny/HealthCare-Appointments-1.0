const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// Get all doctors
router.get('/', doctorController.getAllDoctors);

// Get doctors by location
router.get('/location/:locationId', doctorController.getDoctorsByLocation);

module.exports = router;
