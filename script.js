let starCont = document.querySelector(".star-cont");
let ratingCont = document.querySelector(".rating-count");
let allStars = document.querySelectorAll(".star");
let reatingId = document.getElementById("ratingId");

starCont.addEventListener("click",(e)=>{
    if (e.target.classList.contains("star")) {
        let clickedStar = parseInt(e.target.getAttribute("data-value"));
        for(let i = 0; i<allStars.length;i++){
            allStars[i].classList.remove("gold");
            if(i < clickedStar){
                allStars[i].classList.add("gold");
            }
            reatingId.innerText = `${clickedStar}`;
        }
    }
});