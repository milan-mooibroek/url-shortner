const database = require('../database');
const hashService = require('../../services/hasher/hasher');

//Set functions for model. Todo make class.

module.exports.setActions = (o, collection) => {
    o.setHash =  (hash) => {
        o.hash = hash
    }
    o.setHashId =  (hashId) => {
        o.hashId = hashId;
    }
    o.setUser =  (user) => {
        o.user = user;
    }
    o.setUrl =  (url) => {
        o.url = url;
    }
    o.getUrl =  () => {
        return o.url;
    }
    o.getHash =  () => {
        return o.hash;
    }
    o.getHashId =  () => {
        return o.hashId;
    }

    //Generate hash by finding existing hash numbers and finding the lowest avaible
    o.generateHash =  async () => {
        const urlModels = await database.findAll(collection, {}, {});
        const allHashIds = [];
        urlModels.forEach(function (model) {
            model = module.exports.setActions(model);
            if (Number.isInteger(model.getHashId())) allHashIds.push(model.getHashId());
        });
        return new hashService(allHashIds);
    }
    o.getUser =  () => {
        return o.user;
    }
    o.getCreated =  () => {
        return o.created;
    }
    return o;
}