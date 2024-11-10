const express = require("express");
const router = require("./routes/")
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// aca quiero utilizar los pre-built middlewares Morgan, Cors, Express.JSON
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());


// aca utilizo un middleware hecho por mi
app.use((req, res, next) => {
    console.log("estamos pasando por mi propio middleware!");
    next();
    
})

app.use(router);

module.exports = app;