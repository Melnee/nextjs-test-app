// src/data/data.js

//this seeds your database
//this command creates n = 15 amount of entries in a new Array
const notes = new Array(15)
  .fill(1)
  .map((_, i) => ({
    id: Date.now() + i, 
    title: `Note ${i}`
  }))

// don't do ES6 exports, just do module
// es6 won't persist
module.exports = notes