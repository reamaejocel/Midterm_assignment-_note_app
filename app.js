const add = require ('./add')
const write = require ('./write')
const read = require ('./read')
const present = require ('./present')


if(data[2]== "add"){
    const note ={
        "id":data [3],
        "title": data[4],
        "body": data[5]

    }
    const oldNote = read()

    add(note, oldNote)
}