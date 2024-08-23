const slotSchema = new mongoose.Schema({
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    date: { type: Date, required: true },
    interval: { type: String, required: true, enum: ['15m', '30m', '1h'] },
    available: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Slot', slotSchema);
