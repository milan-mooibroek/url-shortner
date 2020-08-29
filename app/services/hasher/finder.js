module.exports.findNewHashId = function (hashIds = []) {
    if (hashIds.length <= 0) return 1;
    hashIds.push(0);
    hashIds = [...new Set(hashIds)];
    hashIds.sort(function(a, b) { return a-b; });
    let newHashId = -1;
    for (let i = 0;  i < hashIds.length;  ++i) {
        if (hashIds[i] !== i) {
            newHashId = i;
            break;
        }
    }
    if (newHashId === -1) {
        newHashId = hashIds[hashIds.length - 1] + 1;
    }
    return newHashId;
}
// more info https://stackoverflow.com/questions/30672861/find-the-lowest-unused-number-in-an-array-using-javascript