const shortId = require('shortid');

//Todo Make mongoose schema

module.exports.create = function () {
    return  {
        url: null,
        user: null,
        hash: null,
        hashId: null,
        removeId: shortId.generate(),
        created: new Date(),
    }
}