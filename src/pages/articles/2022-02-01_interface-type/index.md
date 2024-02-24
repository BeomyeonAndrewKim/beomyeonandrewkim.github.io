---
title: '[이펙티브 타입스크립트] 아이템 13 - 타입과 인터페이스의 차이점 알기'
date: '2022-02-01T09:15:03.284Z'
layout: post
draft: false
path: '/posts/TypeScript/interface-type'
category: 'TypeScript'
tags:
  - 'TypeScript'
  - 'JavaScript'
  - 'interface'
  - 'type'
description: '타입과 인터페이스의 차이점 알기'
---

### 아이템 13 타입과 인터페이스의 차이점 알기

```tsx
// type
type TState = {
  name: string;
  capital: string;
};

// interface
interface IState {
  name: string;
  capital: string;
}
```

- 둘의 공통점

```tsx
// 1. 추가 속성을 할당한다면 오류
const wyoming: TState = {
	name: 'Wyoming',
	capital: 'Cheyenne',
	population: 500_000, // => error!
}

// 2. 인덱스 시그니처 모두 사용 가능
type TDict = { [key:string]: string };
interface IDict {
	[key:string]: string;
}

// 3. 함수 타입 정의 가능
type TFn = (x:number) => string;
interface IFn {
	(x:number): string;
}

// + 추가적인 속성
type TFnWithProperties = {
	(x:number):nunber;
	prop:string;
}
interface IFnWithProperties = {
	(x:number): nunber;
	prop:string;
}

// 4. 모두 제너릭 가능
type TParir<T> = {
	first: T;
	second: T;
}
interface IPair<T> {
	first: T;
	second: T;
}

// 5. 확장 가능
interface IStateWithPop extends TState {
	population: number;
}
type TStateWIthPop = IState & { population: number }; // 연산자를 통해 복잡한 타입확장 가능

// 6. Class의 implements로 사용가능
```

- 둘의 차이점

```tsx
// 1. 유니온은 type만 가능
type AorB = 'a' | 'b';

// +유니온을 확장해야하는 경우 interface에서 이런식으로 처리는 가능하지만
interface VariableMap {
	[name: string]: Input | Output;
}
// 하지만 이런 확장은 type만 가능 => 좀더 유연한 타입확장 가능
type NamedVariable = (Input | Output) & { name: string };

// 2. 튜플과 배열 타입도 type 키워드를 이용해 더 간결하게 표현
type Pair = [number, number];
type StringList = string[];
type NamedNums = [string, ...number[]];
// X => Tuple의 native 메소드를 사용할 수 없음
interface Tuple {
	0: number;
	1: number;
	length: 2;
}

// 3. interface는 선언 병합(declaration merging)이 가능
interface IState {
	name: string;
	capital: string;
}
interface IState {
	population: number;
}
const wyoming: IState {
	name: 'Wyoming',
	capital: 'Cheyenne',
	population: 500,000,
} // 정상

```

- 복잡한 타입이라면 `type` 추천
- 간단한 객체 타입이라면 일관성과 보강의 관점에서 고려 ⇒ `interface`
- 어떤 API에 대한 타입 선언을 작성해야 하고 API가 변경될 때 사용자가 인터페이스를 통해 새로운 필드를 병합할 수 있어서 유용한건 ⇒ `interface`

출처 [이펙티브 타입스크립트](https://www.yes24.com/Product/Goods/102124327)
