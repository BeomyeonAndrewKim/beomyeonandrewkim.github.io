webpackJsonp([0xebe00cc33554],{544:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, former marketer, interested in Data Visualization and making project alive. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/beomyeonandreakim/Documents/dev/beomyeonandrewkim.github.io/src/pages/articles/2018-04-18_iterator-generator/index.md absPath of file >>> MarkdownRemark",html:'<h1>Iterator, Generator</h1>\n<h2>1. Iterable</h2>\n<p>Iterable object 는 ES2015 에 도입되었습니다.</p>\n<p>반복 가능한 객체를 다른 객체와 구분 짓는 특징은 <code class="language-text">Symbol.iterator</code> 속성에 특별한 형태의 함수가 들어있다는 것입니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\narr<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//[Function]</span></code></pre>\n      </div>\n<p>이를 반복 가능한 객체(iterable object) 혹은 줄여서 iterable 이라 부르고, 해당 객체는 iterable protocol 은 만족한다고 말합니다.</p>\n<p>내장된 생성자 중 iterable 객체를 만들어내는 생성자에는 아래와 같은 것들이 있습니다.</p>\n<ul>\n<li>String</li>\n<li>Array</li>\n<li>TypedArray</li>\n<li>Map</li>\n<li>Set</li>\n</ul>\n<p>객체가 Iterable 이라면 아래의 기능을 사용할 수 있습니다.</p>\n<ul>\n<li><code class="language-text">for…of</code> 루프</li>\n<li>Spread 연산자(<code class="language-text">...</code>)</li>\n<li>분해 대입(destructuring assignment)</li>\n<li>기타 iterable 을 인수로 받는 함수</li>\n</ul>\n<h2>2. Generator</h2>\n<p>Iterable 을 구현하는 가장 쉬운 방법은 generator 함수를 사용하는 것입니다.</p>\n<p>generator 함수는 iterable 객체를 반환하는 특별한 형태의 함수입니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// generator 함수 선언하기</span>\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">gen1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 표현식으로 사용하기</span>\n<span class="token keyword">const</span> <span class="token function-variable function">gen2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 메소드 문법으로 사용하기</span>\n<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token operator">*</span><span class="token function">gen3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Generator 함수를 호출하면 객체가 생성되는데, 이 객체는 iterable protocol 을 만족합니다. 즉, Symbol.iterator 속성을 갖고 있습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">gen1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// `gen1`를 호출하면 iterable이 반환됩니다.</span>\n<span class="token keyword">const</span> iterable <span class="token operator">=</span> <span class="token function">gen1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\niterable<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// [Function]</span></code></pre>\n      </div>\n<p>generator 함수 안에서 <code class="language-text">yield</code> 키워드는 <code class="language-text">return</code>과 유사한 역할을 하며, iterable 기능을 사용할 때 <code class="language-text">yield</code> 키워드 뒤에 있는 값들을 순서대로 넘겨줍니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">numberGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span> <span class="token number">3</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 1, 2, 3이 순서대로 출력됩니다.</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token keyword">of</span> <span class="token function">numberGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><code class="language-text">yield*</code> 표현식을 사용하면, 다른 generator 함수에서 넘겨준 값을 대신 넘겨줄 수도 있습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">numberGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span> <span class="token number">3</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">numberGen2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token function">numberGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token function">numberGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 1, 2, 3, 1, 2, 3이 순서대로 출력됩니다.</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token keyword">of</span> <span class="token function">numberGen2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>주의해야하는 것은 generator 함수에서 생성된 iterable 객체는 한 번만 사용이 가능하다는 점입니다.</p>\n<h2>3. Iterator Protocol</h2>\n<p>iterable protocol 을 만족하려면, <code class="language-text">Symbol iterator</code> 속에 저장되어 있는 함수는 iterator 객체를 반환해야 합니다. iterator 객체는 아래의 특별한 조건을 만족합니다.</p>\n<ul>\n<li><code class="language-text">next</code> 라는 메소드를 갖습니다.</li>\n<li>\n<p><code class="language-text">next</code> 메소드는 다음 두 속성을 갖는 객체를 반환해야 합니다.</p>\n<ul>\n<li><code class="language-text">done</code> - 반복이 모두 끝났는지를 나타냅니다.</li>\n<li><code class="language-text">value</code> - 현재 순서의 값을 나타냅니다.</li>\n</ul>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// 문자열은 iterable이므로 이로부터 iterator를 생성할 수 있습니다.</span>\n<span class="token keyword">const</span> strIterator <span class="token operator">=</span> <span class="token string">\'go\'</span><span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nstrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: \'g\', done: false }</span>\nstrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: \'o\', done: false }</span>\nstrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: undefined, done: true }</span>\nstrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: undefined, done: true }</span>\n\n<span class="token comment">// generator 함수로부터 생성된 객체 역시 iterable이므로 이로부터 iterator를 생성할 수 있습니다.</span>\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> genIterator <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// generator 함수로 생성된 객체는 [Symbol.iterator]()를 호출 안해도 iterator 객체로서 역할을 합니다. 즉 iterable protocol과 iterator protocol을 동시에 만족합니다.</span>\ngenIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 1, done: false }</span>\ngenIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 2, done: false }</span>\ngenIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: undefined, done: true }</span>\ngenIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: undefined, done: true }</span></code></pre>\n      </div>\n<p>generator 함수 안에서 <code class="language-text">return</code> 키워드를 사용하면 반복이 바로 끝나면서 <code class="language-text">next</code> 메소드에서 반환되는 객체의 속성에 앞의 반환값이 저장됩니다. 다만, <code class="language-text">return</code> 을 통해 반환된 값이 반복 절차에 포함되지는 않습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// generator 함수는 여기서 종료됩니다.</span>\n  <span class="token keyword">yield</span> <span class="token number">3</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> iter <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\niter<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 1, done: false }</span>\niter<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 2, done: true }</span>\niter<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: undefined, done: true }</span>\n\n<span class="token comment">// `1`만 출력됩니다.</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> v <span class="token keyword">of</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>또한 generator 함수로부터 생성된 객체의 <code class="language-text">next</code> 메소드에 인수를 주어 호출하면, generator 함수가 멈췄던 부분의 <code class="language-text">yield</code> 표현식의 값은 앞에서 받은 인수가 됩니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> received <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>received<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> iter <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\niter<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 1, done: false }</span>\n\n<span class="token comment">// \'hello\'가 출력됩니다.</span>\niter<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">\'hello\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: undefined, done: true }</span></code></pre>\n      </div>\n<p>출처: <a href="https://helloworldjavascript.net/pages/220-value-in-depth.html">자바스크립트로 만나는 세상</a></p>',fields:{tagSlugs:["/tags/java-script/","/tags/자바스크립트/","/tags/es-2015/","/tags/iterator/","/tags/generator/"]},frontmatter:{title:"[JavaScript] Iterator, Generator",tags:["JavaScript","자바스크립트","ES2015","Iterator","Generator"],date:"2018-04-18T18:15:03.284Z",description:"Iterator, Generator 1. Iterable Iterable object는 ES2015에 도입되었습니다. "}}},pathContext:{slug:"/posts/javascript/iterator-generator"}}}});
//# sourceMappingURL=path---posts-javascript-iterator-generator-297eea646715a4e9f636.js.map