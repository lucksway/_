// 마우스 포인터
// $(document).ready(function(){
//   var $mousePointer = $('#mouse_pointer'),
//   $clickElements = $('a, img');

//   function moveCursor(e){
//     $mousePointer.css({
//       "left": e.pageX + "px",
//       "top": e.pageY + "px"
//     })
//   }
//   $clickElements.mouseenter(function(){
//     // 마우스 들어옴
//     $mousePointer.addClass('hover');
//   })
//   $clickElements.mouseleave(function(){
//     // 마우스 나감
//     $mousePointer.removeClass('hover');
//   })

//   $(window).on('mousemove', moveCursor)
  
// });


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


// 웹진 4가지
const webs = [
    document.getElementById('wz_img1'),
    document.getElementById('wz_img2'),
    document.getElementById('wz_img3'),
    document.getElementById('wz_img4'),
    document.getElementById('wz_img5')
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


// 모바일 환경 스타일 조정
// User-Agent 가져오기
const userAgent = navigator.userAgent;

// 만약 User-Agent에 "Mobile" 또는 "Tablet"이 포함되어 있다면
if (userAgent.includes("Mobile") || userAgent.includes("Tablet")) {
    // 특정 요소에 스타일 변경하기
    // document.getElementById('mouse_pointer').style.display = 'none';
    const webzineInElements = document.querySelectorAll('.webzine_in');
    webzineInElements.forEach(element => {
        element.style.display = 'none';
    });

    const webzineimg = document.querySelectorAll('.webzine_1');
    webzineimg.forEach(element => {
        element.style.filter = 'brightness(80%)'
    });


    // 버튼 호버 제거
    const styleElement = document.getElementById("mButtonStyle");
    if (styleElement) {
        styleElement.parentNode.removeChild(styleElement);
    }
}


// 이용약관 및 개인정보처리방침 열고 닫기 버튼

// 열기1
const use_in = document.getElementById('use_in');

use_in.addEventListener('click', function() {
  document.querySelector('.use_c').style.display = 'flex'
});

// 닫기1
const use_off = document.getElementById('use_off');

use_off.addEventListener('click', function() {
  document.querySelector('.use_c').style.display = 'none'
});


// 열기2
const info_in = document.getElementById('info_in');

info_in.addEventListener('click', function() {
  document.querySelector('.info_c').style.display = 'flex'
});

// 닫기1
const info_off = document.getElementById('info_off');

info_off.addEventListener('click', function() {
  document.querySelector('.info_c').style.display = 'none'
});