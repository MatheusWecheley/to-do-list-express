const express = require('express');
const checkListsRouter = require('./source/routes/checklist');

const app = express();

app.use(express.json());

app.use(checkListsRouter);


app.listen(3000, (req, res) => {
    console.log("Server started");
})