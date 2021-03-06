$( document ).ready(function() {
    callme();
});

function hearts() {
  // Init
  var rand = Math.floor(Math.random() * 100 + 1);
  var flows = ["flowOne", "flowTwo", "flowThree"];
  var colors = ["colOne", "colTwo", "colThree", "colFour", "colFive", "colSix"];
  var timing = (Math.random() * (1.3 - 1.0) + 1.0).toFixed(1);
  // Animate Particle
  $(
    '<div class="particle part-' +
      rand +
      " " +
      colors[Math.floor(Math.random() * 6)] +
      '" style="font-size:' +
      Math.floor(Math.random() * (30 - 22) + 22) +
      'px;"><i class="cat-icon heart-icon"></i></div>'
  )
    .appendTo(".particle-box")
    .css({
      animation:
        "" + flows[Math.floor(Math.random() * 3)] + " " + timing + "s linear"
    });
  $(".part-" + rand).show();
  // Remove Particle
  setTimeout(function() {
    $(".part-" + rand).remove();
  }, timing * 1000 - 100);
};

function callme() {
  hearts();
  setTimeout(callme, 500);
}