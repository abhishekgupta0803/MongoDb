const mongoose = require('mongoose');

main().then((res)=>{
    console.log("Connection created");
}) .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazone');
}

let bookSchema = new mongoose.Schema({

    title:{
        type:String,
        require:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[1,"Please enetr a valid Price"],
    },
    discount:{
        type:Number,
        default:20,
    },

});

let Book = mongoose.model("Book",bookSchema);

Book.findByIdAndUpdate("665f116bbc7cba101777c152",{price:-100},{runValidators:true})
.then((res)=>{
    console.log(res);
}).catch(ex=>{console.log(ex.errors.price.properties)});
// let book1 = new Book({
    // title:" Physics - XII",
    // author:"SK SINGH",
    // price : -600,
// 
// 
// });
// book1.save().then((res)=>{
    // console.log(res);
// 
// }).catch((ex)=>{console.log(ex)});
// 
