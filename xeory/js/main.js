$(function() {

  // 横幅990px以上でモバイルメニューを非表示にする
  $(window).resize(function() {
    let w = $(window).width();
    if ( w >= 990) {
      $('.mobile-menu').removeClass('open').hide();
    }
  });

  // ハンバーガーメニューを表示/非表示
  $('.ham-menu').on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    let $menu = $('.mobile-menu');
    $menu.slideToggle(400).toggleClass('open');
  });

  // モバイルメニュー以外をクリックしてもメニューを閉じる
  $('html').on('click', function() {
    let $menu = $('.mobile-menu');
    if ( $menu.hasClass('open') ) {
      $menu.removeClass('open').slideUp(400);
    }
  });

  // トップへ戻るボタンを表示
  $(window).on('scroll', function() {
    let scrollValue = $(window).scrollTop();
    let $pageTop = $('.pagetop');
    let $inquiry = $('.inquiry');
    let posY = $inquiry.offset().top;
    if ( scrollValue >= 150 ) {
      $pageTop.show();
      // スクロール位置がフッターを下回ったら戻るボタンを固定する
      if ( scrollValue > posY ) {
        $inquiry.css('position', 'relative');
        $pageTop.css('position', 'absolute');
      } else if ( scrollValue <= posY ) {
        $inquiry.css('position', '');
        $pageTop.css('position', 'fixed');
      }
    } else {
      $pageTop.hide();
    }
  });

});