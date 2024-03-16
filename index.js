const express = require('express');
const dotenv = require('dotenv');
const indexRouter = require('./routes/indexRouter');

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server trabajando en http://localhost:${PORT}`);
})