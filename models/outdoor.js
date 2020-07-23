const mongoose = require("mongoose");
const outdoorSchema = new mongoose.Schema({
    name: { type: String },
    location: { type: String },
    food: { type: Boolean },
    alc: { type: Boolean },
    late: { type: Boolean },
    everyday: { type: Boolean },
    weekdayOnly: { type: Boolean },
    weekendOnly: { type: Boolean },
    onlyHours: { type: String },
    0: { type: String },
    1: { type: String },
    2: { type: String },
    3: { type: String },
    4: { type: String },
    5: { type: String },
    6: { type: String },
});

const Outdoor = mongoose.model("Outdoor", outdoorSchema);
module.exports = Outdoor;