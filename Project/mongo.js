const { ObjectId } = require('mongodb');

var MongoClient = require('mongodb').MongoClient; 
var url = 'mongodb://localhost:27017/'; 
var dbName = 'manga_web'; 
var Mangas = []; 
// var ObjectId = require('mongodb').ObjectID;

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, database) {
    var dbo = database.db(dbName); 
    var cursor = dbo.collection('manga').find({_id: ObjectId("5f42071c118ad61d5faa38f5")}); 
    cursor.forEach(function(doc, err) {
        if (err) 
            throw err; 
        if (doc != null) 
            console.log(typeof(doc.name)) 
    });
}); 

// module.exports = Mangas; 