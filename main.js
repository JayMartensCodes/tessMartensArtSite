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
  