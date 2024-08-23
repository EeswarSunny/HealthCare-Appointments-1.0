const Doctor = require('../models/doctorModel');

// Get all doctors
exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find().populate('locationId');
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get doctors by location
exports.getDoctorsByLocation = async (req, res) => {
    try {
        const doctors = await Doctor.find({ locationId: req.params.locationId });
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
