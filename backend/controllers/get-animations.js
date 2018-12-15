module.exports = (req, res) => {
    var fs = require('fs');
    var obj = JSON.parse(fs.readFileSync('animations.json', 'utf8'));
    return res.json(obj);
}
