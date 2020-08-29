const characters = 'abcdefghijklmnopqrstuvwxyz'.split('');

module.exports.generateHash = function (id) {

    const calc = characters.length;
    let counter = 1;
    let characterCounter = 0;
    let innerCounter = 0;
    let sum = characters.length;
    let hash = '';

    //Todo with this length u can calculate the string length and position
    while (sum <= id) {
        counter++;
        sum *= calc;
    }

    //Loop trough characters to set new hashes.
    for (let i = 0; i < id; i++) {
        if (characterCounter >= characters.length)  characterCounter = 0;
        if (characterCounter === 0
            && id > characters.length) {
            if (hash.length === 0) {
                hash += characters[characterCounter];
            } else  {
                innerCounter++;
                //Todo fix this if statement to support 3 string > combinations.
                if (innerCounter < (characters.length) ) {
                    hash = hash.slice(0, -1) + characters[innerCounter];
                } else {
                    hash += characters[characterCounter];
                    innerCounter = 0;
                }
            }
        }
        if (i === (id - 1)) {
            hash += characters[characterCounter];
        }
        characterCounter++
    }
    return hash
};