---
title: "[Algorithm JavaScript] Level2. 소수 찾기"
date: "2018-03-16T22:12:03.284Z"
layout: post
draft: false
path: "/posts/algorithm/finding-prime-number"
category: "Algorithm"
tags:
  - "Algorithm"
  - "알고리즘"
  - "JavaScript"
  - "자바스크립트"
  - "소수 찾기"
description: "numberOfPrime 메소드는 정수 n을 매개변수로 입력받습니다. 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하도록 numberOfPrime 메소드를 만들어 보세요.
 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다."
---

[Algorithm JavaScript] Level2. 소수 찾기

### Question

#### Source https://programmers.co.kr/learn/challenge_codes/21

> numberOfPrime 메소드는 정수 n 을 매개변수로 입력받습니다.
>
> 1 부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하도록 numberOfPrime 메소드를 만들어 보세요.
>
> 소수는 1 과 자기 자신으로만 나누어지는 수를 의미합니다.
> (1 은 소수가 아닙니다.)
>
> 10 을 입력받았다면, 1 부터 10 사이의 소수는 [2,3,5,7] 4 개가 존재하므로 4 를 반환
> 5 를 입력받았다면, 1 부터 5 사이의 소수는 [2,3,5] 3 개가 존재하므로 3 를 반환

### My solution

```javascript
function numberOfPrime(n) {
  let notPrime = [];
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) if (!notPrime.includes(i)) notPrime.push(i);
    }
  }
  return n - 1 - notPrime.length;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(numberOfPrime(10));
```

위 문제를 풀기위해서는 먼저 소수를 뽑아낼 수 있는 식을 알아야한다. 소수를 직접 알아내는 식은 잘 생각이 안났지만 소수가 아닌 수를 알아내는 식은 생각해낼 수 있었다. 이중으로 루프를 돌렸다.

```javascript
//먼저 1을 제외하고 2부터 인자로 받은 숫자 n까지 루프를 돌린다.
for (let i = 2; i <= n; i++) {
  //그리고 루프가 돌아가고 있는 숫자 i보다 작은 수까지 새로운 루프를 돌린다.
  //1과 위 루프가 돌고 있는 수 i를 제외한 이유는 1과 본인 이외에 나눠서 떨어지는 수가 있는지 판별하기 위함
  for (let j = 2; j < i; j++) {
    //if조건문을 통해 1과 자신 이외에 나누어 떨어지는 수가 있는 지 확인한다.
    if (i % j === 0) if (!notPrime.includes(i)) notPrime.push(i);
    // 위 조건에 해당하는 i는 prime이라 정의한 빈 배열에 추가해준다.
    // i가 여러 수로 떨어질 수도 있기 때문에 중복으로 notPrime 배열에 push한다.
    // 이것을 방지하기 위해 다시 조건문을 걸어 notPrime배열에 해당 i가 있는지 확인 한 후 push해준다.
  }
}
```

위 방법을 통해 2 부터 n 까지의 수 중 소수가 아닌 수를 알아낸다. 그리고 이 문제는 소수를 반환하는게 아니고 소수의 갯수를 확인하는 문제이다. 때문에 1 을 제외한 2 부터 n 까지의 숫자의 개수 즉 n-1 에서 위에서 만들어낸 소수가 아닌 수를 모은 배열 `notPrime`의 `length`를 빼면 소수의 개수가 나온다.

```javascript
return n - 1 - notPrime.length;
//1을 제외한 2부터 n의 개수 n-1
//소수가 아닌 수를 모은 배열 notPrime의 length
//위 두 수를 빼면 소수의 갯수
```

#### Other Solutions

```javascript
function numberOfPrime(n) {
  var result = 0;
  var primeNumber = [];
  // 함수를 완성하세요.
  for (var i = 2; i <= n; i++) {
    var devided = 0;

    for (var a = 2; a < i; a++) {
      if (i % a === 0) {
        devided += 1;
      }
    }
    if (devided === 0) {
      primeNumber.push(i);
    }
  }

  result = primeNumber.length;
  return result;
}
```

윗 분은 소수를 반환하는 식을 만드셨다. 이중으로 루프를 돌리는 건 내 식과 비슷하다. 하지만 `divided`라는 변수를 추가해줘서 초기값을 0 으로 정하고 나눠지는 수가 있으면 +1 을 해줬다. 결과적으로 어떤 수로도 나누어지지 않으면 즉 소수면 `divided`는 계속 0 이다. 보통 웹에서도 `state`라는 변수를 활용해 페이지 이동이나 상태 변경등에 활용하는데 이를 활용했다고 할 수 있다.

첫번째 풀이는 내가 풀었던 풀이를 제일 효율적으로 잘 푼 풀이다. 먼저 작은 수 큰 수를 변수를 선언해서 대입할 필요 없이 바로 반복문에서 초기값 정의하고 실행조건 정의할 때 `Math.min` , `Math.max`를 통해 큰 수 작은 수를 정의할 수 있었다. 조금 독특한 점이 매개변수에서 `s`라는 새로운 변수를 만들어 초기값을 0 을 설정해 반복문에서 `i`값을 `+=` 연산 처리했다.

큰 수, 작은 수 정할 때 `Math.min`, `Math.max`를 활용한다는 점. 그리고 매개변수 초기값 설정 활용한 다는 점이 매우 효율적이 었다.
