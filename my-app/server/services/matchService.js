const Match = require('../../src/database/models/match');
const Interaction = require('../../src/database/models/interaction');

async function getMatches(userId) {
    const usersLiked = await Interaction.find({
        userOneId: userId,
        swiped: true
    });
    const usersLikedBy = await Interaction.find({
        userTwoId: userId,
        swiped: true
    });
    const currentMatches = await Match.find({ userOneId: userId });
    let potentialMatches = [];
    let newMatches = [];

    for (userLiked in usersLiked) {
        for (userLikedBy in usersLikedBy) {
            if (userLiked.userOneId === userLikedBy.userTwoId) {
                potentialMatches.push({
                    userOneId: userId,
                    userTwoId: userLikedBy.userOneId
                });
            }
        }
    }

    newMatches = potentialMatches.filter((potentialMatch) => {
        for (currentMatch in currentMatches) {
            return currentMatch.userOneId !== potentialMatch.userOneId;
        }
    });

    for (newMatch in newMatches) {
        const newMatchCreated = new Match({
            userId,
            userIdTwo: newMatch.userTwoId
        });
        // if not in current matches array then save
        newMatchCreated.save();
    }
    return newMatches;
}

module.exports = {
    getMatches
};
