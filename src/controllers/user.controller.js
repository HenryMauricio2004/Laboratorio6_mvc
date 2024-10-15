const {addNewUser, getAllUsers} = require('../services/user.service');

const addUserController = (request, response) => {

    try{
        const {name, lastname, email} = request.body;
        const user = addNewUser(name, lastname, email);
        response.render('home.pug', {user});
    } catch (error) {
        console.log(error);
        response.status(500).send('Internal Server Error');
    }

}

const getAllUsersController = (request, response) => {
    try{
        const users = getAllUsers();
        response.render('allUsers.pug', {users});
    }catch(error){
        console.log(error);
        response.status(500).send('Internal Server Error');
    }
}

const showForm = (request, response) => {
    response.render('form.pug');
}



module.exports = {
    addUserController,
    getAllUsersController,
    showForm
}