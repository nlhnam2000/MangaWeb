const likeButton = document.querySelector('#like-button'); 
likeButton.addEventListener('click', function() {
    if (this.classList.contains("fa-thumbs-up")) {
        this.classList.remove("fa-thumbs-up"); 
        this.classList.add("fa-thumbs-down"); 
    }
    else {
        this.classList.remove("fa-thumbs-down"); 
        this.classList.add("fa-thumbs-up"); 
    }
})
