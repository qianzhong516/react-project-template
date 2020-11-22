const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./routes/userRoutes')
const middleware = require('./utils/middleware')

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger) // place request middle ware after express.json()
app.use(userRouter)
app.use(middleware.errorMiddleware) // place error middleware in the end

const PORT = config.PORT
app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`)
})