---
title: "[Algorithm JavaScript] Level2. 콜라츠 추측"
date: "2018-03-16T22:12:03.284Z"
layout: post
draft: false
path: "/posts/algorithm/collatz"
category: "Algorithm"
tags:
  - "Algorithm"
  - "알고리즘"
  - "Javascript"
  - "자바스크립트"
  - "콜라츠 추측"
description: "1937년 Collatz란 사람에 의해 제기된 이 추측은, 입력된 수가 짝수라면 2로 나누고, 홀수라면 3을 곱하고 1을 더한 다음, 결과로 나온 수에 같은 작업을 1이 될 때까지 반복할 경우 모든 수가 1이 된다는 추측입니다."
---

[Algorithm JavaScript] Level2. 콜라츠 추측

### Question

#### Source https://programmers.co.kr/learn/challenge_codes/15

> 1937년 Collatz란 사람에 의해 제기된 이 추측은, 입력된 수가 짝수라면 2로 나누고, 홀수라면 3을 곱하고 1을 더한 다음, 결과로 나온 수에 같은 작업을 1이 될 때까지 반복할 경우 모든 수가 1이 된다는 추측입니다. 예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다. collatz 함수를 만들어 입력된 수가 몇 번 만에 1이 되는지 반환해 주세요. 단, 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.

### My solution

```javascript
function collatz(num) {
  for(let i=0; i<=500 ;i++){
    if(num===1) return i
    else {
    num = num%2===0? num/2 : num*3+1;
    }
  }
  return -1
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( collatz(6) );
```

 먼저 500번을 반복해도 1이 되지 않는다면 -1을 반환해야하기 때문에 500번 도는 반복문을 만들었습니다. 그 이후에  ```num```이 1이 된다면 반복문에서 반복횟수로 선언한 ```i```가 반환되도록 했습니다. 그리고 1이 아니라면 collatz 추측대로 짝수일 땐 0을 나누고, 홀 수 일 땐 3을 곱한 후 1을 더해 그것을 ```num```매개 변수에 재대입했습니다. 이 루프에서 500번까지 1이 안된다면 루프가 끝나고 함수내에 반복문 바깥에 -1이 반환되도록 했습니다.

 반복문을 쓰고 그 안에 삼항연산자, ```if```문을 쓰는 건 어렵진 않으나 사실 좀 뻔한 패턴이라 생각해서 다른 삼항연산자를 물고 물어 쓰려고 했으나 실패했습니다. 아래 그렇게 푼 분이 계셔서 또 놀랐습니다! 추가적으로 매개 변수가 재대입이 된다는 사실을 이번 풀이 과정에서 처음 알게 되었습니다. 

#### Other Solutions

#### Best of Best

> 잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,'80일간의 세계 일주' 중에서

```javascript
function collatz(num,count = 0) {
    return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
}
```

 원래 처음에 풀어보고 싶은 스타일이었던 삼항연산자를 물고 물리는 스타일로 푸셨습니다. 그리고 ```collatz```함수 내에서 ```collatz```함수를 재활용하셨는데 음 역시 제 머리론 시간을 많이 투자해도 이런식으로는 못했을것 같네요 ㅠ ```collatz```함수를 선언함과 동시에 매개변수에 ```count``` 변수를 선언후 0으로 초기화했습니다. 그리고 ```collatz```함수 내에 있는 ```collatz```함수를 호출할 때는 매개 변수 내에서 ```count```를 늘리는 식으로 하셨네요. 굉장히 닮고 싶은 베스트 솔루션이었습니다.

