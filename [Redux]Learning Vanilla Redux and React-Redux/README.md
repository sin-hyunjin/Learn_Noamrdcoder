# Redux

#### Redux : 기본적으로 Javascript application들의 state(상태)를 관리하는 방법

#### 강의에 필요한 준비물

- google chrome(browser)
- github(version control)
- node.js
- visual studio code

React 개발자가 되려면 Vanilla JS 개발자가 되자!

<br>

# 설치

Redux Toolkit은 NPM에서 패키지로 받아 모듈 번들러나 Node 앱에서 사용 가능

    #NPM
    npm install @reduxjs/toolkit

    #Yarn
    yarn add @reduxjs/toolkit

### 앱 만들기

**로컬 개발 머신에는 Node 14.0.0 이상 버전이 있어야 합니다** (그러나 서버에서는 필요하지 않습니다). 최신 LTS 버전을 사용하는 것이 좋습니다. nvm (macOS/Linux) 또는 nvm-windows를 사용하여 다른 프로젝트 간에 노드 버전을 전환할 수 있습니다.

    #npx
    npx create-react-app my-app

( npx 는 npm 5.2+ 이상과 함께 제공되는 패키지 실행기 도구)

    #npm
    npm init react-app my-app

npm init <initializer>npm 6+에서 사용 가능

    #yarn
    yarn create react-app my-app

yarn create <starter-kit-package>Yarn 0.25 이상에서 사용 가능

# 파일 설정

    index.js
