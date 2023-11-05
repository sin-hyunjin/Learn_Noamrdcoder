## call Signatures

정의: 마우스를 올렸을 때 보게되는 것

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/8ffb134c-287e-4abc-8c77-edbb340b0463/d0d26849-dc30-439e-91dd-617b14d4f3c2/Untitled.png)

- 과정을 분리해서 구현하기

타입을 미리 구현해서 props 전달 가능함

```tsx
// Add 함수의 타입 정의
type Add = (a: number, b: number) => number;

// 'add'변수를 'Add' 타입으로 선언하고, 해당 타입함수를 구현
const add: Add = (a, b) => a + b;
```

## \***\*Overloading\*\***

이런 패키지나 라이브러리는 오버로딩을 엄청 이용해서 이해하는게 중요

→ 서로 다른 여러개의 call signatures가 발생되었을 때 생김

type이 any면

```tsx
// 'Config' 타입 정의: 'path' 속성은 문자열이고 'state' 속성은 객체인 타입
type Config = {
  path: string;
  state: object;
};

// 'Push' 타입 정의: 두 개의 오버로드를 가진 함수 타입
type Push = {
  (path: string): void; // 문자열을 받아서 아무것도 반환하지 않는 함수
  (config: Config): void; // 'Config' 객체를 받아서 아무것도 반환하지 않는 함수
};

// 'push' 함수를 'Push' 타입에 맞게 구현
const push: Push = (config) => {
  if (typeof config === "string") {
    // 만약 'config'가 문자열인 경우, 문자열을 출력
    console.log(config);
  } else {
    // 그렇지 않으면 'path' 속성을 출력
    console.log(config.path);
  }
};
```

````tsx
type Add = {
		(a:number, b:number) : number
		(a: number, b:number, c:number):number,
}
// c의 파라미터는 선택사항
const add:Add = (a,b,c?:number) => {
		return a + b
}

add(1, 2)
add(1, 2, 3)

```tsx
npm install -g typescript 입력후
````

```tsx
tsc --init 입력해보고 다시 시도
```

````

## Polymorphism

Poly : 다각형

Morpho : 형태,구조

**generic :**

우리는 call signature를 작성할 때, 여기 들어올 확실한 타입을 모를 때 사용

```tsx
/*
concrete type
- number, boolean, void 등 지금까지 배운 타입

generic type
- 타입의 placeholder
*/

type SuperPrint={
		(arr:T[]):T;
}

const superPrint:SuperPrint=(arr)=>{
		return arr[0]
}

const a=superPrint([1,2,3])
const b=superPrint([true,false,true])
const c=superPrint(["a","b"])
const d=superPrint([1,2,"a","b",true])
````

## Generocs Recap

그렇다면 그냥 any를 넣는 것과 Generic의 차이는 무엇일까?

```tsx
type SuperPrint = {
  (arr: any[]): any;
};

const superPrint: SuperPrint = (arr) => arr[0];

let a = superPrint([1, "b", true]);
// pass
a.toUpperCase();
```

any를 사용하면 위와 같은 경우에도 에러가 발생하지 않는다

```tsx
type SuperPrint = <T>(arr: T[]) => T;

const superPrint: SuperPrint = (arr) => arr[0];

let a = superPrint([1, "b", true]);
// error
a.toUpperCase();
```

Generic의 경우 에러가 발생해 보호받을 수 있다

- Call Signature를 concrete type으로 하나씩 추가하는 형태이기 때문!

```tsx
type SuperPrint = <T, M>(arr: T[], x: M) => T;

const superPrint: SuperPrint = (arr, x) => arr[0];

let a = superPrint([1, "b", true], "hi");
```

위와 같이 복수의 Generic을 선언해 사용할 수 있다

## Conclusions

✅'제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다.’

```tsx
type Player<E> = {
  name: string;
  extraInfo: E;
};

type MePlayer = Player;

type MeExtra = { age: number };

const player: MePlayer = {
  name: "joseph",
  extraInfo: {
    age: 23,
  },
};

const player2: Player = {
  name: "Yee",
  extraInfo: null,
};
```

Generic은 위와 같이 원하는 만큼 커스텀 및 재사용이 가능하다

아마 직접 작성하기보다 패키지/라이브러리의 Generic을 활용하는 경우가 더 많을 것이다

```tsx
const numArr: Array = [1, 2, 3, 4];

const [state, setState] = useState();
```

함수 뿐만 아니라 다양한 경우의 Generic을 활용할 수 있는데, 예를 들어 Array 기본 형태나 React의 useState가 Generic으로 디자인되어 있다
