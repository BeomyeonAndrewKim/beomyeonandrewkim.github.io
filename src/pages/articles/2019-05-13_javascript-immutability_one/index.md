---
title: '[JavaScript] Immutability (1)'
date: '2019-05-13T18:15:03.284Z'
layout: post
draft: false
path: '/posts/javascript/immutability_one'
category: 'JavaScript'
tags:
  - 'JavaScript'
  - 'Immutability'
  - 'Immutable'
description: '해당 포스팅은 생활코딩의 JavaScript Immutability의 내용을 정리한 내용입니다.'
---

# [JavaSciprt] Immutabillity (1)

_해당 포스팅은 생활코딩의 [JavaScript Immutability](https://opentutorials.org/module/4075)의 내용을 정리한 내용입니다._

프로그래밍에서 `immutability`는 데이터의 원본이 훼손되는 것을 막는것을 의미합니다.

컴퓨터는 수정과 삭제가 되지 않는 불편함을 개선하기 위해서 출발했다고도 할 수 있을 정도로
프로그래밍간에 자주 일어나는 이벤트고 이러한 특징때문에 발생하는 사고가 끊이질 않습니다.

이것이 프로그래밍 언어에서 데이터에 대한 불변함을 강조하는 이유입니다.

JavaScript에서는 이러한 데이터의 불변함에 대해 주의해야할 부분들이 많습니다.
어떠한 점들을 주의해야하는지 아래에서 살펴보겠습니다.

### 이름에 대한 불변함

```javascript
var v = 1;
v = 2;
console.log(v); // 2
```

여기서 이름은 변수를 뜻합니다.
태초에 JavaScript에서 변수를 선언하고 대입하는 방법은 `var`키워드를 활용하는 것이었습니다.
`var` 키워드로 변수를 선언하면 위 예시와 같이 재대입이 가능합니다.
변수의 데이터가 **변경**이 된거죠. 불변성에 위배된 상황입니다.

```javascript
var c = 1;
c = 2;
console.log(c); // TypeError:  Assignment to constant variable
```

그리고 ES6에 `const`라는 키워드가 탄생했습니다. `const`를 사용해 변수를 선언하면 `var`키워드를 사용해 선언했던 변수와 달리 **재대입**이 불가능합니다. 불변성이 잘 지켜졌네요.
JavaScript에서 변수를 선언하는 방법은 `var`, `const`외에 `let`이라는 키워드도 ES6에서 새로 추가되었습니다. 변수를 선언하는 세 키워드에 대한 내용은 제 블로그 이전에 [[JavaScript] var, let, const](https://beomyeonandrewkim.github.io/posts/javasciript/var-let-const)포스팅을 참고 부탁드립니다.

### 내용에 대한 불변함(1)

내용은 데이터를 뜻합니다.
JavaScript의 데이터는 두 가지로 나뉩니다.

> Primitive(원시형) - Number, String, Boolean, Null, Undefined, Symbol
> Object(객체형) - Object, Array, Function

원시형 데이터는 불변합니다. 그리고 그 값이 같다면 메모리에 해당하는 원시형 데이터 하나가 저장되고 그것만을 바라보게 하도록 설계되어있습니다. 객체는 객체안에 여러 프로퍼티가 있기 때문에 바뀔 수 있고 실제로 메모리에 별도로 저장을 합니다. 아래 예시를 확인해주세요.

```javascript
var p1 = 1;
var p2 = 1;
console.log(p1 === p2); //true
```

```javascript
var o1 = { name: 'kim' };
var o2 = { name: 'kim' };
console.log(o1 === o2); // false
```

**객체의 불변성에 대한 추가적인 내용**과 **불변성을 유지하는 방법**에 대한 내용에 대해서는 다음 포스팅에서 다루겠습니다.
