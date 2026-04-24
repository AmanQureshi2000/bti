const data = require('./data');
const express = require('express');
const app = express();
const port = 3000;

app.get('/health',(req,res)=>{
    res.json({status:"api is working"});
})

app.get('/api/basicinfo', (req, res) => {
  res.json(data.basicinfo);
});


app.get('/api/skills', (req, res) => {
  res.json(data.skills);
});

app.get('/api/experience', (req, res) => {
  res.json(data.experience);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});