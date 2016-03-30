'use strict';

const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Public = path.join(__dirname, 'Public');

app.use(express.static(Public));

app.set('port', (process.env.PORT || 8080));

require('./routes.js')(app);

app.listen(app.get('port'),
    () => console.log(`Listening on port ${app.get('port')}`));

module.exports = app;
