const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    return res.json({ msg: "Hello, from nodejs server" });
});

app.listen(PORT, (req, res) => {
    console.log(`Server is running on PORT:${PORT}`);
});
