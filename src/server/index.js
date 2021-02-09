const fetch = require("node-fetch");
const dotenv = require('dotenv')
dotenv.config()

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
app.use(express.static('dist'))

const cors = require('cors')
app.use(cors());

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/analyse', async function(req, res) {
    const text = req.body.text
    console.log(text)
    const apiURL = `${baseURL}key=${apiKey}&url=${text}&lang=en`
    const response = await fetch(apiURL)
        
        try {
          const responseJSON = await response.json()

          displayData = {
              score_tag : responseJSON.score_tag,
              agreement : responseJSON.agreement,
              subjectivity : responseJSON.subjectivity,
              confidence : responseJSON.confidence,
              irony : responseJSON.irony
          }
          res.send(displayData)
    
        }  catch(error) {
            console.log('error')
            console.log("error", error);
        
        }
})


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
