// // /models/Appointment.js
// const mongoose = require('mongoose');

// const appointmentSchema = new mongoose.Schema({
//   patientName: {
//     type: String,
//     required: true,
//   },
//   doctorName: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: Date,
//     required: true,
//   },
//   reason: {
//     type: String,
//     required: true,
//   },
// });

// const Appointment = mongoose.model('Appointment', appointmentSchema);

// module.exports = appointmentsSchema;

const appointmentSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  appointmentDate: { type: Date, required: true },
  slotId: { type: mongoose.Schema.Types.ObjectId, ref: 'Slot' },
  reason: { type: String, required: true, trim: true },
  status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled', 'Completed'], default: 'Pending' },
  locationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
  prescription: {
      medications: [{ type: String }],
      dosage: { type: String },
      duration: { type: String }
  },
  notes: { type: String, maxlength: 500 }
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);

