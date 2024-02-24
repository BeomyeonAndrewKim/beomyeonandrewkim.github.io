---
title: '[이펙티브 타입스크립트] 아이템 35, 47, 47 - 타입 이름'
date: '2022-04-03T09:15:03.284Z'
layout: post
draft: false
path: '/posts/TypeScript/type-name'
category: 'TypeScript'
tags:
  - 'TypeScript'
  - 'JavaScript'
description: '코드의 구석 구석까지 타입 안정성을 얻기 위해 API 또는 데이터 형식에 대한 타입 생성을 고려해야 합니다.'
---

## 아이템 35 데이터가 아닌, API와 명세를 보고 타입 만들기

- 코드의 구석 구석까지 타입 안정성을 얻기 위해 API 또는 데이터 형식에 대한 타입 생성을 고려해야 합니다.
- 데이터에 드러나지 않는 예외적인 경우들이 문제가 될 수 있기 때문에 데이터보다는 명세로부터 코드를 생성하는 것이 좋습니다.

## 아이템 36 해당 분야의 용어로 타입 이름 짓기

- 가독성을 높이고, 추상화 수준을 올리기 위해서 해당 분야의 용어를 사용해야 합니다.
- 같은 의미에 다른 이름을 붙이면 안 됩니다. 특별한 의미가 있을 때만 용어를 구분해야 합니다.

## 아이템 37 공식 명칭에는 상표를 붙이기

- 타입스크립트는 구조적 타이핑(덕 타이핑)을 사용하기 때문에, 값을 세밀하게 구분하지 못하는 경우가 있습니다. 값을 구분하기 위해 공식 명칭이 필요하다면 상표를 붙이는 것을 고려해야 합니다.
- 상표 기법은 타입 시스템에서 동작하지만 런타임에 상표를 검사하는 것과 동일한 효과를 얻을 수 있습니다.

```tsx
interface Vector2D {
  x: number;
  y: number;
}

function calculateNorm(p: Vector2D) {
  return Math.sqrt(p.x * p.x + p.y * p.y);
}

calculateNorm({ x: 3, y: 4 }); // 정상, 결과는 5
const vec3D = { x: 3, y: 4, z: 1 };
calculateNorm(vec3D); // 정상! 결과는 동일하게 5

interface Vector2D {
  _brand: '2d';
  x: number;
  y: number;
}
function vec2D(x: number, y: number): Vector2D {
  return { x, y, _brand: '2d' };
}
function calculateNorm(p: Vector2D) {
  return Math.sqrt(p.x * p.x + p.y * p.y);
}

calculateNorm(vec2D(3, 4));
const vec3D = { x: 3, y: 4, z: 1 };
calculateNorm(vec3D); // '_brand' 속성이 ... 형식에 없습니다.

// 상표 기법은 타입 시스템에서 동작하지만 런타임에 상표를 검색하는 것과 동일한 효과를 얻을 수 있습니다
// 타입 시스템이기 때문에 런타임 오버헤드를 없앨 수 있고 추가 속성을 붙일 수 없는 string이나 number 같은 내장 타입도 상표화 가능

type AbsolutePath = string & { _brand: 'abs' };
function listAbsolutePath(path: Absolute) {
  // ...
}
function isAbsolutePath(path: string): path is Absolute {
  return path.startsWith('/');
}
// path 값이 절대 경로와 상대 경로 둘다 될 수 있다면, 타입을 정제해 주는 타입 가드를 사용해서 오류를 방지할 수 있다.
```

출처 [이펙티브 타입스크립트](https://www.yes24.com/Product/Goods/102124327)
