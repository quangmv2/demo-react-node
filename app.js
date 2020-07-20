const express = require('express');
const { send } = require('process');
const app = express();
const http = require('http').Server(app);
const port = 4000;
const path = require('path')

app.use(express.static(path.join(__dirname, 'demo/build')))




app.get('/*', (req, res) => {
    console.log(path.join(__dirname, 'demo/*'));
    res.sendFile(path.join(__dirname, 'demo/build/index.html'));
})

http.listen(port, console.log('Ok Server'));