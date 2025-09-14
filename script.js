$(document).ready(function() {
  // Learn More button action
  $("#learnMoreBtn").click(function() {
    alert("Welcome to my portfolio website! Check out Resume & Bio Data sections.");
  });

  // Navigation hover effect (extra)
  $("nav ul li a").hover(
    function() {
      $(this).css("background", "#16a085");
    },
    function() {
      if (!$(this).hasClass("active")) {
        $(this).css("background", "transparent");
      }
    }
  );
});
