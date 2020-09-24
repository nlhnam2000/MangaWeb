var vote = document.querySelectorAll('a.dropdown-item.vote'); 
for (var i  = 0; i < vote.length; i++) {
    vote[i].addEventListener('click', function() {
        var star = this.innerText[0]; 
        alert(star);
    })
}