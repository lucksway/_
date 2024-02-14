// 메뉴바 버튼을 클릭시 메뉴바 확장
var toggleButtons = document.getElementsByClassName('toggleButton');
for (var i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener('click', function() {
        this.classList.toggle('checked');
        document.getElementById('clickmenu').classList.toggle('checked');
        document.getElementById('logo_1').classList.toggle('checked');
        document.getElementById('mlist').classList.toggle('checked');
        document.getElementById('mline1').classList.toggle('checked');
        document.getElementById('mline2').classList.toggle('checked');
        document.getElementById('menuc').classList.toggle('checked');
        document.getElementById('clickbg').classList.toggle('checked');
        document.getElementById('mtext').classList.toggle('checked');
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
