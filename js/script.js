var searchButton = document.querySelector(".button-search");
var popup = document.querySelector(".modal-search-form");

searchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
});

//
//window.addEventListener("keydown", function (evt) {
//    if (evt.keycode === 27) {
//
//        if  (popup.classList.contains("modal-show")) {
//            evt.preventDefault();
//            popup.classList.remove("modal-show");
//        }
//    }
//});
