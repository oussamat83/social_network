const router = require('express').Router();
const postController = require('../controllers/post.controller');
const multer = require("multer");
const upload = multer();

router.get('/', postController.readPost);                                       // Ecrire un commentaire
router.post('/', upload.single("file"), postController.createPost);                                   // Créer une publication
router.put('/:id', postController.updatePost);                                  // Mettre à jour une publication
router.delete('/:id', postController.deletePost);                               // Supprimer une publication 
router.patch('/like-post/:id', postController.likePost);                        // Aimer une publication
router.patch('/unlike-post/:id', postController.unlikePost);                    // Ne plus aimer une publication 

// commentaire 
router.patch('/comment-post/:id', postController.commentPost);                  // commenter une publication
router.patch('/edit-comment-post/:id', postController.editCommentPost);         // Editer une publication 
router.patch('/delete-comment-post/:id', postController. deleteCommentPost);    // Supprimer une publication 

module.exports = router; 