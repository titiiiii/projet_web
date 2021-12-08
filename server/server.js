const express = require("express")
const lyricsFinder = require("lyrics-finder");
const cors = require('cors')
const SpotifyWebApi = require("spotify-web-api-node")
const bodyParser = require("body-parser")

const MongoClient = require('mongodb').MongoClient;


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true } ))

const CLIENT_ID = '3b85071ba0c748ffac9596a312bfb0e3';
const CLIENT_SECRET = '14ceaaf9074940a3bf486040520babf8';
const connectionString = 'mongodb+srv://luc_vg:projetweb@cluster0.ijp7r.mongodb.net/projet_web?retryWrites=true&w=majority'



app.post('/refresh', (req,res) =>{
    const refreshToken = req.body.refreshToken

    const spotifyApi = new SpotifyWebApi({
      redirectUri: "http://localhost:3000",
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken,
    })

    spotifyApi.refreshAccessToken()
    .then(data => {
        res.json({
          accessToken: data.body.accessToken,
          expiresIn: data.body.expiresIn,
        })
      }).catch(err =>{
        console.log(err)
        res.sendStatus(400)
      })   
})

app.post("/login", (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
      redirectUri: "http://localhost:3000",
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,      
    })

    


    spotifyApi.authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
})



app.get("/lyrics", async (req, res) => {
  const lyrics =
    await lyricsFinder(req.query.artist, req.query.titre) || "Pas de lyrics pour ce titre bg"
  res.json({ lyrics })
})





    
app.get('/home', (req,res) =>{
  res.send("This is home page");
})


app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/index.ejs')
})
   

   ///Connexion BDD Mongo DB
  
  MongoClient.connect(connectionString)
  .then(client => {

    console.log('Connected to Database')

    const db = client.db('api-backend')
    const apiCollection = db.collection('api-requests') 

    app.get('/data', (req, res) => {
      db.collection('api-requests').find().toArray()
        .then(results => {
          res.render({quotes: results})
        })      
      }) 
      
      

      


      /*app.post('/api', (req, res) => {
        apiCollection.insertOne(req.body)
          .then(result => {
            res.redirect('/')
            console.log(req.body)
                  })
          .catch(error => console.error(error))
      }) */
      
  })
  .catch(error => console.error(error)) /*Promises with .then -> éviter les erreurs*/

 app.listen(3001)



 