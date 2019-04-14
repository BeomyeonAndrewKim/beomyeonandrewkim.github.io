---
title: "[CS] 버블 정렬 자바스크립트로 구현하기"
date: "2018-05-10T18:15:03.284Z"
layout: post
draft: false
path: "/posts/cs/bubblesort-javascript"
category: "CS"
tags:
  - "CS"
  - "자바스크립트"
  - "JavaScript"
  - "버블 정렬"
  - "정렬 알고리즘"
description: "JavaScript로 개발에 입문을 하고 CS를 공부하다보면 예시 코드가 C계열 언어나 Java계열의 언어인 설명이 대다수이다. JavaScript가 위에 언급된 언어들이 할 수 있는 메모리 관리를 비롯한 몇몇 기능을 할 수 없다는 것이 이유 중 하나일 것 같다."
---

## 버블 정렬 자바스크립트로 구현하기

JavaScript 로 개발에 입문을 하고 CS 를 공부하다보면 예시 코드가 C 계열 언어나 Java 계열의 언어인 설명이 대다수이다. JavaScript 가 위에 언급된 언어들이 할 수 있는 메모리 관리를 비롯한 몇몇 기능을 할 수 없다는 것이 이유 중 하나일 것 같다.

JavaScript 개발자가 되기로 했기 때문에 가능하면 C 계열이나 Java 는 억지로 공부하고 싶지는 않다. 그래서 JavaScript 로 CS 의 예제를 하나하나씩 구현해보려 한다.

그 첫번째는 Sorting Algorithm, 정렬 알고리즘이다.

또 그 중에서도 1 번 개념이자, 조금은 외면(?)받는 버블 정렬이다.

### 버블 정렬(Bubble Sorting)

버블 정렬은 1 번째와 2 번째 원소를 비교하여 정렬하고, 2 번째와 3 번째, ..., n-1 번째와 n 번째를 정렬한 뒤 다시 처음으로 돌아가 이번에는 n-2 번째와 n-1 번째까지, ...해서 최대 n(n-1)/n 번 정렬한다. 한 번 돌 때마다 마지막 하나가 정렬되므로 원소들이 거품이 올라오는 것처럼 보여 거품정렬이다.

거의 모든 상황에서 최악의 성능을 보여준다. 단, 이미 정렬된 자료에서는 1 번만 돌면 되기 때문에 최선의 성능을 보여준다. 가장 손쉽게 구현하여 사용할 수 있지만, 만들기가 쉽고 직관적일 뿐이지 알고리즘적 과점에서 보면 대단히 비효율적인 정렬방식이다.

Reference: [나무위키](https://namu.wiki/w/%EC%A0%95%EB%A0%AC%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)

![Bubble Sorting](http://codepumpkin.com/wp-content/uploads/2017/10/BubbleSort_Avg_case.gif)

source: [code pumbkin](http://codepumpkin.com/bubble-sort/)

### JavaScript 로 구현하기

```javascript
function bubbleSort(arr) {
  let isSorted = false;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      isSorted = true;
    }
  }
  return isSorted ? bubbleSort(arr) : arr;
}

const testArr = [4, 3, 6, 7, 9, 1];
bubbleSort(testArr); // [ 1, 3, 4, 6, 7, 9 ]
```

오름차순으로 정렬이 될 때까지 정렬을 계속 해야하기 때문에 기본적으로 재귀를 활용했다.

```javascript
let isSorted = false;
  for(let i=0;i<=arr.length-1;i++){
    if(arr[i]>=arr[i+1]){
      [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
      isSorted = true;
    }
```

먼저 `isSorted`라는 변수를 만들어 `false`를 대입했다. 이는 정렬 작업이 이뤄졌을때는 `true`로 재대입 될것이고 정렬 작업이 한 번도 일어나지 않았을 때 즉 오름차순 정렬이 완료되었을 때는 `false`가 담긴 상태로 그대로 다음 코드로 넘어갈 것 이다.

그리고 기본적으로 배열은 변수 `i`에 담긴 `0`부터 배열의 길이의 -1 만큼 루프를 돈다. `i`는 배열의 `index`로서 역할을 할 것이고 배열의 요소 2 개씩 대소 판단을 해서 앞의 요소가 뒤의 요소보다 크거나 같을 경우 위치를 바꿔준다.

```javascript
return isSorted ? bubbleSort(arr) : arr;
```

그리고 위에 언급된 대로 `isSorted`가 `true`가 되었을 때, 즉 정렬이 한 번 이루어 졌을 때는 다시 한 번 해당 함수를 호출해준다(재귀함수). 그리고 `isSorted`가 그대로 `false`일 때, 즉 정렬이 한 번도 적용이 안되었을때는 오름차순 정렬이 완료되었음을 의미하므로 해당 배열을 그대로 반환한다.

주의할 점은 `bubbleSort`를 호출할 때도 `return`을 해주는 방식으로 해야하는 것이다. `return`을 안하고 단순히 호출을 한다면 실행 컨텍스트 상 재귀적으로 호출되는 함수 내에서만 값이 `return`될 뿐이지 가장 바깥의 컨텍스트에서는 `return`될 값이 없기 때문에 `undefined`만 나온다. 그렇기 때문에 재귀호출되는 함수도 꼭 `return`을 하자!
