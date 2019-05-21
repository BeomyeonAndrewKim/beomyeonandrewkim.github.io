---
title: "[JavaScript] var, let, const"
date: "2018-03-23T22:12:03.284Z"
layout: post
draft: false
path: "/posts/javascript/var-let-const"
category: "JavaScript"
tags:
  - "JavaScript"
  - "자바스크립트"
  - "ES2015"
  - "var"
  - "let"
  - "const"
description: "var, let, const / let, const 변수 / ES2015에서 도입된 let, const에는 이전의 변수와는 다른 몇 가지 특징이 있습니다. 먼저 같은 이름을 갖는 변수의 재선언을 허용하지 않습니다."
---

# var, let, const

### let, const 변수

ES2015 에서 도입된 `let`, `const`에는 이전의 변수와는 다른 몇 가지 특징이 있습니다. 먼저 **같은 이름을 갖는 변수의 재선언을 허용하지 않습니다.**

```javascript
let foo = 1;
let foo = 2; // Duplicate declaration "foo"
const foo = 3; // Duplicate declaration "foo"

function func(param) {
  let param = 1; // Duplicate declaration "param"
}
```

`const`는 재대입이 불가능하지만, `let`은 재대입이 가능합니다.

```javascript
const foo = 1;
foo = 2; // unknown: "foo" is read-only

let bar = 2;
bar = 1; // 1
```

`let` 대입없이 선언이 가능하지만 `const`는 선언과 동시에 값을 대입해야만 에러를 내뱉지 않습니다.

```javascript
let foo // undefiend
const bar; //unknown: Unexpected token (1:9)
```

그리고 둘 다 변수가 선언되기 전에 참조하려고 하면 에러가 납니다.

```JavaScript
console.log(foo); // ReferenceError: foo is not defined
let foo = 1;
```

또 한가지 주목해야할 특징은 **블록 스코프(block scope)**를 갖는다는 점입니다.

`if`, `for`, `while`, `function` 등의 구문을 사용하면 블록이 형성되어, 그 안에서 `let`또는 `const`를 통해 선언된 변수는 외부에서 접근할 수 없습니다.

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i); // ReferenceError: i is not defined
```

```javascript
{
  let foo = 1;
  const bar = 2;
}

foo; // foo is not defined
bar; // bar is not defined
```

### var 변수

`var`는 값을 다시 대입할 수 있는 변수입니다. 심지어 재선언도 가능합니다.

```javascript
var foo = 1;
var foo = 2; // undefiend
```

추가적으로 함수의 매개변수와 유사하게, **함수 스코프**를 갖습니다. **함수가 아닌 블록에서 정의된 var 변수는 해당 블록 바깥에서도 유효할 수 있다**는 말입니다.

```javascript
function func() {
  var foo = 1;
}
func();
console.log(foo); // ReferenceError: foo is not defined
```

```javascript
function func() {
  for (var i = 0; i < 10; i++) {
    // ...
  }
  console.log(i); // 10
}

func();
```

`var`변수에서는 **호이스팅**이라는 것이 일어나기 때문에 변수가 선언되기 전에 참조하려고 해도 에러를 내뱉지 않고 `undefined`를 내뱉습니다.

```javascript
console.log(foo); // undefined
var foo = 1;
```

|           | `const`     | `let`       | `var`       |
| --------- | ----------- | ----------- | ----------- |
| 스코프    | 블록 스코프 | 블록 스코프 | 함수 스코프 |
| 재대입    | X           | O           | O           |
| 재선언    | X           | X           | O           |
| 호이스팅  | X           | X           | O           |
| 사용 권장 | 1 순위      | 2 순위      | 3 순위      |

출처: [자바스크립트로 만나는 세상](https://helloworldjavascript.net/pages/220-value-in-depth.html)
