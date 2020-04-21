//==================================================================
// 这个文件用不到，只是作为一个参考.
//==================================================================


//1.导入模块
import mongoose from "mongoose";
//2.定义地址
const uri = 'mongodb://localhost/article';
//mongodb://user:pass@localhost:port/database

//3.连接mongoodb
mongoose.connect(uri,function(err){
    if(err)
    {
        console.log("mongoose connect failed.");
        console.log(err);
        return ;
    }
    console.log("mongoDB connect success.");
});

//4.定义 Schema 
const ArticleSchema = new mongoose.Schema({
    title:String,
    author:String,
    content:String,
    publishTime:Date
});


//5. create a model
mongoose.model('Article', ArticleSchema);

//6. add data
const Article = mongoose.model("Article");
let art = new Article({
    title:"node.js",
    author:"Henry",
    content:"node.js is great! 20200416",
    publishTime:new Date()
});



//7.将文档插入到集合中
//===================================== save
// art.save(function (err){
//     if(err)
//     {
//         console.log("mongoose save filed.");
//         console.log(err);
//     }
//     else
//     {
//         console.log("mongoose save success...");
//     }
// });



//8.表里面查找数据
//===================================== find
//第1个参数，可以传入筛选条件
Article.find({}, function(err,docs){
    if(err)
    {
        console.log("mongodb find error.");
        return ;
    }    
    console.log("result: "+ docs);
});


//Article.find({title:'TypeScript'}, function(err,docs){
//     if(err)
//     {
//         console.log("mongodb find error.");
//         return ;
//     }    
//     console.log("result2: "+ docs);    
//     console.dir(docs);
//     if(docs==undefined)
//     {
//         console.log("docs is undefined");
//     }
//     else if(docs == null)
//     {
//         console.log("docs is NAN");
//     }
//     else
//     {
//         console.log("docs is nothing...");
//     }

//     if(docs.length==0)
//     {
//         console.log("no data");
//     }
//     else
//     {
//         console.log("have data");
//     }    
// });


//9.更新数据
//====================================== update and save
//第1个参数，可以传入筛选条件
Article.find({title:'TypeScript'}, function(err,docs:any){
    if(err)
    {
        console.log("mongodb find error.");
        return ;
    }    
    console.log("find2: "+ docs);  
    console.dir(docs);
    if(docs.length==0)
    {
        console.log("no data");
    }
    else
    {
        console.log("have data");
        ////修改数据
        docs[0].author = "aaaaa";
        //保存修改后的数据        
        docs[0].save();
    }    
});


// //10.删除数据
// //===================== remove()
// //第1个参数，可以传入筛选条件
// Article.find({}, function(err,docs:any){
//     if(err)
//     {
//         console.log("mongodb find error.");
//         return ;
//     }    
//     console.log("find3: "+ docs);  
//     console.dir(docs);
//     if(docs.length==0)
//     {
//         console.log("no data");
//     }
//     else
//     {        
//         console.log("have data");
//         docs.forEach(function(ele:any){

//             console.log(ele);
//             ele.remove();//===========删除数据
//         });
//     }    
// });


