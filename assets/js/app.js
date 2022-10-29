function moreText(){
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("btnShowMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "بیشتر <i class=\"bi bi-caret-left\"></i>";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "کمتر <i class=\"bi bi-caret-right\"></i>";
        moreText.style.display = "inline";
    }
}