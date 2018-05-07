---
title: "[JavaScript] null, undefined"
date: "2018-04-30T18:15:03.284Z"
layout: post
draft: false
path: "/posts/javasciript/null-undefined"
category: "JavaScript"
tags:
  - "Javascript"
  - "자바스크립트"
  - "null"
  - "undefined"
description: "undefined와 null은 Javascript에서 많이 다뤄지는 주제입니다.(~~조금은 부정적으로다가..~~)"
---

`undefined`와 `null`은 Javascript 에서 많이 다뤄지는 주제입니다.(~~조금은 부정적으로다가..~~)

그만큼 두 자료형에 대해서는 헷갈리는 부분이 많다는 뜻입니다.

Javascript 를 배우는 초보자 분들도 이 두 자료형은 배우는 과정 중 빠르게 만나게 될겁니다.

두 자료형을 정확히 짚고 넘어가지 않는다면 나중에 면접이나 프로젝트 개발시 어려움에 반드시 봉착하게 될 것입니다.

### 1. undefined

`undefined`는 선언되지 않았거나 값이 할당되지 않았음을 나타내는 기본 자료형 중에 하나입니다.

```javascript
typeof a; //undefined //선언되지 않음.
let a; //undefined //할당되지 않음.
a; //undefined //할당되지 않음.
```

### 2. null

`null`은 값이 없음을 나타내는 자료형 중 하나입니다.

여기서 Javascript 가 가지고 있는 핫한(?) 문제점이 나옵니다.

바로..

```javascript
typeof null; //'object'
```

`'object'`…? 저는 분명 위에 정의에 자료형 중 하나라고 설명했습니다.

왜 `object`가 나올까요?

왜 개발된지 언 20 년이 지난 Javascript 가 왜 지금까지 저런 버그? 오류?를 내뿜고 있을까?

이에 대한 자세한 설명은 [링크](https://github.com/FEDevelopers/tech.description/wiki/%E2%80%9Ctypeof-null%E2%80%9D%EC%9D%98-%EC%97%AD%EC%82%AC)에 자세히 설명이 되어있습니다.

아직 [링크](https://github.com/FEDevelopers/tech.description/wiki/%E2%80%9Ctypeof-null%E2%80%9D%EC%9D%98-%EC%97%AD%EC%82%AC)의 내용을 정확히 이해할 수 없지만 결론은 불행하게도 수정될 수 없는 버그입니다.

위 버그를 해결하기 위해 조치를 취한다면 다른 코드에 영향을 미친다는게 그들의 결론이었습니다.

또 하나의 핫한(?) 문제점이 있다.

유명한 짤의 주인공이기도 한..

![](https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/29684000_1942120992467078_688816067888842695_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeH9pjgQlX4almTtBk47pkBYs76aqhUZoAWMECX-z5I8-VarfzsH5tiR-w89-qV6ihQUPADzVVbnAV2V_Ghv25cDKkT72IElX070f0s1UFZ19g&oh=d1aa05dd4b651b2cc82f9313cea2d5fc&oe=5B5DAE0D)

```javascript
null === undefined; // false
null == undefined; // true
```

`==`에 대해 간단히 설명하면 값이 같으면 Javascript 가 알아서 형변환을 시켜준 후 Boolean 값을 판단해서 내뱉어주는 연산자입니다.

정확한 형은 다르지만 둘 다 비었다는 걸 표현하는 자료형이기 때문에 `==`가 `true`를 반환해줍니다.

다른 여러 상황에서`==`연산자가 정의는 있지만 위의 유명짤(?) 처럼 뭔가 논리적으로 역할은 한다고는 말하기 어려울 것 같습니다. 지금까지도 Javascript 가 비난 받는 중요한 역할(?)을 하는 연산자 입니다.

### 3. null vs undefined?

그럼 '값 없음'을 표현할 때 둘 중 어떤 것을 써야할까요?

개발자분들께서는 보통 `null`을 많이 권합니다.

만약 `undefined`를 활용했을때 간단히 코드로 보면

```javascript
let foo; // 값을 대입한 적 없음
let bar = undefined; // 값을 대입함
foo; // undefined
bar; // undefined (??)
let obj1 = {}; // 속성을 지정하지 않음
let obj2 = { prop: undefined }; // 속성을 지정함
obj1.prop; // undefined
obj2.prop; // undefined (??)
```

위와 같은 상황은 아무리봐도 좋은 상황은 아닌 것 같습니다.

대입한 적 없는 변수 혹은 속성과 '값 없음'은 정확히 구분해주는게 명확한 코드라고 할 수 있습니다.

Reference

[HelloWorldJavascript](https://helloworldjavascript.net/pages/160-null-undefined.html)

[http://enarastudent.tistory.com/](http://enarastudent.tistory.com/entry/null%EA%B3%BC-undefined%EC%9D%98-%EC%B0%A8%EC%9D%B4)
