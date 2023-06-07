const express = require("express");
// const notes = require("./ata1/notes");
const notes = require("./Data1/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const userRoutes = require('./routes/userRoutes');
const { notFound,errorHandler } = require("./middlewares/errorMiddleware");


const app = express();

dotenv.config();

app.get('/',(req,res)=>{
    res.send("api is running");
});
connectDB();
app.use(express.json());



app.get("/api/notes",(req,res)=>{
    res.json(notes);
});

app.get('/api/notes/:id',(req,res)=>{
    const note = notes.find((n) => n._id === req.params.id);
    res.json(note);
})

app.use("/api/users",userRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log("server started on port 5000"));
 