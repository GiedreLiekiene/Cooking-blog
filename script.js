
  //search-bar
  let search = document.querySelector(".search");
  let clear = document.querySelector(".clear");

  search.onclick = function () {
    document.querySelector(".search-container").classList.toggle('active');
  };

  clear.onclick = function () {
    document.getElementById("search").value = "";
  };