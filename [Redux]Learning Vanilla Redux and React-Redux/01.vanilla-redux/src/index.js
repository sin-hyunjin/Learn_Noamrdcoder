/**  vanilla application을 만들기위해 모든 내용을 지우고 시작
 * 2023.09.22(금)
 */
/**리덕스 최신버전에서는 createStore 에 취소선이 그어지는데 그대로 쓰셔도 작동은 하고, legacy_createStore 쓰시면 취소선이 안나타납니다
 * 1. Store는 data를 저장하는 곳
 * 2. CreateStore는 reducer를 요구함.
 * 3. Reducer는 data를 modify(수정) 해주는 함수로 reducer가 return하는 것은 application에 있는 data가 됨.
 */
import { legacy_createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// store 를 사용하기 위해서는 reducer 함수를 작성해줘야한다.

//(2) reducer
const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  }
  return count;
};

//(1) store은 나의 데이터를 저장하는곳
const countStore = legacy_createStore(countModifier);

//(3))dispatch를 객체형태로 action을 통해 보낼수 있다.
add.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));

console.log(countStore.getState());
/** 1.0 Vanilla js로 로직을 작성했을떄 경우 
 * const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

 * // 숫자 텍스트
let count = 0;
number.innerText = count;

// decreasing count할 뿐 값을 업데이트 하지 않는다.
// 그래서 업데이터 함수를 하나 더 만들어서 실행하지만 많이 비효율적이다.
const updataText = () => {
  number.innerText = count;
};
// 클릭시 숫자가 증/감 하는 함수
const handleAdd = () => {
  count = count + 1;
  updataText();
};
const handleMinus = () => {
  count -= 1;
  updataText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
 */
