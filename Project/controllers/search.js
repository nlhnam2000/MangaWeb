var MongoClient = require('mongodb').MongoClient; 
//var url = 'mongodb+srv://hoangnam:khongbiet@webproject.s6fki.mongodb.net/manga_web?retryWrites=true&w=majority'; 
var url = 'mongodb://localhost:27017/';
var dbName = 'manga_web';
// var ObjectId = require('mongodb').ObjectID;

const searching = (req, res) => {
    var mangaNew = [];
    var topMonth = [];
    var topWeek = [];
    var topDay = [];
    var mangaSearch = [];
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, database) {
        var manga_search = req.query.q.toLowerCase();
        var dbo = database.db(dbName);  
        dbo.collection('manga').find({}).toArray(function(err, result) {
            if (err) throw err; 
            for (var i = 0; i < result.length; i++) {
                var manga_name = result[i].name.toLowerCase(); 
                if (manga_name.indexOf(manga_search) !== -1) {
                    mangaSearch.push(result.slice(i, i+1)); 
                }
                // else {
                //     res.send('<h1 style="text-align: center;">NOT FOUND</h1>');
                // }
            }
        })
        dbo.collection('manga').find({ isNew: true }).toArray(function (err, result) {
            for (var i = 0; i < result.length; i++) {
                mangaNew.push(result.slice(i, i + 1));
            }
        })  
        dbo.collection('manga').find({ topMonth: true }).toArray(function (err, result) {
            for (var i = 0; i < result.length; i++) {
                topMonth.push(result.slice(i, i + 1));
            }
        })  
        dbo.collection('manga').find({ topWeek: true }).toArray(function (err, result) {
            for (var i = 0; i < result.length; i++) {
                topWeek.push(result.slice(i, i + 1));
            }
        })  
        dbo.collection('manga').find({ topDay: true }).toArray(function (err, result) {
            for (var i = 0; i < result.length; i++) {
                topDay.push(result.slice(i, i + 1));
            }
            // console.log(mangaSearch); 
            res.render('search', { title: 'Search result', mangaSearch: mangaSearch, mangaNew: mangaNew, topMonth: topMonth, topWeek: topWeek, topDay: topDay });
        })
    }); 

}

module.exports = {
    searching
}