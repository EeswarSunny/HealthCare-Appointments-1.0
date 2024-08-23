const stateSchema = new mongoose.Schema({
    stateName: { type: String, required: true, trim: true }
}, { timestamps: true });

module.exports = mongoose.model('State', stateSchema);
