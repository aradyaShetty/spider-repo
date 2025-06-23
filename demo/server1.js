const express = require('express');
const app = express();
const port = 3000;

app.get('/add', (req, res) => {
    const result = 1 + 1;
    res.json({ result: result });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});