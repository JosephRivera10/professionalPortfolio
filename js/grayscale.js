(function($) {

  "use strict"; // Start of use strict
  
$('.carousel').carousel()
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  //Enable tooltips
  // $('.expand').tooltip()



})(jQuery); // End of use strict

function showUserCode() {
  var x = document.getElementById("userCode");
  var y = document.getElementById("userCarousel");

  if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
  } else {
      x.style.display = "none";
      y.style.display = "block";
  }
}

function showIncidentCode() {
  var x = document.getElementById("incidentCode");
  var y = document.getElementById("incidentCarousel");

  if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
  } else {
      x.style.display = "none";
      y.style.display = "block";
  }
}

function showTeamCode() {
  var x = document.getElementById("teamCode");
  var y = document.getElementById("teamCarousel");

  if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
  } else {
      x.style.display = "none";
      y.style.display = "block";
  }
}

function showShowIncidentCode() {
  var x = document.getElementById("showIncidentCode");
  var y = document.getElementById("showIncidentCarousel");

  if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
  } else {
      x.style.display = "none";
      y.style.display = "block";
  }
}

