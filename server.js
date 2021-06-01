const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
require('dotenv').config({ path: './config/.env' })
require('./config/db'); // permet de faire la connexion a db.js pour la base de donnée de MongoDB 
const app = express();










app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Les routes
app.use('/api/user', userRoutes);


// server toujours en dernier 
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})