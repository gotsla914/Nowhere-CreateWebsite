// 검색바 srch
// 돋보기 버튼 srchIcon

// 돋보기 클릭 시 검색창 보이고, 다시 클릭 시 검색창 보이지않기
// 현 상태가 none이면 block으로, block이라면 none으로

const srchBar = document.querySelector('.srchBar');
const srchIcon = document.querySelector('.srchIcon');

function openSrchBar(){
  if(srchBar.style.display == 'none'){
    srchBar.style.display = 'block'
  } else {
    srchBar.style.display = 'none'
  }
}

srchIcon.addEventListener('click', openSrchBar);
