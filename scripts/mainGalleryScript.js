const mainGallery = document.getElementById("main-gallery");

let photoArray = [];
const count = 4;
const apiKey = `vMVc2XgqeMhK1ueY1zujR8urrmzAQfcCm6VDZ2yZnEI`;
let query = "food";
let orientation = "portrait";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=${orientation}&query=${query}`;

function setAttribute(element, atributes) {
  for (const key in atributes) {
    element.setAttribute(key, atributes[key]);
  }
}

function displayPhotos() {
  photoArray.forEach((photo) => {
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    item.appendChild(img);
    mainGallery.appendChild(item);
  });
}

async function getPhotos() {
  try {
    const responce = await fetch(apiUrl);
    photoArray = await responce.json();
    displayPhotos();
  } catch (error) {}
}
getPhotos();
