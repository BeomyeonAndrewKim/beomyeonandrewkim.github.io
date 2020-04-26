---
title: '[함수형 프로그래밍] 첫 프로젝트 코드를 함수형으로 리팩토링 해보기 - Make amout string'
date: '2020-04-26T09:15:03.284Z'
layout: post
draft: false
path: '/posts/functional/make-functional-one'
category: 'functional'
tags:
  - 'functional'
  - 'JavaScript'
  - 'Ramda.js'
description: '이직한 회사에서 함수형 프로그래밍을 적용해본지 언 1년이 다되어간다.'
---

이직한 회사에서 함수형 프로그래밍을 적용해본지 언 1년이 다되어간다.

아직 Rx.JS 같은 라이브러리를 자유자재로 사용하는 레벨은 아니지만, Ramda.js를 활용해서 몇몇 유틸리티 함수를 함수형 형태를 가진 함수로 틈틈히 만들어 나가고 있다.

그 중 몇가지 리팩토링 사례를 소개하고자 한다.

먼저 아래 코드는 프론트엔드 개발자가 된지 3개월차 쯤에 만들었던 코드다.

React 프로젝트에서 Input에 숫자를 입력하면 세자리수 마다 콤마(,)를 입력해주는 일종의 cleaner 함수다.

유효한 string을 amount string이라 명명하겠다.

```javascript
// event.target.validity 객체를 유효하게 만들어주는 input의 pattern propoerty에 넣은 값이다.
const pattern = "[0-9 _,]*";

// 이 함수의 return이 유효하면 setState에 값을 업데이트해주고 false가 나올시 setState 이전에 함수를 return 해버린다
const changeInputValue = (name, value, validity) => {
  if (
    name === "ratio" ||
    name === "tokenAmount" ||
    name === "tokenSupply" ||
    name === "amount" ||
    name === "bonusRatio" ||
    name === "contractCap"
  ) {
    let commaDeleted, commaReinserted;
    if (value.includes(".")) {
      const newValueArr = newValue.trim().split(".");
      const beforeDotValue = newValueArr[0];
      commaDeleted = beforeDotValue.replace(/,/gi, "");
      commaReinserted = commaDeleted.split(/(?=(?:\d{3})+$)/).join(",");
      const finalVlaue = commaReinserted + "." + newValueArr[1];
			return  validity.valid ? finalVlaue : false;
    } else {
      commaDeleted = newValue.trim().replace(/,/gi, "");
      commaReinserted = commaDeleted.split(/(?=(?:\d{3})+$)/).join(",");
      return validity.valid ? commaReinserted : false;
    }
  }
```

3개월차의 코드 답게(?) 딱봐도 이해할 수가 없다.

공통된 정규식도 변수처리가 안되어있고 같은 역할을 하는 함수들 역시 모듈화가 안되어있어 비효율적이다.

이 함수를 Ramda.js를 활용해 리팩토링 해보겠다.

```javascript
const insertComma = R.compose(
    R.join(','),
    R.split(/(?=(?:\d{3})+$)/),
    R.replace(/,/gi, '')
  ),
  numberWithDotCleaner = value => {
    const [beforeDot, afterDot] = R.split('.', value);
    return R.join('.', [insertComma(beforeDot), afterDot]);
  },
  cleaner = R.compose(
    R.ifElse(
      R.test(/^(?!,$)[\d,.]+$/g),
      R.ifElse(R.include('.'), numberWithDotCleaner, insertComma),
      R.slice(0, value.length - 1)
    ),
    R.trim
  );
```

사실 완벽한 함수형으로 된 것도 아니고 중간에 Ramda.js로 짠 함수가 아닌 부분도 있다.

먼저 `insertComma` 함수를 통해 콤마를 넣어주는 로직을 공통 모듈화 시켰다. ES6에도 있는 기본 함수들로 구성되어있다. 콤마 제거 후 다시 세자리 단위로 나눈뒤 콤마로 join해주는 로직이다.

그리고 소수점이 있을 경우엔 소수점 기준으로 앞의 String만 `insertComma` 돌려주는 로직을 넣었다. 이 부분도 Ramda로 만들어 줄 수 있을 것 같은데 일단 map으로는 되지 않는 상황이다.

그리고 최종적으로 trim을 해준되 유효한 amount string인지 확인해주는 정규식을 기준으로 유효하다면 콤마를 다시 넣어주는 함수를 실행시키고 숫자이외에 다른 string이 들어간다면 slice를 해준다.

사실 로직 자체는 그렇게 효율적이지 않다. 그냥 조작하는 input과 보여주는 input을 다르게 한다던지, `cleave.js` 같은 라이브러리를 쓴다던지 더 효율적인 방법은 많다.

그래도 함수형으로 리팩토링 하기엔 적절한 더티 코드였기에 한 번 리팩토링을 해봤다.

앞으로도 Ramda를 활용해 함수형으로 리팩토링을 해보기를 조금씩 만들어볼 예정이다.

아직 타입 선언이던지 여러가지로 문제가 많지만 가독성 끝판왕의 함수형 프로그래밍이 빨리 프론트엔드의 주류가 되었으면 하는 바램이다.
