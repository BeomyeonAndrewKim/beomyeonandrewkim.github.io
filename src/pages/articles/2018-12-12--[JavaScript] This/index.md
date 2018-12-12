---
title: "[JavaScript] this"
date: "2018-12-12T18:15:03.284Z"
layout: post
draft: false
path: "/posts/javascript/this"
category: "JavaScript"
tags:
  - "JavaScript"
  - "자바스크립트"
  - "this"
description: "this는 생성자 혹은 메소드에서 객체를 가리킬 때 사용하는 키워드입니다. 자바스크립트의 경우 호출 패턴에 따라 어떤 객체를 this에 바인딩할 지가 결정됩니다."
---

## Javascript This

`this`는 생성자 혹은 메소드에서 객체를 가리킬 때 사용하는 키워드입니다.

자바스크립트의 경우 호출 패턴에 따라 어떤 객체를 `this`에 바인딩할 지가 결정됩니다.

### 1.함수 호출 패턴

기본적으로 this 는 전역객체(Global object)에 바인딩됩니다. 전역함수는 물론이고 심지어 내부함수의 경우도 `this`는 외부함수가 아닌 전역객체에 바인딩됩니다. 엄격 모드에서 함수 실행에서의 `this`는 `undefined`입니다.

```javascript
const test = 'This is test';
console.log(window.test); // 'This is test'
const sayFoo = function() {
  console.log(this.test);
};

sayFoo(); // 'This is test'
```

### 2.메소드 호출 패턴

함수가 객체의 프로퍼티이면 메소드 호출 패턴으로 호출됩니다. 이때 메소드 내부의 `this`는 해당 메소드를 소유한 객체 즉 해당 메소드를 호출한 객체에 바인딩됩니다.

프로토타입 객체도 메소드를 가질 수 있습니다. 프로토타입 객체 메소드 내부에서 사용된 `this`도 일반 메소드 방식과 마찬가지로 해당 메소드를 호출한 객체에 바인딩됩니다.

```javascript
const myObject = {
  name: 'foo',
  sayName: function() {
    console.log(this.name);
  },
};
const otherObject = { name: 'bar' };
otherObject.sayName = myObject.sayName;

myObject.sayName(); // foo
otherObject.sayName(); // bar
```

### 3. 생성자 호출 패턴

1.  **빈 객체 생성 및 `this` 바인딩**  
    생성자 함수의 코드가 실행되기 전 빈 객체가 생성됩니다. 이 빈 객체가 생성자 함수가 새로 생성하는 객체입니다. 이후 생성자 함수 내에서 사용되는 `this`는 이 빈 객체를 가리킵니다. 그리고 생성된 빈 객체는 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 설정합니다.

2.  **`this`를 통한 프로퍼티 생성**  
    생성된 빈 객체에 `this`를 사용하여 동적으로 프로퍼티나 메소드를 생성할 수 있습니다. `this`는 새로 생성된 객체를 가리키므로 `this`를 통해 생성한 프로퍼티와 메소드는 새로 생성된 객체에 추가됩니다.

3.  **생성된 객체 반환**  
    반환문이 없는 경우, `this`에 바인딩된 새로 생성한 객체가 반환됩니다. 명시적으로`this`를 반환하여도 결과는 같습니다.
    반환문이 `this`가 아닌 다른 객체를 명시적으로 반환하는 경우,`this`가 아닌 해당 객체가 반환됩니다. 이때 `this`를 반환하지 않은 함수는 생성자 함수로서의 역할을 수행하지 못합니다. 따라서 생성자 함수는 반환문을 명시적으로 사용하지 않습니다.

```javascript
// Person 생성자 함수
const Person = function(name) {
  this.name = name;
};
// foo 객체 생성
const foo = new Person('foo');
console.log(foo.name); // foo
```

### 4. this 바꿔치기

앞에서 봤던 것처럼, `this`는 때에 따라 다른 값을 가리킵니다. 심지어는 우리가 원하는 값을 가리키게 만들 수도 있는데, 함수 객체의 `bind`,`call`, `apply` 메소드를 사용하면 됩니다.

함수 객체의 `bind` 메소드를 호출하면, 메소드의 인자로 넘겨준 값이 `this`가 되는 새로운 함수를 반환합니다.

```javascript
function printGrade(grade) {
  console.log(`${this.name} 님의 점수는 ${grade}점입니다.`);
}

const student = { name: 'Mary' };
const printGradeForMary = printGrade.bind(student);

printGradeForMary(100); // Mary 님의 점수는 100점입니다.
```

`call` 혹은 `apply` 메소드를 사용하면, 새로운 함수를 만들지 않고도 임시적으로 `this`를 바꿔버릴 수 있습니다. `call`과 `apply`는 인자를 넘겨주는 형식에 차이가 있을 뿐, 나머지 기능은 동일합니다.

```javascript
function printGrade(grade) {
  console.log(`${this.name} 님의 점수는 ${grade}점입니다.`);
}

const student = { name: 'Mary' };

printGrade.call(student, 100); // Mary 님의 점수는 100점입니다.
printGrade.apply(student, [100]); // Mary 님의 점수는 100점입니다.
```

### 5. 화살표 함수

화살표 함수 내부에서 `this`를 사용하면 함수가 정의된 스코프에 있는 `this`를 가리킵니다. 즉, 화살표 함수 내부의 `this`는 화살표 함수가 정의된 문맥에 의해 결정됩니다.

```javascript
function Person(name) {
  this.name = name;
  this.getName = () => {
    // 여기에서 사용된 `this`는 '함수가 정의된 스코프', 즉 'Person 함수 스코프'에 존재하는 `this`를 가리키게 됩니다.
    return this.name;
  };
}

const mary = new Person('mary');
mary.getName(); // 'mary'
```

출처: [덕's IT Story](http://itstory.tk/entry/JavaScript-4-%ED%95%A8%EC%88%98%EC%99%80-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85-%EC%B2%B4%EC%9D%B4%EB%8B%9D-2-this%EB%9E%80), [Javascript 로 만나는 세상](https://helloworldjavascript.net/)
