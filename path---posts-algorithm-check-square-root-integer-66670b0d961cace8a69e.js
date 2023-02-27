webpackJsonp([0xd36355ff9f3e],{493:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, former marketer, interested in Data Visualization and making project alive. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/beomyeonandreakim/Documents/dev/beomyeonandrewkim.github.io/src/pages/articles/2018-03-16_check-square-root-integer/index.md absPath of file >>> MarkdownRemark",html:'<p>[Algorithm JavaScript] Level1. 정수 제곱근 판별하기</p>\n<h3>Question</h3>\n<h4>Source <a href="https://programmers.co.kr/learn/challenge_codes/120">https://programmers.co.kr/learn/challenge_codes/120</a></h4>\n<blockquote>\n<p>nextSqaure 함수는 정수 n 을 매개변수로 입력받습니다.\nn 이 임의의 정수 x 의 제곱이라면 x+1 의 제곱을 리턴하고, n 이 임의의 정수 x 의 제곱이 아니라면 ‘no’을 리턴하는 함수를 완성하세요.\n예를들어 n 이 121 이라면 이는 정수 11 의 제곱이므로 (11+1)의 제곱인 144 를 리턴하고, 3 이라면 ‘no’을 리턴하면 됩니다.</p>\n</blockquote>\n<h3>My solution</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">nextSqaure</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> squareRoot <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span>squareRoot<span class="token punctuation">)</span> <span class="token operator">?</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>squareRoot <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token string">\'no\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'결과 : \'</span> <span class="token operator">+</span> <span class="token function">nextSqaure</span><span class="token punctuation">(</span><span class="token number">121</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>정수의 제곱근을 판별 후 그에 맞게 연산하는 문제다.</p>\n<p>Javascript 에서는 Number 을 활용할 수 있는 <code class="language-text">Math</code>객체가 있다. <code class="language-text">Math</code> 객체에는 여러 메소드가 있다. <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math">참고</a></p>\n<p>이 중 위 문제를 해결하기 위해 선택한 <code class="language-text">Math</code>객체의 메소드는 <code class="language-text">sqrt</code>와 <code class="language-text">pow</code>다. <code class="language-text">sqrt</code>는 말 그대로 squareroot 즉 제곱근을 반환하는 메소드다. 제곱근이 정수가 아닐 경우 소수까지 반환한다. 그리고 <code class="language-text">pow</code>는 두 매개변수를 받고 첫번째에 밑 두번째에 지수를 받는다. 거듭제곱을 할 수 있는 <code class="language-text">**</code>연산자를 활용하려 했으나 Programmers 에서는 안되었다.(chrome console 이랑 repl babel 에서는 처리가 됬다.) 왜 그러는지 아시는 분 댓글 부탁 드립니다.</p>\n<p>그리고 Number 값이 정수인지 확인할 수 있는 <code class="language-text">Number</code>객체의 <code class="language-text">isInteger</code> 메소드를 활용했다. javascript 가 가지고 있는 순수 기능들만 활용해서 짧은 코드로 해결 가능했던 문제였다.</p>\n<h4>Other Solutions</h4>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">//제곱근이 정수임을 확인할 수 있는 다양한 방법들</span>\n<span class="token keyword">var</span> msn <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">parseInt</span><span class="token punctuation">(</span>msn<span class="token punctuation">)</span> <span class="token operator">-</span> msn <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>\nmsn <span class="token operator">%</span> <span class="token number">1</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>다른 분들의 풀이 중 제곱근이 정수 임을 확인할 수 있는 몇가지 방법을 소개한다.</p>\n<p>먼저 <code class="language-text">Math</code> 객체의 제곱근을 구하는 <code class="language-text">sqrt</code>를 변수에 저장한 후</p>\n<p>첫번째는 문자열을 Number 타입으로 전환하는 함수인 <code class="language-text">parseInt</code>가 정수만을 반환한다는 점을 활용했다. 제곱근의 정수를 반환한 후 다시 제곱근을 뺐을 때 0 이 된다면 제곱근이 정수라는 식이다.</p>\n<p>두번째는 제곱근을 1 로 나눴을때 나머지가 0 이면 제곱근이 정수라는 식이다.</p>\n<p>Number 객체의 <code class="language-text">isInteger</code>메소드를 활용하지 않았을때도 다양한 방법으로 제곱근이 정수임을 확인할 수 있는 방법들이었다.</p>',fields:{tagSlugs:["/tags/algorithm/","/tags/알고리즘/","/tags/java-script/","/tags/자바스크립트/","/tags/정수-제곱근-판별하기/"]},frontmatter:{title:"[Algorithm JavaScript] Level1. 정수 제곱근 판별하기",tags:["Algorithm","알고리즘","JavaScript","자바스크립트","정수 제곱근 판별하기"],date:"2018-03-16T22:12:03.284Z",description:"nextSqaure함수는 정수 n을 매개변수로 입력받습니다. n이 임의의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 임의의 정수 x의 제곱이 아니라면 'no'을 리턴하는 함수를 완성하세요."}}},pathContext:{slug:"/posts/algorithm/check-square-root-integer"}}}});
//# sourceMappingURL=path---posts-algorithm-check-square-root-integer-66670b0d961cace8a69e.js.map