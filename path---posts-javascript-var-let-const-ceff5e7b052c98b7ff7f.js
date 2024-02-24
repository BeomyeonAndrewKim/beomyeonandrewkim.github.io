webpackJsonp([0x66caba84a492],{550:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, former marketer, interested in business-oriented and scalable development. Also, passionate marathoner.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/beomyeonandreakim/Documents/dev/beomyeonandrewkim.github.io/src/pages/articles/2018-03-23_var-let-const/index.md absPath of file >>> MarkdownRemark",html:'<h1>var, let, const</h1>\n<h3>let, const 변수</h3>\n<p>ES2015 에서 도입된 <code class="language-text">let</code>, <code class="language-text">const</code>에는 이전의 변수와는 다른 몇 가지 특징이 있습니다. 먼저 <strong>같은 이름을 갖는 변수의 재선언을 허용하지 않습니다.</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// Duplicate declaration "foo"</span>\n<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// Duplicate declaration "foo"</span>\n\n<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> param <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// Duplicate declaration "param"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><code class="language-text">const</code>는 재대입이 불가능하지만, <code class="language-text">let</code>은 재대입이 가능합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\nfoo <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// unknown: "foo" is read-only</span>\n\n<span class="token keyword">let</span> bar <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\nbar <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 1</span></code></pre>\n      </div>\n<p><code class="language-text">let</code> 대입없이 선언이 가능하지만 <code class="language-text">const</code>는 선언과 동시에 값을 대입해야만 에러를 내뱉지 않습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">let</span> foo <span class="token comment">// undefiend</span>\n<span class="token keyword">const</span> bar<span class="token punctuation">;</span> <span class="token comment">//unknown: Unexpected token (1:9)</span></code></pre>\n      </div>\n<p>그리고 둘 다 변수가 선언되기 전에 참조하려고 하면 에러가 납니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">console.log(foo); // ReferenceError: foo is not defined\nlet foo = 1;</code></pre>\n      </div>\n<p>또 한가지 주목해야할 특징은 <strong>블록 스코프(block scope)</strong>를 갖는다는 점입니다.</p>\n<p><code class="language-text">if</code>, <code class="language-text">for</code>, <code class="language-text">while</code>, <code class="language-text">function</code> 등의 구문을 사용하면 블록이 형성되어, 그 안에서 <code class="language-text">let</code>또는 <code class="language-text">const</code>를 통해 선언된 변수는 외부에서 접근할 수 없습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError: i is not defined</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">{</span>\n  <span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nfoo<span class="token punctuation">;</span> <span class="token comment">// foo is not defined</span>\nbar<span class="token punctuation">;</span> <span class="token comment">// bar is not defined</span></code></pre>\n      </div>\n<h3>var 변수</h3>\n<p><code class="language-text">var</code>는 값을 다시 대입할 수 있는 변수입니다. 심지어 재선언도 가능합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// undefiend</span></code></pre>\n      </div>\n<p>추가적으로 함수의 매개변수와 유사하게, <strong>함수 스코프</strong>를 갖습니다. <strong>함수가 아닌 블록에서 정의된 var 변수는 해당 블록 바깥에서도 유효할 수 있다</strong>는 말입니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError: foo is not defined</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><code class="language-text">var</code>변수에서는 <strong>호이스팅</strong>이라는 것이 일어나기 때문에 변수가 선언되기 전에 참조하려고 해도 에러를 내뱉지 않고 <code class="language-text">undefined</code>를 내뱉습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>\n<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<table>\n<thead>\n<tr>\n<th></th>\n<th><code class="language-text">const</code></th>\n<th><code class="language-text">let</code></th>\n<th><code class="language-text">var</code></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>스코프</td>\n<td>블록 스코프</td>\n<td>블록 스코프</td>\n<td>함수 스코프</td>\n</tr>\n<tr>\n<td>재대입</td>\n<td>X</td>\n<td>O</td>\n<td>O</td>\n</tr>\n<tr>\n<td>재선언</td>\n<td>X</td>\n<td>X</td>\n<td>O</td>\n</tr>\n<tr>\n<td>호이스팅</td>\n<td>X</td>\n<td>X</td>\n<td>O</td>\n</tr>\n<tr>\n<td>사용 권장</td>\n<td>1 순위</td>\n<td>2 순위</td>\n<td>3 순위</td>\n</tr>\n</tbody>\n</table>\n<p>출처: <a href="https://helloworldjavascript.net/pages/220-value-in-depth.html">자바스크립트로 만나는 세상</a></p>',fields:{tagSlugs:["/tags/java-script/","/tags/자바스크립트/","/tags/es-2015/","/tags/var/","/tags/let/","/tags/const/"]},frontmatter:{title:"[JavaScript] var, let, const",tags:["JavaScript","자바스크립트","ES2015","var","let","const"],date:"2018-03-23T22:12:03.284Z",description:"var, let, const / let, const 변수 / ES2015에서 도입된 let, const에는 이전의 변수와는 다른 몇 가지 특징이 있습니다. 먼저 같은 이름을 갖는 변수의 재선언을 허용하지 않습니다."}}},pathContext:{slug:"/posts/javascript/var-let-const"}}}});
//# sourceMappingURL=path---posts-javascript-var-let-const-ceff5e7b052c98b7ff7f.js.map