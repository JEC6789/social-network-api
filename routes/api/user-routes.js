const router = require("express").Router();
const { getAllUser, createUser, getUserById, updateUser, deleteUser, addFriend, removeFriend } = require("../../controllers/user-controller.js");

router.route("/").get(getAllUser).post(createUser);

router.route("/userId").get(getUserById).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;