//Categories list//
let categoriesList = document.getElementsByClassName("categories-list")[0];

function generateListElement(photo, name) {
  return `
        <li>
            <a
                class="category-button"
                href="${photo.links.html}"
            >
                <img src="${photo.urls.regular}" alt="" />
                <span class="category-name">${name}</span>
            </a>
        </li>
    `;
}

function getCategories() {
  const count = 8;
  const apiKey = `Xli1bQqfh8XxWm-XNRW5cJkE3AD0di4DYmFvWYvQBkw`;
  let query = "food";
  let orientation = "squarish";
  const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=${orientation}&query=${query}`;

  let categoryNames = [
    "Dinner",
    "Vegetarian",
    "Healthy",
    "Vegan",
    "Dessert",
    "Soups",
    "Salads",
    "Breakfast",
  ];

  fetch(apiUrl)
    .then((response) => response.json())
    .then((response) => {
      categoriesList.innerHTML =
        "<ol>" +
        response.reduce((acc, photo, currentIndex) => {
          return acc + generateListElement(photo, categoryNames[currentIndex]);
        }, "") +
        "</ol>";
    })
    .catch((err) => console.error(err));
}

getCategories();
