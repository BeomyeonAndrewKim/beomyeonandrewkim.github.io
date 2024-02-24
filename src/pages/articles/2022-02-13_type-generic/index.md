---
title: '[이펙티브 타입스크립트] 아이템 14 - 타입 연산과 제너릭 사용으로 반복 줄이기'
date: '2022-02-13T09:15:03.284Z'
layout: post
draft: false
path: '/posts/TypeScript/generic-type'
category: 'TypeScript'
tags:
  - 'TypeScript'
  - 'JavaScript'
  - 'generic'
description: '타입에 이름을 붙여서 반복을 피해야합니다. extends를 사용해서 인터페이스 필드의 반복을 피해야합니다.'
---

### 아이템 14 타입 연산과 제너릭 사용으로 반복 줄이기

- 타입에 이름을 붙여서 반복을 피해야합니다. extends를 사용해서 인터페이스 필드의 반복을 피해야합니다.

```tsx
// 1. 이름을 붙이세요
interface Point2D {
  x: number;
  y: number;
}
function distance(a: Point2D, b: Point2D) {
  /*...*/
}

type HTTPFunction = (url: string, opts: Options) => Promise<Response>;
const get: HTTPFunction = (url, opts) => {
  /*...*/
};
const post: HTTPFunction = (url, opts) => {
  /*...*/
};

// 2. 확장하세요
interface Person {
  firstName: string;
  lastName: string;
}
interface PersonWithBirthDate extends Person {
  birth: Date;
}
type PersonWithBirthDate = Person & { birth: Date };
```

- 타입들 간의 매핑을 위해 타입스크립트가 제공한 도구들을 공부하면 좋습니다. 여기에는 keyof, typeof, 인덱싱, 매핑된 타입들이 포함됩니다.
- Utility types: [https://www.typescriptlang.org/docs/handbook/utility-types.html](https://www.typescriptlang.org/docs/handbook/utility-types.html)

```tsx
// 1. Pick을 잘쓰자
type TopNavState = {
	userId: State['userId'];
	pageTitle: State['pageTitle'];
	recentFiles: State['recentFiles'];
}

type TopNavState = {
	[k in 'userId' | 'pageTitle' | 'recentFiles']: State[k];
}

type Pick<T, K> = { [k in K]: T[k] };

type TopNavState = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;

// + 유니온 타입도 Pick 가능
interface SaveAction { type: 'save' };
interface LoadAction { type: 'load' };
type Action = SaveAction | LoadAction;

type ActionType = Action['type']; => // "save" | "load"
type ActionRec = Pick<Action, 'type'>; //{ type: "save" | "load" }

// 2. keyof를 잘쓰자
interface Options {
	width: number;
	height: number;
}

type OptionsUpdate = { [k in keyof Options]?: Options[k] }; // => 모두 optional로
type OptionsKeys = keyof Options // => "width" | "height" | "color" | "label"
//모두 optional로 만들어주는건 표준라이브러리중 Partial

// typyof를 쓰면 객체의 타입도 한방에
const INIT_OPTIONS = {
	width: 640;
	height: 480;
	color: '#fffff';
	label: 'VGA';
}
type Options = typof INIT_OPTIONS;
// { width: number, height: number, color: string, label: string }

// 함수의 메서드의 반환 값에 명명된 타입을 만들고 싶을때
function getUserInfo(userId: string) {
	//...
	return {
		userId,
		name,
		age,
		height,
		weight,
		favoriteColor
	}
}
type UserInfo = ReturnType<typeof getUserInfo>;
```

- 제너릭 타입은 타입을 위한 함수와 같습니다. 타입을 반복하는 대신 제너릭 타입을 사용하여 타입들 간에 매핑을 하는 것이 좋습니다. 제너릭 타입을 제한하려면 extends를 사용하면 됩니다.

```tsx
interface Name {
  first: string;
  last: string;
}

type DancingDuo<T extends Name> = [T, T];

const couple1: DancingDuo<Name> = [
  { fisrt: 'Fred', last: 'Astaire' },
  { first: 'Ginger', last: 'Rogers' },
];

const couple2: DancingDuo<{ first: string }> = [
  { first: 'Sonny' },
  { first: 'Cher' },
];
// => 'Name' 타입에 필요한 'last'속성이 '{ first: string; }' 타입에 없습니다.

type Pick<T, K> = { [k in K]: T[k] }; // ~'K' 타입은 'string | number | symbol' 타입에 할당할 수 없습니다.

// K는 실제로 T의 키의 부분 집합, 즉 keyof T가 되어야 합니다.
type Pick<T, K extends keyof T> = { [k in K]: T[k] };
```

- 표준 라이브러리에 정의된 Pick, Partial, ReturnType 같은 제너릭 타입에 익숙해져야 합니다.

출처 [이펙티브 타입스크립트](https://www.yes24.com/Product/Goods/102124327)
