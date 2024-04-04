window.onload = function() {
  window.scrollTo(0, 0);
}


// 메뉴바 버튼을 클릭시 메뉴바 확장
var toggleButtons = document.getElementsByClassName('toggleButton');
for (var i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener('click', function() {
        this.classList.toggle('checked');
        document.getElementById('clickmenu').classList.toggle('checked');
        document.getElementById('mlist').classList.toggle('checked');
        document.getElementById('mline1').classList.toggle('checked');
        document.getElementById('mline2').classList.toggle('checked');
        document.getElementById('menuc').classList.toggle('checked');
        document.getElementById('clickbg').classList.toggle('checked');
        document.getElementById('mtext').classList.toggle('checked');
        document.getElementById('logo_c').classList.toggle('checked');
    });
}
// 어두워진 배경 클릭시 메뉴바 닫기
document.getElementById('undoButton').addEventListener('click', function() {
  // 'checked' 클래스를 제거하여 이전 상태로 되돌리기
  var checkedElements = document.querySelectorAll('.checked');
  for (var j = 0; j < checkedElements.length; j++) {
      checkedElements[j].classList.remove('checked');
  }
});


// 인트로 스크롤 3단
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  console.log('스크롤 위치:', scrollPosition);
});

window.addEventListener('scroll', function() {
  var scrollPositionVH = window.scrollY / window.innerHeight * 100; // 스크롤 위치를 vh 단위로 계산
  var opacity = 1 - Math.min(scrollPositionVH / 70, 1); // 스크롤 위치에 따라 투명도를 계산 (0에서 1로 정규화)
  var luckswayHeight = (scrollPositionVH - 100) / 70 * 100; // lucksway2024 요소의 높이를 계산 (0%에서 100%까지)

  // 스크롤에 따른 화면 전환
  if (scrollPositionVH > 380) {
    document.getElementById('sub1_c').style.transform = 'translateY(0vh)';
    document.getElementById('fullpage').style.transform = 'translate(0, -300vh)';
    document.getElementById('logo_1').style.filter = 'invert(0%)'
    document.getElementById('section3_bg_c').style.transform = 'translateY(-100vh)';
    document.getElementById('section3_bg').style.filter = 'blur(0px)';
  } else if (scrollPositionVH > 300) {
    document.getElementById('sub1_c').style.transform = 'translateY(80vh)';
    document.getElementById('fullpage').style.transform = 'translate(0, -200vh)';
    document.getElementById('logo_1').style.filter = 'invert(100%)'
    document.getElementById('section3_bg_c').style.transform = 'translateY(0vh)';
    document.getElementById('section3_bg').style.filter = 'blur(13px)';

    document.getElementById('sec3_t1').style.transform = 'translate(0, 0%) rotate(0deg)';
    document.getElementById('split_c1').style.transform = 'translate(0, 0%) rotate(0deg)';
    document.getElementById('split_c2').style.transform = 'translate(0, 0%) rotate(0deg)';
    document.getElementById('split_c3').style.transform = 'translate(0, 0%) rotate(0deg)';
    document.getElementById('split_c4').style.transform = 'translate(0, 0%) rotate(0deg)';
    document.getElementsByTagName('h3')[0].style.opacity = '1';
  } else if (scrollPositionVH > 100) {
    document.getElementById('fullpage').style.transform = 'translate(0, -100vh)';
    document.getElementById('logo_1').style.filter = 'invert(100%)'
    document.getElementById('section3_bg_c').style.transform = 'translateY(0vh)';
    document.getElementById('section3_bg').style.filter = 'blur(0px)';
  } else {
    document.getElementById('fullpage').style.transform = 'translate(0, 0)';
    document.getElementById('logo_1').style.filter = 'invert(0%)'
    document.getElementById('section3_bg_c').style.transform = 'translateY(100vh)';
  }

  // 풀페이지 트랜지션 적용
  if (scrollPositionVH > 10) {
    document.getElementById('fullpage').style.transition = 'transform 0.5s';
  } else {
    document.getElementById('fullpage').style.transition = 'none';
  } 

  // 섹션 3번 스크롤에 따른 텍스트 스플릿 애니메이션
  if (scrollPositionVH > 250) {
    document.getElementsByTagName('h3')[0].style.opacity = '1';
  } else if (scrollPositionVH > 225) {
    document.getElementById('split_c4').style.transform = 'translate(0, 0%) rotate(0deg)';
    document.getElementsByTagName('h3')[0].style.opacity = '0';
  } else if (scrollPositionVH > 200) {
    document.getElementById('split_c3').style.transform = 'translate(0, 0%) rotate(0deg)';
    document.getElementById('split_c4').style.transform = 'translate(0, 400%) rotate(-8deg)';
  } else if (scrollPositionVH > 175) {
    document.getElementById('split_c2').style.transform = 'translate(0, 0%) rotate(0deg)';
    document.getElementById('split_c3').style.transform = 'translate(0, 400%) rotate(-8deg)';
  } else if (scrollPositionVH > 150) {
    document.getElementById('split_c1').style.transform = 'translate(0, 0%) rotate(0deg)';
    document.getElementById('split_c2').style.transform = 'translate(0, 400%) rotate(-8deg)';
  } else if (scrollPositionVH > 125) {
    document.getElementById('sec3_t1').style.transform = 'translate(0, 0%) rotate(0deg)';
    document.getElementById('split_c1').style.transform = 'translate(0, 400%) rotate(-8deg)';
  } else {
    document.getElementById('sec3_t1').style.transform = 'translate(0, 250%) rotate(-8deg)';
    document.getElementById('split_c1').style.transform = 'translate(0, 400%) rotate(-8deg)';
    document.getElementById('split_c2').style.transform = 'translate(0, 400%) rotate(-8deg)';
    document.getElementById('split_c3').style.transform = 'translate(0, 400%) rotate(-8deg)';
    document.getElementById('split_c4').style.transform = 'translate(0, 400%) rotate(-8deg)';
    document.getElementsByTagName('h3')[0].style.opacity = '0';
  } 
  

  // lucksin 클래스를 가진 요소의 투명도를 계산된 값으로 설정
  var lucksinElements = document.querySelectorAll('.lucksin');
  lucksinElements.forEach(function(element) {
    element.style.opacity = opacity;
  });
});


// 웹진 4가지
const webs = [
  document.getElementById('web1'),
  document.getElementById('web2'),
  document.getElementById('web3'),
  document.getElementById('web4')
];
// 웹진 호버효과 구현
webs.forEach((web, index) => {
  web.addEventListener('mouseover', () => {
    resetWidths();
    web.style.width = '100%';
  });

  web.addEventListener('mouseout', () => {
    resetWidths();
  });
});

function resetWidths() {
  webs.forEach(web => {
    web.style.width = '';
  });
}
