const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).send({message: 'Welcome to Node API'})
})

app.listen(3000, ()=> { 
    console.log('Application is running successfully')
});

module.exports = app