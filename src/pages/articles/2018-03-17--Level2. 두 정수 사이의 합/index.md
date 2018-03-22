---
title: "[Daily Algorithm_JavaScript] Level1. 두 정수 사이의 합"
date: "2018-03-16T22:12:03.284Z"
layout: post
draft: false
path: "/posts/algorithm/total-between-two-integer"
category: "Algorithm"
tags:
  - "Algorithm"
  - "알고리즘"
  - "Javascript"
  - "자바스크립트"
  - "두 정수 사이의 합"
description: "adder함수는 정수 a, b를 매개변수로 입력받습니다. 두 수와 두 수 사이에 있는 모든 정수를 더해서 리턴하도록 함수를 완성하세요. a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요."
---

[Daily Algorithm_JavaScript] Level2. 두 정수 사이의 합

### Question

#### Source https://programmers.co.kr/learn/challenge_codes/92

> adder함수는 정수 a, b를 매개변수로 입력받습니다.
> 두 수와 두 수 사이에 있는 모든 정수를 더해서 리턴하도록 함수를 완성하세요. a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
> 예를들어 a가 3, b가 5이면 12를 리턴하면 됩니다.
>
> a, b는 음수나 0, 양수일 수 있으며 둘의 대소 관계도 정해져 있지 않습니다.

### My solution

```javascript
afunction adder(a, b){
let newArr=[];
let smallNum;
let bigNum;  
 a<b? [smallNum,bigNum]=[a,b]:[smallNum,bigNum]=[b,a];
for(let i=smallNum;i<=bigNum;i++) newArr.push(i);
return newArr.reduce((a,b)=>a+b)
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( adder(3, 5) )
```

먼저 두 수 중 작은 수와 큰 수를 지정해야한다. 그래서 삼항연산자를 통해 변수 ```smallNum```과 ```bigNum```에 각각 작은 수와 큰 수를 대입했다. 그리고 반복문을 통해 ```smallNum```부터 ```bigNum```까지 새로운 배열에 대입한 후 배열의 ```reduce``` 메소드를 통해 배열의 값을 모두 더한 최종 값을 return했다.

밑에서도 언급했지만 굳이 배열에 넣고 ```reduce```메소드를 활용할 필요까지는 없었다. 반복문을 통해 작은 수 부터 큰 수 까지 그대로 ```+=```를 활용했으면 충분히 더 짧고 효율적으로 답을 구할 수 있었다. 그래도 ```reduce```는 ES6문법으로 React를 비롯해 여러 곳에서 활용가치가 높으니 [공식문서](http://devdocs.io/javascript/global_objects/array/reduce)를 한 번 확인하자.

#### Other Solutions

#### Best of Best

> 잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,'80일간의 세계 일주' 중에서

```javascript
function adder(a, b, s = 0){
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( adder(3, 5) )
```

```javascript
function adder(a, b){
    var result = 0
    //함수를 완성하세요
    return (a+b)*(Math.abs(b-a)+1)/2;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( adder(3, 5) )
```

두번째 풀이는 정말 모르겠다.. 잘 아시는 분 댓글 부탁 드리겠습니다.

첫번째 풀이는 내가 풀었던 풀이를 제일 효율적으로 잘 푼 풀이다. 먼저 작은 수 큰 수를 변수를 선언해서 대입할 필요 없이 바로 반복문에서 초기값 정의하고 실행조건 정의할 때 ```Math.min``` , ```Math.max```를 통해 큰 수 작은 수를 정의할 수 있었다. 조금 독특한 점이 매개변수에서 ```s```라는 새로운 변수를 만들어 초기값을 0을 설정해 반복문에서 ```i```값을 ```+=``` 연산 처리했다. 

큰 수, 작은 수 정할 때 ```Math.min```, ```Math.max```를 활용한다는 점. 그리고 매개변수 초기값 설정 활용한 다는 점이 매우 효율적이 었다.

