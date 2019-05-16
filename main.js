let homeClick = () => {    
    $(function(){
        $("#body-div").load("home.html");
    });
}
let paintingsClick = () => {
    $(function(){
        $("#body-div").load("paintings.html");
    });
}
let cvClick = () => {
    $(function(){
        $("#body-div").load("cv.html");
    });
}
let performancesClick = () => {
    $(function(){
        $("#body-div").load("performances.html");
    });
}
function emailFunc () {
    let emailBoy = document.querySelector("#emailText")
    $("#emailText").fadeOut()
    if(emailBoy.innerHTML === "tesskmartens@gmail.com") {
      $("#emailText").promise().done(()=> {
        emailBoy.innerHTML = "Let's Connect!"
        $("#emailText").fadeIn()
      })
    } else {
      $('#emailText').promise().done(() => {
        emailBoy.innerHTML = "tesskmartens@gmail.com"
        $("#emailText").fadeIn()
      })
    }
  }

  // Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}