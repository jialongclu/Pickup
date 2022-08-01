const Match = require('../../src/database/models/match');
const Interaction = require('../../src/database/models/interaction');
const User = require('../../src/database/models/user');

async function getNeverSeenBeforeUsers(userId) {
    const allUsers = await User.find({});
    const interactedWithUsers = await Interaction.find({ userIdOne: userId });
    const neverSeenBeforeUsers = [];

    for (user in allUsers) {
        for (interactedWithUser in interactedWithUsers) {
            if (user[_id] !== interactedWithUser.userTwoId) {
                neverSeenBeforeUsers.push(user);
            }
        }
    }

    return neverSeenBeforeUsers;
}

module.exports = {
    getNeverSeenBeforeUsers
};
