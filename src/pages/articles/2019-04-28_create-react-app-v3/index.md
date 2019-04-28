---
title: 'create-react-app v3 릴리즈!'
date: '2019-04-28T18:15:03.284Z'
layout: post
draft: false
path: '/posts/react/create-react-app-v3'
category: 'React'
tags:
  - 'create-react-app'
  - 'v3'
  - 'React'
description: '2019년 4월 22일, `create-react-app` 3.0이 정식 릴리즈되었습니다.'
---

2019년 4월 22일,

`create-react-app` 3.0이 정식 릴리즈되었습니다.

2.0이 릴리즈된지 얼마 되지 않은것 같은데 벌써 3.0이라니..!

2.0의 큰 변화 이후 빠르게 업데이트된 3.0버젼에는 어떠한 내용들이 있는지 살펴보겠습니다.



## 주요 변화

#### 1. Jest 24 

기본 내장된 테스트 라이브러리인 Jest가 24버젼으로 업데이트 되었습니다. Jest 24버젼에 대한 내용은 [링크](https://jestjs.io/blog/2019/01/25/jest-24-refreshing-polished-typescript-friendly)에서 확인할 수 있습니다. 

이전 버젼과 snapshot serialization에 차이가 있어서 기존의 테스트는 Jest 24 버젼에 맞게 업데이트를 해야할 수도 있습니다.

#### 2. Hook 지원

`eslint-plugin-react-hooks` 플러그인을 기본 패키지에 포함시켜 [Rules of Hooks](https://ko.reactjs.org/docs/hooks-rules.html) (제가 번역한..ㅎㅎ)을 강제합니다. Rules of Hooks에 관한 내용은 위 링크를 참고해주세요.

#### 3. TypeScript Linting

TypeScript 파일에 대한 Lint를 제공합니다. 아래 `eslint-config-react-app` 의 `index.js` 파일 내용을 보면 TS파일의 어떤 룰에 대한 lint를 제공하는지 확인할 수 있습니다. 

```javascript
    plugins: ['@typescript-eslint'],
    rules: {
      // These ESLint rules are known to cause issues with typescript-eslint
      // See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json
      camelcase: 'off',
      indent: 'off',
      'no-array-constructor': 'off',
      'no-unused-vars': 'off',

      '@typescript-eslint/no-angle-bracket-type-assertion': 'warn',
      '@typescript-eslint/no-array-constructor': 'warn',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'none',
          ignoreRestSiblings: true,
        },
      ],
    }
```



#### 4. @babel/preset-env 내 `browserlist` 지원 

`package.json` 에서 `browserlist` 를 설정할 수 있게 되었습니다. `development` 와 `production` 환경을 별도로 설정할 수 있습니다. `async/await` 와 같이  [https://browserl.ist](https://browserl.ist/) 에서 아래 default 설정 이외에 다양한 조건의 브라우저 환경에 대해 검색할 수 있습니다.

```javascript
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
```



#### 5. `-—no-watch flag` 제거

Jest 자체의 `--watchAll=false` 옵션을 활용해 `start` 스크립트에 `--no-watch` 옵션을 제거했습니다.

## 새로운 기능

#### 1. `jsconfig.json` / `tsconfig.json` 활용

`jsconfig.json` / `tsconfig.json` 파일을 통해 `baseUrl` 을 설정할 수 있습니다. Root 디렉토리에 해당 파일을 아래와 같이 작성후 생성하면 `baseUrl` 을 설정할 수 있습니다. 아직 `src`와 `node_modules` 만 설정 가능합니다.

이제는 `.env` 파일을 만들지 않고도 절대 경로를 설정할 수 있게 되었다.

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```



#### 2. PostCSS Normalize

간단하게 .css 파일 최상단에 `@import-normalize` 를 추가하면 Normalize.css를 적용할 수 있습니다. 



출처 [create-react-app github](https://github.com/facebook/create-react-app/releases/tag/v3.0.0)
