webpackJsonp([42580884285891],{457:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, former marketer, interested in Data Visualization and PWA. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/beomyeonkim/Documents/dev/beomyeonandrewkim.github.io/src/pages/articles/2018-03-17--Level2. 하샤드수/index.md absPath of file >>> MarkdownRemark",html:'<p>[Algorithm JavaScript] Level2. 하샤드수</p>\n<h3>Question</h3>\n<h4>Source <a href="https://programmers.co.kr/learn/challenge_codes/129">https://programmers.co.kr/learn/challenge_codes/129</a></h4>\n<blockquote>\n<p>양의 정수 x 가 하샤드 수이려면 x 의 자릿수의 합으로 x 가 나누어져야 합니다. 예를들어 18 의 자릿수 합은 1+8=9 이고, 18 은 9 로 나누어 떨어지므로 18 은 하샤드 수입니다.</p>\n<p>Harshad 함수는 양의 정수 n 을 매개변수로 입력받습니다. 이 n 이 하샤드수인지 아닌지 판단하는 함수를 완성하세요.\n예를들어 n 이 10, 12, 18 이면 True 를 리턴 11, 13 이면 False 를 리턴하면 됩니다.</p>\n</blockquote>\n<h3>My solution</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">Harshad</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> str <span class="token operator">=</span> n<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> el <span class="token keyword">of</span> str<span class="token punctuation">)</span> total <span class="token operator">+=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> n <span class="token operator">%</span> total <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Harshad</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>이 문제에서 가장 고민했던 것은 매개변수로 받는 숫자 <code class="language-text">n</code>의 자릿수의 합을 만들어내는 부분이었습니다.</p>\n<p>배열로 만들어서 <code class="language-text">reduce</code>를 활용해 자리수의 합을 구할지, 문자열로 만들어서 순환을 통해 자리수의 합을 구할지 둘 중에 선택을 했습니다.</p>\n<p>일단 후자로 정했다. 오늘 공부한 내용이 iterable 에 대한 내용이었다. 문자열도 <code class="language-text">for...of</code>를 활용할 수 있는 <code class="language-text">iterable</code>이기 때문에 루프를 돌 수 있다는 사실을 활용했습니다.</p>\n<p>삼항연산자를 통해 <code class="language-text">true</code>와 <code class="language-text">false</code>를 <code class="language-text">return</code> 하는 것으로 마무리 했습니다.</p>\n<h4>Other Solutions</h4>\n<h4>Best of Best</h4>\n<blockquote>\n<p>잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,‘80 일간의 세계 일주’ 중에서</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">Harshad</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token operator">!</span><span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">+</span>b <span class="token operator">+</span> <span class="token operator">+</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Harshad</span><span class="token punctuation">(</span><span class="token number">148</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>한 줄로 끝나는 깔끔한 풀이 입니다.</p>\n<p>이번 문제에서는 Number 값을 String 으로 바꾸고 다시 String 을 Number 값으로 바꾸는 과정들이 있습니다.</p>\n<p>풀이를 보면 <code class="language-text">n+&quot;&quot;</code>를 통해 Number 값인 n 을 간단하게 String 으로 바꾸었고, <code class="language-text">+b</code>, <code class="language-text">+a</code>를 통해 String 을 간단하게 Number 값으로 바꿨습니다.</p>\n<p>그리고 <code class="language-text">%</code> 연산자를 쓸 때 나누어 떨어지면 0 이기 때문에 <code class="language-text">false</code>가 나오고 나누어 떨어지지 않으면 0 이 아닌 실수가 나오기 때문에 <code class="language-text">true</code>가 나옵니다. 이 점 활용해서 모든 식을 괄호로 감싸고 <code class="language-text">!</code> 연산자를 통해 부정해서 올바른 값이 나오도록 했습니다.</p>',fields:{tagSlugs:["/tags/algorithm/","/tags/알고리즘/","/tags/java-script/","/tags/자바스크립트/","/tags/하샤드수/"]},frontmatter:{title:"[Algorithm JavaScript] Level2. 하샤드수",tags:["Algorithm","알고리즘","JavaScript","자바스크립트","하샤드수"],date:"2018-03-16T22:12:03.284Z",description:"양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. Harshad함수는 양의 정수 n을 매개변수로 입력받습니다. 이 n이 하샤드수인지 아닌지 판단하는 함수를 완성하세요."}}},pathContext:{slug:"/posts/algorithm/harshad"}}}});
//# sourceMappingURL=path---posts-algorithm-harshad-83c6c72a93dfcba9e82a.js.map