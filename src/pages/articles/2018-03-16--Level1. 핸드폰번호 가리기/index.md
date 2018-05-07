---
title: "[Algorithm JavaScript] Level1. 핸드폰번호 가리기"
date: "2018-03-16T22:12:03.284Z"
layout: post
draft: false
path: "/posts/algorithm/hiding-phone-number"
category: "Algorithm"
tags:
  - "Algorithm"
  - "알고리즘"
  - "Javascript"
  - "자바스크립트"
  - "핸드폰번호 가리기"
description: "별이는 헬로월드텔레콤에서 고지서를 보내는 일을 하고 있습니다. 개인정보 보호를 위해 고객들의 전화번호는 맨 뒷자리 4자리를 제외한 나머지를 `*`으로 바꿔야 합니다. 전화번호를 문자열 s로 입력받는 hide_numbers함수를 완성해 별이를 도와주세요"
---

[Algorithm JavaScript] Level1. 핸드폰번호 가리기

### Question

#### Source https://programmers.co.kr/learn/challenge_codes/132

> 별이는 헬로월드텔레콤에서 고지서를 보내는 일을 하고 있습니다. 개인정보 보호를 위해 고객들의 전화번호는 맨 뒷자리 4 자리를 제외한 나머지를 `"*"`으로 바꿔야 합니다.
> 전화번호를 문자열 s 로 입력받는 hide_numbers 함수를 완성해 별이를 도와주세요예를들어 s 가 `"01033334444"`면 `"*******4444"`를 리턴하고, `"027778888"`인 경우는 `"*****8888"`을 리턴하면 됩니다.

### My solution

```javascript
function hide_numbers(s) {
  var result = '';
  result = '*'.repeat(s.length - 4) + s.slice(s.length - 4, s.length);
  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log('결과 : ' + hide_numbers('01033334444'));
```

간단한 문제지만 앞으로 프론트엔드 개발을 할 때 여러 방면으로 활용할 수 있는 문제라고 생각한다. 보안과 관련이 있으니 잘 기억해두자.

문자열의 다양한 메소드를 활용해 풀 수 있는 문제다. 기존의 배열의 수정하는 방법이 있고 새로운 배열을 만들어 대입하는 두가지 방법이 있다. 가장 먼저 떠올랐던건 기존에 배열에서 `replace`메소드를 활용하는 방법이었다. 하지만 `*`를 `repeat`혹은 반복문으로 다시 만들어야하는 과정이 있기 때문에 식이 다소 길어질 수 있다.

그래서 새로운 배열에 `*`과 뒤 4 자리를 넣는 방법을 택했다. 문자열은 `repeat`이라는 메소드가 있다. 이 방법을 통해 `*`를 배열의 길이에서 4 를 뺀 수만큼 반복해서 새로운 배열에 대입했다. 그 후 뒤에 4 자리를 `slice`메소드를 활용하여 자른 후 새로운 배열에 더해줬다. 반복문이나 조건문 등 길어지는 요소를 배제해서 그래도 짧은 식을 완성할 수 있었다.

#### Other Solutions

#### Best Solution

```javascript
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, '*');
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log('결과 : ' + hide_numbers('01033334444'));
```

어떤 문제든 정규표현식을 활용하면 베스트 답이다. 아직 나에겐 미지의 세계다.

일단 [링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D)를 참고하여 정규식을 익히도록 하자.

```javascript
function hide_numbers(s) {
  var result = '*'.repeat(s.length - 4) + s.slice(-4);
  //함수를 완성해주세요

  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log('결과 : ' + hide_numbers('01033334444'));
```

내가 작성한 식이랑 거의 유사하다. 하지만 주목되는 부분은 `slice`메소드에서 인자를 하나만 주고 음수를 주면 뒤에서 음수의 절대값 만큼을 자를 수 있다는 사실! 사소한 부분이지만 식의 길이를 줄여줄 수 있는 소소한 팁이다.
