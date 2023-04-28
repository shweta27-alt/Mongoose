const mongoose = require('mongoose')
const user = require('./user')
mongoose.set('strictQuery',false)
mongoose.connect("mongodb://127.0.0.1:27017/myuser")

async function run(){
    const myuser = new user({
        name:"shweta",
        age:20,
        Email:"shweta@gmail.com",
        hobbies:[{
            home:"play",
            college:"roma"
        }]
    })
    await myuser.save()
    console.log(myuser)

    const firstuser = new user({
        name:"mohit",
        age:14,
        Email:"smonit@gmail.com",
        hobbies:[{
            home:"play",
            college:"roma"
        }]
    })

    await firstuser.save()
    console.log(firstuser)

    const secuser = new user({
        name:"raj",
        age:60,
        Email:"raj@gmail.com",
        hobbies:[{
            home:"play",
            college:"roma"
        }]
    })

    await secuser.save()
    console.log(secuser)


    //aggregation

    // var pipeline = [
    //     {$match:{name:"mohit", age:{$gt:10}}},
    //     {$group:{_id:"$age"}},
    //     // {$sort:"age"}
    // ]


    // let b = await user.aggregate(pipeline)
    // console.log(b)


    // const b = user.find().skip(2)
    // console.log(b)

    // var pipeline=[
    //     {$match:{name:"mohit", age:{$gt:30}}},
    //     {$group:{_id:"age"}}

    // ]

    // user.aggregate(pipeline)

    const nuser = await user.updateMany({name:"mohit"},{$set:{age:12}})

}

run()






