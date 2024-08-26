import express from 'express'
import cors from 'cors'

var app=express()

var  corsOptions  = {
  origin:"*", //frontend url
  credentials: true,
  allowedHeaders:'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  methods:'GET,HEAD,PUT,PATCH,POST,DELETE',
  exposedHeaders:'Content-Range, X-Content-Range'
}


app.use(cors(corsOptions));

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));


app.get('/', async(req, res) => {

    
    return res.status(200).json("hello world")
  })

app.get('/create', async(req, res) => {

    
  return res.status(200).json("create")
})



app.listen(5000, () => {
  console.log(`Example app listening on port`)
})