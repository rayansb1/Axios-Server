const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
//get data from server
app.use('/', express.static(__dirname+'/'));
app.get('/', (req,res)=>{
    res.sendFile('/index.html',{root: __dirname});
})
app.get('/user', (req,res)=> res.json([
    {id:1, name:'Rayan'},
    {id:2, name:'Bawazeer'}
]));
//send data to server
app.post('/user', (req, res)=>{
    console.log(req.body);
    res.json({ message: 'User added successfully!'});
});
app.listen(3000,() => console.log('Server listening on port 3000!'));