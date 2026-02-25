const { readFile, writeFile } = require('fs')

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, result) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(result)
//             }
//         })
//     })
// }

// (1) using promise
// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch(error => console.log(error))


// (2) using async await
// const start = async() => {
//     try {
//         const first = await getText('./content/first.txt', 'utf8')
//         const second = await getText('./content/second.txt', 'utf8')
//         console.log(first, second)
//     } catch(error) {
//         console.log(error)
//     }
// }
// start()

// (3) async await.... util promisfy 
const util = require('util')
const readFilePromise = util.promisify(readFile)
const start = async() => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8')
        const second = await readFilePromise('./content/second.txt', 'utf8')
        console.log(first, second)
    } catch(error) {
        console.log(error)
    }
}
start()