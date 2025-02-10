const express = require('express');
const app = express();



const Rappers = {
    "21 savage":{
        "age": 29,
    "birthName":'Jerry' ,
    "birthLocation":'London, England'
    },

    "chance the rapper":{
        "age": 28,
    "birthName":'Chancelor' ,
    "birthLocation":'Illinois'
    },
    "dylan":{
        "age": "dylan",
    "birthName":'dylan' ,
    "birthLocation":'dylan'
    }
}
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})
app.get('/api/:rapperName', (req, res) =>{
    const rappersName = req.params.rapperName.toLowerCase()
    if(Rappers[rappersName]){
        res.json(Rappers[rappersName]
    )}else{
        res.json(Rappers['dylan'])
    }
})
const PORT = 3000;

app.listen(PORT, () => {
    console.log('listening on 3000')
  })

