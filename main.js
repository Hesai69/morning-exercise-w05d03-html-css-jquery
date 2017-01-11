var colors = ['pink', 'gray', 'black', 'blue', 'white', 'green', 'yellow', 'red', 'orange', 'purple', 'magenta'];
var boxColor = function() {
  return colors[ Math.floor( Math.random() * colors.length ) ];
};

$('#bigBox').click(function() {
  $('.boxes').each( function(el) {
    $(this).css('background-color', boxColor);
  });
});

$('#middle').click(function(event) {
  event.stopPropagation();
  $('#bigBox').css('background-color', boxColor);
});

$('#left').click(function(event) {
  event.stopPropagation();
  $('#left').siblings().css('background-color', boxColor);
});

$('#right').click(function(event) {
  event.stopPropagation();
  $('#right').siblings().css('background-color', boxColor);
});
