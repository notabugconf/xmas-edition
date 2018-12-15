'use strict';

const port = process.env.PORT || 3000

const express = require('express');
const app = express();

const get_animation = require('./controllers/get-animations');
const get_mqtt = require('./controllers/mqtt');


app.get('/api/animations/', get_animation);
app.get('/api/mqtt/', get_mqtt);

app.listen(port, () =>
    console.log(`Server is listening on port ${port}.`)
);
