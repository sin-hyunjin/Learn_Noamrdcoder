/* =====================================
   # 3.0 The Documents Object  
   ===================================== */

/* =====================================
   # 3.1 HTML in Javascript   
   ===================================== */

const title = document.getElementById("title"); //getElementById란 함수를 통해 id로 element를 가져올수 있ㄷ다
title.innerText = "Got you!"; //html text를 바꾼다
console.log(title);
console.log(title.className);

/* =====================================
   # 3.2 Searching For Elements        
   ===================================== */

const title2 = document.querySelector(".hello h1");
const title3 = document.querySelector(" .hello:nth-of-type(2)");

/*
- getElementsByClassName() : 많은 element를 가져올때 씀(array를 반환)
- getElementsByTagName() : name을 할당할 수 있음(array를 반환)
- querySelector : element를 CSS selector방식으로 검색할 수 있음 (ex. h1:first-child)
단 하나의 element를 return해줌
⇒ hello란 class 내부에 있는 h1을 가지고 올 수 있다(id도 가능함)
- 첫번째 element만 가져옴
- 조건에 맞는 세개 다 가져오고 싶으면 querySelectorAll
⇒ 세개의 h1이 들어있는 array를 가져다 줌
- querySelector("#hello); 와 getElementById("hello"); 는 같은 일을 하는 것임
하지만 후자는 하위요소 가져오는 것을 못하므로 전자만 쓸거다 


*/
/* =====================================
   # 3.3 Events       
   ===================================== */

function handleTitleClick() {
  title.style.color = "blue";
}
function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}
function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}
console.dir(title);
title.addEventListener("click", handleTitleClick); //클릭했을 때 출력된다
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

/* =====================================
   # 3.4 More Events       
   ===================================== */

// 와이파이를 끄거나 켰을 때 알람창이 뜬다.
function handleWindowOffline() {
  alert("SOS No WIFI");
  console.log("NO WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOD");
  console.log("GOOD WIFI");
}
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

/* =====================================
   # 3.5 CSS in Javascript        
   ===================================== */

function handleTitle2Click() {
  const currentColor = title2.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  title2.style.color = newColor;
}

title2.addEventListener("click", handleTitle2Click);

/* =====================================
  # 3.6 CSS in Javascript part Two      
   ===================================== */

function handleTitle3Click() {
  const clickedClass = "active";
  if (title3.className === clickedClass) {
    title3.className = "";
  } else {
    title3.className = clickedClass;
  }
}
title3.addEventListener("click", handleTitle3Click);
/* =====================================
   # 3.7 CSS in Javascript part Three       
   ===================================== */

function handleTitle3Clicks() {
  // const clickedClass = "active";
  // if (title3.classList.contains(clickedClass) === clickedClass) {
  //   title3.classList.remove(clickedClass);
  // } else {
  //   title3.classList.add(clickedClass);
  // }

  //toggle은 위 코드를 대신할수 있게 만들어준다.

  title.classList.toggle("active");
}
title3.addEventListener("click", handleTitle3Clicks);
