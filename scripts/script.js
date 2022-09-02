
// const mainGallery = document.getElementById("main-gallery");

// let photoArray = [];
// const count = 4;
// const apiKey = `A9iQSfqWlY7erJtTYD5BSrKuZLlEBU5Pv_y3S4ZtVYU`;
// let query = "food";
// let orientation = "portrait";
// const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=${orientation}&query=${query}`;

// function setAttribute(element, atributes) {
//   for (const key in atributes) {
//     element.setAttribute(key, atributes[key]);
//   }
// }

// function displayPhotos() {
//   photoArray.forEach((photo) => {
//     const item = document.createElement("a");
//     item.setAttribute("href", photo.links.html);
//     item.setAttribute("target", "_blank");
//     const img = document.createElement("img");
//     img.setAttribute("src", photo.urls.regular);
//     img.setAttribute("alt", photo.alt_description);
//     img.setAttribute("title", photo.alt_description);
//     item.appendChild(img);
//     mainGallery.appendChild(item);
//   });
// }

// async function getPhotos() {
//   try {
//     const responce = await fetch(apiUrl);
//     photoArray = await responce.json();
//     displayPhotos();
//   } catch (error) {}
// }
// getPhotos();

//search-bar
let search = document.querySelector(".search");
console.log(search)
let clear = document.querySelector(".clear");
let input = document.getElementById("search");

search.onclick = function () {
  document.querySelector(".search-container").classList.toggle("active");
  getBack(input.innerHTML.length)
};

clear.onclick = function () {
  document.getElementById("search").value = "";
};

clear.ondblclick = function () {
  document.querySelector(".search-container").classList.toggle("active", false);
};

function inactive (ms) {
    return setTimeout(() => {}, ms);
};

function getBack(input) {
    inactive(3000);
    return (input === 0) =  document.querySelector(".search-container").classList.toggle('active', false);
}
