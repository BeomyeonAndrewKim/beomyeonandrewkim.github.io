---
title: "[Daily Algorithm_JavaScript] Level1. 서울에서 김서방 찾기(index 활용하기)"
date: "2018-03-16T22:12:03.284Z"
layout: post
draft: false
path: "/posts/algorithm/using-index"
category: "Algorithm"
tags:
  - "Algorithm"
  - "알고리즘"
  - "Javascript"
  - "자바스크립트"
  - "index 활용하기"
  - "서울에서 김서방 찾기"
description: "findKim 함수(메소드)는 String형 배열 seoul을 매개변수로 받습니다. seoul의 element중 Kim의 위치 x를 찾아, 김서방은 x에 있다는 String을 반환하세요.
Seoul에 Kim은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다."
---

[Daily Algorithm_JavaScript] Level1. 서울에서 김서방 찾기(index 활용하기)

### Question

#### Source https://programmers.co.kr/learn/challenge_codes/110

> findKim 함수(메소드)는 String형 배열 seoul을 매개변수로 받습니다.
>
> seoul의 element중 Kim의 위치 x를 찾아, 김서방은 x에 있다는 String을 반환하세요.
> seoul에 Kim은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

### My solution

```javascript
function findKim(seoul){
  var idx;
  for(let item of seoul) if(item==='Kim') idx=seoul.indexOf(item);
  return "김서방은 " + idx + "에 있다";
}

// 실행을 위한 테스트코드입니다.
console.log( findKim(["Queen", "Tod", "Kim"]));
```

Array의 index를 활용해서 푸는 문제다. seoul 배열의 ```for``` 루프를 돌아 "Kim"을 찾고 해당 인덱스를 idx라는 변수에 대입한 후 리턴 값에 해당 변수를 활용해 닶을 구했다. 

이전에 활용했던 ```for```루프 ```if```조건문의 블록 스코프의 내용이 한 줄일 경우 {}를 생략해도 된다는 점을 활용해 코드를 보기 깔끔하고 간결하게 짤 수 있었다.  Array의 프로토타입 메소드인 ```indexOf```에 대한 설명은 이 [링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)를 참고하자.

#### Other Solutions

#### Best of Best

> 잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,'80일간의 세계 일주' 중에서

```javascript
function findKim(seoul){
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`
}

// 실행을 위한 테스트코드입니다.
console.log( findKim(["Queen", "Tod", "Kim"]));
```

템플릿 코드```''```(백틱)를 활용해서 보다 간결하게 만들 수 있다. 사실 이 문제에서는 궂이 루프를 돌 필요가 없었다. "Kim"이라고 문제에 친절하게 위치를 찾을 문자열을 제시해 줬다. 때문에 위와 같이 바로 return값을 템플릿코드로 ```indexOf```를 활용해서 반환하면 깔끔하게 풀린다.

템플릿 코드를 바로 return값에 활용한다는 점이 신선했다.  