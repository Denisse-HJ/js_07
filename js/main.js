var imageElem = document.querySelector('img');

var imageForm = document.getElementById('img');

if(!localStorage.getItem('img')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem('img', document.getElementById('img').value);

  setStyles();
}

function setStyles() {
  var currentImage = localStorage.getItem('img');
  document.getElementById('img').value = currentImage;

  imageElem.setAttribute('src', currentImage);
}

imageForm.onclick = populateStorage;