webpackJsonp([0xbc2013ade21],{540:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, former marketer, interested in business-oriented and scalable development. Also, passionate marathoner.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/beomyeonandreakim/Documents/dev/beomyeonandrewkim.github.io/src/pages/articles/2021-07-01_scheduler/index.md absPath of file >>> MarkdownRemark",html:'<h2>1.1 RxJS 스케쥴러</h2>\n<p>RxJS로 타이머 기반의 애니메이션을 구현하기 위해서는 스케쥴러에 대한 이해가 필수적이다.</p>\n<p>Observable의 데이터 전달 시점과 Observer가 데이터를 받는 시점을 조절하는 일을 한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">// 일반 자바스크립트</span>\n<span class="token keyword">function</span> <span class="token function">delay1s</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> start <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//1s</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>동기적으로 시간을 제어하려하면 자칫 치명적인 문제가 발생할 수 있다.</p>\n<p>기본적으로 하나의 메인 스레드에서 모든 작업이 실행된다. 어떤 작업의 비용이 크거나 대기 시간이 긴 경우에는 애플리케이션 자체가 멈출 수 있다는 의미이기도 하다.</p>\n<p>자바스크립트에서는 <code class="language-text">setTimeout</code>, <code class="language-text">setInterval</code> 과 같은 callback이나 <code class="language-text">promise</code>, <code class="language-text">async-await</code> 과 같은 표준 스펙을 통한 비동기 처리로 문제점을 해결하고 있다. 이런 비동기 작업은 하나의 메인 스레드가 계속 점유되지 않도록 한다.</p>\n<p>RxJS에서도 단일 스레드에서 동기적으로 작업을 처리할 수 있지만 브라우저가 블록되는 문제를 해결하기 위해서 비동기적 처리 방식으로 데이터를 전달하거나 받는다. 이것이 바로 RxJS 스케쥴러이다.</p>\n<blockquote>\n<p>프로그래밍 언어의 스케쥴러를 효과적으로 사용할 수 있도록 만든 가상의 스케쥴러다.</p>\n</blockquote>\n<h3>1.1.1 스케줄러는 언제 쓰나요?</h3>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">from</span><span class="token punctuation">(</span>ish<span class="token punctuation">:</span> ObservableInput<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> scheduler<span class="token punctuation">:</span> Scheduler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">interval</span><span class="token punctuation">(</span>period<span class="token punctuation">:</span> number<span class="token punctuation">,</span> scheduler<span class="token punctuation">:</span> Scheduler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">of</span><span class="token punctuation">(</span>values<span class="token punctuation">:</span> <span class="token operator">...</span><span class="token constant">T</span><span class="token punctuation">,</span> scheduler<span class="token punctuation">:</span> Scheduler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">throwError</span><span class="token punctuation">(</span>error<span class="token punctuation">:</span> any<span class="token punctuation">,</span> scheduler<span class="token punctuation">:</span> Scheduler<span class="token punctuation">)</span>\n<span class="token operator">...</span></code></pre>\n      </div>\n<p>대다수 RxJS 네임스페이스에서 제공하는 함수에는 추가적으로 스케줄러를 지정할 수 있는 파라미터가 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token keyword">of</span> <span class="token punctuation">}</span> <span class="token operator">=</span> rxjs<span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> tap <span class="token punctuation">}</span> <span class="token operator">=</span> rxjs<span class="token punctuation">.</span>operators<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> obs$ <span class="token operator">=</span> <span class="token keyword">of</span><span class="token punctuation">(</span><span class="token string">\'A\'</span><span class="token punctuation">,</span> <span class="token string">\'B\'</span><span class="token punctuation">,</span> <span class="token string">\'C\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>\n  <span class="token function">tap</span><span class="token punctuation">(</span>v <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token string">\'데이터 처리1\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">tap</span><span class="token punctuation">(</span>v <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token string">\'데이터 처리2\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">tap</span><span class="token punctuation">(</span>v <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token string">\'데이터 처리3\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">tap</span><span class="token punctuation">(</span>v <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token string">\'데이터 처리4\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'subscribe 전\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> start <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'[1초 후 subscribe]\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  obs$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>v <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'observer recevied\'</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`subscribe 후 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> ms`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Observer가 Observable을 구독했을 때 Observable은 동기적으로 데이터를 처리해서 동기적으로 ‘A’, ‘B’, ‘C’를 전달하였다. 총 68ms동안 메인스레드는 멈춰있었떤 것이다.</p>\n<p>두 가지 관점으로 분리할 수 있다.</p>\n<ul>\n<li>구독 자체의 동기식 처리 여부</li>\n<li>데이터 처리에 대한 동기식 처리 여부</li>\n</ul>\n<p>구독의 시점을 제어할 수 있는 <code class="language-text">subscribeOn</code> 오퍼레이터를 제공한다. <code class="language-text">subscribeOn</code>을 이용하여 <code class="language-text">asnycScheduler</code>를 사용하면 제어권을 메인 스레드에게 넘길 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token keyword">of</span><span class="token punctuation">,</span> asyncScheduler <span class="token punctuation">}</span> <span class="token operator">=</span> rxjs<span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> tap<span class="token punctuation">,</span> subscribeOn <span class="token punctuation">}</span> <span class="token operator">=</span> rxjs<span class="token punctuation">.</span>operators<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> obs$ <span class="token operator">=</span> <span class="token keyword">of</span><span class="token punctuation">(</span><span class="token string">\'A\'</span><span class="token punctuation">,</span> <span class="token string">\'B\'</span><span class="token punctuation">,</span> <span class="token string">\'C\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>\n  <span class="token function">tap</span><span class="token punctuation">(</span>v <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token string">\'데이터 처리1\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">tap</span><span class="token punctuation">(</span>v <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token string">\'데이터 처리2\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">tap</span><span class="token punctuation">(</span>v <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token string">\'데이터 처리3\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">tap</span><span class="token punctuation">(</span>v <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token string">\'데이터 처리4\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">subscribeOn</span><span class="token punctuation">(</span>asyncScheduler<span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'subscribe 전\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> start <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'[1초 후 subscribe]\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  obs$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>v <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'observer recevied\'</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`subscribe 후 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> ms`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>RxJS에서는 데이터 처리의 시점을 제어할 수 있도록 observeOn 오퍼레이터를 제공한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> obs$ <span class="token operator">=</span> <span class="token keyword">of</span><span class="token punctuation">(</span><span class="token string">\'A\'</span><span class="token punctuation">,</span> <span class="token string">\'B\'</span><span class="token punctuation">,</span> <span class="token string">\'C\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>\n  <span class="token function">tap</span><span class="token punctuation">(</span>v <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token string">\'데이터 처리1\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">tap</span><span class="token punctuation">(</span>v <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token string">\'데이터 처리2\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">tap</span><span class="token punctuation">(</span>v <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token string">\'데이터 처리3\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">tap</span><span class="token punctuation">(</span>v <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token string">\'데이터 처리4\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">observeOn</span><span class="token punctuation">(</span>asyncScheduler<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">subscribeOn</span><span class="token punctuation">(</span>asyncScheduler<span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'subscribe 전\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> start <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'[1초 후 subscribe]\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  obs$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>v <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'observer recevied\'</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`subscribe 후 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> ms`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>RxJS에서 공식적으로 제공하는 스케줄러는 다음과 같다.</p>\n<table>\n<thead>\n<tr>\n<th>스케쥴러</th>\n<th>설명</th>\n<th>용도</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>null</td>\n<td>스케쥴러가 없는 경우에는 동기적으로 데이터를 전달한다.</td>\n<td>RxJS 5+의 기본 스케줄러이다. 비용이 오래 걸리지 않는 경우 이용한다. Observable이 complete되어야 메인 스레드가 멈추지 않는다.</td>\n</tr>\n<tr>\n<td>queueScheduler</td>\n<td>자료 구조 큐(Queue)와 같이 동작하는 스케줄러다.</td>\n<td>현재 작업을 대기열(Queue)에 등록하고 가장 먼저 들어온 작업을 꺼내어 동기적으로 처리한다. 반복적인 작업을 처리해야 하는 경우 사용된다.</td>\n</tr>\n<tr>\n<td>asapScheduler</td>\n<td>마이크로태스크(microtask)대기열에 등록되는 스케줄러이다. setImmediate, Node.js의 process.nextTick()로 동작하는 스케줄러이다.</td>\n<td>주로 비동기 변환 처리를 할 경우에 사용된다.</td>\n</tr>\n<tr>\n<td>asyncScheduler</td>\n<td>setInterval로 동작하는 스케줄러이다.</td>\n<td>시간과 관련된 오퍼레이터에 사용한다.</td>\n</tr>\n<tr>\n<td>animationFrameScheduler</td>\n<td>requestAnamiationFrame로 동작하는 스케줄러이다.</td>\n<td>부드러운 애니메이션을 만들 때 사용한다.</td>\n</tr>\n</tbody>\n</table>\n<h2>1.2 애니메이션 구현하기</h2>\n<p>애니메이션은 시간이 경과함에 따라 좌표 정보가 변경되는 것을 의미한다.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/animation-3699419027a9eb09abf664119062132f-ac47b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 466px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 81.75965665236052%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAADl0lEQVQ4y02USVMiWRSF+aG1qOiKXvSmo/dd0SooM4JMMifJKJBmkswkk6JCMSizRvhnTp+X9qIXN1jx5T3DfZagz4Zo0IlIyINYNIBUKgo5m0KhkEWlUkK1dod7tYa6rqHVaqLb7WIwGGA8HmP69Iznlznm8wVe1xtsN1tYfJ4LBANOOF02uFyXkKQEMlISUjaN23gUyn0NlWqF0Hs0mg30egJoYDQaYTabYblcYblYYfO6wX67h8XrtcHvd+Am6EU8EUYmm4Ccy3AkpDIJqHUFNaUCvaEhl89x4yqGwyFnjOfnGX79WmJB4Hr9ht1mxw19VwgG3QiFfUgKubkU/yghX5ShaDXc/wcUstsdSu51TNnD4YigJfr9AQzO9m33BfT77QiHPYhEruEPCLCfwAyK5TzSlJ3MpKEQVlWqyBfyKN2V0Wy3Ce6j2WrDGIzMLdfCwy2BgYADYksh2+O5wjWhyXQMmVwaiXQc8WQc+VKBGxf4gQxyhCqqypAa0LQ6g2qb8mezOU7HEyzX/isEmHKYG8aTXx7mS1mUayVTstZQoeoENOpodlroGT0YwwEeHqd4Ysrdbp+yDaxWa5wOAhi4xE3IQaAPsUSQW8RRKGdRU+9MmNbU0Gg3KLOBVvcLOH6YEPaEl5cZpa6x2+2xPxzw8fEBi8t9BpfnnFLtuL5xIRz1IyXF6ZXwq2iO8E/U515V0GgR3G6ZW00mE0ynU4azMMGr5RIW6+VP2DgO1znsznP4Ai5EYiFIcprBFDhFVGoVJl01f7W6Bk2ndwym0+myl4YpXXg451jsrgs43Be4cp7BTqifFbpNRCCzNkKu3tSht/Qv2fSw2++hTw8nj4+mZOGdSPd4OuHz85Mph9wIhFwcJ4IRL2LJkOmhUq9BbdbNqf8faAjgEKPJA0/vhZVZ4fVVVGaPj9M7i83aCKnWq5/mluFbP6FRBKNhJNjBeDqFjCxD5pXki3mU2cNypcJzVKDrLHqnj4ExxoalfhdAh9uKP//6A99/+4Yfv3/HmfVvhGNBxNjBlJxBWpYg5bL09GtED8WUymWeoQJN1dnFDh+LBxxFbexuGze7gPXyH1jt5/DeeJDgAyHzUkp8FCoiXV2HypdGa7WgdztoGwaM8QST6QseOb3ekFtOsN8duaHnEk6O22eHlwnf8Am7Td0iyZSlQg65UhF3Cu+Zl6E0CWW69Q6hvN/BUPg4x2L5RslHHA7v+BcX4LzNqozpHwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Untitled"\n        title=""\n        src="/static/animation-3699419027a9eb09abf664119062132f-ac47b.png"\n        srcset="/static/animation-3699419027a9eb09abf664119062132f-ec35e.png 240w,\n/static/animation-3699419027a9eb09abf664119062132f-ac47b.png 466w"\n        sizes="(max-width: 466px) 100vw, 466px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Observable이 시간을 인덱스로 데이터를 가지고 있는 것처럼 애니메이션도 어떻게 보면 하나의 Observable인 것이다.</p>\n<p>각 데이터의 간격을 시간에 따라 조절하기만 하면 우리가 원하는 애니메이션을 Observable을 이용하여 손쉽게 표현할 수 있다.</p>\n<p>이처럼 각 데이터 간격을 조절하고 데이터 구조를 결정할 수 있는 것이 RxJS 스케줄러이다. 우리 예제에서는 requestAnimationFrame과 같이 동작하는 animationFrame 스케줄러를 이용하여 애니메이션을 표현하는 Observable을 만들어보자</p>\n<h3>1.2.1 Animation Observable 만들기</h3>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> <span class="token punctuation">{</span> animationFrameScheduler<span class="token punctuation">,</span> interval <span class="token punctuation">}</span> <span class="token operator">=</span> rxjs<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> scheduler <span class="token operator">=</span> animationFrameScheduler<span class="token punctuation">;</span>\n<span class="token keyword">const</span> animation$ <span class="token operator">=</span> <span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> scheduler<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3>1.2.2 이동 시간에 따른 ‘이동 거리 비율’ 구하기</h3>\n<p>이동해야 할 거리</p>\n<blockquote>\n<p>경과시간 / 총 애니메이션 이동 시간</p>\n</blockquote>\n<p>경과시간</p>\n<blockquote>\n<p>(현재 시간 - 애니메이션 시작 시간) / 총 애니메이션 이동 시간</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> <span class="token punctuation">{</span> animationFrameScheduler<span class="token punctuation">,</span> interval <span class="token punctuation">}</span> <span class="token operator">=</span> rxjs<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> scheduler <span class="token operator">=</span> animationFrameScheduler<span class="token punctuation">;</span>\n<span class="token keyword">const</span> start <span class="token operator">=</span> scheduler<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token constant">DURATION</span> <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> animation$ <span class="token operator">=</span> <span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> scheduler<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>\n  <span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>scheduler<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token constant">DURATION</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3>1.2.3 takeWhile로 애니메이션 종료하기</h3>\n<p>특정 조건이 만족되지 않을 경우 Observable을 완료(complete)시키는 takeWhile 오퍼레이터가 있다.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/takeWhile-9d2ef1e1120d096559da1cd6ed468910-b5a16.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 42.1875%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsSAAALEgHS3X78AAABLklEQVQY06WQu07DMBSG/aI8R5mRmJhZERMrDIxMFRMSpCqtQEi0oXJDSJqLHV/OcXzBSSQWxMQn27Ksc+zvN+laupkfcV4FxNnd0836Pfhw/3F9+TyzEHhz2J4dt9lO2bB7PP16vYA+dLwtiqKqKoKouyYF0AaR1qzuhHdeAKtl7qxHBJFnqFVvneSfsisRTSxWSgEAqesasFcj03GWZXs6jDzPm6ZhnWCMHcpSStAalZJTZ2wkbdsEb63th+kcGpMkyWKxWC6Xq9WKUlqWZZRM02gHzjk74r2P9xIhpNBeSiWldKCMVsb0Exilo4vWMCJ/QWRX7JMTIdqY7/zhZb7NAgLjPFpFvVgxrdPmByHE8DJqVm2u4rcF527f6LqoQ/CAMZsagvwBjgUk/INvWLHDz50FNcEAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Untitled"\n        title=""\n        src="/static/takeWhile-9d2ef1e1120d096559da1cd6ed468910-c83f1.png"\n        srcset="/static/takeWhile-9d2ef1e1120d096559da1cd6ed468910-569e3.png 240w,\n/static/takeWhile-9d2ef1e1120d096559da1cd6ed468910-93400.png 480w,\n/static/takeWhile-9d2ef1e1120d096559da1cd6ed468910-c83f1.png 960w,\n/static/takeWhile-9d2ef1e1120d096559da1cd6ed468910-b5a16.png 1280w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> animation$ <span class="token operator">=</span> <span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> scheduler<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>\n  <span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>scheduler<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token constant">DURATION</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">takeWhile</span><span class="token punctuation">(</span>rate <span class="token operator">=></span> rate <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3>1.2.4 concat으로 애니메이션 완료 값 1 전달하기</h3>\n<p>완료된 Observable에 추가적으로 데이터를 전달하기 위한 방법으로 concat 오퍼레이터가 있다.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/concat-86883a8b855072f4bc9981eedb4db0f5-b5a16.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 57.8125%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsSAAALEgHS3X78AAABf0lEQVQoz6WSTYsUMRCG85cXwZt4EvQkHgX/gSviUfDkRUUF3bk4627bitPjTHqmu5NOpSofFattx12WBQWfQ1Ehlbz1pUopnHNhLpMn5PLPqMGY+v4tffIWcmk+HX99fTQCbzZrIcb4l8cppbH+TNaIoh+3434peRBhDDHlxIUvYvPVpFT5D9Rc6uHIsx8iZSqPl3fer54zFSA0rf7+8K7baQxxtFZrba29XjmmmKi8Wj09bz9yKBQIzNC+eIbWhBg9wDAM3ntlrkN+BQAOHDCKPwrOjcyTvYT6PaqLtPOv1uSq+nKy+FBV5/MEJ5tiudS/ruuUqPsQwXtwznv0GEXTOaf1dqf3u7aTm5kp7IAE9H2vkMjUZzD0IbEzP+zulEKSUeXIq+Gsc9tIciT0YKpTBKAQEFEeyxYoqa9+cLtdvPNc1ssn397ccJ6N7SOUR4ujl9VxgjKC26+b+t5Ns1k7RNFsmmZKe+ot4Vx2zvId/qmKAqZ8WDKW5uGVofwEWv+w/qdSNBAAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Untitled"\n        title=""\n        src="/static/concat-86883a8b855072f4bc9981eedb4db0f5-c83f1.png"\n        srcset="/static/concat-86883a8b855072f4bc9981eedb4db0f5-569e3.png 240w,\n/static/concat-86883a8b855072f4bc9981eedb4db0f5-93400.png 480w,\n/static/concat-86883a8b855072f4bc9981eedb4db0f5-c83f1.png 960w,\n/static/concat-86883a8b855072f4bc9981eedb4db0f5-b5a16.png 1280w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> interval$ <span class="token operator">=</span> <span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> scheduler<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>\n  <span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>scheduler<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token constant">DURATION</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">takeWhile</span><span class="token punctuation">(</span>rate <span class="token operator">=></span> rate <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> animation$ <span class="token operator">=</span> <span class="token function">concat</span><span class="token punctuation">(</span>interval$<span class="token punctuation">,</span> <span class="token keyword">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>출처 <a href="https://m.yes24.com/Goods/Detail/62601794">RxJS Quick Start</a></p>',
fields:{tagSlugs:["/tags/functional/","/tags/java-script/","/tags/rx-js/"]},frontmatter:{title:"[함수형 프로그래밍] RxJS - 스케쥴러, takeWhilte, concat",tags:["functional","JavaScript","RxJS"],date:"2021-07-01T09:15:03.284Z",description:"RxJS로 타이머 기반의 애니메이션을 구현하기 위해서는 스케쥴러에 대한 이해가 필수적이다."}}},pathContext:{slug:"/posts/Functional/scheduler"}}}});
//# sourceMappingURL=path---posts-functional-scheduler-d75a91cf581b7460d759.js.map