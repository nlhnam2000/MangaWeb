const { ObjectId } = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
var dbName = 'manga_web';
var Mangas = [];
// var ObjectId = require('mongodb').ObjectID;

// MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, database) {
//     var dbo = database.db(dbName); 
//     // var cursor = dbo.collection('manga').find({name: "Doraemon"}); 
//     // cursor.forEach(function(doc, err) {
//     //     if (err) 
//     //         throw err; 
//     //     if (doc != null) 
//     //         console.log(doc) 
//     // });
//     dbo.collection('manga').find({_id: ObjectId("5f42071c118ad61d5faa38f5")}).toArray(function(err, result) {
//         for (var i = 0; i < result.length; i++) {
//             for (var j = 0; j < result[i].chapter.length; j++) {
//                 Mangas.push(result[i].chapter.slice(j, j+1)); 
//             } 
//         }
//         console.log(Mangas);    
//     })
// }); 

var fs = require('fs');

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, database) {
    var dbo = database.db(dbName);
    var arr = [];
    fs.readdir('./public/images/Chapters/Haikyuu/Chap1', 'utf-8', (err, files) => {
        if (err) {
            console.log(err);
            return;
        } else {
            for (var file of files) {
                arr.push(file)
            }
            // console.log(arr); 
        }
        var temp = [];
        for (var i = 0; i < arr.length; i++) {
            temp[i] = 'images/Chapters/Haikyuu/Chap1/' + arr[i];
        }
        dbo.collection('manga').update({ name: 'Haikyuu' }, {
            $push: {
                chapter: { $each: temp }
            }
        })
    })
})

// module.exports = Mangas;