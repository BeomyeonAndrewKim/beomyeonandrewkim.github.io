---
title: "[Algorithm JavaScript] Level1. 행렬의 덧셈"
date: "2018-03-16T22:12:03.284Z"
layout: post
draft: false
path: "/posts/algorithm/addition-of-matrix"
category: "Algorithm"
tags:
  - "Algorithm"
  - "알고리즘"
  - "Javascript"
  - "자바스크립트"
  - "행렬의 덧셈"
description: "행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬을 입력받는 sumMatrix 함수를 완성하여 행렬 덧셈의 결과를 반환해 주세요."
---

[Algorithm JavaScript] Level1. 행렬의 덧셈

### Question

#### Source https://programmers.co.kr/learn/challenge_codes/9

> 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2 개의 행렬을 입력받는 sumMatrix 함수를 완성하여 행렬 덧셈의 결과를 반환해 주세요.
>
> 예를 들어 2x2 행렬인 A = ((1, 2), (2, 3)), B = ((3, 4), (5, 6)) 가 주어지면, 같은 2x2 행렬인 ((4, 6), (7, 9))를 반환하면 됩니다.(어떠한 행렬에도 대응하는 함수를 완성해주세요.)

### My solution

```javascript
function sumMatrix(A, B) {
  var answer = Array();
  let C = [];
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      C.push(A[i][j] + B[i][j]);
    }
    answer.push(C);
    C = [];
  }
  return answer;
}
```

코딩 초보자다운 코드이다.

배열안에 배열은 만드는 문제이기 때문에 빈배열 `C`라는 빈 배열을 만들어 `answer`배열안에 넣는 식으로 해결했다. 중첩 반복문과 index 를 활용해 각 배열 내 배열에 대한 연산을 했다.

for 의 가장 원시적인 형태를 활용했기에 코드가 굉장히 길다. 새 배열이 return 값으로 나오는 새로운 배열외에 `C`라는 새 배열은 활용했기에 효율성이 매우 떨어진다.

#### Other Solutions

#### Best of Best

```javascript
return A.map((a, i) => a.map((b, j) => b + B[i][j]));
```

> 잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,'80 일간의 세계 일주' 중에서

보아라 이 아름다운 코드를..

아직 나에겐 익숙하지 않은 `map`을 활용하셨다. 그것도 중첩으로!

요즘 읽고 있는 '훌륭한 프로그래머 되는 법' 이라는 책에서도 삼항연산자 등을 활용해 코드를 간략하게 만드는 방법을 언급하고 그것은 찬양(!)한다. 삼항연산자나 short-circuit evaluation(`&&`,`||` 를 활용), `map` `forEach` 등 코드를 효율적으로 만들 수 있는 메소드드들을 잘 기억해둬야 할 것 같다.

앞으로 React, Node.js 등 Javascript 를 활용한 웹관련 라이브러리, 엔진등을 활용할 때 `map`

`reduce` 등 배열 내에 값을 처리하는 메소드들이 많이 활용된다고 했다. 이 점을 유념해야겠다.
