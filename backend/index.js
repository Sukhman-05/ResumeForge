const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('./routes/user.route.js')
const authRoute = require('./routes/auth.route.js')
dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => console.log('Connected!'))
  .catch(err => console.log(err));

const cors = require('cors');

const app = express()//express definition
app.use(express.json())

app.listen(3000, () => {
    console.log("Server Running on port 3000")
})
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    sucess: false,
    statusCode,
    message
  })
})