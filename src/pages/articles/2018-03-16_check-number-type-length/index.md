---
title: "[Algorithm JavaScript] Level1.문자열 다루기 기본(Number타입 및 길이 확인)"
date: "2018-03-16T22:12:03.284Z"
layout: post
draft: false
path: "/posts/algorithm/check-number-type-length"
category: "Algorithm"
tags:
  - "Algorithm"
  - "알고리즘"
  - "JavaScript"
  - "자바스크립트"
  - "Number타입 및 길이 확인"
description: "alpha_string46함수는 문자열 s를 매개변수로 입력받습니다. s의 길이가 4혹은 6이고, 숫자로만 구성되있는지 확인해주는 함수를 완성하세요.
 예를들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다"
---

[Algorithm JavaScript] Level1.문자열 다루기 기본(Number 타입 및 길이 확인)

### Question

#### Source https://programmers.co.kr/learn/challenge_codes/99

> alpha_string46 함수는 문자열 s 를 매개변수로 입력받습니다.
> s 의 길이가 4 혹은 6 이고, 숫자로만 구성되있는지 확인해주는 함수를 완성하세요.
> 예를들어 s 가 a234 이면 False 를 리턴하고 1234 라면 True 를 리턴하면 됩니다

### My solution

```javascript
function alpha_string46(s) {
  var result = true;
  // 함수를 완성하세요
  if ((s.length === 4 || s.length === 6) && !Object.is(parseInt(s), NaN)) {
    return result;
  } else {
    return false;
  }
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(alpha_string46('a234'));
```

전체적으로 나쁘진 않은 접근이었지만 조건문에 내에 `&&` 연산자 다음이 다소 불필요하게 길었다.

숫자인지 확인시켜주기 위해 문자열을 parseInt 를 활용했고 연산 후 문자열이 발견될시 NaN 을 반환한다는 점을 활용했다. `NaN` 을 판별하는 것은 `isNaN` 이면 더욱 간결하게 만들 수 있다. `Object.is` 가 비교 연산자 처럼 활용할 수 있다는 점을 착안했던 알고리즘이었다.

#### Other Solutions

#### Best of Best

> 잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,'80 일간의 세계 일주' 중에서

```javascript
function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(alpha_string46('a234'));
```

JavaSciript 정규식이 활용되었다. 정규식은 [요기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D '요기') 참조. 아직 배우지 않은 부분이지만 비교 연산시 유용하게 활용 할 것 같다.

```javascript
function alpha_string46(s) {
  return s.length == 4 || s.length == 6 ? !isNaN(s) : false;
}
```

간단한 조건문은 삼항연산자를 활용하는게 효율적이다. `true` 자리에 두번째 조건을 넣으면서 `?` 이전이 길지 않도록 한 점이 인상적이다.

아직 나에겐 익숙하지 않은 `map`을 활용하셨다. 그것도 중첩으로!

요즘 읽고 있는 '훌륭한 프로그래머 되는 법' 이라는 책에서도 삼항연산자 등을 활용해 코드를 간략하게 만드는 방법을 언급하고 그것은 찬양(!)한다. 삼항연산자나 short-circuit evaluation(`&&`,`||` 를 활용), `map` `forEach` 등 코드를 효율적으로 만들 수 있는 메소드드들을 잘 기억해둬야 할 것 같다.

앞으로 React, Node.js 등 Javascript 를 활용한 웹관련 라이브러리, 엔진등을 활용할 때 `map`

`reduce` 등 배열 내에 값을 처리하는 메소드들이 많이 활용된다고 했다. 이 점을 유념해야겠다.
