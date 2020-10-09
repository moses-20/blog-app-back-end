// modules
require('dotenv').config()
const app = require('./app')
require('./src/db/mongoose')

async function main(){
 await app.listen(app.get('port'))
 console.info(`SERVER IS RUNNING`)
}

main()
