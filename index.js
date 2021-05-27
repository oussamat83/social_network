const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postscontroller');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());

app.use(cors()); // autorisation pour que tout le monde a acces ou non 

app.use('/posts', postsRoutes);  // midleware, va se connecter a notre Router



app.listen(5500, () => console.log('Server started: 5500'));