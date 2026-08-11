const express = require('express');
const path = require('path');

const db = require('./app_api/models/db');
const indexRouter = require('./app_server/routes/index');

const app = express();
const port = process.env.PORT || 3000;

db.connect();

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Recipe Box listening on port ${port}`);
});
