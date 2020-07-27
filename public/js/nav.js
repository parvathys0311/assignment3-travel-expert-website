
// highlights current page in navigation

let urlString = document.location.href;
let urlArray = urlString.split('/');
let currentURL = urlArray[urlArray.length-1];
// console.log(currentURL);

let nav = document.querySelectorAll('nav li')
let links = document.querySelectorAll('nav li a')
// console.log(links);

links.forEach(function (item) {
  let pageUrl = item.href.split("/");

  // specific for index page on first loading of website - but does not work
  if (currentURL == "") {
    console.log(true)
    nav[0].classList.add("current");
  }
  
  if(pageUrl[pageUrl.length-1] == currentURL) {
    nav[1].classList.toggle("current");
    item.className = "current";
  }
});