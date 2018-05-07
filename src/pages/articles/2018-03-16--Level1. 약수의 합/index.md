---
title: "[Algorithm JavaScript] Level1. 약수의 합"
date: "2018-03-16T22:12:03.284Z"
layout: post
draft: false
path: "/posts/algorithm/total-of-aliquot"
category: "Algorithm"
tags:
  - "Algorithm"
  - "알고리즘"
  - "Javascript"
  - "자바스크립트"
  - "약수의 합"
description: "어떤 수를 입력받아 그 수의 약수를 모두 더한 수 sumDivisor 함수를 완성해 보세요. 예를 들어 12가 입력된다면 12의 약수는 [1, 2, 3, 4, 6, 12]가 되고, 총 합은 28이 되므로 28을 반환해 주면 됩니다."
---

[Algorithm JavaScript] Level1. 약수의 합

### Question

#### Source https://programmers.co.kr/learn/challenge_codes/3

> 어떤 수를 입력받아 그 수의 약수를 모두 더한 수 sumDivisor 함수를 완성해 보세요. 예를 들어 12 가 입력된다면 12 의 약수는 [1, 2, 3, 4, 6, 12]가 되고, 총 합은 28 이 되므로 28 을 반환해 주면 됩니다.

### My solution

```javascript
function sumDivisor(num) {
  var arr = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((acc, item) => {
    return acc + item;
  });
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumDivisor(12));
```

약수의 합을 구하는 식이다. 참고로 약수는 어떠한 수를 나누어 떨어지게 하는 수를 뜻한다.

먼저 약수를 구해서 배열에 요소로 추가를 해준 후 배열의 요소를 모두 더해 답을 구하는 로직으로 풀었다.

첫번째 약수를 배열에 요소로 추가하는 식은 for 반복문과 if 조건문을 활용했다. 인자로 받은 수를 나누었을때 나머지가 0 인 수를 배열에 더했다. 이 때 나머지를 출력하는 % 연산자를 활용했다. 1 부터 인자로 받은 수까지 루프를 돌려 push 를 활용해 새로운 배열에 약수를 요소로 더했다.

둘째로 배열의 합을 구하는 것은 reduce 를 활용했다. ECMA2015 에서 추가된 reduce 는 배열의 요소를 활용해서 여러가지 값을 산출할 수 있다. reduce 에 대한 자세한 내용은 [링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) 참조. 특히 첫번째 매개변수에 누적값을 넣기 때문에 특히 배열의 합을 구할때는 더욱 유용하게 활용할 수 있다.

#### Other Solutions

#### Best of Best

> 잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,'80 일간의 세계 일주' 중에서

```javascript
let sumDivisor = num => {
  let answer = 0,
    i = 1,
    j = num % 2 == 0 ? 1 : 2;
  for (i; i < num; i = i + j) if (num % i == 0) answer += i;
  return answer + num;
};

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumDivisor(12));
```

내가 작성한 식과 비슷한 식이다. 여기서 주목할 내용은 for 반복문과 if 조건문 안에 내용이 한 줄로 쓰일 경우 {} 중괄호가 생략 가능하다는 점! 코드를 줄이는데 굉장히 도움이 될 수 있는 요소다.
