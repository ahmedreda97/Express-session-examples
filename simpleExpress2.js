const express=require('express');
const app=express();



app.get('/username/:name(\ahmed|reda\)', (req, res) => {
    res.write('Hello MR '+req.params.name);
    res.end();
   console.log('hh');
});
app.get('/username/:id(\a+\)', (req, res) => {
    res.send('Hello SIR '+req.params.id);
   
});
app.get('/username/:name', (req, res) => {
    res.send('HI '+req.params.name);
});




app.listen(3000,()=>{
console.log('server opened on port 3000');
});