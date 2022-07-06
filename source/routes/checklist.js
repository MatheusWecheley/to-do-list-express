const express = require('express');

const router = express.Router();

router.get('/CheckLists', (req, res) => {
    res.send('teste');
})

router.post('/CheckLists', (req, res) => {
    res.status(200).json(req.body);
})



module.exports = router;