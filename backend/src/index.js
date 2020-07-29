const express = require("express");
const cors = require('cors');
const app = express();
const db = require("./models");
const authController = require("./controllers/auth");
const linkController = require("./controllers/link");
const response = require("./middlewares/response");
const checkJWT = require("./middlewares/jwt");
const PORTA = 3001;

app.use(cors());
app.use(response);
app.use(checkJWT);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authController);
app.use("/link", linkController);
app.get("/", (req, res) => {
    return res.json("Api rodando...");
});

db.sequelize.sync().then(() => {
    app.listen(PORTA, () => {
        console.log(`Api rodando na porta : ${PORTA}`);
    });
});