---
title: "[Algorithm JavaScript] Level1. 스트링을 숫자로 바꾸기"
date: "2018-03-16T22:12:03.284Z"
layout: post
draft: false
path: "/posts/algorithm/convert-string-to-number"
category: "Algorithm"
tags:
  - "Algorithm"
  - "알고리즘"
  - "Javascript"
  - "자바스크립트"
  - "스트링을 숫자로 바꾸기"
description: "strToInt 메소드는 String형 str을 매개변수로 받습니다. str을 숫자로 변환한 결과를 반환하도록 strToInt를 완성하세요."
---

[Algorithm JavaScript] Level1. 스트링을 숫자로 바꾸기

### Question

#### Source https://programmers.co.kr/learn/challenge_codes/110

> strToInt 메소드는 String형 str을 매개변수로 받습니다.
> str을 숫자로 변환한 결과를 반환하도록 strToInt를 완성하세요.
> 예를들어 str이 1234이면 1234를 반환하고, -1234이면 -1234를 반환하면 됩니다.
> str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.

### My solution

```javascript
function strToInt(str){
  return parseInt(str);
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(strToInt("-1234"));
```

Number 타입으로 변경해주는 방법 중 ```parseInt```, ```parseFloat```이 있다. 설명은 사실 복잡하지만 ```parseInt```는 자연수를 넣었을 때 정수로 바꿔주는 내장함수로 생각하면 되고, parseFloat는 소수까지 포함한 자연수로 변환해주는 내장함수 정도로 생각해도 된다. 두 함수의 MDN문서를 확인해보자([parseInt](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt), [parseFloat](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseFloat))

#### Other Solutions

#### Best of Best

> 잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,'80일간의 세계 일주' 중에서

```javascript
function strToInt(str){
  return +str;//연산을 활용해 단번에 Number값 변환
  return str/1;//연산을 활용해 단번에 Number값 변환
  return Number(str);//Number 함수를 활용한 변환
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(strToInt("-1234"));
```

해당 문자열에 바로 ```+``` 혹은 ```/``` 등 연산자를 활용해서 리턴 값이 Number타입이 되도록 만들었다. 단순히 '타입'을 변환해주는 주목적을 가진 메소드 혹은 함수를 활용한다는 관점보다는 주 목적은 다르지만 리턴 값을 Number타입으로 바꿔준다는 관점으로 문제를 풀이한듯 하다.

그리고 Javascript 내장함수인 ```Number()```를 활용해 인자에 해당 문자열을 넘겨줘서 처리하는 방법도 있다.