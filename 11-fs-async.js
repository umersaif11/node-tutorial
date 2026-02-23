const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, resultOne ) => {
    if(err) {
        console.log(err)
        return
    }
    const first = resultOne

    readFile('./content/second.txt', 'utf8', (err, resultTwo ) => {
        if(err) {
            console.log(err)
            return
        }
        const second = resultTwo

        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err) => {
                if(err) {
                    console.log(err)
                    return
                }
            }
        )
    })
})