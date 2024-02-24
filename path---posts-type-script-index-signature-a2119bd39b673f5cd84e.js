webpackJsonp([0xafd82e0cf1b5],{556:function(n,s){n.exports={data:{site:{siteMetadata:{title:"BK's Devlog",subtitle:"I'm front-end web developer, former marketer, interested in business-oriented and scalable development. Also, passionate marathoner.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"BK",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/beomyeonandreakim/Documents/dev/beomyeonandrewkim.github.io/src/pages/articles/2022-02-25_index-signature/index.md absPath of file >>> MarkdownRemark",html:'<h3>아이템 15 동적 데이터에 인덱스 시그니처 사용하기</h3>\n<ul>\n<li>런타임 때까지 객체의 속성을 알 수 없을 경우에만 인덱스 시그니처를 사용</li>\n<li>안전한 접근을 위해 인덱스 시그니처 값 타입에 <code class="language-text">undefined</code>를 추가하는 것을 고려</li>\n<li>가능하다면 인터페이스, Record, 매핑된 타입 같은 인덱스 시그니처보다 정확한 타입을 사용</li>\n</ul>\n<h3>아이템 16 number 인덱스 시그니처보다는 Array, 튜플, ArrayLike를 사용하기</h3>\n<ul>\n<li>타입스크립트는 Array에 숫자 키를 허용하고, 문자열 키와 다른 것으로 인식합니다</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-tsx"><code class="language-tsx"><span class="token keyword">interface</span> <span class="token class-name">Array</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  <span class="token punctuation">[</span>n<span class="token punctuation">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">//test?</span>\n<span class="token keyword">const</span> test<span class="token punctuation">:</span> <span class="token builtin">Array</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">></span></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'test\'</span><span class="token punctuation">,</span> <span class="token string">\'test2\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> val <span class="token operator">=</span> test<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> va2 <span class="token operator">=</span> test<span class="token punctuation">[</span><span class="token string">\'1\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<ul>\n<li>Object.keys 같은 구문은 여전히 문자열로 반환(배열을 순회하는 코드에 대한 실용적인 허용)</li>\n<li>index의 타입이 중요하다면 <code class="language-text">for-of</code>, <code class="language-text">forEach</code>, <code class="language-text">for(;;)</code> (break가 필요하다면) 루프 사용</li>\n<li>어떤 길이를 가지는 배열과 비슷한 형태의 튜플을 사용하고 싶다면 ArrayLike 타입 사용</li>\n<li>인덱스 시그니처에 number(런타임에서는 어차피 string으로 인식)를 사용하기보다 Array나 튜플 또는 ArrayLike 타입을 사용하는게 좋음</li>\n</ul>\n<p>출처 <a href="https://www.yes24.com/Product/Goods/102124327">이펙티브 타입스크립트</a></p>',fields:{tagSlugs:["/tags/type-script/","/tags/java-script/","/tags/index-signature/"]},frontmatter:{title:"[이펙티브 타입스크립트] 아이템 15, 16 - 인덱스 시그니처",tags:["TypeScript","JavaScript","index signature"],date:"2022-02-25T09:15:03.284Z",description:"런타임 때까지 객체의 속성을 알 수 없을 경우에만 인덱스 시그니처를 사용"}}},pathContext:{slug:"/posts/TypeScript/index-signature"}}}});
//# sourceMappingURL=path---posts-type-script-index-signature-a2119bd39b673f5cd84e.js.map