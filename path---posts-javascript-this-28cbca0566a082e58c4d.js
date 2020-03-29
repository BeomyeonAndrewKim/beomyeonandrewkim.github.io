webpackJsonp([41195084881877],{519:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, former marketer, interested in Data Visualization and PWA. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/beomyeonandreakim/Documents/dev/beomyeonandrewkim.github.io/src/pages/articles/2018-12-12_this/index.md absPath of file >>> MarkdownRemark",html:'<h2>Javascript This</h2>\n<p><code class="language-text">this</code>는 생성자 혹은 메소드에서 객체를 가리킬 때 사용하는 키워드입니다.</p>\n<p>자바스크립트의 경우 호출 패턴에 따라 어떤 객체를 <code class="language-text">this</code>에 바인딩할 지가 결정됩니다.</p>\n<h3>1.함수 호출 패턴</h3>\n<p>기본적으로 this 는 전역객체(Global object)에 바인딩됩니다. 전역함수는 물론이고 심지어 내부함수의 경우도 <code class="language-text">this</code>는 외부함수가 아닌 전역객체에 바인딩됩니다. 엄격 모드에서 함수 실행에서의 <code class="language-text">this</code>는 <code class="language-text">undefined</code>입니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token string">\'This is test\'</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \'This is test\'</span>\n<span class="token keyword">const</span> <span class="token function-variable function">sayFoo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">sayFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \'This is test\'</span></code></pre>\n      </div>\n<h3>2.메소드 호출 패턴</h3>\n<p>함수가 객체의 프로퍼티이면 메소드 호출 패턴으로 호출됩니다. 이때 메소드 내부의 <code class="language-text">this</code>는 해당 메소드를 소유한 객체 즉 해당 메소드를 호출한 객체에 바인딩됩니다.</p>\n<p>프로토타입 객체도 메소드를 가질 수 있습니다. 프로토타입 객체 메소드 내부에서 사용된 <code class="language-text">this</code>도 일반 메소드 방식과 마찬가지로 해당 메소드를 호출한 객체에 바인딩됩니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> myObject <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'foo\'</span><span class="token punctuation">,</span>\n  sayName<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> otherObject <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'bar\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\notherObject<span class="token punctuation">.</span>sayName <span class="token operator">=</span> myObject<span class="token punctuation">.</span>sayName<span class="token punctuation">;</span>\n\nmyObject<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// foo</span>\notherObject<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// bar</span></code></pre>\n      </div>\n<h3>3. 생성자 호출 패턴</h3>\n<ol>\n<li>\n<p><strong>빈 객체 생성 및 <code class="language-text">this</code> 바인딩</strong><br>\n생성자 함수의 코드가 실행되기 전 빈 객체가 생성됩니다. 이 빈 객체가 생성자 함수가 새로 생성하는 객체입니다. 이후 생성자 함수 내에서 사용되는 <code class="language-text">this</code>는 이 빈 객체를 가리킵니다. 그리고 생성된 빈 객체는 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 설정합니다.</p>\n</li>\n<li>\n<p><strong><code class="language-text">this</code>를 통한 프로퍼티 생성</strong><br>\n생성된 빈 객체에 <code class="language-text">this</code>를 사용하여 동적으로 프로퍼티나 메소드를 생성할 수 있습니다. <code class="language-text">this</code>는 새로 생성된 객체를 가리키므로 <code class="language-text">this</code>를 통해 생성한 프로퍼티와 메소드는 새로 생성된 객체에 추가됩니다.</p>\n</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// Person 생성자 함수</span>\n<span class="token keyword">const</span> <span class="token function-variable function">Person</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">// foo 객체 생성</span>\n<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">\'foo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// foo</span></code></pre>\n      </div>\n<h3>4. this 바꿔치기</h3>\n<p>앞에서 봤던 것처럼, <code class="language-text">this</code>는 때에 따라 다른 값을 가리킵니다. 심지어는 우리가 원하는 값을 가리키게 만들 수도 있는데, 함수 객체의 <code class="language-text">bind</code>,<code class="language-text">call</code>, <code class="language-text">apply</code> 메소드를 사용하면 됩니다.</p>\n<p>함수 객체의 <code class="language-text">bind</code> 메소드를 호출하면, 메소드의 인자로 넘겨준 값이 <code class="language-text">this</code>가 되는 새로운 함수를 반환합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">printGrade</span><span class="token punctuation">(</span>grade<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 님의 점수는 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>grade<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">점입니다.`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'Mary\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> printGradeForMary <span class="token operator">=</span> printGrade<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">printGradeForMary</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Mary 님의 점수는 100점입니다.</span></code></pre>\n      </div>\n<p><code class="language-text">call</code> 혹은 <code class="language-text">apply</code> 메소드를 사용하면, 새로운 함수를 만들지 않고도 임시적으로 <code class="language-text">this</code>를 바꿔버릴 수 있습니다. <code class="language-text">call</code>과 <code class="language-text">apply</code>는 인자를 넘겨주는 형식에 차이가 있을 뿐, 나머지 기능은 동일합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">printGrade</span><span class="token punctuation">(</span>grade<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 님의 점수는 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>grade<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">점입니다.`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'Mary\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nprintGrade<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>student<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Mary 님의 점수는 100점입니다.</span>\nprintGrade<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>student<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Mary 님의 점수는 100점입니다.</span></code></pre>\n      </div>\n<h3>5. 화살표 함수</h3>\n<p>화살표 함수 내부에서 <code class="language-text">this</code>를 사용하면 함수가 정의된 스코프에 있는 <code class="language-text">this</code>를 가리킵니다. 즉, 화살표 함수 내부의 <code class="language-text">this</code>는 화살표 함수가 정의된 문맥에 의해 결정됩니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// 여기에서 사용된 `this`는 \'함수가 정의된 스코프\', 즉 \'Person 함수 스코프\'에 존재하는 `this`를 가리키게 됩니다.</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> mary <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">\'mary\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmary<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \'mary\'</span></code></pre>\n      </div>\n<p>출처: <a href="http://itstory.tk/entry/JavaScript-4-%ED%95%A8%EC%88%98%EC%99%80-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85-%EC%B2%B4%EC%9D%B4%EB%8B%9D-2-this%EB%9E%80">덕’s IT Story</a>, <a href="https://helloworldjavascript.net/">Javascript 로 만나는 세상</a></p>',fields:{tagSlugs:["/tags/java-script/","/tags/자바스크립트/","/tags/this/"]},frontmatter:{title:"[JavaScript] this",tags:["JavaScript","자바스크립트","this"],date:"2018-12-12T18:15:03.284Z",description:"this는 생성자 혹은 메소드에서 객체를 가리킬 때 사용하는 키워드입니다. 자바스크립트의 경우 호출 패턴에 따라 어떤 객체를 this에 바인딩할 지가 결정됩니다."}}},pathContext:{slug:"/posts/javascript/this"}}}});
//# sourceMappingURL=path---posts-javascript-this-28cbca0566a082e58c4d.js.map