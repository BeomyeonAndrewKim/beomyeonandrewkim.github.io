---
title: '[함수형 프로그래밍] RxJS Observable 만들기'
date: '2021-05-05T09:15:03.284Z'
layout: post
draft: false
path: '/posts/Functional/create-observable'
category: 'Functional'
tags:
  - 'functional'
  - 'JavaScript'
  - 'RxJS'
description: 'Observable 생성자를 이용하여 Observable 만들기'
---

# Chapter 02 Observable 만들기

## 1.1 Observable 생성자를 이용하여 Observable 만들기

- Observable은 클래스이기에 new 키워드를 객체 생성

```jsx
const { Observable } = rxjs;

// Observable.create도 가능
const numbers$ = new Observable(function subscribe(observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
});

numbers$.subscribe(v => console.log(v));

// 1
// 2
// 3
```

## 1.2 Observable 구현 시 고련해야 할 것들

- Observable은 자신을 구독하고 있는 Observer에게 데이터를 전달하기도 하지만 지금의 상태를 전달하기도 해야함
- 에러가 발생한 경우라면 발생한 에러 정보를 전달하고 데이터를 종료되었다고 하면 데이터 전달이 완료되었다고 Observer에게 전달해야 함.
- next, error, complete 메소드 제공

- Error

```jsx
const { Observable } = rxjs;
const numbers$ = new Observable(function subscribe(observer) {
  try {
    observer.next(1);
    observer.next(2);
    // 에러가 발생한다면?
    throw new Error('데이터 전달 도중 에러가 발생했습니다');
    observer.next(3);
  } catch (error) {
    observer.error(e);
  }
});

numbers$.subscribe({
  next: v => console.log(v),
  error: e => console.error(e),
});

// 1
// 2
// '데이터 전달 도중 에러가 발생했습니다'
```

- Complete

```jsx
const { Observable } = rxjs;
const numbers$ = new Observable(function subscribe(observer) {
  try {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  } catch (error) {
    observer.error(e);
  }
});

numbers$.subscribe({
  next: v => console.log(v),
  error: e => console.error(e),
  complete: () => console.log('데이터 전달 완료'),
});

// 1
// 2
// 3
// '데이터 전달 완료'
```

- Unsubscribe

```jsx
const { Observable } = rxjs;
const interval$ = new Observable(function subscribe(observer) {
  const id = setInterval(function() {
    observer.next(new Date().toString());
  }, 1000);

  return function() {
    // 자원을 해제하는 함수
    console.log('interval 제거');
    clearInterval(id);
  };
});

const subscription = interval$.subscribe(v => console.log(v));

setTimeout(function() {
  subscription.unsubscribe();
}, 5000);

// Date
// Date
// Date
// Date
// Date
// Date
// 'interval 제거'
```

## 1.3 rxjs 네임스페이스에 있는 생성 함수로 Observable 만들기

> Best practive
> 가급적 Observable을 생성할 때는 rxjs 네임스페이스에서 제공하는 생성 함수를 사용하자.

- of

`of(values: ...T, scheduler:Scheduler): Observable<T>`

```jsx
const { of } = rxjs;

of(10, 20, 30).subscribe({
  next: console.log,
  error: console.error,
  complete: () => console.log('완료'),
});

// 10
// 20
// 30
// 완료
```

- range

`range(start: number, count: number, scheduler: Scheduler): Observable`

```jsx
const { range } = rxjs;

range(1, 10).subscribe({
  next: console.log,
  error: console.error,
  complete: () => console.log('완료'),
});

// 1
// ...
// 10
// 완료
```

- fromEvent

`fromEvent(target: EventTargetLike, eventName: string, options: EventListenerOptions, selector: SelectorMethodSignature<T>): Observable<T>`

```jsx
const { fromEvent } = rxjs;

const click$ = fromEvent(document, 'click');
const subscription = click$.subscribe({
  next: v => console.log('click 이벤트 발생'),
  error: e => console.error(e),
  complete: () => console.log('완료'),
});
```

- from

`from(ish: ObservableInput<T>, scheduler: Scheduler): Observable<T>`

- 배열, 배열 같은 객체

```jsx
const { from } = rxjs;

from([10, 20, 30]).subscribe({
  next: console.log,
  error: console.error,
  complete: () => console.log('완료'),
});

// 10
// 20
// 30
// 완료

const arguments$ = (function() {
  return from(arguments);
})(1, 2, 3).subscribe({
  next: console.log,
  error: console.error,
  complete: () => console.log('완료'),
});

// 1
// 2
// 3
// 완료
```

- Iterable 객체

```jsx
const { from } = rxjs;

const map$ = from(new Map([1, 2], [2, 4], [4, 8]));

map$.subscribe({
  next: console.log,
  error: console.error,
  complete: () => console.log('완료'),
});

// [1, 2]
// [2, 4]
// [4, 8]
// 완료
```

- Promise

```jsx
const { from } = rxjs;

const success$ = from(Promise.resolve(100));

success$.subscribe({
  next: console.log,
  error: console.error,
  complete: () => console.log('완료'),
});

// 100
// 완료

const fail$ = from(Promise.reject('에러'));
fail$.subscribe({
  next: console.log,
  error: console.error,
  complete: () => console.log('완료'),
});

// 에러
```

- Interval

`interval(period: number, scheduler: Scheduler): Observable`

```jsx
const { interval } = rxjs;

interval(1000).subscribe({
  next: console.log,
  error: console.error,
  complete: () => console.log('완료'),
});
```

## 1.4 특별한 용도의 Observable 만들기

- empty / EMPTY

`empty(scheduler: Scheduler): Observable`

```jsx
// 내부 구조
Observable.create(observer => {
  observer.complete();
});

const { empty, of } = rxjs;
const { map } = rxjs.operators;

of(1, -2, 3)
  .pipe(map(number => (number < 0 ? empty() : number)))
  .subscribe({
    next: console.log,
    error: console.error,
    complete: () => console.log('완료'),
  });
```

- throwError

`throwError(error: any, scheduler: Scheduler): Observable`

```jsx
// 내부 구조
Observable.create(observer => {
  observer.error(new Error(error));
});

const { throwError, of } = rxjs;
const { map } = rxjs.operators;

of(1, -2, 3)
  .pipe(
    map(number => (number < 0 ? throwError('number는 0보다 커야한다') : number))
  )
  .subscribe({
    next: console.log,
    error: console.error,
    complete: () => console.log('완료'),
  });
```

- never / NEVER

아무것도 하지 않는 Observable 생성

`never(scheduler: Scheduler): Observable`

```jsx
// 내부 구조
Observable.create(observer => {});

const { NEVER, of } = rxjs;

of(1, -2, 3)
  .pipe(map(number => (numer < 0 ? NEVER : number)))
  .subscribe({
    next: console.log,
    error: console.error,
    complete: () => console.log('완료'),
  });
```

출처 [RxJS Quick Start](https://m.yes24.com/Goods/Detail/62601794)
