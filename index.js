document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
});


document.addEventListener( "DOMContentLoaded", function () {
updateDOM()
} );


function updateDOM() {
document.getElementById( "text" )
  .innerHTML = "This is really cool!";
}
