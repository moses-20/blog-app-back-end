const mongoose = require('mongoose')

const URI = process.env.DB_URI

mongoose.connect(URI, {
 useFindAndModify: false,
 useCreateIndex: true,
 useNewUrlParser: true,
 useUnifiedTopology: true
})

const connection = mongoose.connection

connection.once('open', () => console.info('DATABSE IS CONNECTED'))