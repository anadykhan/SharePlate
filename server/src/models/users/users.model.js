const users = require('./users.mongo')

async function getAllUsers() {
    return await users
        .find({})
        .sort({ createdAt: -1 })
}

async function getSingleUser(userID) {
    return await users
        .findById(userID)
}

async function createUser(user) {
    const newUser = new users(user)
    await newUser.save()
}

module.exports = {
    getAllUsers,
    getSingleUser,
    createUser
}