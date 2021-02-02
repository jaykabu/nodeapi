const mongoose = require('mongoose');

const mensSchema = mongoose.Schema({
    ranking: {
        type: Number,
        require: true,
        unique: [true, 'already exist'],
    },
    name: {
        type: String,
        require: true,
        trim: true
    },
    dob: {
        type: Date,
        require: true,
        trim: true
    },
    country: {
        type: String,
        require: true,
        trim: true
    },
    score: {
        type: Number,
        require: true,
        trim: true
    },
    event: {
        type: String,
        default: "100m"
    }
});

const MensRanking = new mongoose.model('MensRanking', mensSchema);

module.exports = MensRanking;
