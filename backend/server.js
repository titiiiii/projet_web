const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const { request } = require('express');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())   //permet d afficher dans la console les posts data req.body

const connectionString = 'mongodb+srv://luc_vg:projetweb@cluster0.ijp7r.mongodb.net/projet_web?retryWrites=true&w=majority'

/*require("./routes/")(app); Les routes CRUD permettant les actions*/

const testRoute = require("./routes/test");

app.use('/test', testRoute);

/*app.get('/', (req,res) =>{
  res.send("This is home page");
  
})*/




  
  MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {

    console.log('Connected to Database')

    const db = client.db('api-backend')
    const apiCollection = db.collection('api-requests') 

   /* app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
    
    app.post('/quotes', (req, res) => {
      apiCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
          console.log(req.body)
                })
        .catch(error => console.error(error))
    })*/

    app.get('/', (req, res) => {
      db.collection('api-requests').find().toArray()
        .then(results => {
          res.render( 'index.ejs' , {quotes: results })
        })        
      })


   /*   app.put('/quotes', (req, res) => {
        quotesCollection.findOneAndUpdate(
          { name: 'Lucas' },
          {
            $set: {
              name: req.body.name,
              quote: req.body.quote
            }
          },
          {
            upsert: true
          }
        )
        .then(result => {
          console.log(result)
         })
          .catch(error => console.error(error))
        })*/

   
  })
  .catch(error => console.error(error)) /*Promises with .then -> éviter les erreurs*/

 /* app.get('/', (req, res) => {
    db.collection('api-requests').find().toArray()
      .then(results => {
        res.render('index.ejs', { quotes: results })
      })        
    }) */

   

  

  app.listen(3002, function() {
    console.log('listening on 3002')
  })  
 