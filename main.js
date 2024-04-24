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

// window.addEventListener('scroll', function() {
//     var scrollPosition = window.scrollY;
//     console.log('스크롤 위치:', scrollPosition);
//   });

window.addEventListener('scroll', function() {
    var scrollPositionVH = window.scrollY / window.innerHeight * 100; // 스크롤 위치를 vh 단위로 계산
  
    // 스크롤에 따른 화면 전환
    if (scrollPositionVH > 240) {
        document.getElementById('logo_1').style.filter = 'invert(0%)';
        document.getElementById('bg_1').style.opacity = '0';
        document.body.style.backgroundColor = '';
        document.getElementById('sub1_tx1').style.color = '';
        document.getElementById('sub1_tx2').style.color = '';
    } else if (scrollPositionVH > 150) {
        document.getElementById('logo_1').style.filter = 'invert(100%)';
        document.getElementById('bg_1').style.opacity = '0';
        document.body.style.backgroundColor = '#1a1a1a';
        document.getElementById('sub1_tx1').style.color = '#fff';
        document.getElementById('sub1_tx2').style.color = '#fff';
    } else if (scrollPositionVH > 90) {
        document.getElementById('logo_1').style.filter = 'invert(100%)';
        document.getElementById('bg_1').style.opacity = '1';
        document.body.style.backgroundColor = '#1a1a1a';
    } else {
        document.getElementById('logo_1').style.filter = 'invert(0%)';
        document.getElementById('bg_1').style.opacity = '1';
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