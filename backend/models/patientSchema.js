const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
    phoneNumber: { type: String, required: true, unique: true, match: /^[0-9]{10}$/ },
    age: { type: Number, required: true, min: 0 },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: String, required: true }
    },
    emergencyContact: {
        name: { type: String, required: true },
        relationship: { type: String, required: true },
        phoneNumber: { type: String, required: true }
    },
    medicalHistory: [
        {
            condition: { type: String, required: true },
            dateDiagnosed: { type: Date, required: true },
            medications: [String]
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);
