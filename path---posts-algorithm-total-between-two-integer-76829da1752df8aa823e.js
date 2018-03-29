webpackJsonp([0xbf6217998930],{446:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, fomer marketer, interested in Data Visualization and PWA. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/BeomyeonaAndrewKim.github.io/src/pages/articles/2018-03-17--Level2. 두 정수 사이의 합/index.md absPath of file >>> MarkdownRemark",html:'<p>[Algorithm JavaScript] Level2. 두 정수 사이의 합</p>\n<h3>Question</h3>\n<h4>Source <a href="https://programmers.co.kr/learn/challenge_codes/92">https://programmers.co.kr/learn/challenge_codes/92</a></h4>\n<blockquote>\n<p>adder함수는 정수 a, b를 매개변수로 입력받습니다.\n두 수와 두 수 사이에 있는 모든 정수를 더해서 리턴하도록 함수를 완성하세요. a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.\n예를들어 a가 3, b가 5이면 12를 리턴하면 됩니다.</p>\n<p>a, b는 음수나 0, 양수일 수 있으며 둘의 대소 관계도 정해져 있지 않습니다.</p>\n</blockquote>\n<h3>My solution</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">afunction <span class="token function">adder</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="token keyword">let</span> newArr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> smallNum<span class="token punctuation">;</span>\n<span class="token keyword">let</span> bigNum<span class="token punctuation">;</span>  \n a<span class="token operator">&lt;</span>b<span class="token operator">?</span> <span class="token punctuation">[</span>smallNum<span class="token punctuation">,</span>bigNum<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">]</span><span class="token punctuation">:</span><span class="token punctuation">[</span>smallNum<span class="token punctuation">,</span>bigNum<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span>b<span class="token punctuation">,</span>a<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span>smallNum<span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>bigNum<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> newArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">return</span> newArr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token operator">=></span>a<span class="token operator">+</span>b<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">adder</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>먼저 두 수 중 작은 수와 큰 수를 지정해야한다. 그래서 삼항연산자를 통해 변수 <code class="language-text">smallNum</code>과 <code class="language-text">bigNum</code>에 각각 작은 수와 큰 수를 대입했다. 그리고 반복문을 통해 <code class="language-text">smallNum</code>부터 <code class="language-text">bigNum</code>까지 새로운 배열에 대입한 후 배열의 <code class="language-text">reduce</code> 메소드를 통해 배열의 값을 모두 더한 최종 값을 return했다.</p>\n<p>밑에서도 언급했지만 굳이 배열에 넣고 <code class="language-text">reduce</code>메소드를 활용할 필요까지는 없었다. 반복문을 통해 작은 수 부터 큰 수 까지 그대로 <code class="language-text">+=</code>를 활용했으면 충분히 더 짧고 효율적으로 답을 구할 수 있었다. 그래도 <code class="language-text">reduce</code>는 ES6문법으로 React를 비롯해 여러 곳에서 활용가치가 높으니 <a href="http://devdocs.io/javascript/global_objects/array/reduce">공식문서</a>를 한 번 확인하자.</p>\n<h4>Other Solutions</h4>\n<h4>Best of Best</h4>\n<blockquote>\n<p>잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,‘80일간의 세계 일주’ 중에서</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">adder</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> s <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> s <span class="token operator">+=</span> i<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> s<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">adder</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">adder</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token number">0</span>\n    <span class="token comment">//함수를 완성하세요</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span><span class="token operator">*</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>b<span class="token operator">-</span>a<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">adder</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>두번째 풀이는 정말 모르겠다.. 잘 아시는 분 댓글 부탁 드리겠습니다.</p>\n<p>첫번째 풀이는 내가 풀었던 풀이를 제일 효율적으로 잘 푼 풀이다. 먼저 작은 수 큰 수를 변수를 선언해서 대입할 필요 없이 바로 반복문에서 초기값 정의하고 실행조건 정의할 때 <code class="language-text">Math.min</code> , <code class="language-text">Math.max</code>를 통해 큰 수 작은 수를 정의할 수 있었다. 조금 독특한 점이 매개변수에서 <code class="language-text">s</code>라는 새로운 변수를 만들어 초기값을 0을 설정해 반복문에서 <code class="language-text">i</code>값을 <code class="language-text">+=</code> 연산 처리했다. </p>\n<p>큰 수, 작은 수 정할 때 <code class="language-text">Math.min</code>, <code class="language-text">Math.max</code>를 활용한다는 점. 그리고 매개변수 초기값 설정 활용한 다는 점이 매우 효율적이 었다.</p>',fields:{tagSlugs:["/tags/algorithm/","/tags/알고리즘/","/tags/javascript/","/tags/자바스크립트/","/tags/두-정수-사이의-합/"]},frontmatter:{title:"[Algorithm JavaScript] Level2. 두 정수 사이의 합",tags:["Algorithm","알고리즘","Javascript","자바스크립트","두 정수 사이의 합"],date:"2018-03-16T22:12:03.284Z",description:"adder함수는 정수 a, b를 매개변수로 입력받습니다. 두 수와 두 수 사이에 있는 모든 정수를 더해서 리턴하도록 함수를 완성하세요. a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요."}}},pathContext:{slug:"/posts/algorithm/total-between-two-integer"}}}});
//# sourceMappingURL=path---posts-algorithm-total-between-two-integer-76829da1752df8aa823e.js.map