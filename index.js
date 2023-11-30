const express = require('express')
const app = express();
const path = require('path')
const PORT = process.env.PORT || 4000;
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(PORT, () => console.log(`server port: ${PORT}`))