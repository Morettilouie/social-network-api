const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)

    router
    .route('/:FriendId/friends/:id')
    .post(addFriend)


module.exports = router;