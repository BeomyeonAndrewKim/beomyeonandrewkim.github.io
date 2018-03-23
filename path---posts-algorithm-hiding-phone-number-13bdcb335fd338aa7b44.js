webpackJsonp([54786825235805],{434:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, fomer marketer, interested in Data Visualization and PWA",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/BeomyeonaAndrewKim.github.io/src/pages/articles/2018-03-16--Level1. 핸드폰번호 가리기/index.md absPath of file >>> MarkdownRemark",html:'<p>[Daily Algorithm_JavaScript] Level1. 핸드폰번호 가리기</p>\n<h3>Question</h3>\n<h4>Source <a href="https://programmers.co.kr/learn/challenge_codes/132">https://programmers.co.kr/learn/challenge_codes/132</a></h4>\n<blockquote>\n<p>별이는 헬로월드텔레콤에서 고지서를 보내는 일을 하고 있습니다. 개인정보 보호를 위해 고객들의 전화번호는 맨 뒷자리 4자리를 제외한 나머지를 <code class="language-text">&quot;*&quot;</code>으로 바꿔야 합니다.\n전화번호를 문자열 s로 입력받는 hide_numbers함수를 완성해 별이를 도와주세요\n예를들어 s가 <code class="language-text">&quot;01033334444&quot;</code>면 <code class="language-text">&quot;*******4444&quot;</code>를 리턴하고, <code class="language-text">&quot;027778888&quot;</code>인 경우는 <code class="language-text">&quot;*****8888&quot;</code>을 리턴하면 됩니다.</p>\n</blockquote>\n<h3>My solution</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">hide_numbers</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token string">""</span>\n  result<span class="token operator">=</span><span class="token string">\'*\'</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token operator">+</span>s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">,</span>s<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"결과 : "</span> <span class="token operator">+</span> <span class="token function">hide_numbers</span><span class="token punctuation">(</span><span class="token string">\'01033334444\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>간단한 문제지만 앞으로 프론트엔드 개발을 할 때 여러 방면으로 활용할 수 있는 문제라고 생각한다. 보안과 관련이 있으니 잘 기억해두자.</p>\n<p>문자열의 다양한 메소드를 활용해 풀 수 있는 문제다. 기존의 배열의 수정하는 방법이 있고 새로운 배열을 만들어 대입하는 두가지 방법이 있다. 가장 먼저 떠올랐던건 기존에 배열에서 <code class="language-text">replace</code>메소드를 활용하는 방법이었다. 하지만 <code class="language-text">*</code>를 <code class="language-text">repeat</code>혹은 반복문으로 다시 만들어야하는 과정이 있기 때문에 식이 다소 길어질 수 있다.</p>\n<p>그래서 새로운 배열에 <code class="language-text">*</code>과 뒤 4자리를 넣는 방법을 택했다. 문자열은 <code class="language-text">repeat</code>이라는 메소드가 있다. 이 방법을 통해 <code class="language-text">*</code>를 배열의 길이에서 4를 뺀 수만큼 반복해서 새로운 배열에 대입했다. 그 후 뒤에 4자리를 <code class="language-text">slice</code>메소드를 활용하여 자른 후 새로운 배열에 더해줬다. 반복문이나 조건문 등 길어지는 요소를 배제해서 그래도 짧은 식을 완성할 수 있었다.</p>\n<h4>Other Solutions</h4>\n<h4>Best Solution</h4>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">hide_numbers</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/\\d(?=\\d{4})/g</span><span class="token punctuation">,</span> <span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"결과 : "</span> <span class="token operator">+</span> <span class="token function">hide_numbers</span><span class="token punctuation">(</span><span class="token string">\'01033334444\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>어떤 문제든 정규표현식을 활용하면 베스트 답이다. 아직 나에겐 미지의 세계다.</p>\n<p>일단 <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D">링크</a>를 참고하여 정규식을 익히도록 하자.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">hide_numbers</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token string">"*"</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">+</span> s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">//함수를 완성해주세요</span>\n\n  <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"결과 : "</span> <span class="token operator">+</span> <span class="token function">hide_numbers</span><span class="token punctuation">(</span><span class="token string">\'01033334444\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>내가 작성한 식이랑 거의 유사하다. 하지만 주목되는 부분은 <code class="language-text">slice</code>메소드에서 인자를 하나만 주고 음수를 주면 뒤에서 음수의 절대값 만큼을 자를 수 있다는 사실! 사소한 부분이지만 식의 길이를 줄여줄 수 있는 소소한 팁이다.</p>',fields:{tagSlugs:["/tags/algorithm/","/tags/알고리즘/","/tags/javascript/","/tags/자바스크립트/","/tags/핸드폰번호-가리기/"]},frontmatter:{title:"[Daily Algorithm_JavaScript] Level1. 핸드폰번호 가리기",tags:["Algorithm","알고리즘","Javascript","자바스크립트","핸드폰번호 가리기"],date:"2018-03-16T22:12:03.284Z",description:"별이는 헬로월드텔레콤에서 고지서를 보내는 일을 하고 있습니다. 개인정보 보호를 위해 고객들의 전화번호는 맨 뒷자리 4자리를 제외한 나머지를 `*`으로 바꿔야 합니다. 전화번호를 문자열 s로 입력받는 hide_numbers함수를 완성해 별이를 도와주세요"}}},pathContext:{slug:"/posts/algorithm/hiding-phone-number"}}}});
//# sourceMappingURL=path---posts-algorithm-hiding-phone-number-13bdcb335fd338aa7b44.js.map