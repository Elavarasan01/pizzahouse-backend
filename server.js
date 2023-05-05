const http=require('http')
const app=require('./app');
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://kselaa2010:Elavarasan@cluster0.hdrroe7.mongodb.net/?retryWrites=true&w=majority').then(console.log("db connected"))

const port = process.env.PORT || 2000;

const server=http.createServer(app);

server.listen(port);
console.log("server running on port 2000")