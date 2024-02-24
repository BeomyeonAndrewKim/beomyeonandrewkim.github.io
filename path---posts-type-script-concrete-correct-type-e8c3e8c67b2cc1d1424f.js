webpackJsonp([0xea5a302e1526],{554:function(n,s){n.exports={data:{site:{siteMetadata:{title:"BK's Devlog",subtitle:"I'm front-end web developer, former brand marketer, interested in business-oriented and scalable development. Also, passionate marathoner.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"BK",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/beomyeonandreakim/Documents/dev/beomyeonandrewkim.github.io/src/pages/articles/2022-03-13_concrete-correct-type/index.md absPath of file >>> MarkdownRemark",html:'<h2>아이템 33 string 타입보다 더 구체적인 타입 사용하기</h2>\n<ul>\n<li>‘문자열을 남발하여 선언된’ 코드를 피합시다. 모든 문자열을 할당할 수 있는 string타입보다는 더 구체적인 타입을 사용하는 것이 좋습니다.</li>\n<li>변수는 범위를 보다 정확하게 표현하고 싶다며 string 타입보다는 문자열 리터럴 타입의 유니온을 사용하면 됩니다. 타입 체크를 더 엄격히 할 수 있고 생산성을 향상시킬 수 있습니다.</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-tsx"><code class="language-tsx"><span class="token keyword">function</span> pluck<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>records<span class="token punctuation">:</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> records<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>r <span class="token operator">=></span> r<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \'{}\' 형식에 인덱스 시그니처가 없으므로 요소에 암시적으로 \'any\' 형식이 있습니다.</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> pluck<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>records<span class="token punctuation">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> keyof <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> records<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>r <span class="token operator">=></span> r<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token operator">=></span> <span class="token keyword">function</span> pluck<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>records<span class="token punctuation">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> keyof <span class="token constant">T</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token constant">T</span><span class="token punctuation">[</span>keyof <span class="token constant">T</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token operator">=></span> <span class="token keyword">function</span> pluck<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>records<span class="token punctuation">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token constant">K</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span></code></pre>\n      </div>\n<ul>\n<li>객체의 속성 이름을 함수 매개변수를 받을 때는 string보다 keyof T를 사용하는 것이 좋습니다.</li>\n</ul>\n<h2>아이템 34 부정확한 타입보다는 미완성 타입을 사용하기</h2>\n<ul>\n<li>타입 안정성에서 불쾌한 골짜기는 피해야 합니다. 타입이 없는 것보다 잘못된 게 더 나쁩니다.</li>\n<li>정확하게 타입을 모델링할 수 없다면 부정확하게 모델링하지 말아야 합니다. 또한 any와 unknown를 구별해서 사용해야 합니다.</li>\n<li>타입 정보를 구체적으로 만들수록 오류 메시지와 자동 완성 기능에 주의를 기울여야 합니다. 정확도뿐만 아니라 개발 경험과도 관련됩니다.</li>\n</ul>\n<p>출처 <a href="https://www.yes24.com/Product/Goods/102124327">이펙티브 타입스크립트</a></p>',fields:{tagSlugs:["/tags/type-script/","/tags/java-script/"]},frontmatter:{title:"[이펙티브 타입스크립트] 아이템 33, 34 - 정확하고 구체적인 타입",tags:["TypeScript","JavaScript"],date:"2022-03-13T09:15:03.284Z",description:'"문자열을 남발하여 선언된" 코드를 피합시다. 모든 문자열을 할당할 수 있는 string타입보다는 더 구체적인 타입을 사용하는 것이 좋습니다.'}}},pathContext:{slug:"/posts/TypeScript/concrete-correct-type"}}}});
//# sourceMappingURL=path---posts-type-script-concrete-correct-type-e8c3e8c67b2cc1d1424f.js.map