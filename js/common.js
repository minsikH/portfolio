//index.html에서 info.html 이동 시 탭 과 컨텐츠 on클래스
document.addEventListener("DOMContentLoaded", function () {
  function activateTabFromHash() {
    const hash = window.location.hash; // 현재 URL의 해시값 가져오기
    if (hash) {
      const tabId = hash.slice(1); // 해시값에서 '#' 제거
      const tabElement = document.getElementById(tabId);
      const tabElementsClass = document.getElementsByClassName(tabId);
      // 모든 탭 비활성화
      document.querySelectorAll(".tab_content").forEach((tab) => {
        tab.classList.remove("on");
      });
      // 해당 ID를 가진 탭 활성화
      if (tabElement) {
        tabElement.classList.add("on");
      }
      // 해당 클래스를 가진 모든 탭 활성화
      if (tabElementsClass.length > 0) {
        for (let i = 0; i < tabElementsClass.length; i++) {
          tabElementsClass[i].classList.add("on");
        }
      }
      // 페이지 맨 위로 스크롤
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100); // 100ms 지연 후 스크롤
    }
  }

  activateTabFromHash();
});
