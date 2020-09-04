var MongoClient = require('mongodb').MongoClient; 
//var url = 'mongodb+srv://hoangnam:khongbiet@webproject.s6fki.mongodb.net/manga_web?retryWrites=true&w=majority'; 
var url = 'mongodb://localhost:27017/';
var dbName = 'manga_web';
var ObjectId = require('mongodb').ObjectID;

const chapter = (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}, function(err, databse) {
        var id = req.params.id; 
        var mangaChapter = []; 
        var mangaDetail = []; 
        var dbo = databse.db(dbName);
        dbo.collection('manga').find({_id: ObjectId(id)}).toArray(function(err, result) {
            for (var i = 0; i < result.length; i++) {
                mangaDetail.push(result.slice(i, i+1)); 
                for (var j = 0; j < result[i].chapter.length; j++) {
                    mangaChapter.push(result[i].chapter.slice(j, j+1)); 
                } 
            }
            // console.log(mangaChapter);
            res.render('chapter', {title: 'Chap 1', mangaChapter: mangaChapter, mangaDetail: mangaDetail}); 
        })
    })
}

module.exports = {
    chapter
}