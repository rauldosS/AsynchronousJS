// callback > promise > async/await
const fs = require('fs')

console.log(1)

// callback: chamada de volta
// const callback = (err, contents) => {
//     console.log(err, String(contents))
// }

// fs.readFile('./in1.txt', callback)

// fs.readFile('./in1.txt', (err, contents) => {
//     fs.readFile('./in2.txt', (err2, contents2) => {
//         console.log(err, String(contents))
//         console.log(err2, String(contents2))
//     })
// })

// Promise: já retornamos de imediato uma promessa de que será entregue um valor
const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if (err) {
            reject(err)
        } else {
            resolve(contents)
        }
    })
})

// readFile('./in1.txt')
//     .then( contents => {
//         console.log(String(contents))
//         return readFile('./in2.txt')
//     })
//     .then( contents => {
//         console.log(String(contents))
//     })
//     .finally( () => {
//         console.log(String(contents))
//     })

// async/await - açucar sintático (forma mais bonita de ver uma promisse)

const init = async() => {
    try {
        const contents = await readFile('./in1.txt')
        const contents2 = await readFile('./in2.txt')

        return String(contents) + String(contents2)
    } catch (error) {
        console.log(error)
    }
}

init().then( contents => console.log(contents) )

// console.log(`init ${init()}`)
// console.log('init', init())

console.log(2)

console.log(3)