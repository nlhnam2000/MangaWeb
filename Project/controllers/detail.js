const { response } = require('../app');

// const { ResumeToken } = require('mongodb');
var MongoClient = require('mongodb').MongoClient; 
//var url = 'mongodb+srv://hoangnam:khongbiet@webproject.s6fki.mongodb.net/manga_web?retryWrites=true&w=majority'; 
var url = 'mongodb://localhost:27017/';
var dbName = 'manga_web';
var ObjectId = require('mongodb').ObjectID;



const detail = (req, res) => {
    var id = req.params.id; 
    var mangaDetail = []; 
    var mangaNew = [];
    var topMonth = [];
    var topWeek = [];
    var topDay = [];
    var allManga = [];
    var titlePage;

    MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, database) {
        var dbo = database.db(dbName); 
        dbo.collection('manga').find({}).toArray(function(err, result) {
            for (var i = 0; i < result.length; i++) {
                allManga.push(result.slice(i, i+1)); 
            }
        })
        dbo.collection('manga').find({ _id: ObjectId(id) }).toArray(function(err, result) {
            for (var i = 0; i < result.length; i++) {
                mangaDetail.push(result.slice(i, i + 1));
            }
            // console.log(mangaDetail);
        })
        // get the title for each manga
        var cursor = dbo.collection('manga').find({_id: ObjectId(id)}); 
        cursor.forEach(function(result, err) {
            if (err) 
                throw err; 
            if (result != null) 
                titlePage = result.name; 
        });
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
            res.render('detail', { title: titlePage + ' | Manga Website', allManga: allManga, mangaDetail: mangaDetail, mangaNew: mangaNew, topMonth: topMonth, topWeek: topWeek, topDay: topDay });
        })
    })
}

const category = (req, res) => {
    var allManga = []; 
    MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, database) {
        var dbo = database.db(dbName); 
        dbo.collection('manga').find({}).toArray(function(err, result) {
            for (var i = 0; i < result.length; i++) {
                allManga.push(result.slice(i, i+1)); 
            }
            res.render('category', {title: 'Thể loại', allManga: allManga})
        })
    })
    
}

const comment = (req, res) => {
    var id = req.params.id; 
    MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, database) {
        var dbo = database.db(dbName); 
        dbo.collection('manga').update({_id: ObjectId(id)}, {$push: {
            comments: {
                username: req.body.username,
                comment: req.body.comment,
                date: new Date()
            }
        }}), function(err) {
            if (err) throw err;
        }
        res.redirect('/manga/'+id);  // reload the page to see the new comments
    })
}

module.exports = {
    detail,
    category, 
    comment
}