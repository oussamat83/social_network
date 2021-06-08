const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const uploadController = require('../controllers/upload.controller');
const multer = require('multer');
const upload = multer();

// auth ( Authentification )
router.post("/register", authController.signUp);        // Ajouter un utilisateur / s'inscrire
router.post('/login', authController.signIn);           // Pour s'identifier 
router.get('/logout', authController.logout);           // Pour se déconnecter

// user db ( utilisateur base de données ) 
router.get("/", userController.getAllUsers);            // Faire appel à tous les utilisateurs
router.get("/:id", userController.userInfo);            // Faire appel à un seul utilisateur 
router.put("/:id", userController.updateUser);          // Mettre à jour l'utilisateur
router.delete("/:id", userController.deleteUser);       // Supprimer un utilisateur 
router.patch("/follow/:id", userController.follow);     // S'abonner à un utilisateur
router.patch("/unfollow/:id", userController.unfollow); // Se désabonner d'un utilisateur

// upload ( téléchargement )
router.post("/upload", upload.single("file"), uploadController.uploadProfil);

module.exports = router;