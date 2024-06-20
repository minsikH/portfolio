//pick
$(function () {
  let tab = $(".pick_tap li");
  tab.on("click", function () {
    let idx = $(this).index();
    let tab_cont = $(this)
      .parents(".pick_tap")
      .siblings(".tab_content")
      .eq(idx);
    $(this).addClass("on");
    $(this).siblings().removeClass("on");
    tab_cont.addClass("on");
    tab_cont.siblings().removeClass("on");
  });
});

//swiper
// 각 Swiper 인스턴스 초기화
document.addEventListener("DOMContentLoaded", function () {
  const mainSwipers = document.querySelectorAll(".main_swiper");

  mainSwipers.forEach(function (swiperContainer) {
    let mySwiper = new Swiper(swiperContainer, {
      loop: true,
      navigation: {
        nextEl: swiperContainer.querySelector(".swiper-button-next"),
        prevEl: swiperContainer.querySelector(".swiper-button-prev"),
      },
      pagination: {
        el: swiperContainer.querySelector(".swiper-pagination"),
        clickable: true,
      },
      on: {
        slideChange: function () {
          setTimeout(function () {
            adjustImageHeight(swiperContainer); // 슬라이드 변경 후 일정 시간(100ms) 뒤에 이미지 높이 조정 함수 호출
          }, 100);
        },
      },
    });

    // 페이지 로드 후 초기 실행
    adjustImageHeight(swiperContainer);
  });

  // 이미지 높이 조정 함수
  function adjustImageHeight(swiperContainer) {
    const activeSlide = swiperContainer.querySelector(
      ".swiper-slide-active img"
    );
    if (activeSlide) {
      const slideHeight = activeSlide.clientHeight;
      swiperContainer.style.height = slideHeight + "px";
    }
  }
});
