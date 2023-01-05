const express = require('express');
const app = express();
// const ws = require('ws');
// const wss = new ws.Server({port:})

app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    res.render('admin.ejs')
})

app.listen(3000,(req,res) => {
    console.log('Ok Tested');
});