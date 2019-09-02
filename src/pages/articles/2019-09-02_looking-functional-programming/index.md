---
title: '[Ramda] 한 달간 함수형 프로그래밍을 구경하고 적용하면서'
date: '2019-09-02T09:15:03.284Z'
layout: post
draft: false
path: '/posts/javascript/looking-functional-programming'
category: 'JavaScript'
tags:
  - 'JavaScript'
  - 'Functional Programming'
  - 'Ramda'
description: 새로 이직해온 회사의 주요 스택은 Vue.js + Vuex + Ramda.js + Rx.js 이다.'
---

## 한 달간 함수형 프로그래밍을 구경하고 적용하면서

새로 이직해온 회사의 주요 스택은 `Vue.js + Vuex + Ramda.js + Rx.js` 이다.

여기서 가장 핵심은 함수형 프로그래밍을 베이스로하는 Ramda.js와 Rx.js이다.

이직 준비를 하면서 봤던 함수형 프로그래밍에 관한 내용은 대부분 철학에 관한 이야기였다.

예를 들어,

- `Immutable data`, `first class citizen`으로서 함수를 적극 활용한다.

함수형 프로그래밍에 관한 글을 많이 읽어봤지만 기억에 남는건 위의 한 줄이었다.

새로 이직해온 곳이 함수형 프로그래밍 기반으로 코드가 작성되어있다고 했을때는 드디어 저 실체를 볼 수 있구나 하는 기대감을 갖게 했었다.

하지만 역시 새로운 건 쉽지 않다는 것이다.

내 눈앞에 있는건 이런 코드였다.

```javascript
makeList: R.compose(
  R.filter(R.__, ['A', 'B', 'C']),
  R.flip(R.contains),
  R.map(R.prop('name')),
  R.filter(R.prop('value')),
  R.pathOr([], ['a', 'b', 'c'])
 ),

filteredValue: R.compose(
  R.map(([value] = []) => value),
  R.filter(R.prop(1)),
  Object.entries,
  R.dissoc(STATUS_ALL),
  R.prop('dataFilter')
 ),
```

이게 도대체 무엇인가..?

자동으로 긁적긁적 모션을 취하게 되었다.

이러한 코드들이 연속되는 레포지토리는 일종의 절망감을 안겨주었다.

하지만 역시 스타트업이기 때문에 나의 업무는 바로 시작되었다.

즉 `Ramda.js`와 함께하는 함수형 프로그래밍에 대한 입문이 시작되었다.

조그만 기능부터 하나씩 함수형 프로그래밍을 적용했다.

예를 들어,

computed에 단순히 깊은 뎁스를 조회하는 함수부터 시작해서

```javascript
query: R.path(['$route', 'query']),
```

data의 상태를 바꿔주는 간단한 로직들까지

```javascript
R.compose(
  R.forEach(el => (this.dataFilter[el] = false)),
  R.without(R.__, STATUS_LIST_EXCEPT_ALL)
)(filters);
```

조건문이나 그 외 복잡한 로직들에는 아직 적용하기는 힘들었지만 하나씩 적용해가면서 소소한 즐거움을 느낄 수 있었다.

좋았던 점은 확실히 `for`문을 여러번 돌거나 눈으로 볼때 지저분한 코드들을 한 두줄로 정리할 수 있었다는 점이다.

힘들었던 점은 `Ramda.js`의 세세한 스펙을 알지 못하면 쉽게 그리고 자주 에러를 만날 수 있다는 점이었다.

아직 동작 원리를 자세히 알지는 못하기 때문에 성능에 대해서는 평가를 할 수 없다.

하지만 분명 `코드를 줄여주는데`는 엄청난 기여를 하는 프로그래밍 방식이라는건 확실한 것 같다.

앞으로도 어려운 점이 많겠지만 하나하나씩 함수형으로 만들어가는 소소한(?) 재미 속에 회사 적응기는 더 스펙타클할 것 같다.
