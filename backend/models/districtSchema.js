const districtSchema = new mongoose.Schema({
    districtName: { type: String, required: true, trim: true },
    stateId: { type: mongoose.Schema.Types.ObjectId, ref: 'State', required: true }
}, { timestamps: true });

module.exports = mongoose.model('District', districtSchema);
