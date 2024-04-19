

$(window).scroll(function() {
  var windowScroll = $(window).scrollTop();
  var keywordsOffset = $('.keywords').offset().top;

  if (windowScroll + $(window).height() > keywordsOffset) {
    $('.count_num').each(function() {
      var $this = $(this);
      var countTo = $this.attr('data-count');

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo
        },
        {
          duration: 1300,
          easing: 'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        }
      );
    });
  }
});