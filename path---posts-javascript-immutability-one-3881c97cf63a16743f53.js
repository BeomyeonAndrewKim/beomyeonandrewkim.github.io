webpackJsonp([0xfc94be41c15d],{510:function(a,n){a.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, former marketer, interested in Data Visualization and PWA. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/beomyeonandrewkim.github.io/src/pages/articles/2019-05-13_javascript-immutability_one/index.md absPath of file >>> MarkdownRemark",html:'<h1>[JavaSciprt] Immutabillity (1)</h1>\n<p><em>해당 포스팅은 생활코딩의 <a href="https://opentutorials.org/module/4075">JavaScript Immutability</a>의 내용을 정리한 내용입니다.</em></p>\n<p>프로그래밍에서 <code class="language-text">immutability</code>는 데이터의 원본이 훼손되는 것을 막는것을 의미합니다.</p>\n<p>컴퓨터는 수정과 삭제가 되지 않는 불편함을 개선하기 위해서 출발했다고도 할 수 있을 정도로\n프로그래밍간에 자주 일어나는 이벤트고 이러한 특징때문에 발생하는 사고가 끊이질 않습니다.</p>\n<p>이것이 프로그래밍 언어에서 데이터에 대한 불변함을 강조하는 이유입니다.</p>\n<p>JavaScript에서는 이러한 데이터의 불변함에 대해 주의해야할 부분들이 많습니다.\n어떠한 점들을 주의해야하는지 아래에서 살펴보겠습니다.</p>\n<h3>이름에 대한 불변함</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> v <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\nv <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span></code></pre>\n      </div>\n<p>여기서 이름은 변수를 뜻합니다.\n태초에 JavaScript에서 변수를 선언하고 대입하는 방법은 <code class="language-text">var</code>키워드를 활용하는 것이었습니다.\n<code class="language-text">var</code> 키워드로 변수를 선언하면 위 예시와 같이 재대입이 가능합니다.\n변수의 데이터가 <strong>변경</strong>이 된거죠. 불변성에 위배된 상황입니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\nc <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// TypeError:  Assignment to constant variable</span></code></pre>\n      </div>\n<p>그리고 ES6에 <code class="language-text">const</code>라는 키워드가 탄생했습니다. <code class="language-text">const</code>를 사용해 변수를 선언하면 <code class="language-text">var</code>키워드를 사용해 선언했던 변수와 달리 <strong>재대입</strong>이 불가능합니다. 불변성이 잘 지켜졌네요.\nJavaScript에서 변수를 선언하는 방법은 <code class="language-text">var</code>, <code class="language-text">const</code>외에 <code class="language-text">let</code>이라는 키워드도 ES6에서 새로 추가되었습니다. 변수를 선언하는 세 키워드에 대한 내용은 제 블로그 이전에 <a href="https://beomyeonandrewkim.github.io/posts/javasciript/var-let-const">[JavaScript] var, let, const</a>포스팅을 참고 부탁드립니다.</p>\n<h3>내용에 대한 불변함(1)</h3>\n<p>내용은 데이터를 뜻합니다.\nJavaScript의 데이터는 두 가지로 나뉩니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">Primitive(원시형) - Number, String, Boolean, Null, Undefined, Symbol\nObject(객체형) - Object, Array, Function</code></pre>\n      </div>\n<p>원시형 데이터는 불변합니다. 그리고 그 값이 같다면 메모리에 해당하는 원시형 데이터 하나가 저장되고 그것만을 바라보게 하도록 설계되어있습니다. 객체는 객체안에 여러 프로퍼티가 있기 때문에 바뀔 수 있고 실제로 메모리에 별도로 저장을 합니다. 아래 예시를 확인해주세요.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> p1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> p2 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1 <span class="token operator">===</span> p2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'kim\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> o2 <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'kim\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o1 <span class="token operator">===</span> o2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></code></pre>\n      </div>\n<p><strong>객체의 불변성에 대한 추가적인 내용</strong>과 <strong>불변성을 유지하는 방법</strong>에 대한 내용에 대해서는 다음 포스팅에서 다루겠습니다.</p>',fields:{tagSlugs:["/tags/java-script/","/tags/immutability/","/tags/immutable/"]},frontmatter:{title:"[JavaScript] Immutability (1)",tags:["JavaScript","Immutability","Immutable"],date:"2019-05-13T18:15:03.284Z",description:"해당 포스팅은 생활코딩의 JavaScript Immutability의 내용을 정리한 내용입니다."}}},pathContext:{slug:"/posts/javascript/immutability_one"}}}});
//# sourceMappingURL=path---posts-javascript-immutability-one-3881c97cf63a16743f53.js.map