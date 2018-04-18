webpackJsonp([0x6231b0bca250],{456:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, fomer marketer, interested in Data Visualization and PWA. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/BeomyeonaAndrewKim.github.io/src/pages/articles/2018-03-16--Level1. 약수의 합/index.md absPath of file >>> MarkdownRemark",html:'<p>[Algorithm JavaScript] Level1. 약수의 합</p>\n<h3>Question</h3>\n<h4>Source <a href="https://programmers.co.kr/learn/challenge_codes/3">https://programmers.co.kr/learn/challenge_codes/3</a></h4>\n<blockquote>\n<p>어떤 수를 입력받아 그 수의 약수를 모두 더한 수 sumDivisor 함수를 완성해 보세요. 예를 들어 12가 입력된다면 12의 약수는 [1, 2, 3, 4, 6, 12]가 되고, 총 합은 28이 되므로 28을 반환해 주면 됩니다.</p>\n</blockquote>\n<h3>My solution</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">sumDivisor</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>num<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>num<span class="token operator">%</span>i<span class="token operator">===</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>acc<span class="token punctuation">,</span>item<span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>\n     <span class="token keyword">return</span> acc<span class="token operator">+</span>item<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sumDivisor</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>약수의 합을 구하는 식이다. 참고로 약수는 어떠한 수를 나누어 떨어지게 하는 수를 뜻한다. </p>\n<p>먼저 약수를 구해서 배열에 요소로 추가를 해준 후 배열의 요소를 모두 더해 답을 구하는 로직으로 풀었다.</p>\n<p>첫번째 약수를 배열에 요소로 추가하는 식은 for반복문과 if 조건문을 활용했다. 인자로 받은 수를 나누었을때 나머지가 0인 수를 배열에 더했다. 이 때 나머지를 출력하는 % 연산자를 활용했다. 1부터 인자로 받은 수까지 루프를 돌려 push를 활용해 새로운 배열에 약수를 요소로 더했다.</p>\n<p>둘째로 배열의 합을 구하는 것은 reduce를 활용했다. ECMA2015에서 추가된 reduce는 배열의 요소를 활용해서 여러가지 값을 산출할 수 있다. reduce에 대한 자세한 내용은 <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce">링크</a> 참조. 특히 첫번째 매개변수에 누적값을 넣기 때문에 특히 배열의 합을 구할때는 더욱 유용하게 활용할 수 있다. </p>\n<h4>Other Solutions</h4>\n<h4>Best of Best</h4>\n<blockquote>\n<p>잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,‘80일간의 세계 일주’ 중에서</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">let</span> <span class="token function-variable function">sumDivisor</span> <span class="token operator">=</span> num <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> answer <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      j <span class="token operator">=</span> num<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token punctuation">:</span> <span class="token number">2</span>\n  <span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token punctuation">;</span> i<span class="token operator">&lt;</span>num<span class="token punctuation">;</span> i<span class="token operator">=</span>i<span class="token operator">+</span>j<span class="token punctuation">)</span> <span class="token keyword">if</span><span class="token punctuation">(</span>num<span class="token operator">%</span>i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> answer <span class="token operator">+=</span> i\n  <span class="token keyword">return</span> answer<span class="token operator">+</span>num\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sumDivisor</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>내가 작성한 식과 비슷한 식이다. 여기서 주목할 내용은 for 반복문과 if 조건문 안에 내용이 한 줄로 쓰일 경우 {} 중괄호가 생략 가능하다는 점! 코드를 줄이는데 굉장히 도움이 될 수 있는 요소다.</p>',fields:{tagSlugs:["/tags/algorithm/","/tags/알고리즘/","/tags/javascript/","/tags/자바스크립트/","/tags/약수의-합/"]},frontmatter:{title:"[Algorithm JavaScript] Level1. 약수의 합",tags:["Algorithm","알고리즘","Javascript","자바스크립트","약수의 합"],date:"2018-03-16T22:12:03.284Z",description:"어떤 수를 입력받아 그 수의 약수를 모두 더한 수 sumDivisor 함수를 완성해 보세요. 예를 들어 12가 입력된다면 12의 약수는 [1, 2, 3, 4, 6, 12]가 되고, 총 합은 28이 되므로 28을 반환해 주면 됩니다."}}},pathContext:{slug:"/posts/algorithm/total-of-aliquot"}}}});
//# sourceMappingURL=path---posts-algorithm-total-of-aliquot-3591f972996429052acc.js.map