// 마우스 포인터
$(document).ready(function(){
  var $mousePointer = $('#mouse_pointer'),
  $clickElements = $('a, img');

  function moveCursor(e){
    $mousePointer.css({
      "left": e.pageX + "px",
      "top": e.pageY + "px"
    })
  }
  $clickElements.mouseenter(function(){
    // 마우스 들어옴
    $mousePointer.addClass('hover');
  })
  $clickElements.mouseleave(function(){
    // 마우스 나감
    $mousePointer.removeClass('hover');
  })

  $(window).on('mousemove', moveCursor)
  
});


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
