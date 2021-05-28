const express = require('express');
require('dotenv').config({ path: './config/.env' })
require('./config/db'); // permet de faire la connexion a db.js pour la base de donnée de MongoDB 
const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})