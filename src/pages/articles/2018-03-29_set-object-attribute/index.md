---
title: "[JavaScript] 객체 프로퍼티 설정"
date: "2018-03-29T18:15:03.284Z"
layout: post
draft: false
path: "/posts/javasciript/set-object-attribute"
category: "JavaScript"
tags:
  - "JavaScript"
  - "자바스크립트"
  - "ES2015"
  - "객체 프로퍼티 설정"
description: "객체 프로퍼티 설정 1. 접근자 프로퍼티 getter와 setter 접근자 프로퍼티를 사용하면 데이터나 변수의 부주의한 접근을 차단하고 자연스러운 문법으로 객채의 프로퍼티를 활용할 수 있습니다."
---

# 객체 프로퍼티 설정

## 1. 접근자 프로퍼티 getter 와 setter

접근자 프로퍼티를 사용하면 데이터나 변수의 부주의한 접근을 차단하고 자연스러운 문법으로 객채의 프로퍼티를 활용할 수 있습니다.

```javascript
const USER_EMAIL = Symbol();
class User {
  set email(value) {
    if (!/@/.test(value)) throw new Error(`Invalid email: ${value}`);
    this[USER_EMAIL] = value;
  }
  get email() {
    return this[USER_EMAIL];
  }
}

const u = new User('beom911@hanmail.net');
u.email = 'beom911@gmail.com'; //beom911@gmail.com
console.log(u.email); //beom911@gmail.com
console.log(u); //User { [Symbol()]: 'beom911@gmail.com' }
```

위와 같이 `get`,`set` 키워드는 `Symbol()` 프로퍼티의 각각 `getter`, `setter` 함수를 만들어 주는 역할을 합니다.

## 2. 객체 프로퍼티 속성

프로퍼티에는 자신이 속한 객체 안에서 어떻게 동작할지 결정하는 **속성(attribute)**이 있습니다. 속성을 확인할 때는 `Object.getOwnPropertyDescriptor`메소드를 활용합니다.

```javascript
const obj = { foo: 'bar' };
Object.getOwnPropertyDescriptor(obj, 'foo');
//{ value: 'bar', writable: true, enumerable: true, configurable: true }
```

프로퍼티 속성엔 세 가지가 있습니다.

* `writable`(쓰기 가능한지): 프로퍼티 값을 바꿀 수 있는지 아닌지 판단합니다.
* `enumerable`(나열 가능한지): `for…in` 문이나 `Object.keys`, 확산 연산자에서 객체 프로퍼티를 나열할 때 해당 프로퍼티가 포함될지 아닌지 판단합니다.
* `configurable`(설정 가능한지): 프로퍼티를 객체에서 삭제하거나 속성을 수정할 수 있는지 아닌지 판단합니다.

`Object.defineProperty`로는 프로퍼티 속성을 컨트롤하거나(설정 가능한 경우) 새 프로퍼티를 만들 수 있습니다.

```javascript
const obj = { foo: 'bar' };
Object.defineProperty(obj, 'foo', { writable: false });
obj.foo = 3; //3
console.log(obj.foo); // 'bar
```

```javascript
'use strict';

const obj = { foo: 'bar' };
Object.defineProperty(obj, 'foo', { writable: false });
obj.foo = 3;
//TypeError: Cannot assign to read only property 'foo' of object '#<Object>'
```

`Object.defineProperty`를 써서 객체에 새 프로퍼티를 추가할 수도 있습니다. 일반적인 데이터 프로퍼티와 달리, 객체가 일단 생성된 뒤에는 접근자 프로퍼티를 추가할 다른 방법이 없고 `Object.defineProperty`를 쓰는 방법뿐입니다.

```javascript
Object.defineProperty(obj, 'color', {
  get: function() {
    return this._color;
  },
  set: function(value) {
    this._color = value;
  },
});
```

`Object.defineProperty`로 데이터 프로퍼티를 추가할 때는 `value` 프로퍼티를 사용하면 됩니다. `obj`에 `name`과 `greet`프로퍼티를 추가하는 예제입니다.

```javascript
Object.defineProperty(obj, 'name', {
  value: 'Cynthia',
});
Object.defineProperty(obj, 'greet', {
  value: function() {
    return `Hello, my name is ${this.name}!`;
  },
});
```

`Object.defineProperty`는 배열 프로퍼티를 나열할 수 없게 만들 때 주로 사용합니다. 배열은 원래 프로퍼티를 사용하지 않도록 설계됐으므로 문자열이나 심볼 프로퍼티는 사용하지 않는 게 좋습니다. 이에 따라 배열에서 `for...in`이나 `Object.keys`를 사용하는 것 역시 권장하지 않지만 다른 개발자가 사용하는 것을 막을 수는 없습니다. 따라서 배열에 숫자형 프로퍼티가 아닌 프로퍼티를 추가한다면 다른 누군가가 그 배열에서 `for...in` 이나 `Object.keys`를 사용했을 때 노출되지 않도록, 나열할 수 없게 만들어야 합니다.

```javascript
const arr = [3, 1, 5, 9, 2, 5.2];
arr.sum = function() {
  return this.reduce((a, x) => a + x);
};
arr.avg = function() {
  return this.sum() / this.length;
};
Object.defineProperty(arr, 'sum', { enumerable: false });
Object.defineProperty(arr, 'avg', { enumerable: false });
```

```javascript
const arr = [3, 1, 5, 9, 2, 5.2];
Object.defineProperty(arr, 'sum', {
  value: function() {
    return this.reduce((a, x) => a + x);
  },
  enumerable: false,
});
Object.defineProperty(arr, 'avg', {
  value: function() {
    return this.sum() / this.length;
  },
  enumerable: false,
});
```

`Object.defineProperties`도 있습니다. 이 메소드는 객체 프로퍼티 이름과 프로퍼티 정의를 서로 연결합니다.

```javascript
const arr = [3, 1, 5, 9, 2, 5.2];
Object.defineProperties(arr, {
  sum: {
    value: function() {
      return this.reduce((a, x) => a + x);
    },
    enumerable: false,
  },
  avg: {
    value: function() {
      return this.sum() / this.length;
    },
    enumerable: false,
  },
});
```

## 3. 객체 보호: 동결, 봉인, 확장 금지

자바스크립트의 유연성은 매우 강력하기도 하지만, 그만큼 문제가 생길 소지도 많습니다. 어떤 코드든, 그 위치가 어디이든, 다른 객체를 쉽게 바꿀 수 있으므로 의도와 달리 위험한 코드를 만들 가능성이 항상 존재합니다.

자바스크립트에는 객체를 보호해서 의도하지 않은 수정을 막고 의도적인 공격은 더 어렵게 만드는 세 가지 메커니즘이 잇습니다. 동결(freezing), 봉인(sealing), 그리고 확장 금지(preventing extension)입니다.

1.  **동결(freezing)**

동결된 객체는 수정할 방법이 없습니다. 일단 객체를 동결하면 다음과 같은 작업이 불가능해집니다

* 프로퍼티 값 수정 또는 할당
* 프로퍼티 값을 수정하는 메소드 호출
* setter 호출
* 새 프로퍼티 추가
* 새 메소드 추가
* 기존 프로퍼티나 메서드의 설정 변경

객체를 동결하면 그 객체는 문자열이나 숫자처럼 불변이 됩니다. 객체를 동결하면 상태를 바꾸는 메서드가 모두 쓸모 없어지므로 데이터만 들어있는 객체에서 가장 유용합니다.

객체를 동결할 때는 `Object.freeze`를 사용하고, 객체가 동결됐는지 확인할 때는 `Object.isFrozen`을 사용합니다.

2.  **봉인(sealing)**

객체를 봉인하면 새 프로퍼티를 추가하거나 기존 프로퍼티를 변경, 삭제할 수 없습니다. 클래스의 인스턴스를 사용하면서, 인스턴스의 프로퍼티를 수정하는 메소드는 동작하도록 할 때 봉인을 사용할 수 있습니다.

객체를 봉인할 때는 `Object.seal`를, 객체가 봉인됐는지 확인할 때는 `Object.isSealed`를 사용합니다.

3.  **확장 금지(preventing extension)**

확장 금지를 사용하면 객체에 새 프로퍼티를 추가하는 것만 금지됩니다. 프로퍼티에 값을 할당하거나, 삭제하거나, 속성을 변경하는 작업은 모두 허용됩니다.

확장을 금지할 때는 `Object.preventExtentios`, 확장이 금지됐는지 확인할 때는 `Object.isExtensible`을 활용합니다.

| 동작               | 일반 객체 | 동결 객체 | 봉인 객체 | 확장 금지 객체 |
| :----------------- | :-------: | :-------: | :-------: | :------------: |
| 프로퍼티 추가      |     O     |     X     |     X     |       X        |
| 프로퍼티 읽기      |     O     |     O     |     O     |       O        |
| 프로퍼티 값 설정   |     O     |     X     |     O     |       O        |
| 프로퍼티 속성 변경 |     O     |     X     |     X     |       O        |
| 프로퍼티 삭제      |     O     |     X     |     X     |       O        |

Reference [Learning JavaScript](http://www.hanbit.co.kr/store/books/look.php?p_code=B2328850940)
