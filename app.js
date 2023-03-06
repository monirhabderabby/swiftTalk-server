const express = require("express");
const app = express();
const cors = require("cors");

// middleware

app.use(express.json());
app.use(cors());

//routes routes
const authRoutes = require("./routes/auth.route");
const conversationRoutes = require("./routes/conversation.route");

app.use("/auth", authRoutes);
app.use("/", conversationRoutes);

//home
app.get("/", (req, res) => {
    res.send("Route is working");
});

process.on("warning", warning => {
    console.log(console.stack);
});

module.exports = app;
