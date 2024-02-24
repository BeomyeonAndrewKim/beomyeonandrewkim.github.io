webpackJsonp([28802467352884],{545:function(n,s){n.exports={data:{site:{siteMetadata:{title:"BK's Devlog",subtitle:"I'm front-end web developer, former marketer, interested in business-oriented and scalable development. Also, passionate marathoner.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"BK",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/beomyeonandreakim/Documents/dev/beomyeonandrewkim.github.io/src/pages/articles/2019-09-02_looking-functional-programming/index.md absPath of file >>> MarkdownRemark",html:'<h2>한 달간 함수형 프로그래밍을 구경하고 적용하면서</h2>\n<p>새로 이직해온 회사의 주요 스택은 <code class="language-text">Vue.js + Vuex + Ramda.js + Rx.js</code> 이다.</p>\n<p>여기서 가장 핵심은 함수형 프로그래밍을 베이스로하는 Ramda.js와 Rx.js이다.</p>\n<p>이직 준비를 하면서 봤던 함수형 프로그래밍에 관한 내용은 대부분 철학에 관한 이야기였다.</p>\n<p>예를 들어,</p>\n<ul>\n<li><code class="language-text">Immutable data</code>, <code class="language-text">first class citizen</code>으로서 함수를 적극 활용한다.</li>\n</ul>\n<p>함수형 프로그래밍에 관한 글을 많이 읽어봤지만 기억에 남는건 위의 한 줄이었다.</p>\n<p>새로 이직해온 곳이 함수형 프로그래밍 기반으로 코드가 작성되어있다고 했을때는 드디어 저 실체를 볼 수 있구나 하는 기대감을 갖게 했었다.</p>\n<p>하지만 역시 새로운 건 쉽지 않다는 것이다.</p>\n<p>내 눈앞에 있는건 이런 코드였다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">makeList<span class="token punctuation">:</span> <span class="token constant">R</span><span class="token punctuation">.</span><span class="token function">compose</span><span class="token punctuation">(</span>\n  <span class="token constant">R</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token constant">R</span><span class="token punctuation">.</span>__<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'A\'</span><span class="token punctuation">,</span> <span class="token string">\'B\'</span><span class="token punctuation">,</span> <span class="token string">\'C\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token constant">R</span><span class="token punctuation">.</span><span class="token function">flip</span><span class="token punctuation">(</span><span class="token constant">R</span><span class="token punctuation">.</span>contains<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token constant">R</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token constant">R</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">\'name\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token constant">R</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token constant">R</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">\'value\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token constant">R</span><span class="token punctuation">.</span><span class="token function">pathOr</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'a\'</span><span class="token punctuation">,</span> <span class="token string">\'b\'</span><span class="token punctuation">,</span> <span class="token string">\'c\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n <span class="token punctuation">)</span><span class="token punctuation">,</span>\n\nfilteredValue<span class="token punctuation">:</span> <span class="token constant">R</span><span class="token punctuation">.</span><span class="token function">compose</span><span class="token punctuation">(</span>\n  <span class="token constant">R</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>value<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> value<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token constant">R</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token constant">R</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  Object<span class="token punctuation">.</span>entries<span class="token punctuation">,</span>\n  <span class="token constant">R</span><span class="token punctuation">.</span><span class="token function">dissoc</span><span class="token punctuation">(</span><span class="token constant">STATUS_ALL</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token constant">R</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">\'dataFilter\'</span><span class="token punctuation">)</span>\n <span class="token punctuation">)</span><span class="token punctuation">,</span></code></pre>\n      </div>\n<p>이게 도대체 무엇인가..?</p>\n<p>자동으로 긁적긁적 모션을 취하게 되었다.</p>\n<p>이러한 코드들이 연속되는 레포지토리는 일종의 절망감을 안겨주었다.</p>\n<p>하지만 역시 스타트업이기 때문에 나의 업무는 바로 시작되었다.</p>\n<p>즉 <code class="language-text">Ramda.js</code>와 함께하는 함수형 프로그래밍에 대한 입문이 시작되었다.</p>\n<p>조그만 기능부터 하나씩 함수형 프로그래밍을 적용했다.</p>\n<p>예를 들어,</p>\n<p>computed에 단순히 깊은 뎁스를 조회하는 함수부터 시작해서</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">query<span class="token punctuation">:</span> <span class="token constant">R</span><span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'$route\'</span><span class="token punctuation">,</span> <span class="token string">\'query\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></code></pre>\n      </div>\n<p>data의 상태를 바꿔주는 간단한 로직들까지</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token constant">R</span><span class="token punctuation">.</span><span class="token function">compose</span><span class="token punctuation">(</span>\n  <span class="token constant">R</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>el <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>dataFilter<span class="token punctuation">[</span>el<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token constant">R</span><span class="token punctuation">.</span><span class="token function">without</span><span class="token punctuation">(</span><span class="token constant">R</span><span class="token punctuation">.</span>__<span class="token punctuation">,</span> <span class="token constant">STATUS_LIST_EXCEPT_ALL</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">(</span>filters<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>조건문이나 그 외 복잡한 로직들에는 아직 적용하기는 힘들었지만 하나씩 적용해가면서 소소한 즐거움을 느낄 수 있었다.</p>\n<p>좋았던 점은 확실히 <code class="language-text">for</code>문을 여러번 돌거나 눈으로 볼때 지저분한 코드들을 한 두줄로 정리할 수 있었다는 점이다.</p>\n<p>힘들었던 점은 <code class="language-text">Ramda.js</code>의 세세한 스펙을 알지 못하면 쉽게 그리고 자주 에러를 만날 수 있다는 점이었다.</p>\n<p>아직 동작 원리를 자세히 알지는 못하기 때문에 성능에 대해서는 평가를 할 수 없다.</p>\n<p>하지만 분명 <code class="language-text">코드를 줄여주는데</code>는 엄청난 기여를 하는 프로그래밍 방식이라는건 확실한 것 같다.</p>\n<p>앞으로도 어려운 점이 많겠지만 하나하나씩 함수형으로 만들어가는 소소한(?) 재미 속에 회사 적응기는 더 스펙타클할 것 같다.</p>',fields:{tagSlugs:["/tags/java-script/","/tags/functional-programming/","/tags/ramda/"]},frontmatter:{title:"[Ramda] 한 달간 함수형 프로그래밍을 구경하고 적용하면서",tags:["JavaScript","Functional Programming","Ramda"],date:"2019-09-02T09:15:03.284Z",description:"새로 이직해온 회사의 주요 스택은 Vue.js + Vuex + Ramda.js + Rx.js 이다.'"}}},pathContext:{slug:"/posts/javascript/looking-functional-programming"}}}});
//# sourceMappingURL=path---posts-javascript-looking-functional-programming-a7426e27310763fae1bb.js.map