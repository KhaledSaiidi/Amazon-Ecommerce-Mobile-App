//Import from Packages
const express = require("express");
const mongoose = require('mongoose');

//Import from other files
const authRouter = require("./routes/auth");

//Init
const PORT = 3000; 
const app = express();
const DB = "mongodb+srv://khaled:tivnAkeld0Wy1mFL@cluster0.9thzicx.mongodb.net/?retryWrites=true&w=majority";

//middleware 
//Client -> middleware -> Server -> Client
app.use(express.json());
app.use(authRouter);

//connections
mongoose
.connect(DB)
.then(() => {
    console.log('Connection Succeded');
})
.catch((e) => {
    console.log(e); 
});

//MongoDb
//Database Flutter Amazon
//username: khaled
//password: tivnAkeld0Wy1mFL

app.listen(PORT, "0.0.0.0",  () => {
    console.log('connected at port ' + PORT);
});