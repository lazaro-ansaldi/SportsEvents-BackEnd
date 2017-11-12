const mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
    createDate:{
        type: Date,
        default: Date.now,
        required: true
    },
    eventType:{
        type: String,
        required: true,
        enum: ["Start", "Finish", "Goal"]
    },
    match:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "matches"
    }
});

module.exports = mongoose.model("events", eventSchema);