const mongoose = require('mongoose');

main().then((res)=>{
    console.log("connect  Sucessfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = new mongoose.Schema({

    name:String,
    email:String,
    age: Number,

});

const User = mongoose.model("User",userSchema);

//single-->insert
// const user2 = new User({
//  
    // name:"Manu",
    // email:"gupta@gmail.com",
    // age:23,
// });
// user2.save().then((res)=>{
    // console.log(res);

// })
// .catch(err=>{console.log(err)});
// 


//insert many
// User.insertMany([
//     {name:"happy",email:"123happy",age:90},
//     {name:"john",email:"john@@",age:80},
//     {name:"cena",email:"cena12@",age:40},
//     {name:"bisnoy",email:"bisnoy#@",age:20},

// ]).then((res)=>{
//     console.log(res);
// });


//find method

User.findOne({email:"guptaabhishek0803@gmail.com"}).then((res)=>{
    console.log(res);
}).catch(e=>{console.log(e)});

// 
//updateOne

// User.updateOne({name:"Manu"},{email:"guptaabhishek0803@gmail.com"}
// ).then((res)=>{
    // console.log(res);
// }).catch(ex=>{console.log(ex)});

//update Many

// User.updateMany({age:{$gt:20}},{age:55}
// 
// ).then((res)=>{
    // console.log(res);
// });

//findManyAndUpdate()

// User.findByIdAndUpdate({ _id:"665dcb9ec50e97a8f3776942"},{name:"guptaJi"},{new:true})
// .then((res)=>{
    // console.log(res);
// });

//deleteOne

// User.deleteOne({name:"Manu"}).then((res)=>{
    // console.log(res);
// }).catch((ex)=>{console.log(ex)});

//delete many

// User.deleteMany({age:{$gt:30}}).then((res)=>{
    // console.log(res);
// }).catch((ex)=>{
    // console.log(ex);
// })

//model.findByIdAndDelete

// User.findByIdAndDelete({_id:"665dcd076daa995c702cb9e1"},{new:true}).then((res)=>{
    // console.log(res);
// 
// }).catch((err)=>{
    // console.log(err);
// });

//model.findOneAndDelete

User.findOneAndDelete({name:"rahul"}).then((res)=>{
    console.log(res);
}).catch(ex=>{console.log(ex)});