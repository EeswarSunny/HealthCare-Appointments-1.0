const specializationSchema = new mongoose.Schema({
    specializationName: { type: String, required: true, unique: true }
}, { timestamps: true });

module.exports = mongoose.model('Specialization', specializationSchema);
