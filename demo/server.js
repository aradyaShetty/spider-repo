const express = require('express');
const app = express();
const port = 3000;

app.get('/add', (req, res) => {
    const result = 2 + 2;
    res.json({ result: result });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});