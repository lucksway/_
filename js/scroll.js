// 메인배너 스크롤에 따른 크기 변경
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      var scrollPosition = window.scrollY;
      var myDiv = document.getElementById('banner');

      if (scrollPosition < 120) {
        banner.style.width = '100%';
        banner.style.height = '80vh';
      } else if (scrollPosition < 400) {
        banner.style.width = '80%';
        banner.style.height = '60vh';
      } else if (scrollPosition < 600) {
        banner.style.width = '60%';
        banner.style.height = '40vh';
      } else if (scrollPosition < 800) {
        banner.style.width = '40%';
        banner.style.height = '20vh';
      } else {
        banner.style.width = '0';
        banner.style.height = '0';
      }
    });
  });

// 스크롤 위치 확인
document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset;
    console.log('현재 스크롤 위치:', scrollPosition);
    });