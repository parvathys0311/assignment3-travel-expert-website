
// highlights current page in navigation

let urlString = document.location.href;
let urlArray = urlString.split('/');
let currentURL = urlArray[urlArray.length-1];
console.log(currentURL);

let links = document.querySelectorAll('nav li a')
// console.log(links);

links.forEach(function (item) {
  let pageUrl = item.href.split("/");
  console.log(pageUrl);
  if(pageUrl[pageUrl.length-1] == currentURL) {
    item.className = "current";
  }
});