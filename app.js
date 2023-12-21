const express = require("express");
const app = express();
const libraryRouter = require('./routes/library');
const cors = require('cors');
const sequelize = require('./connections/database');
const Books = require("./models/library");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(libraryRouter);

sequelize.sync().then(() => {
    app.listen(3000)
    console.log("Connected");
})

