const Appointment = require('../models/appointmentModel');

// Book a new appointment
exports.bookAppointment = async (req, res) => {
    const { patientName, doctorId, appointmentDate, problemDescription, symptoms } = req.body;
    const appointment = new Appointment({
        patientName,
        doctorId,
        appointmentDate,
        problemDescription,
        symptoms
    });
    try {
        const newAppointment = await appointment.save();
        res.status(201).json(newAppointment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all appointments for a user
exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find().populate('doctorId');
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Edit an appointment
exports.editAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
        res.json(appointment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Cancel an appointment
exports.cancelAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(req.params.id, { status: 'Canceled' }, { new: true });
        if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
        res.json(appointment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
