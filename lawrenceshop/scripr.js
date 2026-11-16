const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const closeBtn = document.getElementById("closeBtn");

searchBtn.addEventListener("click", function(){
    if(searchBar.style.display === "none"){
        searchBar.style.display = "flex"
    }else{
        searchBar.style.display = "none";
    }
});

closeBtn.addEventListener("click", function(){
    searchBar.style.display = "none";
});