const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 15000,
    encoding: 'utf8'
})

//default - 64kb
//last buffer -  remainder
//highWaterMark - control size
//const stream = createReadStream('./content/big.txt', {highWaterMark: 15000})


stream.on('data', (result) => {
    console.log(result)
})