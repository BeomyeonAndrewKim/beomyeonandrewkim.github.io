---
title: "[JavaScript] 버블링과 캡쳐링"
date: "2018-04-09T18:15:03.284Z"
layout: post
draft: false
path: "/posts/javasciript/bubbling-capturing"
category: "JavaScript"
tags:
  - "JavaScript"
  - "자바스크립트"
  - "ES2015"
  - "버블링"
  - "캡쳐링"
description: "버블링과 캡쳐링 HTML 은 계층적이므로 이벤트를 꼭 한 곳에서만 처리해야 하는 건 아닙니다. 여러 요소에서 이벤트를 처리할 수 있다면, 그 이벤트에 응답할 기회는 어떤 순서로 주어지는가 하는 의문이 생길 수 있습니다."
---

# 이벤트 버블링과 캡처링

HTML 은 계층적이므로 이벤트를 꼭 한 곳에서만 처리해야 하는 건 아닙니다. 여러 요소에서 이벤트를 처리할 수 있다면, 그 이벤트에 응답할 기회는 어떤 순서로 주어지는가 하는 의문이 생길 수 있습니다.

기본적으로 두 가지 방법이 있습니다.

* 캡처링(Capturing): 조상에서부터 시작하는 방법
* 버블링(Bubbling): 이벤트가 일어난 요소에서 시작해 거슬러 올라가는 방법

![CapturingBubbling](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg)

​ [출처:W3C](https://www.w3.org/TR/DOM-Level-3-Events/#dom-event-architecture)

HTML5 이벤트 모델에서는 두 방법을 모두 지원하기 위해 먼저 해당 요소의 가장 먼 조상에서 시작해 해당 요소까지 내려온 다음, 다시 해당 요소에서 시작해 가장 먼 조상까지 거슬라 올라가는 방법을 택했습니다.

이벤트 핸들러에는 다른 핸들러가 어떻게 호출될지 영향을 주는 세 가지 방법이 잇습니다.

* `preventDefault`: 이벤트를 취소하는 메서드입니다. `defaultPrevented` 프로퍼티가 `true`로 바뀝니다. 브라우저의 이벤트 핸들러는 `defaultPrevented` 프로퍼티가 `true`로 바뀐 이벤트를 무시하고 아무 일도 하지 않습니다.
* `stopPropagation`: 이벤트를 현재 요소에서 끝내고 더는 전달되지 않게 막습니다. 해당 요소에 연결된 이벤트 핸들러는 동작하지만 다른 요소에 연결된 이벤트 핸들러는 동작하지 않습니다.
* `stopImmediatePropagation`: 다른 이벤트 핸들러, 심지어 현재 요소에 역녈된 이벤트 핸들러도 동작하지 않게 막습니다.

Reference [Learning JavaScript](http://www.hanbit.co.kr/store/books/look.php?p_code=B2328850940)
