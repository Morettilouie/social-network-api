const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// set up GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThought)
    .post(createThought);

// set up GET one, PUT, and DELETE at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)
    //.post(createThought)
router
    .route('/:userId')
    .post(createThought)

router
    .route('/:id/reactions')
        .post(createReaction)

router
    .route('/:id/reactions/:reactionId')
    .delete(deleteReaction)
    


module.exports = router;