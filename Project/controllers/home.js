var MongoClient = require('mongodb').MongoClient; 
//var url = 'mongodb+srv://hoangnam:khongbiet@webproject.s6fki.mongodb.net/manga_web?retryWrites=true&w=majority'; 
var url = 'mongodb://localhost:27017/';
var dbName = 'manga_web';

const homePage = (req, res) => {
    var mangaUpdated = [];
    var mangaNew = [];
    var topMonth = [];
    var topWeek = [];
    var topDay = [];
    var searchResult = []; 

    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, database) {
        var dbo = database.db(dbName);  
        dbo.collection('manga').find({ isUpdate: true }).toArray(function (err, result) {
            for (var i = 0; i < result.length; i++) {
                mangaUpdated.push(result.slice(i, i + 1));
            }
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
            // res.render('index', { title: 'Home Page', mangaUpdated: mangaUpdated, mangaNew: mangaNew, topMonth: topMonth, topWeek: topWeek, topDay: topDay });
        })

        const searchBar = document.forms["search-form"].querySelector('input');
        searchBar.addEventListener('keyup', function(e) {
            const term = e.target.value.toLowerCase(); 
            dbo.collection('manga').find({}).toArray(function(err, result) {
                if (err) throw err; 
                for (var i = 0; i < result.length; i++) {
                    var manga_name = result[i].name.toLowerCase();
                    if (manga_name.indexOf(term) !== -1) {
                        searchResult.push(resul.slice(i, i+1)); 
                    }
                }
                res.render('index', { title: 'Home Page', searchResult: searchResult, mangaUpdated: mangaUpdated, mangaNew: mangaNew, topMonth: topMonth, topWeek: topWeek, topDay: topDay });
            })
        }) 
    }); 
}

module.exports = {
    homePage
}