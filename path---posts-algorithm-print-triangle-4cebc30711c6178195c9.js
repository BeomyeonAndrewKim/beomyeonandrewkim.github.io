webpackJsonp([0xd1e9dd535c97],{494:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, former marketer, interested in Data Visualization and PWA. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/beomyeonandrewkim.github.io/src/pages/articles/2018-03-16_print-triangle/index.md absPath of file >>> MarkdownRemark",html:'<p>[Algorithm JavaScript] Level1. 삼각형 출력하기</p>\n<h3>Question</h3>\n<h4>Source <a href="https://programmers.co.kr/learn/challenge_codes/101">https://programmers.co.kr/learn/challenge_codes/101</a></h4>\n<blockquote>\n<p>printTriangle 메소드는 양의 정수 num을 매개변수로 입력받습니다.\n다음을 참고해 <code class="language-text">*</code>(별)로 높이가 num인 삼각형을 문자열로 리턴하는 printTriangle 메소드를 완성하세요\nprintTriangle이 return하는 String은 개행문자(‘\\n’)로 끝나야 합니다.</p>\n<p>높이가 3일때</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">*\n**\n***</code></pre>\n      </div>\n<p>높이가 5일때</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">*\n**\n***\n****\n*****</code></pre>\n      </div>\n</blockquote>\n<h3>My solution</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">printTriangle</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> answer <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> answer <span class="token operator">+=</span> <span class="token string">\'*\'</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">\'\\n\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> answer<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">printTriangle</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>보통 코딩학원에서 자바스크립트를 배울때 풀어보는 대표 예제 중 하나이다. <code class="language-text">for</code> 루프를 배운 후 1번 예제로 많이 나오는데 간단하다. <code class="language-text">i=1</code>부터 넣고 인자로 받은 숫자까지 반복을 하는데 String의 <code class="language-text">repeat</code> 메소드를 활용해서 i번 만큼 *를 반복하면 된다. 여기서는 String의 개행문자 <code class="language-text">(&#39;\\n&#39;)</code>을 꼭 활용하라 했기 때문에 마지막에 더했다.</p>\n<p>여기서 해맸던게 <code class="language-text">(&#39;\\n&#39;)</code>에서 <code class="language-text">&#39;\\&#39;</code>는 우리가 일반적으로 부르는 슬래시 <code class="language-text">/</code>가 아니다! 보통 엔터키 위에 존재하는 키를 누르면 나오는 백슬래시<code class="language-text">\\</code>이다. 주의해야 한다.</p>\n<h4>Other Solutions</h4>\n<h4>Best of Best</h4>\n<blockquote>\n<p>잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,‘80일간의 세계 일주’ 중에서</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">printTriangle</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> num <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token string">\'\'</span> <span class="token punctuation">:</span> <span class="token function">printTriangle</span><span class="token punctuation">(</span>num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">\'*\'</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">\'\\n\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">printTriangle</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>아름다운 함수에서 절대 빠지지 않는 재귀함수를 활용했다. if조건문의 길이를 줄여주는 삼항연산자까지 더했으니 이보다 더 아름다운 함수가!</p>\n<p>javascript에서 재귀함수에 대한 설명과 예제가 잘 나와있는 <a href="http://webclub.tistory.com/72">링크</a>(출처: 웹클럽)</p>\n<p>먼저 인자로 받은 Number값이 1보다 작을 경우에는 ""로 빈컨텐츠를 리턴한다. 그리고 1보다 클 경우에는 앞에 인자로 받은 Number값에 -1이 들어간 함수 자신이 들어간다. 이 부분이 재귀함수를 만들어 주는 포인트다. 이 부분이 앞에 있어야 삼각형 모양이 나온다. 만약에 역삼각형을 만들고 싶다면 재귀함수 부분을 뒤로 보내면 된다.</p>\n<p>보통 뛰어난 개발자는 Javascript에서 재귀함수를 자유자재로 잘 쓰는 것 같다. 정규표현식과 같이 틈틈히 공부해나간다면 뛰어난 개발자가 되는 지름길이 되겠다.</p>',fields:{tagSlugs:["/tags/algorithm/","/tags/알고리즘/","/tags/java-script/","/tags/자바스크립트/","/tags/삼각형/"]},frontmatter:{title:"[Algorithm JavaScript] Level1.삼각형 출력하기",tags:["Algorithm","알고리즘","JavaScript","자바스크립트","삼각형"],date:"2018-03-16T22:12:03.284Z",description:"printTriangle 메소드는 양의 정수 num을 매개변수로 입력받습니다. 다음을 참고해 *(별)로 높이가 num인 삼각형을 문자열로 리턴하는 printTriangle 메소드를 완성하세요. printTriangle이 return하는 String은 개행문자('\n')로 끝나야 합니다."}}},pathContext:{slug:"/posts/algorithm/print-triangle"}}}});
//# sourceMappingURL=path---posts-algorithm-print-triangle-4cebc30711c6178195c9.js.map