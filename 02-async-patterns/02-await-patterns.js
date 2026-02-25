const { readFile, writeFile } = require('fs')

const getText = (path) => {
    return new Promise((reject, resolve) => {
        readFile(path, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}