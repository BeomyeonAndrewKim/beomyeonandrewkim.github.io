webpackJsonp([0xcab91d433211],{433:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, fomer marketer, interested in Data Visualization and PWA. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/BeomyeonaAndrewKim.github.io/src/pages/articles/2018-03-16--Level1. 스트링을 숫자로 바꾸기/index.md absPath of file >>> MarkdownRemark",html:'<p>[Algorithm JavaScript] Level1. 스트링을 숫자로 바꾸기</p>\n<h3>Question</h3>\n<h4>Source <a href="https://programmers.co.kr/learn/challenge_codes/110">https://programmers.co.kr/learn/challenge_codes/110</a></h4>\n<blockquote>\n<p>strToInt 메소드는 String형 str을 매개변수로 받습니다.\nstr을 숫자로 변환한 결과를 반환하도록 strToInt를 완성하세요.\n예를들어 str이 1234이면 1234를 반환하고, -1234이면 -1234를 반환하면 됩니다.\nstr은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.</p>\n</blockquote>\n<h3>My solution</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">strToInt</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">strToInt</span><span class="token punctuation">(</span><span class="token string">"-1234"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Number 타입으로 변경해주는 방법 중 <code class="language-text">parseInt</code>, <code class="language-text">parseFloat</code>이 있다. 설명은 사실 복잡하지만 <code class="language-text">parseInt</code>는 자연수를 넣었을 때 정수로 바꿔주는 내장함수로 생각하면 되고, parseFloat는 소수까지 포함한 자연수로 변환해주는 내장함수 정도로 생각해도 된다. 두 함수의 MDN문서를 확인해보자(<a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt">parseInt</a>, <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseFloat">parseFloat</a>)</p>\n<h4>Other Solutions</h4>\n<h4>Best of Best</h4>\n<blockquote>\n<p>잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,‘80일간의 세계 일주’ 중에서</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">strToInt</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token operator">+</span>str<span class="token punctuation">;</span><span class="token comment">//연산을 활용해 단번에 Number값 변환</span>\n  <span class="token keyword">return</span> str<span class="token operator">/</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//연산을 활용해 단번에 Number값 변환</span>\n  <span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//Number 함수를 활용한 변환</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">strToInt</span><span class="token punctuation">(</span><span class="token string">"-1234"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>해당 문자열에 바로 <code class="language-text">+</code> 혹은 <code class="language-text">/</code> 등 연산자를 활용해서 리턴 값이 Number타입이 되도록 만들었다. 단순히 ‘타입’을 변환해주는 주목적을 가진 메소드 혹은 함수를 활용한다는 관점보다는 주 목적은 다르지만 리턴 값을 Number타입으로 바꿔준다는 관점으로 문제를 풀이한듯 하다.</p>\n<p>그리고 Javascript 내장함수인 <code class="language-text">Number()</code>를 활용해 인자에 해당 문자열을 넘겨줘서 처리하는 방법도 있다.</p>',fields:{tagSlugs:["/tags/algorithm/","/tags/알고리즘/","/tags/javascript/","/tags/자바스크립트/","/tags/스트링을-숫자로-바꾸기/"]},frontmatter:{title:"[Algorithm JavaScript] Level1. 스트링을 숫자로 바꾸기",tags:["Algorithm","알고리즘","Javascript","자바스크립트","스트링을 숫자로 바꾸기"],date:"2018-03-16T22:12:03.284Z",description:"strToInt 메소드는 String형 str을 매개변수로 받습니다. str을 숫자로 변환한 결과를 반환하도록 strToInt를 완성하세요."}}},pathContext:{slug:"/posts/algorithm/convert-string-to-number"}}}});
//# sourceMappingURL=path---posts-algorithm-convert-string-to-number-9f11da008d2d156e8479.js.map