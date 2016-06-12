$(document).ready(function(){
  //Load page partials
  $("#nav").load("views/nav.html")
  $("#sponsors-section").load("views/sponsors.html")
  $("#contact-form").load("views/contact.html")
  $("#footer").load("views/footer.html")
  var body = document.querySelector("body")
  body.style.display = "block"

  setTimeout(function(){
    $("#menu-hamburger").on("click", function(){
      $("#menu-list").toggleClass("hide")
    })
  },250)







})
