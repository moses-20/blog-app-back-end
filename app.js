// modules
const express = require('express')
const cors = require('cors')
const app = express()
const cookieParser = require('cookie-parser')

// route paths
// const authRoutes = require('./routes/auth.routes')
// const userRoutes = require('./routes/user.routes')
const postRoutes = require('./src/routes/post.route')

// config
app.set('port', process.env.PORT)

// middlewares
app.use(cors())
// app.use(cookieParser())
app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

// routes
// app.use(authRoutes)
// app.use(userRoutes)
app.use(postRoutes)

module.exports = app

// mike attara => 0546522073