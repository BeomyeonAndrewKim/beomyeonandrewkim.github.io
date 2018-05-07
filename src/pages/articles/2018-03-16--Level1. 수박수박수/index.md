---
title: "[Algorithm JavaScript] Level1.수박수박수?(길이만큼 문자열 반환하기)"
date: "2018-03-16T22:12:03.284Z"
layout: post
draft: false
path: "/posts/algorithm/return-string-equal-length"
category: "Algorithm"
tags:
  - "Algorithm"
  - "알고리즘"
  - "Javascript"
  - "자바스크립트"
  - "길이만큼 문자열 반환하기"
  - "수박수박수"
description: "water_melon함수는 정수 n을 매개변수로 입력받습니다. 길이가 n이고, 수박수박수...와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하세요."
---

[Algorithm JavaScript] Level1.수박수박수?(길이만큼 문자열 반환하기)

### Question

#### Source https://programmers.co.kr/learn/challenge_codes/107

> water_melon 함수는 정수 n 을 매개변수로 입력받습니다.
> 길이가 n 이고, 수박수박수...와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하세요.
>
> 예를들어 n 이 4 이면 '수박수박'을 리턴하고 3 이라면 '수박수'를 리턴하면 됩니다.

### My solution

```javascript
function waterMelon(n) {
  var result = '';
  for (let i = 0; i < n; i++) {
    i % 2 === 0 ? (result += '수') : (result += '박');
  }
  return result;
}

// 실행을 위한 테스트코드입니다.
console.log('n이 3인 경우: ' + waterMelon(3));
console.log('n이 4인 경우: ' + waterMelon(4));
```

효율적인 코드 작성을 위해 if 문 대신 삼항연산자를 활용하려고 노력하고 있다. 위 문제도 삼항연산자를 활용했다. 짝수 홀수를 코드에서 가장 편하게 구분할 수 있는 연산자가 바로 `%2` 다. `Math.random()` 만큼이나 단순하지만 정말 유용한 연산자다. 어려운 문제는 아니었기에 리뷰는 여기까지!

#### Other Solutions

#### Best of Best

> 잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,'80 일간의 세계 일주' 중에서

```javascript
function waterMelon(n) {
  var result = '수박';
  result = result.repeat(n - 1).substring(0, n);
  //함수를 완성하세요

  return result;
}
```

이런 문제에서 내 개인적인 생각으로 고수와 초보를 나누는 건 ''반복문을 쓰냐 안쓰냐?" 인 것 같다. 위 풀이는 반복문을 활용하지 않고 풀이한 알고리즘이다.

매개변수 n 이 홀수인지 짝수인지 확인하는 문장조차 없다. repeat 와 substring 이라는 단순한 메소드를 활용했는데 정말 깔끔하게 알고리즘을 짜셨다. ''수박"을 n-1 만큼 repeat 해서 문장을 만든 후 substring 을 필요한 부분만 반환했다.

만들고 빼는 작업이 있어 다소 비효율적으로 보일 수 있으나 코드 길이 만큼은 제일 효율적이었다.
