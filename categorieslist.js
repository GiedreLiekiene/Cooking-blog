//Categories list//
const categoriesList = document.getElementById("Categories-list");

function displayPhotos() {
  photoArray.forEach((photo) => {
    const item = document.createElement("li");
    item.innerHTML = `
            <a
                class="category-button"
                href="https://pinchofyum.com/recipes/quick-and-easy"
            >
                <img src="${photo}" alt="" />
                <span class="category-name">${title}</span>
            </a>
        `;
    mainGallery.appendChild(item);
  });
}
