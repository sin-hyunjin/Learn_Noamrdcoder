/* ================================
   =====    Conditionals  =========
   ============================== */

const age = parseInt(prompt("How old are you"));
console.log(typeof age);

// isNaN -> boolean 값으로 변환해서 알려준다.
if (isNaN(age)) {
  console.log("Please write a number.");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age < 50) {
  //   && -> and  , || -> or
  console.log("You can drink.");
}

```

typeof라는 키워드를 쓰면 type를 볼 수 있는데, prompt();에서 숫자를 입력해도 string이라고 뜬다.
  
string이 디폴트이기 때문이다.

prompt();를 사용하면 답을 할때까지 코드의 실행을 멈추고, 매우 오래된 방법임. 

별로 안이쁨. css로 바꾸지도 못함.


AND = &&  ,   OR = ||

true || true === true
false || true === true
true || false === true
false || false === false


true && true === true
false && true === false
true && false === false
false && false === false


```;
