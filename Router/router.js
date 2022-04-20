const express = require("express")
const router = express.Router()

const {createUser, allUsers, oneUser,updateUser, deleteUser} = require("../Handler/handler")

router
    .route("/user")
    .get(allUsers)
    .post(createUser)

router 
    .route("/user/:id")
    .get(oneUser)
    .patch(updateUser)
    .delete(deleteUser)

module.exports = router