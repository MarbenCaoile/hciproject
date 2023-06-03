$(document).ready(function(){
  // Toggle the "active" class on the navbar button
  $('.navbar-toggler').on('click', function(){
    $(this).toggleClass('active');
  });
  
  // Close the navbar when a link is clicked
  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
    $('.navbar-toggler').removeClass('active');
  });
});
