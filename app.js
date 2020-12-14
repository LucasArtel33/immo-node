require('dotenv').config()

const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const express = require('express');
const cors = require('cors');

//Import router;
const adRouter = require('./routes/ad.router');
const advantageRouter = require('./routes/advantage.router');
const keywordRouter = require('./routes/keyword.router');
const typeRouter = require('./routes/type.router');
const userRouter = require('./routes/user.router');

const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }))

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Protect from CORS error
app.use(cors());

app.use('/ads', adRouter);
app.use('/advantages', advantageRouter);
app.use('/keywords', keywordRouter);
app.use('/types', typeRouter);
app.use('/users', userRouter);

app.listen( port, () => {});

module.exports = app;
