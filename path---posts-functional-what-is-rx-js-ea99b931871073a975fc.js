webpackJsonp([81714070650566],{522:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, former marketer, interested in Data Visualization and making project alive. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/beomyeonandreakim/Documents/dev/beomyeonandrewkim.github.io/src/pages/articles/2021-04-31_what-is-rxjs/index.md absPath of file >>> MarkdownRemark",html:'<h1>Chapter 01 RxJS란 무엇인가</h1>\n<h2>1.1 RxJS란?</h2>\n<blockquote>\n<p>RxJS는 Observable을 사용하여 비동기 및 이벤트 기반 프로그램을 작성하기 위한 라이브러리다.</p>\n</blockquote>\n<ul>\n<li>범용적인 데이터 플로우 솔루션을 지향하는 라이브러리</li>\n<li>이벤트용 lodash</li>\n<li>비동기 컬렉션 데이터를 다루는 라이브러리</li>\n</ul>\n<h2>1.2 RxJS 시작하기</h2>\n<ul>\n<li>기본 예제</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">// 보통</span>\n<span class="token keyword">const</span> <span class="token function-variable function">eventHandler</span> <span class="token operator">=</span> event <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>currentTarget<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\ndocument<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> eventHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// RxJS 적용</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> fromEvent <span class="token punctuation">}</span> <span class="token operator">=</span> rxjs<span class="token punctuation">;</span>\n<span class="token keyword">const</span> click$ <span class="token operator">=</span> <span class="token function">fromEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// observable</span>\n<span class="token keyword">const</span> <span class="token function-variable function">observer</span> <span class="token operator">=</span> event <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>currentTarget<span class="token punctuation">)</span><span class="token punctuation">;</span>\nclick$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//개선 pluck 적용</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> pluck <span class="token punctuation">}</span> <span class="token operator">=</span> rxjs<span class="token punctuation">.</span>operators<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> currentTarget$ <span class="token operator">=</span> <span class="token function">fromEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>\n  <span class="token function">pluck</span><span class="token punctuation">(</span><span class="token string">\'currentTarget\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// observable</span>\n<span class="token keyword">const</span> <span class="token function-variable function">observer</span> <span class="token operator">=</span> target <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>\nclick$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<ul>\n<li>Array</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">// 보통</span>\n<span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token punctuation">[</span>\n\t<span class="token punctuation">{</span>\n\t\tname<span class="token punctuation">:</span> <span class="token string">\'유비\'</span><span class="token punctuation">,</span>\n\t\tbirthYear<span class="token punctuation">:</span> <span class="token number">161</span><span class="token punctuation">,</span>\n\t\tnationality<span class="token punctuation">:</span> <span class="token string">\'촉\'</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">{</span>\n\t\tname<span class="token punctuation">:</span> <span class="token string">\'손권\'</span>\n\t\tbirthYear<span class="token punctuation">:</span> <span class="token number">182</span><span class="token punctuation">,</span>\n\t\tnationality<span class="token punctuation">:</span> <span class="token string">\'오\'</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">{</span>\n\t\tname<span class="token punctuation">:</span> <span class="token string">\'관우\'</span><span class="token punctuation">,</span>\n\t\tbirthYear<span class="token punctuation">:</span> <span class="token number">160</span><span class="token punctuation">,</span>\n\t\tnationality<span class="token punctuation">:</span> <span class="token string">\'촉\'</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>user <span class="token operator">=></span> user<span class="token punctuation">.</span>nationality <span class="token operator">===</span> <span class="token string">\'촉\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">log</span> <span class="token operator">=</span> user <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>\nusers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// RxJS</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token keyword">from</span> <span class="token punctuation">}</span> <span class="token operator">=</span> rxjs<span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> filter <span class="token punctuation">}</span> <span class="token operator">=</span> rxjs<span class="token punctuation">.</span>operators<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> users$ <span class="token operator">=</span> <span class="token keyword">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n\t<span class="token punctuation">{</span>\n\t\tname<span class="token punctuation">:</span> <span class="token string">\'유비\'</span><span class="token punctuation">,</span>\n\t\tbirthYear<span class="token punctuation">:</span> <span class="token number">161</span><span class="token punctuation">,</span>\n\t\tnationality<span class="token punctuation">:</span> <span class="token string">\'촉\'</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">{</span>\n\t\tname<span class="token punctuation">:</span> <span class="token string">\'손권\'</span><span class="token punctuation">,</span>\n\t\tbirthYear<span class="token punctuation">:</span> <span class="token number">182</span><span class="token punctuation">,</span>\n\t\tnationality<span class="token punctuation">:</span> <span class="token string">\'오\'</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">{</span>\n\t\tname<span class="token punctuation">:</span> <span class="token string">\'관우\'</span><span class="token punctuation">,</span>\n\t\tbirthYear<span class="token punctuation">:</span> <span class="token number">160</span><span class="token punctuation">,</span>\n\t\tnationality<span class="token punctuation">:</span> <span class="token string">\'촉\'</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>\n\t<span class="token function">filter</span><span class="token punctuation">(</span>user <span class="token operator">=></span> user<span class="token punctuation">.</span>nationality <span class="token operator">===</span> <span class="token string">\'촉\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">observer</span> <span class="token operator">=</span> user <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>\nusers$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2>1.3 RxJS 4대 천왕</h2>\n<ul>\n<li>\n<p>Observable</p>\n<ul>\n<li>시간을 축으로 연속적인 데이터를 저장하는 컬렉션을 표현하는 객체</li>\n<li>데이터를 제공하는 소스를 Observer에게 전달</li>\n<li>스트림(Stream)</li>\n</ul>\n</li>\n<li>\n<p>오퍼레이터</p>\n<ul>\n<li>Observable을 생성 및 조작하는 함수</li>\n<li>Observable을 생성, 연결, 분리, 합침</li>\n<li>현재의 Observable 인스턴스를 기반으로 항상 새로운 Observable 인스턴스를 반환</li>\n</ul>\n</li>\n<li>\n<p>Observer</p>\n<ul>\n<li>Observable에 의해 전달된 데이터를 소비하는 주체</li>\n<li>next, error, complete 함수를 가진 객체</li>\n</ul>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">// Observer 객체를 전달하는 subscribe</span>\n<span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token punctuation">{</span>\n  next<span class="token punctuation">:</span> value <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  error<span class="token punctuation">:</span> error <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  complete<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'complete\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// next 콜백 함수를 전달하는 subscribe</span>\nclick$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>value <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// next, error, complete 콜백 함수를 전달</span>\nclick$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>\n  value <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  err <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'complete\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<ul>\n<li>\n<p>Subscription</p>\n<ul>\n<li>Observer.prototype.subscribe의 반환값</li>\n<li>자원의 해제</li>\n<li>등록된 Observable의 데이터를 더이상 전달받고 싶지 않을 경우 unsubscribe 호출</li>\n</ul>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> subscription <span class="token operator">=</span> currentTarget$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nsubscription<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2>1.4 RxJS 개발 방법</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/chapter02_01_full_flow-e239b221de7184ff6cdcb89314d606ef-25ed0.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 491px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 54.989816700611%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACqklEQVQozyWSaU8aURSG+Z1N2jRNuqam1lp3URAVgVZFQcGFpSAgCugwgMAMmygwKF2MXZIm/SdPD+OHN2funbnPeee81/Ln5wCj16LXbdDv1ulKvbrSubys0G5roiqaplIsZijkTyjm0xTOkxSVFBdqmnLhlKq8q1VytGsKlmg4wMsXT5mfGefV8yekkmEMo0Wno7PldWO3zaJrCgUBFNVjpiffYZ39QDIW5PmzRxwGN6iVc2gXGa6GwFwmwez0GMv2WaYnRslljugbTXFdZ9vrYl4Olwtp8rm4OJNvp0ZZWpjg+GifkTfPiIV9prsh8LqWx/Lv7w9+3XW5FcBtr0ZTNlv1PNeXJcrFNEo2hiKw7EmYs9MImeMQ2XRYGsRkHaWUT1ItndDUzwUoDn/f3zAw6tz0dIEpcjBi/t7QkWtljjXRkn0au/Uji3NjUsdx2CZZXZpheXES72eHCa1VsjS1swfgV6PB15sGRrdKQ1fQylnTlWPxI7b5MakTWGfey0jeMvnhtTyPyv44c1Pv8DgXUM+PzLHo5QyWn3cGfQmg39FMZ/HILqpUvXpG+MBL0O8mEQtw9GWHyKGXT2sLbHjsbG+ssGKbYt/voSiz1S9OaYhLy/33Lsa1RrddoVlXaWjnZqpDYElNSfeEObPo4RZ7Ox6R+0H+B0X3NtgR+LrTSmBzFcvdt44Zxo9Bi/tvbW46VQZdjV77wuxaLhyTigfY860R3Hays7mM77Md/7pDQMsc+Fy4HTOMvHyMdWoEy6B/yffbppnaumtRtMCmx0ZJSdCS5KqSdDq+SyToISTODvxr7Pucpg78LiKBTyRDW2SkqZoODYFy566rcjgvVySOepZAlUCGidVkyBVxOASGAm7Cu26BusSV80ECj+x6iO+tcxL1o6T2+Q9HS4ZTQkIGEQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Untitled"\n        title=""\n        src="/static/chapter02_01_full_flow-e239b221de7184ff6cdcb89314d606ef-25ed0.png"\n        srcset="/static/chapter02_01_full_flow-e239b221de7184ff6cdcb89314d606ef-53310.png 240w,\n/static/chapter02_01_full_flow-e239b221de7184ff6cdcb89314d606ef-87472.png 480w,\n/static/chapter02_01_full_flow-e239b221de7184ff6cdcb89314d606ef-25ed0.png 491w"\n        sizes="(max-width: 491px) 100vw, 491px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ul>\n<li>데이터 소스를 Observable로 변경</li>\n<li>오퍼레이터를 통해 데이터를 변경하거나 추출, 또는 여러 개의 Observable을 하나의 Observable로 합치거나 하나의 Observerable을 여러개의 Observable로 만듦</li>\n<li>원하는 데이터를 받아 처리하는 Observer를 만듦</li>\n<li>Observer의 subscribe를 통해 Observer를 등록</li>\n<li>Observable 구독을 정지하고 자원을 해지</li>\n</ul>\n<p>출처 <a href="https://m.yes24.com/Goods/Detail/62601794">RxJS Quick Start</a></p>',fields:{tagSlugs:["/tags/functional/","/tags/java-script/","/tags/rx-js/"]},frontmatter:{title:"[함수형 프로그래밍] RxJS란?",tags:["functional","JavaScript","RxJS"],date:"2021-04-31T09:15:03.284Z",description:"RxJS는 Observable을 사용하여 비동기 및 이벤트 기반 프로그램을 작성하기 위한 라이브러리다."}}},pathContext:{slug:"/posts/Functional/what-is-rx-js"}}}});
//# sourceMappingURL=path---posts-functional-what-is-rx-js-ea99b931871073a975fc.js.map