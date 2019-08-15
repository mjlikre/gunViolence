"use strict";

const express = require('express');
const router = express.Router();
const db = require("../../models");

// GET /api/incidents/test - go here to test if we get a response
router.get("/test", (req, res) => {
    res.json({ test: "/api/incidents/test" });
});

// GET /api/incidents - route for getting all Incidents from the db
router.get("/", function (req, res) {
    db.Incident.find({})
        .then(function (dbIncident) {
            res.json(dbIncident);
        })
        .catch(function (err) {
            res.json(err);
        });
});

// GET /api/incidents/:id - route for grabbing a specific Incident by id 
router.get("/:id", function (req, res) {
    db.Incident.findOne({ _id: req.params.id })
        .then(function (dbIncident) {
            res.json(dbIncident);
        })
        .catch(function (err) {
            res.json(err);
        });
});

module.exports = router;