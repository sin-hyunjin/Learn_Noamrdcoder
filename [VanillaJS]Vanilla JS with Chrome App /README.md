- [#2. welcome To Javascript](#2welcome_To_Javascript)
- [#3. Js On The Browser](#3JsOnTheBrowser)

- [#4. Login](#4-login)

- [#5. Clock](#5-clock)

# #2welcome To Javascript

<br>

## Variables

- const 재선언 금지, 재할당 금지

- let 재선언 금지, 재할당 가능

- var 재선언 가능, 재할당 가능

#### 길이가 긴 변수를 선언할 때 → Camelcase

```javascript
//const = constant(상수) 항상 변하지 않는 값을 의미
const vertLongVariableName;

```

<br>

## Arrays

- 데이터를 나열하기 위한 방법 중 하나.

  항상 [ ] 안에 콤마(,)로 데이터들을 나열한다. 변수도 쓰일 수 있고, boolean, text, 숫자 등 데이터

  정렬이 가능하다.

```javascript
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

daysOfWeek.push(“holiday”)

--> const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun","holiday"];

```

<hr>

vscode 에서 array변수명. 하면 우측에 뜨는 Array object 내장 메소드들 계속 필요하고,

    $ push, indexOf, splice, map, sort, filter

실제 서비스되는 웹앱들 이런거로 데이터 조작 되고 있고, 잘

이해해두면 코딩 인생 편해진다.

<br>

## objects

- object는 property를 가진 데이터를 저장해주며, { } 를 사용한다.

```javascript
const player = {
  name: tomato,
  color: red,
  food: true,
};

// property를 불러오는 방법은 2가지가 있다.
1. console.log(player.name); => tomato
2. console.log(player["name"]); => tomato

```

설명이 필요하지 않은 데이터 리스트들은 array로,

설명이 필요한 정보가 담긴 데이터 리스트들은 object로

<br>

## Functions

```javascript
function sayHello(nameOfPerson, age) {
  console.log(nameOfPerson);
}

sayHello("nico", 12);
sayHello("dal", 20);
sayHello("lynn", 23); // sayHello function의 매개변수 2개는 아래 2개의 argument를 받는 중임.

//function의 값은 function 안에서만 존재한다.

//오브젝트 안에서 매개변수가 아규먼트를 받는 방식
const player = {
  name: function (Name) {
    console.log("Your Name is " + Name + " 입니다.");
  },
  sayHello: function (Age) {
    console.log("Your age is " + Age + " 입니다.");
  },
};

player.sayHello(14);
player.name("james");
```

<br>

## Conditionals(조건문)

- AND = && (모든 값이 ture)
- OR = || (하나의 값이 true)
  <br>
- == 동등연산자(값만 같으면 true)
- === 일치연산자 (값과 타입 모두 true)

        0 == false ---> true
        0 === false ---> false

<br>

# #3JsOnTheBrowser

- [page up](#2welcome-to-javascript)

<br>

## # 3.0 The Documents Object

- document.title = " "
- document.body = " "

https://jongbeom-dev.tistory.com/115 사이트참고

console.dir(document)와 console.log

(document)의 차이점은

dir은 객체의 속성을 확인하고,

log는 객체의 요소를 확인한다.

<br>

## 3.1 HTML in Javascript

- document.getElementById("title"); getElementById란 함수를 통해 id로 element를 가져올수 있다

<br>

## 3.2 Searching For Elements

- getElementsByClassName() : 많은 element를 가져올때 씀(array를 반환)

- getElementsByTagName() : name을 할당할 수 있음(array를 반환)

- querySelector : element를 CSS
  selector방식으로 검색할 수 있음 (ex. h1:first-child)

<br>

## 3.3 Events

- 지금 js파일이 있기 때문에 js를 통해 html의 내용을 가져올 수 있는 거임

- document가 html이 js파일을 load하기 때문에 존재 → 그 다음에 browser가 우리가 document에 접근할 수 있게 해줌

- element의 내부를 보고 싶으면 console.dir()
  기본적으로 object로 표시한 element를 보여줌(전부 js object임)
  그 element 중 앞에 on이 붙은 것들은 event임

- event: 어떤 행위를 하는 것
  모든 event는 js가 listen할 수 있음

- eventListener : event를 listen함 → js에게 무슨 event를 listen하고 싶은 지 알려줘야 함

- title.addEventListener("click") : 누군가가 title을 click하는 것을 listen할 거임 → 무언가를 해줘야함

```javascript
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  title.style.color = "blue";
}
title.addEventListener("click", handleTitleClick);
//click하면 handleTitleClick이라는 function이 동작하길 원함
//그래서 handle~ 함수에 () 를 안넣은 것임
//즉, js가 대신 실행시켜주길 바라는 것임!
```

- function이 js에게 넘겨주고 유저가 title을 click할 경우에 js가 실행버튼을 대신 눌러주길 바라는 것임( 직접 handleTitleClick(); 이렇게 하는 것이 아니라)

- 함수에서 () 이 두 괄호를 추가함으로써 실행버튼을 누를 수 있는 거임
  <br>

## 3.4 More Events

```
listen하고 싶은 event를 찾는 가장 좋은 방법은, 구글에 찾고 싶은 element의 이름, 예를들어 h1 html element mdn을 검색.
우리는 javascript의 element를 원하니, 링크에 Web APIs라는 문장이 포함된 페이지를 찾아. 왜냐면 이건 JS관점의 HTML Heading Element란 의미야.
너무 복잡하면 element를 console.dir로 출력해서 on~ 이라고 적혀있는걸 사용하면 됨.
```

```javascript
function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}
function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
```

```javascript
title.onclick = handleMouseEnter;
title.addEventListener(“mouseenter” , handleMouseEnter);
```

위에 두 코드는 동일하나
addEventListener를 선호하는 이유는
removeEventListener을 통해서 event listener을 제거할수있기 때문이다.

document에서 body,head,title 은 중요해서 언제든
ex) document.body 로 가져올수있지만
div나 h1 등 element 들은 querySelector getElementById등으로 찾아야한다.
ex) document.querySelector(“h1”);

window는 기본제공

```javascript

function handleWindowResize(){
document.body.style.backgroundColor = “tomato”;
}
function handleWindowCopy(){
alert(“copier”);
}

window.addEventListener(“resize”, handleWindowResize);
window.addEventListener(“copy”, handleWindowCopy);

```

<br>

## 3.5 CSS in Javascript

```javascript
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
```

1. currentColor는 getter로써, 최근 color값을 복사하는 역할을 합니다. 그렇기에 의미론적으로 봤을 때 const로 선언하는 것이 적절합니다.

2. newColor는 setter로써, 변수에 대입된 색상값을 h1.style.color에 최종적으로 할당하는 역할을 합니다. 그리고 이것도 의미론적으로 봤을 때 값이 변경될 수 있다는 것을 염두에 두기 위해 let으로 선언하는 것이 적절합니다.

3. 다들 아시겠지만 프로그래밍언어에서 "="(equal) 표시는 오른쪽에 있는 값을 왼쪽에 대입한다는 뜻입니다. 이를 염두에 두시면 코드를 이해하는데 편하실 것 같습니다.

4. (참고) 함수 내에서 선언된 변수는 함수 밖에서는 존재하지 않습니다. 그렇기 때문에 const currentColor로 변수 선언을 하더라도, 함수가 호출될 때 마다 새로운 값을 받을 수 있습니다.

   <br>

이를 토대로 코드를 순차적으로 이해하면,

1. click event 발생 및 함수 실행
2. currentColor 변수 선언 후 h1.style.color 값 복사 (getter)
3. newColor 변수 선언
4. currentColor 현재 값 확인
5. 조건에 따라 newColor에 "tomato" or "blue" 값 대입
6. 마지막으로 h1.style.color에 newColor값 대입 (setter)

   <br>

## 3.6 CSS in Javascript part Two

- style에 적합한 도구는 CSS
- animation에 적합한 도구는 JS
  css파일에

```css
h1 {
  color: cornflowerblue;
}
.clicked {
  color: tomato;
}
```

를 적고
js에서는 h1에 active class를 전달하는거다.

```javascript
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick() {
  if (h1.className === "clicked") {
    h1.className = "";
  } else {
    h1.className = "clicked";
  }
}
h1.addEventListener("click", handleTitleClick);
```

여기서 JS는 HTML을 변경할거고, CSS는 HTML을 바라보고 style을 변경한다.
근데 조금 문제가 있는 active는 우리가 지어준 이름이다. raw value라고 하는데, 이름을 바꾸다가 에러가 발생할 수도 있다. const로 지정해라.

```javascript
function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}
```

이렇게 작성하면 에러가 발생할 수 있는 부분을 축소한다.

<br>

## 3.7 CSS in Javascript part Three

classList 우리가 class들의 목록으로 작업할수 있게끔 허용해준다.
className은 이전calss를 상관하지않고 모든걸 교체해 버린다.

classList를 이용하는건
js에서 건드리는건 HTML element가 가지고있는 또하나의 요소 사용하는 것이다.
= element의 class내용물을 조작하는 것을 허용한다는 뜻

contains은 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해준다

toggle은 토큰이 존재하면 토큰제거
토큰존재 하지않으면 토큰 추가

ex)
toggle은 h1의 classList에 clicked class가 이미있는지 확인하여
만약있다면 toggle 이 clicked를 제거해준다
만약 class name이 존재하지 않는다면 toggle은 classname 추가

<br>

# #4 Login

- [page up](#2welcome-to-javascript)

 <br>

## # 4.0 Input Values

모든 것은 HTML에서 시작되어야 함. HTML에서 작성하고 자바스크립트로 기능을 구현.
먼저, HTML 코드 작성하기

1. 사용자가 이름을 작성할 수 있도록 input 태그를 작성한다.

안에 텍스트를 넣을 거니까, type="text"해주고, 안에 미리 작성할 말은 placeholder 안에 써주기

2. 그리고 옆에 버튼을 만든다.
   Log In

3. div태그로 위의 것들 묶어주고, id="login-form"을 해준다.
   왜 div태그로 묶는지 확실히는 모르겠지만, 내 생각에는 둘을 묶은 다음, 저 id를 통해서
   자바스크립트에서 내가 원하는 태그들을 쉽게 찾기 위해서 묶어주는 것 같음.

input 안에 뭔가를 작성하고 로그인 버튼을 누르면 저장해야 되니까
자바스크립트로 그 기능 구현하기

그냥 html 태그를 가져올 수 없으니까 변수 안에 넣고 거기서 텍스트 받기

1. document 안에서 찾기. id="login-form"인 곳에서 input요소를 loginInput 안에 넣어주기

```javascript
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
```

2. 버튼을 클릭하면, 내가 작성한 값을 콘솔에 보여주는 기능

```javascript
loginButton.addEventListener("click, onLoginBtnClick);
```

3. 함수 만들기

```javascript
function onLoginBtnClick() {
  console.log(loginInput.value);
}
```

input의 내용을 가져오려면 value라는 property를 찾아봐야 됨.

 <br>
 
## # 4.1 Form Submission

form 안의 속성에는 required(필수), maxlength , type, placeholder 등이있다.
input 밖을 form으로 감싸면 따로 조건문을 주지않아도 html이 최대길이, 빈칸등을 잡아준다.
문제는 버튼을 클릭할때 자동으로 submit(새로고침)된다는 것

 <br>
 
## # 4.2 Events

```javascript
function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기 // event object는 preventDefault함수를 기본적으로 갖고 있음
  console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit); // submit 이벤트가 발생한다면, onLoginSubmit함수를 실행시킨다는 의미 // JS는 onLoginSubmit함수 호출시 인자를 담아서 호출함. 해당 인자는 event object를 담은 정보들
```

★ 중요 ★

form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. << 우리가 원하는 것이 아님!
preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!

이 preventDefault 함수는 EventListener 함수의 '첫 번째 argument' 안에 있는 함수이다. 첫 arument는 지금 막 벌어진 event들에 대한 정보를 갖고 있다.
JS는(기본적으로)argument를 담아서 함수를 호출하는데, 이 argument가 기본 정보들을 제공하고 있다. ex) 누가 submit주체인지, 몇 시에 submit을 했는지 등등 콘솔에 출력해보면 알 수 있음

<br>

## # 4.3 Events part Two

addEventListener 안에 있는 함수는 직접 실행하지 않는다
브라우저가 실행시켜주고
브라우저에서 해당 이벤트에 대한 정보 즉, object를 가지게 된다.
addEventListener의 함수에서 object에 대한 자리만 할당해주면
해당 이벤트가 발생시킨 정보들에 대한 object들을 볼 수 있다!
이때 해당 이벤트가 가진 기본 Default값을 발생시키지 않기 하게 위해선 preventDefault를 이용하여 막을 수 있다!

 <br>
 
## # 4.4 Getting Username

```javascript
const HIDDEN_CLASSNAME = "hidden";
```

관습: string만 포함된 변수는 대문자로 쓴다 + 중요한 변수가 아니라 서.

'hello!' + username + nice to meet you!; 는
`hello ${username} nice to meet you `; 와 같으며 후자의 방법 사용하자.

HTML의 어느 한 부분을 잡고 거기에 class 를 추가하거나 빼고 싶을 때는

```javascript
classList.add.('classname')
classList.remove.('classname')
```

를 사용한다. 클래스를 마음대로 붙였다 뗄 수 있게 해준다. 위에서는 display:none;이 되어 있기 때문에 해당 html 태그(?)를 hide or show 할 수 있다.

이 강의에서 한 것.

1. 클릭하면, 자동으로 새로고침 되어 정보가 날아가는 것을 막고(preventDefault();)
2. loginForm을 감추고(hidden)
3. hidden 됐던 A 문구가 나타나고(remove hidden)
4. A 문구와 username을 합쳐서 완전한 문구를 완성한다.

 <br>
 
## # 4.5 Saving Username

```javascript
localStorage.setItem("username", username);
```

```javascript
localStorage.setItem(key, value);
```

- 로컬 저장소에 해당 키와 값을 저장함.

  ```javascript
  localStorage.getItem(key);
  ```

- 로컬 저장소에 해당 키에 해당되는 값을 불러옴.

  ```javascript
  localStorage.removeItem(key);
  ```

- 로컬 저장소에 해당 키에 해당되는 키, 값을 삭제함.

 <br>
 
## # 4.6 Loading Username

paintGreetings 함수를 정의할 땐 매개변수와 사용한 매개변수를 동일하게 해줘야해요!

```javascript
function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innterText = `Hello ${username}`;
}
```

이런식으로요!

```javascript
function add(a, b) {
  return a + b;
}
```

했던거와 동일하게 생각하시면 됩니다
username이라는 매개변수를 받아서 함수 안에서 사용하는 거죠!

그리고 onLoginSubmit에서 ()안에 username을 써준 이유는 loginInput.value에서 받은 값을 사용해주기 위함이고, else문 안에 있는 두 번째 ()에서 매개변수로 saveUsername을 써준 이유는 localStorage에서 가져온 value값을 가져오기 위함이에요! 우리가 선언한 username은 onLoginSubmit 함수 안에 선언했기 때문에 두 번째 ()에도 username을 써주면 error가 발생하게 됩니다.

<br>

# 5. CLOCK

<br>

## 5.1 Timeouts and Dates

```javascript
setInterval(sayHello, 1000);
sayHello(); //라는 펑션을 1초마다 반복한다는 의미.
```

단 바로 실행되지 않고 1초 후 첫 시작이 되고 계속 1초마다 반복된다.

```javascript
setTimeout(sayHello, 1000);
//1초 기다렸다가 한번만 실행.
```

<br>

## 5.2 PadStart

> 0> 00 로 바꾸고 싶을 때는 padStart(x, 'y') 를 사용하면 된다.

**padStart**는 내가 갖고 있는 string 을 길게 만들어 주고 싶을 때 사용.

뒤에서 추가하고 싶을 때는 padEnd를 사용하면 된다.

x는 원하는 length를, y는 앞에 채워줄 내용을 입력하면 된다.

<hr>

- toLocaleTimeString() : string 문자 두개를 한번에 채우는 다른방식

```javascript
function sayHello() {
  clock.innerText = new Date().toLocaleTimeString();
}
sayHello();
setInterval(sayHello, 1000);
```
