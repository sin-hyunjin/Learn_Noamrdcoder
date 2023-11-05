# Typescript Study

Typescript는 쓰는 이유 → 타입 안정성, 버그

### 타입스크립트 코드테스트

https://www.typescriptlang.org/play

### **타입스크립트 핸드북**

https://typescript-kr.github.io/pages/basic-types.html

<hr/>

# 환경설정

- Node.js + Vscode 사용

#### typescript설치

    npm i -D typescript

#### package.jsom 초기화

    npm init -y

<img width="240" alt="스크린샷 2023-11-06 오전 2 01 37" src="https://github.com/sin-hyunjin/Learn_Noamrdcoder/assets/116487398/de0e3d0d-d8ee-484d-be23-26a7a576862b">

<hr/>

## tsconfig.json설정

> 디렉터리에 tsconfig.json 파일이 있으면 해당 디렉터리가 TypeScript 프로젝트의
> 루트임을 나타냄. tsconfig.json 파일은 프로젝트를 컴파일하는 데 필요한 루트  
> 파일과 컴파일러 옵션을 지정

### lib

> 타입스크립트에게 어떤 API를 사용하고 어떤 환경에서 코드를 실행하는 지를
> 지정할 수 있음

> (target 런타임 환경이 무엇인지를 지정합니다.)
> 프로그램이 브라우저에서 실행되면 lib에 "DOM" 유형 정의를 할 수 있습니다.
> DOM: window, document 등
> ex) "lib": ["ES6","DOM"]

### ts-node

ts-node는 Node.js용 TypeScript 실행 엔진 및 REPL이다. JIT는 TypeScript를 JavaScript로 변환하므로 사전 컴파일 없이 Node.js에서 TypeScript를 직접 실행할 수 있다

        npm i -D ts-node
        npm i @types/node -D
