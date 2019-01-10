require('dotenv').config()

var express = require('express') // Call express
var app = express() // Define our app using express
var bodyParser = require('body-parser')
var morgan = require('morgan')
var cors = require('./src/utils/cors')
var Url = require('url-parse')
var atob = require('atob')
var urlUtils = require('./src/utils/utils.js')

/*
    * Configure app to use bodyParser()
    * This will let us get the data from a POST
 */
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

var port = process.env.PORT
var router = express.Router()

/*
    * Route of microservice to check url, is if valid return the structure of url.
    * Otherwise return the message "A url não é válida"
    * Question: http://dojopuzzles.com/problemas/exibe/analisando-urls/
*/
router.get('/getStructureURL/:url', function (req, res) {
  try {
    let data = req.params.url
    let decode_url = atob(atob(data))
    let url = new Url(decode_url)
    let util = new urlUtils()

  
    if (!util.has_protocol(decode_url)) {
      res.json({ 'status': 2, 'result': 'URL inválida, o protocolo é obrigatório. i.e: http:// ou https:// ou ssh:// ou ftp://' })
    } else {
      if (util.is_valid(url)) {
        url.status = 1
        url.result = 'URL válida'
        res.json(url)
      } else {
        res.json({ 'status': 0, 'result': 'URL inválida' })
      }
    }
  } catch (err) {
    res.json(err)
  }
})

app.use('/', router)

/*
    * Catch 404 and forward to error handler
    * If page is not defined, return 404 code and "Página não encontrada"
*/
app.use(function (req, res, next) {
  res.status(404)
  res.send('Página não encontrada')
})

app.listen(process.env.PORT)
console.log('Magic happens at http://localhost:' + process.env.PORT)

module.exports = app
