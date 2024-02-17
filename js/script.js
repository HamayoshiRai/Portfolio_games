$(function () {
  var loading = $("#js-loading");

  //ページの読み込みが完了後にアニメーションを非表示・MVの高さを調整
  $(window).on("load", function () {
    var windowHeight = $(window).height();
    $(".mv").height(windowHeight);
    loading.delay("1000").fadeOut("2000");
  });

  //ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
  setTimeout(function () {
    loading.fadeOut("3000");
  }, 8000);

  //画面リサイズ時にMVの高さを調整
  $(window).resize(function () {
    var windowHeight = $(window).height();
    $(".mv").height(windowHeight);
  });

  //ページ内スクロール
  $('a[href^="#"]').on("click", function () {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });
});