---
title: "[Algorithm JavaScript] Level1. 평균 구하기"
date: "2018-03-16T22:12:03.284Z"
layout: post
draft: false
path: "/posts/algorithm/print-average"
category: "Algorithm"
tags:
  - "Algorithm"
  - "알고리즘"
  - "Javascript"
  - "자바스크립트"
  - "평균 구하기"
description: "함수를 완성해서 매개변수 array의 평균값을 return하도록 만들어 보세요. 어떠한 크기의 array가 와도 평균값을 구할 수 있어야 합니다."
---

[Algorithm JavaScript] Level1. 평균 구하기

### Question

#### Source https://programmers.co.kr/learn/challenge_codes/126

> 함수를 완성해서 매개변수 array 의 평균값을 return 하도록 만들어 보세요.
> 어떠한 크기의 array 가 와도 평균값을 구할 수 있어야 합니다.

### My solution

```javascript
function average(array) {
  //함수를 완성하세요
  let answer = array.reduce((sum, el) => sum + el, 0) / array.length;
  return answer;
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
var testArray = [4, 8, 0, 20, 23];
console.log('평균값 : ' + average(testArray));
```

ES6 를 최대한 활용하려고 노력했다. ES6 에서 배열을 활용할 수 있는 유용한 메소드에는 `map`, `reduce`, `every`, `some`등이 있다.( [ES6 배열 메소드들이 잘 소개되어 있는 김로그님의 포스팅](http://gnujoow.github.io/dev/2016/10/14/Dev6-es6-array-helper/) )

이 중 활용한 것은 `reduce`다. 참고로 매개변수에는 첫번째 콜백함수를 받는다. 콜백함수의 매개변수는(누적값, 배열의 요소, 인덱스, 배열 을 받을 수 있다. 콜백함수 다음으로 초기값을 인자로 받을 수 있다. 지정안해주면 디폴트값으로 0 으로 인식한다. 더 자세한 내용은 [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) 문서 참조.

이 메소드만 알고 있다면 기본예제에 나와있는 수준으로 풀 수 있다. 이러한 ES6 의 다양한 배열 메소드들은 반복문이나 조건문을 써야할 상황에 더욱 효율적인 코드를 만들 수 있게 해준다.

배열안에 배열은 만드는 문제이기 때문에 빈배열 `C`라는 빈 배열을 만들어 `answer`배열안에 넣는 식으로 해결했다. 중첩 반복문과 index 를 활용해 각 배열 내 배열에 대한 연산을 했다.

for 의 가장 원시적인 형태를 활용했기에 코드가 굉장히 길다. 새 배열이 return 값으로 나오는 새로운 배열외에 `C`라는 새 배열은 활용했기에 효율성이 매우 떨어진다.

#### Other Solutions

#### 처음 javascript 를 배웠을때의 풀이

```javascript
function average(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum / array.length;
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
var testArray = [5, 3, 4];
console.log('평균값 : ' + average(testArray));
```

반복문을 써도 사실 어렵지 않게 풀 수 있다. 다만 위의 코드와의 차이는 길이 즉 효율성이 차이다.

사실 다른 아이디로 이걸 풀었다는 사실을 잊고 있었다. 좋지도 않은 코드인데 따봉이 4 개나! ㅋㅋㅋㅋㅋㅋ.

친절한 어느 분이 댓글로 첨삭도 해주셨다. 위의 `sum=sum+array[i]` 는 사실 `sum+=array[i]` 로 간편하게 빠꿀 수 있다. 처음엔 참 많이도 몰랐다.
