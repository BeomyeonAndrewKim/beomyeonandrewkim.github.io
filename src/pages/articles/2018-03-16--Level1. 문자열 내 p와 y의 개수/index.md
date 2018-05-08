---
title: "[Algorithm JavaScript] Level1. 문자열 내 p와 y의 개수"
date: "2018-03-16T22:12:03.284Z"
layout: post
draft: false
path: "/posts/algorithm/number-of-py-in-string"
category: "Algorithm"
tags:
  - "Algorithm"
  - "알고리즘"
  - "JavaScript"
  - "자바스크립트"
  - "문자열 내 p와 y의 개수"
description: "numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받습니다.
s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 리턴하도록 함수를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다."
---

[Algorithm JavaScript] Level1. 문자열 내 p 와 y 의 개수

### Question

#### Source https://programmers.co.kr/learn/challenge_codes/96

> numPY 함수는 대문자와 소문자가 섞여있는 문자열 s 를 매개변수로 입력받습니다.
> s 에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False 를 리턴하도록 함수를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True 를 리턴합니다.
> 예를들어 s 가 pPoooyY 면 True 를 리턴하고 Pyy 라면 False 를 리턴합니다.

### My solution

```javascript
function numPY(s){
var answer;
var sLower=s.toLowerCase();
var yArr=[];Level1. 문자열 내 p와 y의 개수
var pArr=[];
for(let item of sLower){
  item==='p'? pArr.push(item):item==='y'?yArr.push(item):answer=false;
  }
yArr.length===pArr.length?answer=true: answer=false;
return answer;
}

// 실행을 위한 테스트코드입니다.
console.log("n이 3인 경우: "+ waterMelon(3))
console.log("n이 4인 경우: "+ waterMelon(4))
```

대문자와 소문자가 섞여있는 문자열에 대한 처리는 문자를 모두 소문자 혹은 대문자로 바꿔준다. true 혹은 false 만 반환하면 되는 상황이기 때문에 바꿔줘도 무방하다. `toLowerCase` 나 `toUpperCase`를 활용하면 된다.

그리고 인자로 받은 문자열의 루프를 돌리고 p 혹은 y 가 있을때 각각 새로운 배열에 값을 추가했다. 상황을 일일히 `if`를 활용한다면 코드가 길어지기에 삼항연산자를 이중으로 활용했다. p 와 y 가 없을 때도 `false`를 반환해야하기 모두 해당 안될시엔 `answer`라는 변수에 `false`를 대입했다. 그리고 p 가 들어있는 배열과 y 가 들어있는 배열의 길이가 같을 때 true 를 변수 answer 에 대입했다.

새로운 배열을 생성하고 대입하는 과정들, 그리고 `answer`라는 변수를 선언해서 상황별로 `true` 혹은 `false`를 대입하는게 비효율적으로 느껴진다. 다른 풀이에서 효율적인 방법을 확인해보자.

#### Other Solutions

#### Best of Best

> 잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,'80 일간의 세계 일주' 중에서

```javascript
function numPY(s) {
  //함수를 완성하세요
  return (
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
  );
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(numPY('pPoooyY'));
console.log(numPY('Pyy'));
```

무려 한 줄로 처리가 됬다.

`split`메소드의 기능은 인자로 들어간 값을 기준으로 문자를 쪼개 배열로 저장하는 것이다. 결국 인자로 받는 값의 개수에 따라 쪼개지는 베열의 요소 개수도 일정하다는 사실을 활용했다. 이는 문제에서 s 와 p 가 없을 때 `true`를 반환하라는 조건에도 충족될 수 있다. 해당 문자가 없으면 하나의 값이 들어간 배열로 변환이 될 것이고 결국 길이는 같을 것이기 때문이다.

정말 RESPECT 합니다!
