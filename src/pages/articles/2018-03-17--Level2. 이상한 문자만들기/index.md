---
title: "[Algorithm JavaScript] Level1. 이상한 문자만들기"
date: "2018-03-16T22:12:03.284Z"
layout: post
draft: false
path: "/posts/algorithm/return-weird-number"
category: "Algorithm"
tags:
  - "Algorithm"
  - "알고리즘"
  - "Javascript"
  - "자바스크립트"
  - "이상한 문자만들기"
description: "toWeirdCase함수는 문자열 s를 매개변수로 입력받습니다. 문자열 s에 각 `단어`의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하세요."
---

[Algorithm JavaScript] Level2. 이상한 문자만들기

### Question

#### Source https://programmers.co.kr/learn/challenge_codes/114

> toWeirdCase함수는 문자열 s를 매개변수로 입력받습니다.
> 문자열 s에 각 `단어`의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하세요.
> 예를 들어 s가 try hello world라면 첫 번째 단어는 TrY, 두 번째 단어는 HeLlO, 세 번째 단어는 WoRlD로 바꿔 TrY HeLlO WoRlD를 리턴하면 됩니다.
>
> **주의** 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단합니다..

### My solution

```javascript
function toWeirdCase(s){
  newArr=s.split(' ');
  for(let i=0;i<newArr.length;i++){
    newArr[i]=newArr[i].split('');
    newArr[i].forEach((el,i,arr)=>{
      i%2===0? arr[i]=arr[i].toUpperCase():arr[i]=arr[i].toLowerCase();
    })
    newArr[i]=newArr[i].join('');
   }
  return newArr.join(' ');
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + toWeirdCase("try hello world"));
```

각 단어별로 짝수번째, 홀수번째를 구분해야 하기 때문에 각 단어를 공백을 기준으로 배열로 나눴다.

```javascript
newArr=s.split(' ');//newArr=['try','hello','world']
```

그리고 배열의 요소를 루프로 돌렸다. 요소가 String이기 때문에 ```for```문을 돌리는데 제약이 많았다. 그래서 배열의 요소를 ```split```메소드를 통해 다시 배열로 만들었다.

```javascript
for(let i=0;i<newArr.length;i++){ // 요소의 0번째부터 newArr의 length-1 즉 2번째 요소까지 루프
    newArr[i]=newArr[i].split(''); // 각 요소를 split메소드를 통해 배열로 전환 newArr[0]=['t','r','y']
```

여기서 ```forEach``` 메소드를 통해 이중으로 루프를 돌렸다. ```forEach```를 활용하면 요소, 인덱스, 배열 모두를 인자로 받아서 함수형으로 활용할 수 있다. 

```javascript
newArr[i].forEach((el,i,arr)=>{ //요소, 인덱스, 배열 모두를 인자로 받는 화살표 함수 
      i%2===0? arr[i]=arr[i].toUpperCase():arr[i]=arr[i].toLowerCase();
    }) //인덱스를 %연산자를 활용해 짝,홀수 구분
	   //삼항연산자를 통해 짝수일때는 요소에 대문자를 다시 대입, 홀수일때는 소문자 대입
```

그리고 ```join```메소드를 활용해 다시 대,소문자 변화를 준 요소들을 단어로 묶어준다. 그리고 첫번째 배열의 요소로 다시 대입한다.

그 후 첫번째 배열을 ```join```메소드를 활용해 다시 문자열로 ```return```한다.

```javascript
newArr[i]=newArr[i].join('');
	}
 return newArr.join(' ');
}
```

위 방식으로 풀면서 의아했던건 반복문의 형식, 그리고 string이냐 array이냐에 따라 대입이 될때도 있고 안될때도 있다. 하나하나씩 바꿔보면서 왜 그런지 확인해야겠다. 

#### Other Solutions

#### Best of Best

> 잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,'80일간의 세계 일주' 중에서

```javascript
function toWeirdCase(s){
  //함수를 완성해주세요
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a){
    return a[0].toUpperCase()+a[1].toLowerCase();})
}

console.log("결과 : " + toWeirdCase("try hello world"));
```

가장 효율적인 식은 역시 정규표현식이다. [MDN문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D)를 참고하자.

```javascript
function toWeirdCase(s){
  return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
}

console.log("결과 : " + toWeirdCase("try hello world"));
```

배열에서 각 요소를 변경시키는 가장 효율적인 메소드는 ```map```메소드다. 위 식에서는 먼저 공백을 기준으로 ```split```메소드를 사용해 ```map```메소드를 활용할 수 있도록 했다. 그리고 각 단어도 알파벳 각각 하나가 요소가 되는 배열로 다시 ```split```메소드를 활용했다. 이어서 삼항연산자를 통해 짝수번째 인덱스일 경우 대문자로 바꿨다. 그리고 두번의 ```join```메소드를 통해 문자열을 반환했다. 대소문자 변경해주는 ```toUpperCase()```, ```toLowerCase()```는 모두 새로운 값을 반환한다. 하지만 위 식에서는 체인처럼 메소드들이 이어져있기 때문에 새로운 값을 반환하는 메소드들을 위해 재대입을 해줄 필요도 없었다. 그리고 홀수번째 인덱스를 굳이 ```toLowerCase()``` 메소드를 쓸 필요도 없었다. 배열에서 ```map```, ```reduce```는 정말 중요하다!

