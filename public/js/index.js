// hide menu bar in mobile view

const button = document.querySelector('.menu-btn');
const menu = document.querySelector('nav ul');

// function to change nav view style is linked to button click
button.addEventListener('click', function () {
  menu.classList.toggle('visible');

});

// gallery section in index page //
// function to render a JSON list when fetched//

fetch('http://localhost:3000/api/destinations') 
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const imgList = data;
    let imgtemplate = '';
    let image = document.querySelector('.img-container');
    imgList.forEach(function (item) {
      imgtemplate += 
      `<figure>
      <a href="destinations/${item.id}"><img src="${item.src}" alt="${item.alt}"></a>
      <figcaption>${item.alt}</figcaption>
      </figure>`;
      console.log(imgtemplate);
    });
    image.innerHTML = imgtemplate;
  });



