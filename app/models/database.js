const MongoClient = require('mongodb').MongoClient;
const MongoConnector = 'mongodb://localhost:27017/';
const client = new MongoClient(MongoConnector, { useUnifiedTopology: true});
const connection = client.connect(); // initialized connection
const DB = 'urlRedirects';

exports.save = function (collection, match = {}, object ) {
    new Promise(function (resolve) {
        connection.then(() => {
            const db = client.db(DB);
            const coll = db.collection(collection);
            coll.findOneAndUpdate(match,
                {
                    $set: object
                },
                {
                    upsert:true
                }).then((result) => resolve(result))
                .catch((err) =>  {
                    throw new Error(err);
                });
        });
    });
};
exports.find = function (collection, match = {}) {
    return  new Promise(function (resolve) {
        connection.then(() => {
            const db = client.db(DB);
            const coll = db.collection(collection);
            coll.findOne(match).then((result) =>  resolve(result)).catch((err) => {
                throw new Error(err);
            });
        })
    });
};
exports.insert = function (collection, object ) {
    new Promise(function (resolve) {
        connection.then(() => {
            const db = client.db(DB);
            const coll = db.collection(collection);
            coll.insertOne(object).then((result) => resolve(result))
                .catch((err) =>  {
                    throw new Error(err);
                });
        });
    });
};

exports.findAll = function (collection, match = {}, filter = {}) {
    return  new Promise(function (resolve) {
        connection.then(() => {
            const db = client.db(DB);
            const coll = db.collection(collection);
            coll.find(match, filter).toArray().then((result) =>  resolve(result)).catch((err) => {
                throw new Error(err)
            });
        })
    });
};

exports.delete = function (collection, match) {
    return new Promise(function (resolve) {
        connection.then(() => {
            const db = client.db(DB);
            const coll = db.collection(collection);
            coll.removeOne(match).then((result) => resolve(result)).catch((err) => {
                throw new Error(err)
            });
        });
    });
}