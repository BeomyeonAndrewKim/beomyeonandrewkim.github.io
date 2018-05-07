---
title: "[Algorithm JavaScript] Level1. 정수 제곱근 판별하기"
date: "2018-03-16T22:12:03.284Z"
layout: post
draft: false
path: "/posts/algorithm/check-square-root-integer"
category: "Algorithm"
tags:
  - "Algorithm"
  - "알고리즘"
  - "Javascript"
  - "자바스크립트"
  - "정수 제곱근 판별하기"
description: "nextSqaure함수는 정수 n을 매개변수로 입력받습니다. n이 임의의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 임의의 정수 x의 제곱이 아니라면 'no'을 리턴하는 함수를 완성하세요."
---

[Algorithm JavaScript] Level1. 정수 제곱근 판별하기

### Question

#### Source https://programmers.co.kr/learn/challenge_codes/120

> nextSqaure 함수는 정수 n 을 매개변수로 입력받습니다.
> n 이 임의의 정수 x 의 제곱이라면 x+1 의 제곱을 리턴하고, n 이 임의의 정수 x 의 제곱이 아니라면 'no'을 리턴하는 함수를 완성하세요.
> 예를들어 n 이 121 이라면 이는 정수 11 의 제곱이므로 (11+1)의 제곱인 144 를 리턴하고, 3 이라면 'no'을 리턴하면 됩니다.

### My solution

```javascript
function nextSqaure(n) {
  let squareRoot = Math.sqrt(n);
  return Number.isInteger(squareRoot) ? Math.pow(squareRoot + 1, 2) : 'no';
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log('결과 : ' + nextSqaure(121));
```

정수의 제곱근을 판별 후 그에 맞게 연산하는 문제다.

Javascript 에서는 Number 을 활용할 수 있는 `Math`객체가 있다. `Math` 객체에는 여러 메소드가 있다. [참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math)

이 중 위 문제를 해결하기 위해 선택한 `Math`객체의 메소드는 `sqrt`와 `pow`다. `sqrt`는 말 그대로 squareroot 즉 제곱근을 반환하는 메소드다. 제곱근이 정수가 아닐 경우 소수까지 반환한다. 그리고 `pow`는 두 매개변수를 받고 첫번째에 밑 두번째에 지수를 받는다. 거듭제곱을 할 수 있는 `**`연산자를 활용하려 했으나 Programmers 에서는 안되었다.(chrome console 이랑 repl babel 에서는 처리가 됬다.) 왜 그러는지 아시는 분 댓글 부탁 드립니다.

그리고 Number 값이 정수인지 확인할 수 있는 `Number`객체의 `isInteger` 메소드를 활용했다. javascript 가 가지고 있는 순수 기능들만 활용해서 짧은 코드로 해결 가능했던 문제였다.

#### Other Solutions

```javascript
//제곱근이 정수임을 확인할 수 있는 다양한 방법들
var msn = Math.sqrt(n);
parseInt(msn) - msn === 0;
msn % 1 === 0;
```

다른 분들의 풀이 중 제곱근이 정수 임을 확인할 수 있는 몇가지 방법을 소개한다.

먼저 `Math` 객체의 제곱근을 구하는 `sqrt`를 변수에 저장한 후

첫번째는 문자열을 Number 타입으로 전환하는 함수인 `parseInt`가 정수만을 반환한다는 점을 활용했다. 제곱근의 정수를 반환한 후 다시 제곱근을 뺐을 때 0 이 된다면 제곱근이 정수라는 식이다.

두번째는 제곱근을 1 로 나눴을때 나머지가 0 이면 제곱근이 정수라는 식이다.

Number 객체의 `isInteger`메소드를 활용하지 않았을때도 다양한 방법으로 제곱근이 정수임을 확인할 수 있는 방법들이었다.
