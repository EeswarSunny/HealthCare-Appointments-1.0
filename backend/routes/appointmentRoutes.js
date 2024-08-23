// // /routes/appointmentRoutes.js
// const express = require('express');
// const Appointment = require('../models/appointmentsSchema');
// const router = express.Router();

// // Create a new appointment (POST)
// router.post('/appointments', async (req, res) => {
//   const { patientName, doctorName, date, reason } = req.body;
//   try {
//     const newAppointment = new Appointment({ patientName, doctorName, date, reason });
//     const savedAppointment = await newAppointment.save();
//     res.status(201).json(savedAppointment);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Get all appointments (GET)
// router.get('/appointments', async (req, res) => {
//   try {
//     const appointments = await Appointment.find();
//     res.status(200).json(appointments);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get a single appointment by ID (GET)
// router.get('/appointments/:id', async (req, res) => {
//   try {
//     const appointment = await Appointment.findById(req.params.id);
//     if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
//     res.status(200).json(appointment);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Update an appointment by ID (PUT)
// router.put('/appointments/:id', async (req, res) => {
//   const { patientName, doctorName, date, reason } = req.body;
//   try {
//     const updatedAppointment = await Appointment.findByIdAndUpdate(
//       req.params.id,
//       { patientName, doctorName, date, reason },
//       { new: true, runValidators: true }
//     );
//     if (!updatedAppointment) return res.status(404).json({ message: 'Appointment not found' });
//     res.status(200).json(updatedAppointment);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Delete an appointment by ID (DELETE)
// router.delete('/appointments/:id', async (req, res) => {
//   try {
//     const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
//     if (!deletedAppointment) return res.status(404).json({ message: 'Appointment not found' });
//     res.status(200).json({ message: 'Appointment deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// Book an appointment
router.post('/', appointmentController.bookAppointment);

// Get all appointments
router.get('/', appointmentController.getAllAppointments);

// Edit an appointment
router.put('/:id', appointmentController.editAppointment);

// Cancel an appointment
router.delete('/:id', appointmentController.cancelAppointment);

module.exports = router;
