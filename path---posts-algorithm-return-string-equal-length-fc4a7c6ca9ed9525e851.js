webpackJsonp([41249591011917],{464:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, former marketer, interested in Data Visualization and PWA. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/beomyeonkim/Documents/dev/beomyeonandrewkim.github.io/src/pages/articles/2018-03-16--Level1. 수박수박수/index.md absPath of file >>> MarkdownRemark",html:'<p>[Algorithm JavaScript] Level1.수박수박수?(길이만큼 문자열 반환하기)</p>\n<h3>Question</h3>\n<h4>Source <a href="https://programmers.co.kr/learn/challenge_codes/107">https://programmers.co.kr/learn/challenge_codes/107</a></h4>\n<blockquote>\n<p>water_melon 함수는 정수 n 을 매개변수로 입력받습니다.\n길이가 n 이고, 수박수박수…와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하세요.</p>\n<p>예를들어 n 이 4 이면 ‘수박수박’을 리턴하고 3 이라면 ‘수박수’를 리턴하면 됩니다.</p>\n</blockquote>\n<h3>My solution</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">waterMelon</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token punctuation">(</span>result <span class="token operator">+=</span> <span class="token string">\'수\'</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span>result <span class="token operator">+=</span> <span class="token string">\'박\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 실행을 위한 테스트코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'n이 3인 경우: \'</span> <span class="token operator">+</span> <span class="token function">waterMelon</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'n이 4인 경우: \'</span> <span class="token operator">+</span> <span class="token function">waterMelon</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>효율적인 코드 작성을 위해 if 문 대신 삼항연산자를 활용하려고 노력하고 있다. 위 문제도 삼항연산자를 활용했다. 짝수 홀수를 코드에서 가장 편하게 구분할 수 있는 연산자가 바로 <code class="language-text">%2</code> 다. <code class="language-text">Math.random()</code> 만큼이나 단순하지만 정말 유용한 연산자다. 어려운 문제는 아니었기에 리뷰는 여기까지!</p>\n<h4>Other Solutions</h4>\n<h4>Best of Best</h4>\n<blockquote>\n<p>잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,‘80 일간의 세계 일주’ 중에서</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">waterMelon</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token string">\'수박\'</span><span class="token punctuation">;</span>\n  result <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">//함수를 완성하세요</span>\n\n  <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>이런 문제에서 내 개인적인 생각으로 고수와 초보를 나누는 건 ”반복문을 쓰냐 안쓰냐?” 인 것 같다. 위 풀이는 반복문을 활용하지 않고 풀이한 알고리즘이다.</p>\n<p>매개변수 n 이 홀수인지 짝수인지 확인하는 문장조차 없다. repeat 와 substring 이라는 단순한 메소드를 활용했는데 정말 깔끔하게 알고리즘을 짜셨다. ”수박”을 n-1 만큼 repeat 해서 문장을 만든 후 substring 을 필요한 부분만 반환했다.</p>\n<p>만들고 빼는 작업이 있어 다소 비효율적으로 보일 수 있으나 코드 길이 만큼은 제일 효율적이었다.</p>',fields:{tagSlugs:["/tags/algorithm/","/tags/알고리즘/","/tags/java-script/","/tags/자바스크립트/","/tags/길이만큼-문자열-반환하기/","/tags/수박수박수/"]},frontmatter:{title:"[Algorithm JavaScript] Level1.수박수박수?(길이만큼 문자열 반환하기)",tags:["Algorithm","알고리즘","JavaScript","자바스크립트","길이만큼 문자열 반환하기","수박수박수"],date:"2018-03-16T22:12:03.284Z",description:"water_melon함수는 정수 n을 매개변수로 입력받습니다. 길이가 n이고, 수박수박수...와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하세요."}}},pathContext:{slug:"/posts/algorithm/return-string-equal-length"}}}});
//# sourceMappingURL=path---posts-algorithm-return-string-equal-length-fc4a7c6ca9ed9525e851.js.map