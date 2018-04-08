---
title: "[Javascript] Map, Set"
date: "2018-04-08T18:15:03.284Z"
layout: post
draft: false
path: "/posts/javasciript/map-set"
category: "Javascript"
tags:
  - "Javascript"
  - "자바스크립트"
  - "ES2015"
  - "Map"
  - "Set"
description: "Map, Set ES6 에서 새로 도입한 데이터 구조입니다."
---

# Map, Set

ES6 에서 새로 도입한 데이터 구조입니다.

## 1. Map

`map`은 키와 값을 연결하는 데이터 구조입니다.

ES6 이전에는 키와 값을 연결하려면 객체를 사용해야 했습니다. 객체를 이러한 목적으로 사용하면 여러 단점이 발생했습니다.

* 프로토타입 체인 떄문에 의도하지 않은 연결이 생길 수 있습니다.
* 객체 안에 연결된 키와 값이 몇 개나 되는지 쉽게 알아낼 수 있는 방법이 없습니다.
* 키는 반드시 문자열이나 심볼이어야 하므로 객체를 키로 써서 값과 연결할 수 없습니다.
* 객체는 프로퍼티 순서를 전혀 보장하지 않습니다.

`map`객체는 이러한 결함을 모두 해결했습니다.

```javascript
const u1 = { name: 'Cynthia' }
const u2 = { name: 'Jackson' }
const u3 = { name: 'Olive' }
const u4 = { name: 'James' }
const u5 = { name: 'Andrew' }

// new 키워드를 활용해 Map객체를 생성할 수 있습니다.
const userRoles = new Map()

// set 메서드를 활용해 키와 값을 할당합니다.++이미 존재하는 키에 쓰면 값이 교체 됩니다.
userRoles.set(u1, 'User')
userRoles.set(u2, 'User')
userRoles.set(u3, 'Admin')
userRoles.set(u4, 'Boss')

// 체인으로도 연결할 수 있습니다.
userRoles
  .set(u1, 'User')
  .set(u2, 'User')
  .set(u3, 'Admin')
  .set(u4, 'Boss')

// get메서드를 통해 키의 값을 알 수 있습니다.
userRoles.get(u2) //'User'

// 생성자에 배열의 배열을 넘기는 형태로도 가능합니다.
const userRoles2 = new Map([
  [u1, 'User'],
  [u2, 'User'],
  [u3, 'Admin'],
  [u4, 'Boss'],
])

//키가 존재하는지 확인하는 has메서드가 있습니다.
userRoles.has(u1) //true
userRoles.has(u5) //false

//size프로퍼티는 맵의 요소 숫자를 반환합니다.
userRoles.size //4

//요소를 지울 때는 delete 메서드를 사용합니다.
userRoles.delete(u1)
userRoles.size // 3

//clear 메서드를 활용해 맵의 요소를 모두 지울 수 있습니다.
userRoles.clear()
userRoles.size // 0
```

객체와 마찬가지로 키를 배열로 반환하는`keys`, 값을 배열로 반환하는 `values`, 키와 값 쌍을 배열안에 배열로 반환하는 `entries` 메서드를 활용해 **이터러블 객체**을 반환할 수 있습니다. `for...of` 루프 역시 쓸 수 있습니다. 만약 배열로 반환하고 싶다면 **스프레드 연산자**를 활용하면 됩니다.

`WeakMap`이라는 객체도 있습니다.

* 키는 반드시 객체여야 합니다.
* `WeakMap`의 키는 가비지 콜렉션에 포함될 수 있습니다.
* `WeakMap`은 이터러블이 아니며 `clear()`메서드도 없습니다.

위 세가지를 제외하면 `Map`객체와 동일합니다.

## 2. Set

`Set`은 중복을 허용하지 않는 데이터 집합니다.

```javascript
const roles = new Set()

//add 메서드를 사용해 데이터를 추가합니다.
roles.add('User') //Set {'User'}

//map과 마찬가지로 size 프로퍼티가 있습니다.
roles.size // 1

//중복된 데이터를 추가하면 아무일도 일어나지 않습니다.
roles.add('User') //Set{'User'}

//역할을 제거할 때는 delete메서드를 호출합니다. 제거에 성공했다면, 즉 그런 역할이 셋에 존재했다면 true를 반환하고, 그렇지 않다면 false를 반환합니다.

roles.delete('User') //true
roles //Set{};
```

`Set`역시 `WeakSet`이 있으며 마찬가지로 가비지 콜렉션의 대상이 됩니다. 이터러블 역시 아닙니다. 실제 용도는 주어진 객체가 셋 안에 존재하는지 아닌지를 알아보는 것뿐이라고 해도 과언이 아닙니다.

Reference [Learning JavaScript](http://www.hanbit.co.kr/store/books/look.php?p_code=B2328850940)
