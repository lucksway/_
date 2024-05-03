// 옵저버를 활용한 스크롤 애니메이션

// 인트로 1과 2
let observer = new IntersectionObserver((e)=>{
    e.forEach((텍스트)=>{
        if (텍스트.isIntersecting){
            텍스트.target.style.opacity = 1;
            텍스트.target.style.transform = 'translateY(0%)';
        } else {
            텍스트.target.style.opacity = 0;
            텍스트.target.style.transform = 'translateY(100%)';
        }
    })
})

let in1_t = document.querySelector('.in1_t');
observer.observe(in1_t)
observer.observe(in2_tx1_1)
observer.observe(in2_tx1_2)
observer.observe(in2_tx2_1)
observer.observe(in2_tx2_2)
observer.observe(in2_tx2_3)
observer.observe(in2_tx2_4)

// 웹진
let observer1 = new IntersectionObserver((e)=>{
    e.forEach((웹진)=>{
        setTimeout(() => {
            if (웹진.isIntersecting) {
                웹진.target.style.opacity = 1;
                웹진.target.style.transform = 'translateY(0%)';
            } else {
                웹진.target.style.opacity = 0;
                웹진.target.style.transform = 'translateY(60%)';
            }
        }, 0);
    })
})
let observer2 = new IntersectionObserver((e)=>{
    e.forEach((웹진)=>{
        setTimeout(() => {
            if (웹진.isIntersecting) {
                웹진.target.style.opacity = 1;
                웹진.target.style.transform = 'translateY(0%)';
            } else {
                웹진.target.style.opacity = 0;
                웹진.target.style.transform = 'translateY(60%)';
            }
        }, 150);
    })
})
let observer3 = new IntersectionObserver((e)=>{
    e.forEach((웹진)=>{
        setTimeout(() => {
            if (웹진.isIntersecting) {
                웹진.target.style.opacity = 1;
                웹진.target.style.transform = 'translateY(0%)';
            } else {
                웹진.target.style.opacity = 0;
                웹진.target.style.transform = 'translateY(60%)';
            }
        }, 300);
    })
})
let observer4 = new IntersectionObserver((e)=>{
    e.forEach((웹진)=>{
        setTimeout(() => {
            if (웹진.isIntersecting) {
                웹진.target.style.opacity = 1;
                웹진.target.style.transform = 'translateY(0%)';
            } else {
                웹진.target.style.opacity = 0;
                웹진.target.style.transform = 'translateY(60%)';
            }
        }, 450);
    })
})
let observer5 = new IntersectionObserver((e)=>{
    e.forEach((웹진)=>{
        setTimeout(() => {
            if (웹진.isIntersecting) {
                웹진.target.style.opacity = 1;
                웹진.target.style.transform = 'translateY(0%)';
            } else {
                웹진.target.style.opacity = 0;
                웹진.target.style.transform = 'translateY(60%)';
            }
        }, 600);
    })
})

if (window.innerWidth > 1060) {
    observer1.observe(wz_img1)
    observer2.observe(wz_img2)
    observer3.observe(wz_img3)
    observer4.observe(wz_img4)
    observer5.observe(wz_img5)
}

// 웹진 모바일에서 스크롤 애니메이션
let observer_m1 = new IntersectionObserver((e)=>{
    e.forEach((웹진)=>{
        setTimeout(() => {
            if (웹진.isIntersecting) {
                웹진.target.style.opacity = 1;
                웹진.target.style.transform = 'translateY(0%)';
            } else {
                웹진.target.style.opacity = 0;
                웹진.target.style.transform = 'translateY(60%)';
            }
        }, 0);
    })
})

if (window.innerWidth < 1059) {
    observer_m1.observe(wz_img1)
    observer_m1.observe(wz_img2)
    observer_m1.observe(wz_img3)
    observer_m1.observe(wz_img4)
    observer_m1.observe(wz_img5)
}

// 서브 콘텐츠들




// 첫줄
let observer_sub1 = new IntersectionObserver((e)=>{
    e.forEach((서브)=>{
        setTimeout(() => {
            if (서브.isIntersecting) {
                서브.target.style.opacity = 1;
                서브.target.style.transform = 'translateY(0%)';
            } else {
                서브.target.style.opacity = 0;
                서브.target.style.transform = 'translateY(40%)';
            }
        }, 0);
    })
})

let sub1_1 = document.querySelectorAll('.sub1_1');
observer_sub1.observe(sub1_1[0])
observer_sub1.observe(sub1_1[1])
observer_sub1.observe(sub1_1[2])

observer_sub1.observe(sub1_1[3])
observer_sub1.observe(sub1_1[4])
observer_sub1.observe(sub1_1[5])

observer_sub1.observe(sub1_1[6])
observer_sub1.observe(sub1_1[7])
observer_sub1.observe(sub1_1[8])

observer_sub1.observe(sub1_1[9])
observer_sub1.observe(sub1_1[10])
observer_sub1.observe(sub1_1[11])

observer_sub1.observe(sub1_1[12])
observer_sub1.observe(sub1_1[13])
observer_sub1.observe(sub1_1[14])

observer_sub1.observe(sub1_1[15])
observer_sub1.observe(sub1_1[16])
observer_sub1.observe(sub1_1[17])

observer_sub1.observe(sub1_1[18])
observer_sub1.observe(sub1_1[19])
observer_sub1.observe(sub1_1[20])

observer_sub1.observe(sub1_1[21])
observer_sub1.observe(sub1_1[22])
observer_sub1.observe(sub1_1[23])


// 숨겨진 박스 감지시 배경 색 변환


// 회사 인트로 이후 배경 드러내고 없애기  
  let bg_on = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        document.getElementById('bg_1').style.opacity = '1';
      } else {
        document.getElementById('bg_1').style.opacity = '0';
      }
    });
  }, {
    threshold: 0.5 // 옵션 설정 (root, rootMargin, threshold 등)
  });
  
  let in2 = document.querySelectorAll('.in2');
  bg_on.observe(in2[0])

function isElementBelowViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.top >= window.innerHeight;
  }

window.addEventListener('scroll', function() {
    var targetDiv = document.querySelector('.sub_img_tx1');
    
    // 특정 div의 위치를 기준으로 스타일을 조정할 수 있습니다.
    // 예를 들어, 스크롤 위치가 특정 div 아래에 있을 때 클래스를 추가하여 스타일을 변경합니다.
    if (isElementBelowViewport(targetDiv)) {
      // 올렸을 때 복구
      document.body.style.backgroundColor = '#1a1a1a'
      document.getElementById('sub1_tx1').style.color = '#fff';
      document.getElementById('sub1_tx2').style.color = '#fff';
      document.getElementById('logo_1_1').style.filter = 'invert(0%)';      
    } else {
      // 내렸을 때 변경
      document.body.style.backgroundColor = 'rgb(253, 253, 246)'
      document.getElementById('sub1_tx1').style.color = '#1a1a1a';
      document.getElementById('sub1_tx2').style.color = '#1a1a1a';
      document.getElementById('logo_1_1').style.filter = 'invert(100%)';
    }
  });

  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition >= window.innerHeight) {
        document.getElementById('logo_1').style.filter = 'invert(100%)'
    } else {
        document.getElementById('logo_1').style.filter = 'invert(0%)'
    }
  });

