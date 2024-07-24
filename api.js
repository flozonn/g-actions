const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Middleware de journalisation
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        const log = {
            method: req.method,
            url: req.url,
            status: res.statusCode,
            duration: duration,
            timestamp: new Date().toISOString(),
        };
        fs.appendFileSync('app.log', JSON.stringify(log) + '\n');
    });
    next();
});

// Endpoint pour la somme de deux entiers
app.post('/add', (req, res) => {
    const { a, b } = req.body;
    if (typeof a === 'number' && typeof b === 'number') {
        const sum = a + b;
        res.json({ result: sum });
    } else {
        res.status(400).json({ error: 'Invalid input' });
    }
});

// Endpoint pour la multiplication de deux entiers
app.post('/multiply', (req, res) => {
    const { a, b } = req.body;
    if (typeof a === 'number' && typeof b === 'number') {
        const product = a * b;
        res.json({ result: product });
    } else {
        res.status(400).json({ error: 'Invalid input' });
    }
});

app.post('/substract', (req, res) => {
    const { a, b } = req.body;
    if (typeof a === 'number' && typeof b === 'number') {
        const sum = a - b;
        res.json({ result: sum });
    } else {
        res.status(400).json({ error: 'Invalid input' });
    }
});

app.post('/division', (req, res) => {
    const { a, b } = req.body;
    if (typeof a === 'number' && typeof b === 'number') {
        const div = a / b * 1 ;
        res.json({ result: div });
    } else {
        res.status(400).json({ error: 'Invalid input' });
    }
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

module.exports = app;
