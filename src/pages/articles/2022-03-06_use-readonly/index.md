---
title: '[이펙티브 타입스크립트] 아이템 17 - readonly 사용하기'
date: '2022-03-06T09:15:03.284Z'
layout: post
draft: false
path: '/posts/TypeScript/use-readonly'
category: 'TypeScript'
tags:
  - 'TypeScript'
  - 'JavaScript'
  - 'readonly'
description: '만약 함수가 매개변수를 수정하지 않는다면 readonly로 선언하는 것이 좋음. readonly 매개변수는 인터페이스를 명확하게 하며, 매개변수가 변경되는 것을 방지'
---

### 아이템 17 번경 관련된 오류 방지를 위해 readonly 사용하기

- 만약 함수가 매개변수를 수정하지 않는다면 readonly로 선언하는 것이 좋음. readonly 매개변수는 인터페이스를 명확하게 하며, 매개변수가 변경되는 것을 방지.
  - 배열을 예로 들면
    - 배열의 요소를 읽을 수 있지만, 쓸 수 는 없음
    - length를 읽을 수 있지만, 바꿀 수는 없음
    - 배열을 변경하는 pop을 비롯한 다른 메서들를 호출할 수 없음(concat은 가능, 변경안하기 때문)
- readonly를 사용하면 변경하면서 발생하는 오류를 방지할 수 있고, 변경이 발생하는 코드도 쉽게 찾을 수 있음
- const - readonly 차이 이해 ⇒ 속성변경 가능여부

  ### Const

  - 변수 참조를 위한 것이다.
  - 변수에 다른 값을 할당할 수 없다.

  ```
  const ex = '123';
  ex = '456' // ⛔️ 변경 불가
  ```

  ### readonly

  - 속성을 위한 것이다.

  ```
  type readonlyA = {
    readonly barA: string
  };

  const x: readonlyA = {barA: 'baz'};
  x.barA = 'quux'; // ⛔️ 변경 불가
  ```

  - 위 예제처럼 속성 `barA`는 변경이 불가능하지만 아래 예제처럼`barB`에 할당된 object값은 변경이 가능하다.

  ```
  type readonlyB = {
    readonly barB: { baz: string }
  };

  const y: readonlyB = {barB: {baz: 'quux'}};
  y.barB.baz = 'zebranky'; // 👌 변경 가능
  ```

  > barB.baz에 새로운 값이 할당될 수 있는 이유는 readonly가 얕게 동작하는 것과 관련이 있다.barB가 참조 (refer)하고 있는 값 자체는 변경될 수 없지만 얘가 readonly라고 그 안에 있는 속성들이 모두 동일한 접근 제어자를 가지고 있는 것이 아니다.비슷한 예로 배열에 readonly가 존재한다고 배열 자체가 readonly가 되지 않는다.
  >
  > ```
  > const dates: readonly Date[] = [new Date()];
  > dates.push(new Date()); // ⛔️ .push()가 존재안한다는 오류 발생
  > dates[0].setFullYear(2022); //👌 하지만 다른 위치를 참조할 시 변경 이 가능하다.
  > ```
  >
  > 이러한 경우는 속성이 아닌 **객체에 사용되는 `Readonly` 제네릭에도 해당**된다.
  >
  > ```
  > interface Outer {
  >   inner: {
  >     x: number;
  >   }
  > }
  > const o: ReadOnly<Outer> = { inner: { x:0 }};
  > o.inner = { x: 1 }; // ⛔️ 변경 불가
  > o.inner.x = 1; // 👌 o.inner.x는 readonly가 아니므로 변경 가능
  > ```

- readonly 얕게 동작 ⇒ ts-essentials에 DeepReadonly

출처 [이펙티브 타입스크립트](https://www.yes24.com/Product/Goods/102124327)
