//Categories list//
let categoriesList = document.getElementsByClassName("categories-list")[0];

function generateListElement(photo) {
  return `
        <li>
            <a
                class="category-button"
                href="https://pinchofyum.com/recipes/quick-and-easy"
            >
                <img src="${photo.urls.regular}" alt="" />
                <span class="category-name">Vegan</span>
            </a>
        </li>
    `;
}

function getCategories() {
  const count = 8;
  const apiKey = `Y9lFDWqBGfIi7W2HpKfElFILUuo1C88SpqyuBoLc1TM`;
  let query = "food";
  let orientation = "squarish";
  const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=${orientation}&query=${query}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((response) => {
      categoriesList.innerHTML =
        "<ol>" +
        response.reduce((acc, photo) => {
          return acc + generateListElement(photo);
        }, "") +
        "</ol>";
    })
    .catch((err) => console.error(err));
}

getCategories();
