---
title: "[Algorithm JavaScript] Level2. 가장 긴 팰린드롬"
date: "2018-03-29T00:13:03.284Z"
layout: post
draft: false
path: "/posts/algorithm/longest-palindrom"
category: "Algorithm"
tags:
  - "Algorithm"
  - "알고리즘"
  - "Javascript"
  - "자바스크립트"
  - "가장 긴 팰린드롬"
description: "앞뒤를 뒤집어도 똑같은 문자열을 palindrome이라고 합니다. longest_palindrom함수는 문자열 s를 매개변수로 입력받습니다. s의 부분문자열중 가장 긴 palindrom의 길이를 리턴하는 함수를 완성하세요."
---

[Daily Algorithm_JavaScript] Level2. 가장 긴 팰린드롬

### Question

#### Source https://programmers.co.kr/learn/challenge_codes/84

> 앞뒤를 뒤집어도 똑같은 문자열을 palindrome 이라고 합니다.
> longest_palindrom 함수는 문자열 s 를 매개변수로 입력받습니다.
> s 의 부분문자열중 가장 긴 palindrom 의 길이를 리턴하는 함수를 완성하세요.
> 예를들어 s 가 토마토맛토마토이면 7 을 리턴하고 토마토맛있어이면 3 을 리턴합니다.

### My solution

```javascript
function longest_palindrom(s) {
  for (let i = s.length; i >= 3; i--) {
    for (let j = 0; j <= s.length - i; j++) {
      let arrayToCompare = s.split('').splice(j, i);
      let a = arrayToCompare.reverse().join('');
      let b = arrayToCompare.reverse().join('');
      if (a === b) return a.length;
    }
  }
  return 1;
}
```

이번 풀이 솔직히 별로 만족하지 못했습니다ㅠㅜ 이중 반복문을 썼고 `String`을 `Array`로 바꿨다가 다시 `String`으로 바꾸는 등 성능적으로나 가독성 측면으로나 많이 허접했네요 ㅠ

문자 전체부터 뒤집고 확인하고, 자릿수를 하나 줄이고 뒤집고 확인하는 식으로 짰습니다. 처음엔 `String`인 상태로 `slice` 메소드를 활용하려 했으나 인자로 받는 숫자를 어떻게 구성할 것인가에 대해 고민이 많았습니다. 어차피 팰린드롬을 판단하기 위해서는 문자를 뒤집어야 했기 때문에 `Array`의 `splice`메소드를 활용했습니다.

`stringToCompare`라는 변수에 비교를 할 수 있도록 대상 `String`을 `Array`로 변경했습니다. 그리고 비교대상인 `a`와 `b`를 놓고 각각에 뒤집어 놓은 문자열과 그대로인 문자열을 대입했습니다. reverse 메소드가 새로운 `Array`를 반환하는게 아니고 수정하는 메소드기 때문에 다시 `reverse`메소드를 써야만 했습니다. 이 부분이 좀 아쉽네요 ㅠㅜ

팰린드롬 문자열이 없다면 1 을 반환해야 했기 때문에 루프 바깥 `return` 값으로 1 을 넣어줬습니다.

#### Other Solutions

#### Best of Best

> 잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,'80 일간의 세계 일주' 중에서

```javascript
function longest_palindrom(s) {
  // 함수를 완성하세요
  if (
    s ===
    s
      .split('')
      .reverse()
      .join('')
  ) {
    return s.length;
  } else {
    var A = longest_palindrom(s.substring(0, s.length - 1));
    var B = longest_palindrom(s.substring(1, s.length));
    return Math.max(A, B);
  }
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(longest_palindrom('토마토맛토마토'));
console.log(longest_palindrom('토마토맛있어'));
```

재귀함수를 활용했다. 언제쯤 난 재귀함수를 여유롭게 사용할 수 있을까ㅠㅜ

`if`절에서 뒤집어도 같은지에 대해서 확인을 하고 `else`절에서 함수를 `return`하는 식으로 재귀함수를 적용했다.

여기서는 `String`의 `substring`메소드를 활용했다. slice 와 substring 메소드의 차이점은 [stackoverflow](https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa) 참고하시면 됩니다.
