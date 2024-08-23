const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
    phoneNumber: { type: String, required: true, match: /^[0-9]{10}$/ },
    experience: { type: Number, required: true, min: 0 },
    rating: { type: Number, min: 1, max: 5, default: 3 },
    locationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
    specializations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Specialization' }],
    certifications: [
        {
            title: { type: String, required: true },
            issuedBy: { type: String, required: true },
            dateIssued: { type: Date, required: true },
            validUntil: { type: Date }
        }
    ],
    availabilityId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Availability' }]
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);
