const express = require('express');
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const app = express();
app.use(express.static(path.join(__dirname, '../public')));
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to my Node.js application!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

app.get('/record', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/record.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

app.post('/upload', upload.single('audio'), (req, res) => {
    console.log('Received audio file');
    res.sendStatus(200);
});
