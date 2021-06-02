const mongoose = require('mongoose'); // faire appel à mongoose
const { isEmail } = require('validator'); // validator c'est une bibliothèque 
const bcrypt = require('bcrypt'); // bcrypt permet de crypté des données ou mots de passe 

const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
      unique: true,
      trim: true              // trim: supprime les espaces 
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],   // Permet de faire des validations très précise avec validator 
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6
    },
    picture: {
      type: String,
      default: "./uploads/profil/random-user.png"
    },
    bio: {
      type: String,
      max: 1024,
    },
    followers: {
      type: [String]
    },
    following: {
      type: [String]
    },
    likes: {
      type: [String]
    }
  },
  {
    timestamps: true,   // On sait quand l'utilisateur s'enregistre à chaque fois qu'il le fait au millième de seconde près
  }
);


// jouer la fonction avant de sauvegarder dans l'affichage: 'block' et permet de crypté le mot de passe, 
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Permet de décrypté le mot de passe

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email')
};

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;