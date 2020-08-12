function Vote(x) {
    // kiểm tra button có chứa icon like
    // nếu có, xoá like, thêm dislike và ngược lại
    if (x.classList.contains("fa-thumbs-up")) {
        x.classList.remove("fa-thumbs-up"); 
        x.classList.add("fa-thumbs-down"); 
    }
    else {
        x.classList.remove("fa-thumbs-down"); 
        x.classList.add("fa-thumbs-up"); 
    }
}