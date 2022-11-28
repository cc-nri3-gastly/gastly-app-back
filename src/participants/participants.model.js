const knex = require('../../knex.js');
const PARTICIPANT_TABLE = 'participant';

module.exports = {
    PARTICIPANT_TABLE,

    selectById(id) {
        return knex
            .select({
                id: 'id',
                name: 'name',
                tags: 'tags',
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
            })
            .from(PARTICIPANT_TABLE)
            .whereIn('id', arrayIds);
    },
};
