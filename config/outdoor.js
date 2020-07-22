const Outdoor = require("../models/outdoor");
require("dotenv").config();
const apiKey = process.env.REACT_APP_YELP_API_KEY;
const yelp = require("yelp-fusion");
const client = yelp.client(apiKey);

module.exports = {
    index: (req, res) => {
        Outdoor.find({ location: req.params.location }, (err, outdoorSpots) => {
            console.log("FETCHING 1");
            console.log(outdoorSpots);
            res.json(outdoorSpots);
        });
    },

    create: (req, res) => {
        Outdoor.create(req.body, (err, outdoor) => {
            console.log(err);
            console.log("error creating");
            if (err) return res.json({ success: false, code: err.code });
            else res.json({ success: true, outdoor: outdoor });
        });
    },

    yelpBiz: (req, res) => {
        client
            .search({
                term: req.params.name,
                location: "san francisco, ca",
            })
            .then((response) => {
                res.json({ data: response.jsonBody.businesses[0] });
            })
            .catch((e) => {
                console.log(e);
            });
    },
};