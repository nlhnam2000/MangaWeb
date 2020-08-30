const { ObjectId } = require('mongodb');

var MongoClient = require('mongodb').MongoClient; 
var url = 'mongodb://localhost:27017/'; 
var dbName = 'manga_web'; 
var Mangas = []; 
// var ObjectId = require('mongodb').ObjectID;

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, database) {
    var dbo = database.db(dbName); 
    // var cursor = dbo.collection('manga').find({name: "Doraemon"}); 
    // cursor.forEach(function(doc, err) {
    //     if (err) 
    //         throw err; 
    //     if (doc != null) 
    //         console.log(doc) 
    // });
    dbo.collection('manga').find({category: "Action"}).toArray(function(err, result) {
        for (var i = 0; i < result.length; i++) {
            Mangas.push(result.slice(i, i+1)); 
        }
        console.log(Mangas);
    })
}); 

// module.exports = Mangas; 