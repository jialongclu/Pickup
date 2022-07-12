require('dotenv').config()
const populateDatabase = require('./generate-data');
const mongoose = require('mongoose');
const queries = require('./queries');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`mongodb+srv://pickup-admin:kyEWZGTBFeNwPjEi@pickup.2qdtldr.mongodb.net/?retryWrites=true&w=majority`);
    // await populateDatabase();
}

async function getUsers() {
    const users = await queries.getUsers();
    return users;
}

async function getUserProfile(id) {
    const user = await queries.getUser(id);
    return user;
}

async function editUserProfile({ id, updatedFields }) {
    const user = await queries.getUser(id);

    Object.keys(updatedFields).forEach((name) => {
        const value = updatedFields[name];
        user[name] = value
    })

    user.save();
    return user;
}


module.exports = {
    getUsers: getUsers,
    editUserProfile: editUserProfile,
    getUserProfile: getUserProfile
}