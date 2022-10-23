const fs = require ('fs')
const write = function(data = "hello"){
fs.writeFileSync('./task.txt', data);

}

module.exports = write