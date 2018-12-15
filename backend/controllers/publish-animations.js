module.exports = (req, res) => {
    res.set("Status-Code",200);
    res.send("Animation Loaded")
    // check hash if you want
    // req.body;

    const MQTT = require('./mqtt');

    MQTT.send(req.body);
}
