




$(document).ready(function(){



$("#beginBtn").on("click", function(){


$("#start").css('display','none')

$("#content").css('display','inherit')

$('body').css('background','#F9F9F9')

var promise = document.querySelector('video').play();

if (promise !== undefined) {
  promise.then(_ => {
    // Autoplay started!
  }).catch(error => {
    // Autoplay was prevented.
    // Show a "Play" button so that user can start playback.
  });
}



})


})