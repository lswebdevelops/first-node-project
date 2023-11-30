const express = require('express')
const app = express();
const path = require('path')
const PORT = process.env.PORT || 4500;

app.get('^/$|/index(.html)?', (req, res) => {
    // res.sendFile('./views/index.html', { root: __dirname }) 
    // other way
    res.sendFile(path.join(__dirname, 'views', 'index.html')) 
})

app.get('/about(.html)?', (req, res) => {
  
    res.sendFile(path.join(__dirname, 'views', 'about.html')) 
})

app.get('/contact-me(.html)?', (req, res) => {
  
    res.sendFile(path.join(__dirname, 'views', 'contact-me.html')) 
})

//redireaction

app.get('/old-page(.html)?', (req, res) => {
  
    res.redirect(301, '/index.html')//302 by default
})

app.get('/*', (req, res) => {
  
    res.status(404).sendFile(path.join(__dirname, 'views', '/404.html'))
})




app.listen(PORT, () => console.log(`server port: ${PORT}`))