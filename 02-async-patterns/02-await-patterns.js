const { readFile, writeFile } = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

//using promise
// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch(error => console.log(error))


//using async await
const start = async() => {
    const first = getText('./content/first.txt')
    console.log(first)
}