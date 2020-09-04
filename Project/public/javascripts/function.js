const searchBar = document.forms["search-form"].querySelector('input');

searchBar.addEventListener('keyup', function(e) {
    const term = e.target.value; 
    var div = document.getElementById('search-result'); 
    var li = div.getElementsByTagName('li'); 
    var a = document.querySelectorAll('#search-result ul li a'); 

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