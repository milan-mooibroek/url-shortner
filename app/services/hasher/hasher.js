const finder = require('./finder');
const stringCodeFromNumber = require('string-code-from-number');
const stringGenerator = new stringCodeFromNumber();


//TODO Till 676 entries working. Issue calculating characters in front of string

module.exports = class {

 constructor(hashIds) {
  this.hashId = finder.findNewHashId(hashIds);
  this.hash = stringGenerator.generate(this.hashId);
 }

 getHash() {
  return this.hash
 }

 getHashId() {
  return this.hashId;
 }

}