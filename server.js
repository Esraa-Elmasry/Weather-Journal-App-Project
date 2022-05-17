const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=55e9352413cf72506946120bb9b4c485';
// Setup empty JS object to act as endpoint for all routes
 projectData = [];

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 8000;
app.listen(port, () => {
    console.log(`connected to port: ${port}`);
});

//get route
// app.get('/all', (req, res) => {
//    res.send(projectData);
//    projectData = [];
//    console.log(projectData, 'data');
//    });

//post route
// app.post('/add', (req,res)=> {
//     console.log(req.body);
//     console.log(projectData);
//     newEntry = {
//         date:req.body.date,
//        temp:req.body.temp,
//        content:req.body.content
//     }
// res.send(newEntry);
// console.log(newEntry);
// projectData.push(newEntry);
// });
