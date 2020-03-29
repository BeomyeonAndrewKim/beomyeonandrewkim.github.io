webpackJsonp([0x8922acc06e31],{503:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, former marketer, interested in Data Visualization and PWA. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/beomyeonandreakim/Documents/dev/beomyeonandrewkim.github.io/src/pages/articles/2018-03-17_return-weird-number/index.md absPath of file >>> MarkdownRemark",html:'<p>[Algorithm JavaScript] Level2. 이상한 문자만들기</p>\n<h3>Question</h3>\n<h4>Source <a href="https://programmers.co.kr/learn/challenge_codes/114">https://programmers.co.kr/learn/challenge_codes/114</a></h4>\n<blockquote>\n<p>toWeirdCase 함수는 문자열 s 를 매개변수로 입력받습니다.\n문자열 s 에 각 <code class="language-text">단어</code>의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하세요.\n예를 들어 s 가 try hello world 라면 첫 번째 단어는 TrY, 두 번째 단어는 HeLlO, 세 번째 단어는 WoRlD 로 바꿔 TrY HeLlO WoRlD 를 리턴하면 됩니다.</p>\n<p><strong>주의</strong> 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단합니다..</p>\n</blockquote>\n<h3>My solution</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">toWeirdCase</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  newArr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> newArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    newArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> newArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    newArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> i<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span>\n        <span class="token operator">?</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">:</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    newArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> newArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> newArr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'결과 : \'</span> <span class="token operator">+</span> <span class="token function">toWeirdCase</span><span class="token punctuation">(</span><span class="token string">\'try hello world\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>각 단어별로 짝수번째, 홀수번째를 구분해야 하기 때문에 각 단어를 공백을 기준으로 배열로 나눴다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">newArr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//newArr=[\'try\',\'hello\',\'world\']</span></code></pre>\n      </div>\n<p>그리고 배열의 요소를 루프로 돌렸다. 요소가 String 이기 때문에 <code class="language-text">for</code>문을 돌리는데 제약이 많았다. 그래서 배열의 요소를 <code class="language-text">split</code>메소드를 통해 다시 배열로 만들었다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>newArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 요소의 0번째부터 newArr의 length-1 즉 2번째 요소까지 루프</span>\n    newArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>newArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 각 요소를 split메소드를 통해 배열로 전환 newArr[0]=[\'t\',\'r\',\'y\']</span></code></pre>\n      </div>\n<p>여기서 <code class="language-text">forEach</code> 메소드를 통해 이중으로 루프를 돌렸다. <code class="language-text">forEach</code>를 활용하면 요소, 인덱스, 배열 모두를 인자로 받아서 함수형으로 활용할 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">newArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> i<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">//요소, 인덱스, 배열 모두를 인자로 받는 화살표 함수</span>\n  i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span>\n    <span class="token operator">?</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">:</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//인덱스를 %연산자를 활용해 짝,홀수 구분</span>\n<span class="token comment">//삼항연산자를 통해 짝수일때는 요소에 대문자를 다시 대입, 홀수일때는 소문자 대입</span></code></pre>\n      </div>\n<p>그리고 <code class="language-text">join</code>메소드를 활용해 다시 대,소문자 변화를 준 요소들을 단어로 묶어준다. 그리고 첫번째 배열의 요소로 다시 대입한다.</p>\n<p>그 후 첫번째 배열을 <code class="language-text">join</code>메소드를 활용해 다시 문자열로 <code class="language-text">return</code>한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">newArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>newArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n <span class="token keyword">return</span> newArr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>위 방식으로 풀면서 의아했던건 반복문의 형식, 그리고 string 이냐 array 이냐에 따라 대입이 될때도 있고 안될때도 있다. 하나하나씩 바꿔보면서 왜 그런지 확인해야겠다.</p>\n<h4>Other Solutions</h4>\n<h4>Best of Best</h4>\n<blockquote>\n<p>잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,‘80 일간의 세계 일주’ 중에서</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">toWeirdCase</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">//함수를 완성해주세요</span>\n  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/(\\w)(\\w)/g</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'결과 : \'</span> <span class="token operator">+</span> <span class="token function">toWeirdCase</span><span class="token punctuation">(</span><span class="token string">\'try hello world\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>가장 효율적인 식은 역시 정규표현식이다. <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D">MDN 문서</a>를 참고하자.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">toWeirdCase</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> s\n    <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>i <span class="token operator">=></span>\n      i\n        <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>key <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> j<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'결과 : \'</span> <span class="token operator">+</span> <span class="token function">toWeirdCase</span><span class="token punctuation">(</span><span class="token string">\'try hello world\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>배열에서 각 요소를 변경시키는 가장 효율적인 메소드는 <code class="language-text">map</code>메소드다. 위 식에서는 먼저 공백을 기준으로 <code class="language-text">split</code>메소드를 사용해 <code class="language-text">map</code>메소드를 활용할 수 있도록 했다. 그리고 각 단어도 알파벳 각각 하나가 요소가 되는 배열로 다시 <code class="language-text">split</code>메소드를 활용했다. 이어서 삼항연산자를 통해 짝수번째 인덱스일 경우 대문자로 바꿨다. 그리고 두번의 <code class="language-text">join</code>메소드를 통해 문자열을 반환했다. 대소문자 변경해주는 <code class="language-text">toUpperCase()</code>, <code class="language-text">toLowerCase()</code>는 모두 새로운 값을 반환한다. 하지만 위 식에서는 체인처럼 메소드들이 이어져있기 때문에 새로운 값을 반환하는 메소드들을 위해 재대입을 해줄 필요도 없었다. 그리고 홀수번째 인덱스를 굳이 <code class="language-text">toLowerCase()</code> 메소드를 쓸 필요도 없었다. 배열에서 <code class="language-text">map</code>, <code class="language-text">reduce</code>는 정말 중요하다!</p>',fields:{tagSlugs:["/tags/algorithm/","/tags/알고리즘/","/tags/java-script/","/tags/자바스크립트/","/tags/이상한-문자만들기/"]},frontmatter:{title:"[Algorithm JavaScript] Level2. 이상한 문자만들기",tags:["Algorithm","알고리즘","JavaScript","자바스크립트","이상한 문자만들기"],date:"2018-03-16T22:12:03.284Z",description:"toWeirdCase함수는 문자열 s를 매개변수로 입력받습니다. 문자열 s에 각 `단어`의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하세요."}}},pathContext:{slug:"/posts/algorithm/return-weird-number"}}}});
//# sourceMappingURL=path---posts-algorithm-return-weird-number-df73a9d4bf635bfde89f.js.map