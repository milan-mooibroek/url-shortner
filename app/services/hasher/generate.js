const characters = 'abcdefghijklmnopqrstuvwxyz'.split('');

module.exports.generateHash = function (id) {
    let hash = '';
    let hashArray = [id];
    while (hashArray.some(function(id) {
        return id > characters.length;
    })) {
        hashArray.forEach(function (id, i, ids) {
            if (id > characters.length) {
                ids[i] -= characters.length;
                if (ids[(i + 1)]) {
                    ids[(i + 1)] += 1;
                } else {
                    ids.push(1);
                }
            }
        });
    }
    hashArray.forEach(function (id) {
        hash += characters[(id - 1)];
    })
    return hash
};