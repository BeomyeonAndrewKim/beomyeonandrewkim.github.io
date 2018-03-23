webpackJsonp([32016006490658],{431:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, fomer marketer, interested in Data Visualization and PWA",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/BeomyeonaAndrewKim.github.io/src/pages/articles/2018-03-17--Level2. 소수 찾기/index.md absPath of file >>> MarkdownRemark",html:'<p>[Daily Algorithm_JavaScript] Level2. 소수 찾기</p>\n<h3>Question</h3>\n<h4>Source <a href="https://programmers.co.kr/learn/challenge_codes/21">https://programmers.co.kr/learn/challenge_codes/21</a></h4>\n<blockquote>\n<p>numberOfPrime 메소드는 정수 n을 매개변수로 입력받습니다.</p>\n<p>1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하도록 numberOfPrime 메소드를 만들어 보세요.</p>\n<p>소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.\n(1은 소수가 아닙니다.)</p>\n<p>10을 입력받았다면, 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환\n5를 입력받았다면, 1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환</p>\n</blockquote>\n<h3>My solution</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">numberOfPrime</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">let</span> notPrime<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\t<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>i<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">%</span>j <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>notPrime<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> notPrime<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t      <span class="token punctuation">}</span>\n\t    <span class="token punctuation">}</span>\n<span class="token keyword">return</span> <span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">-</span>notPrime<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">numberOfPrime</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>위 문제를 풀기위해서는 먼저 소수를 뽑아낼 수 있는 식을 알아야한다. 소수를 직접 알아내는 식은 잘 생각이 안났지만 소수가 아닌 수를 알아내는 식은 생각해낼 수 있었다. 이중으로 루프를 돌렸다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">//먼저 1을 제외하고 2부터 인자로 받은 숫자 n까지 루프를 돌린다.</span>\n<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token comment">//그리고 루프가 돌아가고 있는 숫자 i보다 작은 수까지 새로운 루프를 돌린다.</span>\n  <span class="token comment">//1과 위 루프가 돌고 있는 수 i를 제외한 이유는 1과 본인 이외에 나눠서 떨어지는 수가 있는지 판별하기 위함</span>\n\t  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>i<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">//if조건문을 통해 1과 자신 이외에 나누어 떨어지는 수가 있는 지 확인한다.</span>\n\t    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">%</span>j <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>notPrime<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> notPrime<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// 위 조건에 해당하는 i는 prime이라 정의한 빈 배열에 추가해준다.</span>\n        <span class="token comment">// i가 여러 수로 떨어질 수도 있기 때문에 중복으로 notPrime 배열에 push한다.</span>\n        <span class="token comment">// 이것을 방지하기 위해 다시 조건문을 걸어 notPrime배열에 해당 i가 있는지 확인 한 후 push해준다.</span>\n\t      <span class="token punctuation">}</span>\n\t    <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>위 방법을 통해 2부터 n까지의 수 중 소수가 아닌 수를 알아낸다. 그리고 이 문제는 소수를 반환하는게 아니고 소수의 갯수를 확인하는 문제이다. 때문에 1을 제외한 2부터 n까지의 숫자의 개수 즉 n-1에서 위에서 만들어낸 소수가 아닌 수를 모은 배열 <code class="language-text">notPrime</code>의 <code class="language-text">length</code>를 빼면 소수의 개수가 나온다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">return</span> <span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">-</span>notPrime<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n<span class="token comment">//1을 제외한 2부터 n의 개수 n-1</span>\n<span class="token comment">//소수가 아닌 수를 모은 배열 notPrime의 length</span>\n<span class="token comment">//위 두 수를 빼면 소수의 갯수</span>\n</code></pre>\n      </div>\n<h4>Other Solutions</h4>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">numberOfPrime</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">var</span> primeNumber <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token comment">// 함수를 완성하세요.</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> devided <span class="token operator">=</span> <span class="token number">0</span>\n\n     <span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> a<span class="token operator">++</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n       <span class="token keyword">if</span> <span class="token punctuation">(</span> i<span class="token operator">%</span>a <span class="token operator">===</span> <span class="token number">0</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        devided <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n       <span class="token punctuation">}</span>\n     <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span> devided <span class="token operator">===</span> <span class="token number">0</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n     primeNumber<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  result <span class="token operator">=</span> primeNumber<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>윗 분은 소수를 반환하는 식을 만드셨다. 이중으로 루프를 돌리는 건 내 식과 비슷하다. 하지만 <code class="language-text">divided</code>라는 변수를 추가해줘서 초기값을 0으로 정하고 나눠지는 수가 있으면 +1을 해줬다. 결과적으로 어떤 수로도 나누어지지 않으면 즉 소수면 <code class="language-text">divided</code>는 계속 0이다. 보통 웹에서도 <code class="language-text">state</code>라는 변수를 활용해 페이지 이동이나 상태 변경등에 활용하는데 이를 활용했다고 할 수 있다.</p>\n<p>첫번째 풀이는 내가 풀었던 풀이를 제일 효율적으로 잘 푼 풀이다. 먼저 작은 수 큰 수를 변수를 선언해서 대입할 필요 없이 바로 반복문에서 초기값 정의하고 실행조건 정의할 때 <code class="language-text">Math.min</code> , <code class="language-text">Math.max</code>를 통해 큰 수 작은 수를 정의할 수 있었다. 조금 독특한 점이 매개변수에서 <code class="language-text">s</code>라는 새로운 변수를 만들어 초기값을 0을 설정해 반복문에서 <code class="language-text">i</code>값을 <code class="language-text">+=</code> 연산 처리했다. </p>\n<p>큰 수, 작은 수 정할 때 <code class="language-text">Math.min</code>, <code class="language-text">Math.max</code>를 활용한다는 점. 그리고 매개변수 초기값 설정 활용한 다는 점이 매우 효율적이 었다.</p>',fields:{tagSlugs:["/tags/algorithm/","/tags/알고리즘/","/tags/javascript/","/tags/자바스크립트/","/tags/소수-찾기/"]},frontmatter:{title:"[Daily Algorithm_JavaScript] Level1. 소수 찾기",tags:["Algorithm","알고리즘","Javascript","자바스크립트","소수 찾기"],date:"2018-03-16T22:12:03.284Z",description:"numberOfPrime 메소드는 정수 n을 매개변수로 입력받습니다. 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하도록 numberOfPrime 메소드를 만들어 보세요. 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다."}}},pathContext:{slug:"/posts/algorithm/finding-prime-number"}}}});
//# sourceMappingURL=path---posts-algorithm-finding-prime-number-012445fb30982a2afbfd.js.map