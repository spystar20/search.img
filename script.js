// id6T79128Mii1nPVcEBzhHrAXHuJO2xoDwr4As8K1lk
// <https://api.unsplash.com/search/photos?page=1&query=office
const form = document.getElementById("form");
const searchBox = document.getElementById("searchbox");
const search = document.querySelector(".search");
const loadMore = document.querySelector(".loadmore");
const searchResult = document.querySelector(".searchresult");
const apiKey = "BGaKZxtmKx7pqHxetw1TBS0dXth6ASgyWTQhSAwq4oI";
let page = 1;
let keyword = "";
async function imageSearch() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;

  // if (page===1) {
  //   searchResult ="";
  // }
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.full;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });

  loadMore.style.visibility ="visible"
}
search.addEventListener("click", () => {
  page = 1;
  imageSearch();
  // loadMore.style.visibility ="visible"
});

loadMore.addEventListener("click", () => {
  page++;
  imageSearch();
});

