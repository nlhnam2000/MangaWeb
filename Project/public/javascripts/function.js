const searchBar = document.forms["search-form"].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value; 
    console.log(term);
})