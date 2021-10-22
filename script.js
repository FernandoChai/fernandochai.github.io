const scriptURL = "https://script.google.com/macros/s/AKfycbwhMMjgzmfY2-hHJJKxrExPh6i85sT6vKEn7bg-Ywn1W53wclcXlVkQHqNrd2vkPFOB7w/exec";
const form = document.forms["contact-form"];
const btnSend = document.querySelector(".btn-send");
const btnLoad = document.querySelector(".btn-load");
const alerts = document.querySelector(".alert");
const navbar = document.querySelectorAll(".nav-link");
const more = document.querySelector(".more-about");
const navleft = document.querySelector(".navbar-brand");

//active navbar more about me
more.addEventListener("click", function () {
  var about = document.querySelector(".abt");
  var curr = document.getElementsByClassName("nav-link active");
  curr[0].classList.remove("active");
  about.className += " active";
});

//active navbar left (home)
navleft.addEventListener("click", function () {
  var home = document.querySelector(".home-nav");
  var curr = document.getElementsByClassName("nav-link active");
  curr[0].classList.remove("active");
  home.className += " active";
});

//active navbar
for (i = 0; i < navbar.length; i++) {
  navbar[i].addEventListener("click", function () {
    var curr = document.getElementsByClassName("nav-link active");
    curr[0].classList.remove("active");
    this.className += " active";
  });
}

var forms = document.querySelectorAll(".needs-validation");

const names = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

var count = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (names.value.length == 0) {
    names.classList.add("is-invalid");
    count++;
  } else {
    names.classList.remove("is-invalid");
    count--;
  }

  if (email.value.length == 0) {
    email.classList.add("is-invalid");
    count++;
  } else {
    email.classList.remove("is-invalid");
    count--;
  }

  if (message.value.length == 0) {
    message.classList.add("is-invalid");
    count++;
  } else {
    message.classList.remove("is-invalid");
    count--;
  }

  if (count > 0) {
    return false;
  } else {
    btnSend.classList.toggle("d-none");
    btnLoad.classList.toggle("d-none");
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        btnSend.classList.toggle("d-none");
        btnLoad.classList.toggle("d-none");
        alerts.classList.toggle("d-none");
        form.reset();
        console.log("Success!", response);
      })
      .catch((error) => console.error("Error!", error.message));
  }
});
