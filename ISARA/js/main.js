$(function() {

  // トップへ戻るボタン表示
  $(window).scroll(function() {
    let posY = $(this).scrollTop();
    let $scrollTop = $('.scroll-top');
    console.log(posY);
    if (posY >= 60) {
      $scrollTop.fadeIn();
    } else {
      $scrollTop.fadeOut();
    }
  });

  // トップへ戻るボタンクリック
  $('.scroll-top').on('click', function() {
    $('html, body').animate(
      {scrollTop: 0}, 500);
  });

  // 受講の流れモバイルメニュー開閉
  $('.course-mbmenu-heading').on('click', function() {
    let $clickedContent = $(this).siblings('.course-mbmenu-content');
    let $arrowIcon = $(this).find('.fas')
    let $otherMenu = $(this).parent().siblings('.course-mbmenu').find('.course-mbmenu-content');
    let $otherIcon = $otherMenu.siblings('.course-mbmenu-heading').find('.fa-angle-up');
    // 他のメニューを閉じる
    if ($otherMenu.hasClass('open')) {
      $otherMenu.slideUp(300).addClass('close').removeClass('open');
      if ($otherIcon.hasClass('arrow-open')) {
        $otherIcon.addClass('arrow-hidden').removeClass('arrow-open');
        $otherIcon.prev().addClass('arrow-open').removeClass('arrow-hidden');
      }
    }
    // クリックされたメニューを開閉する
    if ($clickedContent.hasClass('close')) {
      $clickedContent.slideDown(300).removeClass('close').addClass('open');
      $arrowIcon.eq(0).addClass('arrow-hidden').removeClass('arrow-open');
      $arrowIcon.eq(1).removeClass('arrow-hidden').addClass('arrow-open');
    } else {
      $clickedContent.slideUp(300).addClass('close').removeClass('open');
      $arrowIcon.eq(0).removeClass('arrow-hidden').addClass('arrow-open');
      $arrowIcon.eq(1).addClass('arrow-hidden').removeClass('arrow-open');
    }
  });

  // FAQメニューの開閉
  $('.faq-question').on('click', function() {
    let $arrowIcon = $(this).find('.fas');
    let $answer = $(this).siblings('.faq-answer')
    if ($arrowIcon.eq(0).hasClass('arrow-open')) {
      $arrowIcon.eq(0).addClass('arrow-hidden').removeClass('arrow-open');
      $arrowIcon.eq(1).addClass('arrow-open').removeClass('arrow-hidden');
      $answer.slideDown(300);
    } else {
      $arrowIcon.eq(0).removeClass('arrow-hidden').addClass('arrow-open');
      $arrowIcon.eq(1).removeClass('arrow-open').addClass('arrow-hidden');
      $answer.slideUp(300);
    }
  });
});