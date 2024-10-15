const {User, save, getUsers} = require('../models/user.model');

const addNewUser = (name, lastname, email) => {
    const newUser = new User(name, lastname, email);
    return save(newUser);
}

const getAllUsers = () => {
    return getUsers();
}

module.exports = {
    addNewUser, getAllUsers
}