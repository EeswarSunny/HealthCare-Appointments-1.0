const referralSchema = new mongoose.Schema({
    referredToId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    referredById: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true },
    referralReason: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Referral', referralSchema);
