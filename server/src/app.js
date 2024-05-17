import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();

mongoose.connect(process.env.DB).then(()=>{
  console.log("DB Connected")
});


app.use(express.json()) 



app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(process.env.PORT,()=>{
    console.log(`application is running ${process.env.PORT} port`)
})