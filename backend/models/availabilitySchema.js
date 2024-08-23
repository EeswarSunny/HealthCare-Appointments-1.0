const availabilitySchema = new mongoose.Schema({
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    availabilityDate: { type: Date, required: true },
    timeSlots: [
        {
            slot: { type: mongoose.Schema.Types.ObjectId, ref: 'Slot' },
            status: { type: String, enum: ['Available', 'Unavailable'], required: true }
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Availability', availabilitySchema);
