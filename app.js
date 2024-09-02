const express = require('express');
const app = express();
const config = require('./config');
const dateFormat = require('date-format');
const morgan = require('morgan');
const authRouter = require('./authentication');

app.use(express.json());
morgan.token('time', () => dateFormat.asString(dateFormat.ISO8601_FORMAT, new Date()));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :time'));

app.use('/auth', authRouter);


app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
})