var MongoClient = require('mongodb').MongoClient;
//var url = 'mongodb+srv://hoangnam:khongbiet@webproject.s6fki.mongodb.net/manga_web?retryWrites=true&w=majority'; 
var url = 'mongodb://localhost:27017/';
var dbName = 'manga_web';

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const searchBar = document.forms["search-form"].querySelector('input');
// searchBar.addEventListener('keyup', function(e){
//     const term = e.target.value.toLowerCase(); 
//     var ul = document.getElementById("search-result"); 
//     var li = ul.getElementsByTagName("li"); 
//     for (var i = 0; i < li.length; i++) {
//         // text = li[i].innerText || li[i].innerHTML; 
//         li[i].innerText = term; 
//         if (li[i] == '') {
//             // ul.style.backgroundColor = '#204051'; 
//             ul.style.display = 'none'; 

//         } else {
//             ul.style.display = 'block'; 
//         }
//     }
// })

searchBar.addEventListener('keyup', function(e) {
    var ul = document.getElementById("search-result");
    const term = e.target.value.toLowerCase();
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, database) {
        var dbo = database.db(dbName);
        dbo.collection('manga').find({}).toArray(function(err, result) {
            for (var i = 0; i < result.length; i++) {
                var manga_name = result[i].name.toLowerCase();
                
                console.log(term);
            }
        })
    })
})