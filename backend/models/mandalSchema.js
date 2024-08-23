const mandalSchema = new mongoose.Schema({
    mandalName: { type: String, required: true, trim: true },
    districtId: { type: mongoose.Schema.Types.ObjectId, ref: 'District', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Mandal', mandalSchema);
