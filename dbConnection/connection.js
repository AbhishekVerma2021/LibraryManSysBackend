const mongoose =require('mongoose');
const db ='mongodb+srv://abhishek-verma:Nis12341234@cluster0.aagekjb.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
     console.log('Database connected !!!');
}).catch((e)=>{
     console.log('error=>', e);
})