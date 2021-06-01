const mongoose = require("mongoose"); // Mongoose pour se connecter à la base de données 

mongoose
    .connect("mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.034f1.mongodb.net/social_network", //  + process.env.DB_USER_PASS + protection des données 
        {
            useNewUrlParser: true,
            useUnifieldTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
    )
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log("Failed to connect to MongoDb", err)); 