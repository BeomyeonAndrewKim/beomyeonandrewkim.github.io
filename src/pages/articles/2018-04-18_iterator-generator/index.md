---
title: "[JavaScript] Iterator, Generator"
date: "2018-04-18T18:15:03.284Z"
layout: post
draft: false
path: "/posts/javascript/iterator-generator"
category: "JavaScript"
tags:
  - "JavaScript"
  - "자바스크립트"
  - "ES2015"
  - "Iterator"
  - "Generator"
description: "Iterator, Generator 1. Iterable Iterable object는 ES2015에 도입되었습니다. "
---

# Iterator, Generator

## 1. Iterable

Iterable object 는 ES2015 에 도입되었습니다.

반복 가능한 객체를 다른 객체와 구분 짓는 특징은 `Symbol.iterator` 속성에 특별한 형태의 함수가 들어있다는 것입니다.

```javascript
const arr = [1, 2, 3, 4, 5];
arr[Symbol.iterator]; //[Function]
```

이를 반복 가능한 객체(iterable object) 혹은 줄여서 iterable 이라 부르고, 해당 객체는 iterable protocol 은 만족한다고 말합니다.

내장된 생성자 중 iterable 객체를 만들어내는 생성자에는 아래와 같은 것들이 있습니다.

* String
* Array
* TypedArray
* Map
* Set

객체가 Iterable 이라면 아래의 기능을 사용할 수 있습니다.

* `for…of` 루프
* Spread 연산자(`...`)
* 분해 대입(destructuring assignment)
* 기타 iterable 을 인수로 받는 함수

## 2. Generator

Iterable 을 구현하는 가장 쉬운 방법은 generator 함수를 사용하는 것입니다.

generator 함수는 iterable 객체를 반환하는 특별한 형태의 함수입니다.

```javascript
// generator 함수 선언하기
function* gen1() {
  // ...
}

// 표현식으로 사용하기
const gen2 = function*() {
  // ...
};

// 메소드 문법으로 사용하기
const obj = {
  *gen3() {
    // ...
  },
};
```

Generator 함수를 호출하면 객체가 생성되는데, 이 객체는 iterable protocol 을 만족합니다. 즉, Symbol.iterator 속성을 갖고 있습니다.

```javascript
function* gen1() {
  // ...
}

// `gen1`를 호출하면 iterable이 반환됩니다.
const iterable = gen1();

iterable[Symbol.iterator]; // [Function]
```

generator 함수 안에서 `yield` 키워드는 `return`과 유사한 역할을 하며, iterable 기능을 사용할 때 `yield` 키워드 뒤에 있는 값들을 순서대로 넘겨줍니다.

```javascript
function* numberGen() {
  yield 1;
  yield 2;
  yield 3;
}

// 1, 2, 3이 순서대로 출력됩니다.
for (let n of numberGen()) {
  console.log(n);
}
```

`yield*` 표현식을 사용하면, 다른 generator 함수에서 넘겨준 값을 대신 넘겨줄 수도 있습니다.

```javascript
function* numberGen() {
  yield 1;
  yield 2;
  yield 3;
}

function* numberGen2() {
  yield* numberGen();
  yield* numberGen();
}

// 1, 2, 3, 1, 2, 3이 순서대로 출력됩니다.
for (let n of numberGen2()) {
  console.log(n);
}
```

주의해야하는 것은 generator 함수에서 생성된 iterable 객체는 한 번만 사용이 가능하다는 점입니다.

## 3. Iterator Protocol

iterable protocol 을 만족하려면, `Symbol iterator` 속에 저장되어 있는 함수는 iterator 객체를 반환해야 합니다. iterator 객체는 아래의 특별한 조건을 만족합니다.

* `next` 라는 메소드를 갖습니다.
* `next` 메소드는 다음 두 속성을 갖는 객체를 반환해야 합니다.
  * `done` - 반복이 모두 끝났는지를 나타냅니다.
  * `value` - 현재 순서의 값을 나타냅니다.

```javascript
// 문자열은 iterable이므로 이로부터 iterator를 생성할 수 있습니다.
const strIterator = 'go'[Symbol.iterator]();
strIterator.next(); // { value: 'g', done: false }
strIterator.next(); // { value: 'o', done: false }
strIterator.next(); // { value: undefined, done: true }
strIterator.next(); // { value: undefined, done: true }

// generator 함수로부터 생성된 객체 역시 iterable이므로 이로부터 iterator를 생성할 수 있습니다.
function* gen() {
  yield 1;
  yield 2;
}
const genIterator = gen()[Symbol.iterator](); // generator 함수로 생성된 객체는 [Symbol.iterator]()를 호출 안해도 iterator 객체로서 역할을 합니다. 즉 iterable protocol과 iterator protocol을 동시에 만족합니다.
genIterator.next(); // { value: 1, done: false }
genIterator.next(); // { value: 2, done: false }
genIterator.next(); // { value: undefined, done: true }
genIterator.next(); // { value: undefined, done: true }
```

generator 함수 안에서 `return` 키워드를 사용하면 반복이 바로 끝나면서 `next` 메소드에서 반환되는 객체의 속성에 앞의 반환값이 저장됩니다. 다만, `return` 을 통해 반환된 값이 반복 절차에 포함되지는 않습니다.

```javascript
function* gen() {
  yield 1;
  return 2; // generator 함수는 여기서 종료됩니다.
  yield 3;
}

const iter = gen();

iter.next(); // { value: 1, done: false }
iter.next(); // { value: 2, done: true }
iter.next(); // { value: undefined, done: true }

// `1`만 출력됩니다.
for (let v of gen()) {
  console.log(v);
}
```

또한 generator 함수로부터 생성된 객체의 `next` 메소드에 인수를 주어 호출하면, generator 함수가 멈췄던 부분의 `yield` 표현식의 값은 앞에서 받은 인수가 됩니다.

```javascript
function* gen() {
  const received = yield 1;
  console.log(received);
}

const iter = gen();
iter.next(); // { value: 1, done: false }

// 'hello'가 출력됩니다.
iter.next('hello'); // { value: undefined, done: true }
```

출처: [자바스크립트로 만나는 세상](https://helloworldjavascript.net/pages/220-value-in-depth.html)
