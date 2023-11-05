## Classes

📌접근 가능한 위치

구분　　　선언한 클래스 내　상속받은 클래스 내　인스턴스

private 　 　　　 ⭕ 　　　　　　　 ❌ 　　　　　 ❌

protected 　　　 ⭕ 　　　　　　　 ⭕ 　　　　　 ❌

public 　　　　　 ⭕ 　　　　　　　 ⭕ 　　　　　 ⭕

Typescript = 객체지향 프로그래밍

```tsx
abctract class User{
// protected, private,
// public : 모든곳에 사용가능
	constructor(
			private firstname:string,
			private lastname:string,
			public  nickname:string
			){}
	abstract getNickname():void

	getFullName(){
			return `${this.firstname} ${this.lastname}`
	}

}

class Player extends User{
// 추상 메서드는 추상 클래스를 상속받는 클래스들이 반드시 구현(implement)해야하는 메서드이다.
	getNickname(){
		console.log(this.nickname)
	}
}

class nico = new Player("nico", "las", "니꼬")
```

## 단어사전 만들어보기 (해싱 알고리즘)

```tsx
// 단어와 정의를 저장하기 위한 객체 타입
type Words = {
  [key: string]: string;
};

// 단어와 정의를 관리하는 클래스
class Dict {
  private words: Words;

  // 생성자: words 객체 초기화
  constructor() {
    this.words = {};
  }

  // 단어를 추가하는 메서드
  add(word: Word) {
    // 이미 있는 단어라면 덮어쓰지 않음
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  // 단어의 정의를 반환하는 메서드
  def(term: string) {
    return this.words[term];
  }

  // 단어를 업데이트하는 메서드
  update(word: Word) {
    // 이미 있는 단어라면 정의를 업데이트
    if (this.words[word.term] !== undefined) {
      this.words[word.term] = word.def;
    }
  }

  // 단어를 삭제하는 메서드
  del(term: string) {
    // 해당 단어가 존재하면 삭제
    if (this.words[term] !== undefined) {
      delete this.words[term];
    }
  }
}

// 단어 객체를 나타내는 클래스
class Word {
  constructor(public term: string, public def: string) {}
}

// 단어 객체 생성
const kimchi = new Word("kimchi", "super cool food");
const pizza = new Word("pizza", "super nice pizza");

// 단어 사전 객체 생성
const dict = new Dict();

// 단어를 사전에 추가
dict.add(kimchi);
dict.add(pizza);

// 단어 및 정의 출력
console.log("KIMCHI:", dict.def("kimchi"));
console.log("PIZZA:", dict.def("pizza"));

// 단어 업데이트
dict.update(new Word("kimchi", "very incredible super food"));
console.log("UPDATE KIMCHI:", dict.def("kimchi"));
console.log("NOT UPDATE PIZZA:", dict.def("pizza"));

// 단어 삭제
dict.del("pizza");
console.log("DELETE PIZZA", dict.def("pizza"));
console.log("NOT DELETE KIMCHI:", dict.def("kimchi"));
```

## Interfaces

**Static Members (정적 멤버)**

클래스에는 정적 멤버가 있을 수 있습니다. 이러한 멤버는 클래스의 특정 인스턴스와 연결되지 않으며, 클래스 생성자 객체 자체를 통해 액세스할 수 있습니다. 정적 멤버는 동일한 접근 제어자(public, protected, private)와 함께 사용할 수도 있습니다.

```tsx
class MyClass {
  static x = 0;

  static printX() {
    console.log(MyClass.x);
  }
}

console.log(MyClass.x);
MyClass.printX();
```

인터페이스는 객체의 모양(shape)을 특정화하기 위해 사용됩니다. 예를 들어, 특정 객체가 **`firstName`** 및 **`lastName`** 필드를 가져야 한다면 해당 객체를 설명하기 위한 인터페이스를 정의할 수 있습니다.

```tsx
interface Person {
  firstName: string;
  lastName: string;
}
```

## Interfaces part Two

클래스는 똑같은 이름으로 다시만들수 없기 때문에 추상클래스로만든다.!

**`implements`**는 클래스가 특정 인터페이스를 따르는지 확인하는 키워드이며, 클래스는 해당 인터페이스의 메서드를 구현해야 함.

클래스는 여러 인터페이스를 구현할 수 있다

```tsx
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}
```

Type Aliases과 Interfaces의 차이점

Type Aliases과 인터페이스는 매우 유사하며 많은 경우 자유롭게 선택할 수 있습니다. 인터페이스의 거의 모든 기능은 type에서 사용할 수 있으며, 주요 차이점은 type을 다시 열어 새 속성을 추가할 수 없는 것입니다. 반면 인터페이스는 항상 확장 가능합니다.

결론: 대부분의 경우 개인 취향에 따라 선택 가능

(인터페이스 사용을 조금 더 추천)

## Polymorphism

```tsx
// 일반화된 인터페이스 SStorage를 정의
interface SStorage<T> {
  [key: string]: T;
}

// LocalStorage 클래스 정의
class LocalStorage<T> {
  private storage: SStorage<T> = {};

  // 데이터 추가 (Create)
  set(key: string, value: T) {
    if (this.storage[key] !== undefined) {
      console.log(`${key}가 이미 존재합니다. 'update' 호출 바랍니다.`);
      return;
    }
    this.storage[key] = value;
  }

  // 데이터 조회 (Read)
  get(key: string): T | void {
    if (this.storage[key] === undefined) {
      console.log(`${key}가 존재하지 않습니다.`);
      return;
    }
    return this.storage[key];
  }

  // 데이터 업데이트 (Update)
  update(key: string, value: T) {
    if (this.storage[key] !== undefined) {
      this.storage[key] = value;
    } else {
      console.log(`${key}가 존재하지 않아 새로 만듭니다.`);
      this.storage[key] = value;
    }
  }

  // 데이터 삭제 (Delete)
  remove(key: string) {
    if (this.storage[key] === undefined) {
      console.log(`${key}가 존재하지 않습니다.`);
      return;
    }
    delete this.storage[key];
  }

  // 저장된 데이터 초기화
  clear() {
    this.storage = {};
  }
}

// 문자열 데이터를 저장하는 LocalStorage 인스턴스 생성
const stringsStorage = new LocalStorage<string>();

// 부울 데이터를 저장하는 LocalStorage 인스턴스 생성
const booleanStorage = new LocalStorage<boolean>();
```
