'use strict';

const port = process.env.PORT || 3000

const express = require('express');
const app = express();

const get_animations = require('./controllers/get-animations');
const publish_animations = require('./controllers/publish-animations');
//const get_mqtt = require('./controllers/mqtt');

const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.get('/api/animations/', get_animations);
app.post('/api/animations/load', publish_animations);
//app.get('/api/mqtt/', get_mqtt);

app.listen(port, () =>
    console.log(`Server is listening on port ${port}.`)
);
