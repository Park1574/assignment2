const path = require('path');
const fs = require('fs');
const express = require('express');

function logRequest(req, res, next){
	console.log(`${new Date().toISOString()}  ${req.ip} : ${req.method} ${req.path}`);
	next();
}

const host = 'localhost';
const port = 3000;
const clientApp = path.join(__dirname, 'public');

// express app
let app = express();

app.use(express.json()) 						// to parse application/json
app.use(express.urlencoded({ extended: true })) // to parse application/x-www-form-urlencoded
app.use(logRequest);							// logging for debug

// serve static files (client-side)
app.use('/', express.static(clientApp, { extensions: ['html'] }));
app.listen(port, () => {
	console.log(`${new Date().toISOString()}\tListening on ${host}:${port}, serving ${clientApp}\n\t\t\t\tOpen http://${host}:${port} on your browser to view your web app`);
});