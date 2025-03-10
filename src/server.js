require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cafeRoutes = require("./routes/cafeRoutes"); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", cafeRoutes); 

//  Rota inicial
app.get("/", (req, res) => {
    res.send("Eu amo muito backend! ❤️");
});

// Checagem de servidor
app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
});