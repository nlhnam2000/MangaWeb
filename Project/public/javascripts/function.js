// var MongoClient = require('mongodb').MongoClient; 
// //var url = 'mongodb+srv://hoangnam:khongbiet@webproject.s6fki.mongodb.net/manga_web?retryWrites=true&w=majority'; 
// var url = 'mongodb://localhost:27017/';
// var dbName = 'manga_web';

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
    const term = e.target.value; 
    var div = document.getElementById('search-result'); 
    var li = div.getElementsByTagName('li'); 
    var a = document.querySelectorAll('#search-result ul li a'); 
    // if (term == 'undefined') {
    //     div.style.display = 'none'; 
    // }
    for (var i = 0; i < a.length; i++) {
        text = a[i].innerText; 
        if (term == '') {
            div.style.display = 'none'; 
        }
        else if (text.toLowerCase().indexOf(term.toLowerCase()) !== -1) {
            div.style.display = 'block';
            li[i].style.display = ''; 
        }
        else {
            li[i].style.display = 'none'; 
        }
    }
})

