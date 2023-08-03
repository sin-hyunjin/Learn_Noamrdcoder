# Variables

- const 재선언 금지, 재할당 금지

- let 재선언 금지, 재할당 가능

- var 재선언 가능, 재할당 가능

### 길이가 긴 변수를 선언할 때 → Camelcase

```javascript
//const = constant(상수) 항상 변하지 않는 값을 의미
const vertLongVariableName;

```

# Arrays

- 데이터를 나열하기 위한 방법 중 하나.

항상 [ ] 안에 콤마(,)로 데이터들을 나열한다. 변수도 쓰일 수 있고, boolean, text, 숫자 등 데이터

정렬이 가능하다.

```javascript
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

daysOfWeek.push(“holiday”)

```

vscode 에서 array변수명. 하면 우측에 뜨는 Array object 내장 메소드들

    $ push, indexOf, splice, map, sort, filter

등 이런거 계~속 필요하고, 실제 서비스되는 웹앱들 이런거로 데이터 조작 되고 있고, 잘

이해해두면 코딩 인생 편해진다.

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

설명이 필요하지 않은 데이터 리스트들은 array로,

설명이 필요한 정보가 담긴 데이터 리스트들은 object로

# Functions

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
