var form = document.getElementById("signupForm");
var firstName = document.getElementById("firstName");
var age = document.getElementById("age");
var gift = function (age) {
  return age + 3;
};
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (+age.value < 18) {
    console.log("Inscription refusée !");
  } else {
    console.log(
      "Bienvenue " +
        firstName.value +
        ", vous avez " +
        age.value +
        ". Vous aurez droit \u00E0 un cadeau quand vous aurez " +
        gift(+age.value)
    );
  }
});
