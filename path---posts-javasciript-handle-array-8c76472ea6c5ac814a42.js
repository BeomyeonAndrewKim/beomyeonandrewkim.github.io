webpackJsonp([54183773320665],{444:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, fomer marketer, interested in Data Visualization and PWA",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/BeomyeonaAndrewKim.github.io/src/pages/articles/2018-03-23--[Javascript] 배열 요소 조작/index.md absPath of file >>> MarkdownRemark",html:'<h2>1. 배열 요소 조작</h2>\n<h3>1. 배열의 처음이나 끝에서 요소 하나를 추가하거나 제거하기</h3>\n<h3>push, pop</h3>\n<p>각각 배열의 끝에 요소를 추가하거나 제거합니다. 기존의 배열이 <strong>수정</strong>됩니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">\'b\'</span><span class="token punctuation">,</span><span class="token string">\'c\'</span><span class="token punctuation">,</span><span class="token string">\'d\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\narr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'e\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//4. arr은 이제 [\'b\',\'c\',\'d\',\'e\']입니다.</span>\narr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\'e\'. arr은 이제 [\'b\',\'c\',\'d\'] 입니다.</span>\n</code></pre>\n      </div>\n<h3>shift, unshift</h3>\n<p>각각 배열의 첫번째 요소를 제거하거나 추가합니다. 기존의 배열이 <strong>수정</strong>됩니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">\'b\'</span><span class="token punctuation">,</span><span class="token string">\'c\'</span><span class="token punctuation">,</span><span class="token string">\'d\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\narr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">\'a\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4. arr = [\'a\',\'b\',\'c\',\'d\'] </span>\narr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \'a\'. arr = [\'b\',\'c\',\'d\'] </span>\n</code></pre>\n      </div>\n<p><code class="language-text">push</code>와 <code class="language-text">unshift</code>는 새 요소를 추가해서 늘어난 길이를 반환하고, pop과 shift는 제거된 요소를 반환합니다.</p>\n<h3>2. 배열의 끝에 여러 요소 추가하기</h3>\n<p><code class="language-text">concat</code> 메서드는 배열의 끝에 여러 요소를 추가한 <strong>사본</strong>을 반환합니다. <code class="language-text">concat</code>에 배열을 넘기면 이 메서드는 배열을 분해해서 원래 배열에 추가한 사본을 반환합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\narr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment">// [1,2,3,4,5,6] arr은 바뀌지 않습니다.</span>\narr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [1,2,3,4,5,6]</span>\narr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment">// [1,2,3,4,5,6]</span>\narr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [1,2,3,4,[5,6]]</span>\n</code></pre>\n      </div>\n<h3>3. 배열의 일부 가져오기</h3>\n<p>배열의 일부만 가져올 때는 <code class="language-text">slice</code>메서드를 사용합니다. slice메서드는 매개변수 두 개를 받습니다. 첫 번째 매개변수는 어디서부터 가져올지를, 두 번째 매개변수는 어디까지 가져올지를 지정합니다. 두 번째 매개변수를 생략하면 배열의 마지막까지 반환합니다. 이 메서드에서는 음수 인덱스를 쓸 수 있고, 음수 인덱스를 쓰면 배열의 끝에서부터 요소를 셉니다. <strong>사본</strong>을 반환합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\narr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[4,5] arr은 바뀌지 않습니다.</span>\narr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[3,4]</span>\narr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[4,5]</span>\narr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[2,3]</span>\narr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[4]</span>\n</code></pre>\n      </div>\n<h3>4. 임의의 위치에 요소 추가하거나 제거하기</h3>\n<p><code class="language-text">splice</code>는 배열을 자유롭게 <strong>수정</strong>할 수 있습니다. 첫번째 매개변수는 수정을 시작할 인덱스이고, 두 번째 매개변수는 제거할 요소 숫자입니다. 아무 요소도 제거하지 않을 때는 0을 넘깁니다. 나머지 매개변수는 배열에 추가될 요소입니다. 제거되는 요소를 반환합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\narr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[], arr = [1,2,3,4,5,7]</span>\narr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[], arr = [1,2,3,4,5,6,7]</span>\narr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[2,3], arr = [1,4,5,6,7]</span>\narr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">\'a\'</span><span class="token punctuation">,</span><span class="token string">\'b\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[5], arr = [1,4,\'a\',\'b\',6,7]</span>\n</code></pre>\n      </div>\n<h3>5. 배열 안에서 요소 교체하기</h3>\n<p><code class="language-text">copyWithin</code>은 ES6에서 도입한 배열 <strong>수정</strong> 메서드입니다. 이 메서드는 배열 요소를 복사해서 다른 위치에 붙여넣고, 기존의 요소를 덮어씁니다. 첫 번째 매개변수는 복사한 요소를 붙여넣을 위치이고, 두 번째 매개변수는 복사를 시작할 위치이고, 세 번째 매개변수는 복사를 끝낼 위치입니다(생략 가능).  음수 인덱스를 사용하면 배열의 끝에서부터 셉니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\narr<span class="token punctuation">.</span><span class="token function">copyWithin</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// arr = [1,3,4,4]</span>\narr<span class="token punctuation">.</span><span class="token function">copyWithin</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// arr = [1,3,1,3]</span>\narr<span class="token punctuation">.</span><span class="token function">copyWithin</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// arr = [3,1,1,3]</span>\n</code></pre>\n      </div>\n<h3>6. 특정 값으로 배열 채우기</h3>\n<p><code class="language-text">fill</code>은 ES6에서 도입한 배열 <strong>수정</strong> 메서드입니다. 이 메서드는 정해진 값으로 배열을 채웁니다. 크기를 지정해서 배열을 생성하는 <code class="language-text">Array</code> 생성자와 잘 어울립니다. 배열의 일부만 채우려 할 때는 시작 인덱스와 끝 인덱스를 지정하면 됩니다. 음수 인덱스도 사용할 수 있습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefiend, arr=[1,1,1,1,1]로 초기화</span>\narr<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">\'a\'</span><span class="token punctuation">)</span> <span class="token comment">// arr = [\'a\',\'a\',\'a\',\'a\',\'a\']</span>\narr<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">\'b\'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// arr = [\'a\',\'b\',\'b\',\'b\',\'b\']</span>\narr<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">\'c\'</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// arr = [\'a\',\'b\',\'c\',\'c\',\'b\']</span>\n</code></pre>\n      </div>\n<h3>7. 배열 정렬과 역순 정렬</h3>\n<p><code class="language-text">reverse</code>는 이름 그대로 배열 요소의 순서를 반대로 <strong>수정</strong>합니다. </p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> arr<span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\narr<span class="token punctuation">.</span><span class="token function">reverser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//arr=[5,4,3,2,1]</span>\n</code></pre>\n      </div>\n<p><code class="language-text">sort</code>는 배열 요소의 순서를 정렬해 <strong>수정</strong>합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\narr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//arr=[5,4,3,2,1]</span>\n</code></pre>\n      </div>\n<p><code class="language-text">sort</code>는 정렬 함수를 받을 수 있습니다. 예를 들어 일반적으로는 객체가 들어있는 배열을 정렬할 수 없지만, 정렬 함수를 사용하면 가능합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>name<span class="token punctuation">:</span><span class="token string">"Suzanne"</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>name<span class="token punctuation">:</span><span class="token string">"Jim"</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>name<span class="token punctuation">:</span><span class="token string">"Trevor"</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>name<span class="token punctuation">:</span><span class="token string">"Amanda"</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\narr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// arr은 바뀌지 않습니다.</span>\narr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token operator">=></span> a<span class="token punctuation">.</span>name<span class="token operator">></span>b<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// arr은 name프로퍼티의 알파벳 순으로 정렬됩니다.</span>\narr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token operator">=></span> a<span class="token punctuation">.</span>name<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">&lt;</span>b<span class="token punctuation">.</span>name<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// arr은 name프로퍼티의 두 번째 글자의 알파벳 역순으로 정렬됩니다.</span>\n</code></pre>\n      </div>\n<p>정렬함수는 아래와 같이 동작합니다.</p>\n<p>만약 어떤 두 값 <code class="language-text">a</code>, <code class="language-text">b</code>에 대해서 비교 함수 <code class="language-text">compare</code>를 <code class="language-text">compare(a, b)</code>와 같이 호출했을 때:</p>\n<ul>\n<li>음수를 반환하면, <code class="language-text">a</code>가 <code class="language-text">b</code> 앞에 오도록 정렬합니다.</li>\n<li>0을 반환하면, <code class="language-text">a</code>와 <code class="language-text">b</code>를 같은 순서로 간주합니다.</li>\n<li>양수를 반환하면, <code class="language-text">b</code>가 <code class="language-text">a</code> 앞에 오도록 정렬합니다.</li>\n</ul>',fields:{tagSlugs:["/tags/javascript/","/tags/자바스크립트/","/tags/es-2015/","/tags/배열/"]},frontmatter:{title:"[Javascript] 배열의 요소 조작하기",tags:["Javascript","자바스크립트","ES2015","배열"],date:"2018-03-23T22:12:03.284Z",description:"1. 배열 요소 조작 1. 배열의 처음이나 끝에서 요소 하나를 추가하거나 제거하기 push, pop 각각 배열의 끝에 요소를 추가하거나 제거합니다. 기존의 배열이 수정됩니다."}}},pathContext:{slug:"/posts/javasciript/handle-array"}}}});
//# sourceMappingURL=path---posts-javasciript-handle-array-8c76472ea6c5ac814a42.js.map