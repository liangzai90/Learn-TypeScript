import {MongoClient} from 'mongodb'
import { AssertionError } from 'assert';
import assert from 'assert'
import { readSync } from 'fs';
import { callbackify } from 'util';
let url = "mongodb://127.0.0.1"
//let client =  new MongoClient(url);


let data = [
    {id:1, title:"The 111 article"},
    {id:2, title:"The 222 article"},
    {id:3, title:"The 333 article"},
    {id:4, title:"The 444 article"}
];


//1.连接数据库服务器
MongoClient.connect(url, function(err,dbClient){   
    assert.equal(err, null);

    if(err){
        console.error("connect error");
        console.error(err);
        dbClient.close();
        return ;
    }
    else {

        
        //2.连接某个具体的数据库
        const personDB = dbClient.db('person');
        //3.连接数据库的某个表
        const studentCollection = personDB.collection('student');


        //4.插入数据
        //studentCollection.insert(data,(err,doc)=>{console.log(doc)});
        // data.forEach(function(doc){
        //     studentCollection.insertOne(doc, function(err, res){
        //         console.log(doc);
        //     });
        // });


        //5.查找
        let findObj = {id:2};
        studentCollection.find(findObj).toArray(function(err, arr){
            console.dir(arr);
            console.log(arr);
        });

        
        //6.删 age=18的一个用户
        // studentCollection.deleteOne({id:1}, function (err, dbResult) {
        // console.log(dbResult.result);
        //  })  

         //7.update 
         //
         let updateObj = {$set:{id:77}};
         studentCollection.updateOne({id:1},updateObj, function(err, result){} );

        
        console.log("db connect success.");
    }

    dbClient.close();
});
