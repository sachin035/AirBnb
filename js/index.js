function showmenu() {
  var x = document.getElementById("nav-user-profile-menu");

  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// function onanywhere() {
//   var x = document.getElementById("nav-search");
//   var y = document.getElementById("menu-tab");

//   if (x.style.display === "none" || x.style.display === "") {
//     x.style.display = "block";
//     y.style.display = "none";
//   } else {
//     x.style.display = "none";
//     y.style.display = "flex";
//   }
// }

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#categorysplide", {
    perPage: 17,
    pagination: false,
    rewind: true,
    // breakpoints: {
    //   640: {
    //     perPage: 1,
    //   },
    // },
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#cardsplide", {
    perPage: 1,
    pagination: true,
    rewind: true,
    arrow: true,
  }).mount();
});
