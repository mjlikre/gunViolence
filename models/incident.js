const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncidentSchema = new Schema({
    incident_id: Number,
    state: String,
    city_or_county: String,
    n_killed: Number,
    n_injured: Number,
    incident_url: String,
    longitude: Number,
    latitude: Number
});

const Incident = mongoose.model("Incident", IncidentSchema);
module.exports = Incident; 