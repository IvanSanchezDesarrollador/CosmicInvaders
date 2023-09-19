$(document).ready(function() {
  var viewport = $(window);
  var viewportX = viewport.width();
  var viewportY = viewport.height();

  for (i = 0; i < 500; i++) {
      var y = Math.floor((Math.random() * viewportY) + 1);
      var x = Math.floor((Math.random() * viewportX) + 1);
      $("body").append("<div class=\"star\" id=\"" + i + "\"></div>");
      $("#" + i).css({"top": y, "left": x});
  }

  var didResize = false;
  viewport.resize(function() {
      didResize = true;
  });

  setInterval(function() {
      if (didResize) {
          didResize = false;
          repositionStars();
      }
  }, 1000);

  function repositionStars() {
      $(".star").each(function() {
          var y = parseInt($(this).css("top"), 10);
          var x = parseInt($(this).css("left"), 10);
          var newY = y + 100 * (y / viewportY);
          var newX = x + 100 * (x / viewportX);
          $(this).css({"top": newY, "left": newX});
      });

      viewportY = viewport.height();
      viewportX = viewport.width();
  }
});
