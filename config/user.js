const User = require("../config/outdoor");

module.exports = {
    create: (req, res) => {
        User.create(req.body, (err, user) => {
            console.log("Human Present");
            if (err) res.json({ success: false, code: err.code });
            else res.json({ success: true, user: user });
        });
    },
};