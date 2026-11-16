const btn = document.getElementById("searchbar");
const xbtn = document.querySelector("#xButton");
const search = document.querySelector("#search");
const typeBox = document.getElementById("type-box");
const cards = document.querySelectorAll(".product-card");


btn.addEventListener("click",function(){
if(search.style.display === "flex"){
 search.style.display = "none"
}
else(
    search.style.display = "flex"
)
});



typeBox.addEventListener("input", function () {
  const query = typeBox.value.toLowerCase().trim();

  cards.forEach(function (card) {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(query) ? "" : "none";
  });
});