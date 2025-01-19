import mongoose from "mongoose";
import dotenv from "dotenv";
import AutoIncrementFactory from 'mongoose-sequence';

dotenv.config();

// MongoDB connection setup
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Initialize AutoIncrement
const AutoIncrement = AutoIncrementFactory(mongoose);

// MongoDB Schema setup
const journalSchema = new mongoose.Schema({
    userId: String,
    entryId: { type: Number, unique: true },
    title: String,
    content: String,
    Date: { type: Date, default: Date.now }
});

// Apply the AutoIncrement plugin to the schema
journalSchema.plugin(AutoIncrement, { inc_field: 'entryId' });

const Journal = mongoose.model('Journal', journalSchema);

export default Journal;