const finder = require('./finder');
const generate = require('./generate');


//TODO Till 676 entries working. Issue calculating characters in front of string

module.exports = class {

 constructor(hashIds) {
  this.hashId = finder.findNewHashId(hashIds);
  this.hash = generate.generateHash(this.hashId);
 }

 getHash() {
  return this.hash
 }

 getHashId() {
  return this.hashId;
 }

}