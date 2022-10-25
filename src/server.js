require('./db/connection')

const express = require('express') //allows us to access the express npm pack we installed
const userRouter = require('./user/userRouters')

const app = express()
const port = process.env.PORT || 5001

app.use(express.json())

app.use(userRouter)

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})
