const locationSchema = new mongoose.Schema({
    hospitalName: { type: String, required: true, trim: true },
    mandalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Mandal', required: true },
    districtId: { type: mongoose.Schema.Types.ObjectId, ref: 'District', required: true },
    stateId: { type: mongoose.Schema.Types.ObjectId, ref: 'State', required: true },
    pincode: { type: String, required: true, match: /^[0-9]{6}$/ }
}, { timestamps: true });

module.exports = mongoose.model('Location', locationSchema);
