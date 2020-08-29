const model = require('./model');
const actions = require('./actions');
const database = require('../database');

const collection = 'urls'

//Todo set actions to be set in ./model.js instead of here.

module.exports = {
    create: async (url, user) =>  {
        const baseModel = model.create();
        const urlModal = actions.setActions(baseModel, collection);
        urlModal.setUrl(url);
        urlModal.setUser(user);
        const newHash = await urlModal.generateHash();
        urlModal.setHash(newHash.getHash());
        urlModal.setHashId(newHash.getHashId());
        await database.insert(collection, urlModal);
        return urlModal;
    },
    delete: async (removeId) => {
    return await database.delete(collection, {removeId: removeId});
    },
    find: async (match) => {
        const model = await database.find(collection, match);
        return (model) ? actions.setActions(model) : null;
    },
}