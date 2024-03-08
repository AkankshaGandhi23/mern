const express =require('express'); //import
const app = express();  //initialize

const port = 5000;
//start express server

app.get('/',(req , res) => {
    res.send('response from express');
});

app.get('/add', (req , res) => {
    res.send('add response from express')
});

app.listen(port, () => {console.log('express server started')});