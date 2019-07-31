const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const IncidentSchema = new Schema({
    incident_url: String, incident_id: Number, city_or_county: String, state: String, n_killed: Number, n_injured: Number
}, {collection: 'gunViolenceData'});

module.exports = mongoose.model('Incident', IncidentSchema);