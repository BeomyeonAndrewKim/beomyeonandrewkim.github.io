---
title: '[이펙티브 타입스크립트] 아이템 15, 16 - 인덱스 시그니처'
date: '2022-02-25T09:15:03.284Z'
layout: post
draft: false
path: '/posts/TypeScript/index-signature'
category: 'TypeScript'
tags:
  - 'TypeScript'
  - 'JavaScript'
  - 'index signature'
description: '런타임 때까지 객체의 속성을 알 수 없을 경우에만 인덱스 시그니처를 사용'
---

### 아이템 15 동적 데이터에 인덱스 시그니처 사용하기

- 런타임 때까지 객체의 속성을 알 수 없을 경우에만 인덱스 시그니처를 사용
- 안전한 접근을 위해 인덱스 시그니처 값 타입에 `undefined`를 추가하는 것을 고려
- 가능하다면 인터페이스, Record, 매핑된 타입 같은 인덱스 시그니처보다 정확한 타입을 사용

### 아이템 16 number 인덱스 시그니처보다는 Array, 튜플, ArrayLike를 사용하기

- 타입스크립트는 Array에 숫자 키를 허용하고, 문자열 키와 다른 것으로 인식합니다

```tsx
interface Array<T> {
  //...
  [n: number]: T;
}

//test?
const test: Array<string> = ['test', 'test2'];

const val = test[0];
const va2 = test['1'];
```

- Object.keys 같은 구문은 여전히 문자열로 반환(배열을 순회하는 코드에 대한 실용적인 허용)
- index의 타입이 중요하다면 `for-of`, `forEach`, `for(;;)` (break가 필요하다면) 루프 사용
- 어떤 길이를 가지는 배열과 비슷한 형태의 튜플을 사용하고 싶다면 ArrayLike 타입 사용
- 인덱스 시그니처에 number(런타임에서는 어차피 string으로 인식)를 사용하기보다 Array나 튜플 또는 ArrayLike 타입을 사용하는게 좋음

출처 [이펙티브 타입스크립트](https://www.yes24.com/Product/Goods/102124327)
