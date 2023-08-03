# Variables

- const 재선언 금지, 재할당 금지

- let 재선언 금지, 재할당 가능

- var 재선언 가능, 재할당 가능

### 길이가 긴 변수를 선언할 때 → Camelcase

```javascript
//const = constant(상수) 항상 변하지 않는 값을 의미
const vertLongVariableName;

```

# objects

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
