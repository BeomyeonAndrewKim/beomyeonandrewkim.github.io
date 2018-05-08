---
title: "[Algorithm JavaScript] Level1. 최대공약수와 최소공배수"
date: "2018-03-16T22:12:03.284Z"
layout: post
draft: false
path: "/posts/algorithm/greatest-least-common"
category: "Algorithm"
tags:
  - "Algorithm"
  - "알고리즘"
  - "JavaScript"
  - "자바스크립트"
  - "최대공약수와 최소공배수"
description: "두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환해주는 gcdlcm 함수를 완성해 보세요. 배열의 맨 앞에 최대공약수, 그 다음 최소공배수를 넣어 반환하면 됩니다."
---

[Algorithm JavaScript] Level1.최대공약수와 최소공배수

### Question

#### Source https://programmers.co.kr/learn/challenge_codes/12

> 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환해주는 gcdlcm 함수를 완성해 보세요. 배열의 맨 앞에 최대공약수, 그 다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 gcdlcm(3,12) 가 입력되면, [3, 12]를 반환해주면 됩니다.

### My solution

```javascript
function gcdlcm(a, b) {
  var answer = [];
  let sNum = a < b ? a : b;
  let bNum = a > b ? a : b;
  for (let i = sNum; i > 0; i--) {
    if (sNum % i === 0 && bNum % i === 0) {
      answer.push(i);
      i = 0;
    }
  }
  for (let j = bNum; j <= bNum * sNum; j++) {
    if (j % sNum === 0 && j % bNum === 0) {
      answer.push(j);
      j = bNum * sNum;
    }
  }
  return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(gcdlcm(3, 12));
```

먼저 내 오징어 코드다.

삼항 연산자를 통해 큰,작은 수를 먼저 지정한다. 그 후 반복문 내에 조건문을 통해 최대 공약수, 최소 공배수 각각 을 새로운 배열에 집어넣는 알고리즘이다.

이 코드의 좋은 점은 문제가 풀렸다는 것...말곤 없다.

단점은 명확하다.

반복분이 두번 쓰임/반복문 내에서 답을 찾은 후 i,j 변수를 억지로 재대입 등등..

#### Other Solutions

#### Best of Best

```javascript
function greatestCommonDivisor(a, b) {
  return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);
}
function leastCommonMultipleOfTwo(a, b) {
  return a * b / greatestCommonDivisor(a, b);
}
function gcdlcm(a, b) {
  return [greatestCommonDivisor(a, b), leastCommonMultipleOfTwo(a, b)];
}
```

> 잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,'80 일간의 세계 일주' 중에서

처음에 이 함수를 봤을때 멍했다. 사실 지금도 머리속으로는 잘 그려지지 않는다.

최소공배수를 두 수를 곱한 수를 최소공약수로 나누는 것은 사실 간단한 내용인데 수학이랑 건널 수 없는 강을 건넌 나는 보는 순간 기억이 떠올랐다.

이 코드의 아름다움은 첫번째 최소공약수를 구하는 삼항연사자를 통한 재귀함수식이다.
