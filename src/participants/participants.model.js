const knex = require('../../knex.js');
const PARTICIPANT_TABLE = 'participant';

module.exports = {
    PARTICIPANT_TABLE,

    selectAll() {
        return knex
            .select({
                id: 'id',
                name: 'name',
                tags: 'tags',
                allergy: 'allergy',
            })
            .from(PARTICIPANT_TABLE);
    },

    selectById(id) {
        return knex
            .select({
                id: 'id',
                name: 'name',
                tags: 'tags',
                allergy: 'allergy',
            })
            .from(PARTICIPANT_TABLE)
            .where('id', id);
    },

    selectByIds(arrayIds) {
        return knex
            .select({
                id: 'id',
                name: 'name',
                tags: 'tags',
                allergy: 'allergy',
            })
            .from(PARTICIPANT_TABLE)
            .whereIn('id', arrayIds);
    },

    insert(participant) {
        // YOUR CODE HERE
        return knex(PARTICIPANT_TABLE).insert({
            name: participant.name,
            tags: participant.tags,
            allergy: participant.allergy,
        });
    },
};
