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




// 일정 위치에서 스크롤 색상 변경
window.addEventListener('scroll', function() {
  var scrollThreshold = 647;
  var targetColor = window.scrollY > scrollThreshold ? '#1A1A1A' : '';

  // 배경색 변경
  document.body.style.backgroundColor = targetColor;

  // 다른 div에 filter 적용
  var invertDivs = document.getElementsByClassName('logo');
  for (var i = 0; i < invertDivs.length; i++) {
      if (window.scrollY > 647 && window.scrollY <= 2010) { // 200과 1200 사이에 있을 때 invert 적용
          invertDivs[i].style.filter = 'invert(100%)';
      } else {
          invertDivs[i].style.filter = ''; // 기본 filter 적용
      }
  }

  // 배경색이 1200 이상일 때 다시 돌아오도록
  if (window.scrollY > 2010) {
      document.body.style.backgroundColor = ''; // 기본 배경색으로 변경

      // 로고의 반전된 색상도 다시 원래대로 돌아오게 설정
      for (var i = 0; i < invertDivs.length; i++) {
          invertDivs[i].style.filter = ''; // 기본 filter 적용
      }
  }
});

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY || window.pageYOffset;

  // 스크롤 위치가 647 이상이면 con1_t 클래스를 가진 요소의 color를 변경
  if (scrollPosition >= 647 && scrollPosition < 2010) {
      var con1TElements = document.getElementsByClassName('con1_t');
      for (var i = 0; i < con1TElements.length; i++) {
          con1TElements[i].style.color = '#FFF'; // color를 흰색(#FFF)으로 변경
      }

      // con1_c1 h3 요소의 스타일 변경
      var h3Element = document.querySelector('.con1_c1 h3');
      h3Element.style.backgroundColor = '#FFF';
      h3Element.style.color = '#1A1A1A';
  } else {
      var con1TElements = document.getElementsByClassName('con1_t');
      for (var i = 0; i < con1TElements.length; i++) {
          con1TElements[i].style.color = ''; // 기본 색상으로 변경
      }

      // con1_c1 h3 요소의 스타일 변경
      var h3Element = document.querySelector('.con1_c1 h3');
      h3Element.style.backgroundColor = ''; // 기본 색상으로 변경
      h3Element.style.color = ''; // color를 흰색(#FFF)으로 변경
  }
});

// 콘텐츠1 텍스트 위치 이동 애니메이션
window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY; // 스크롤 위치를 가져옴
  var targetPosition1 = 500; // 첫 번째 특정 스크롤 위치 설정
  var targetPosition2 = 700; // 두 번째 특정 스크롤 위치 설정
  var targetPosition3 = 900; // 세 번째 특정 스크롤 위치 설정
  var targetPosition4 = 1100; // 네 번째 특정 스크롤 위치 설정
  var con1_c1 = document.querySelector('.con1_c1');

  if (scrollTop >= targetPosition4) {
      con1_c1.style.transform = 'translate(0, 0px)'; // 스크롤 위치가 네 번째 구간 이상인 경우
  } else if (scrollTop >= targetPosition3) {
      con1_c1.style.transform = 'translate(0, 50px)'; // 스크롤 위치가 세 번째 구간 이상인 경우
  } else if (scrollTop >= targetPosition2) {
      con1_c1.style.transform = 'translate(0, 100px)'; // 스크롤 위치가 두 번째 구간 이상인 경우
  } else if (scrollTop >= targetPosition1) {
      con1_c1.style.transform = 'translate(0, 200px)'; // 스크롤 위치가 첫 번째 구간 이상인 경우
  } else {
      con1_c1.style.transform = 'translate(0, 300px)';
  }
});