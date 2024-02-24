webpackJsonp([8690662024654],{555:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, former marketer, interested in business-oriented and scalable development. Also, passionate marathoner.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/beomyeonandreakim/Documents/dev/beomyeonandrewkim.github.io/src/pages/articles/2022-02-13_type-generic/index.md absPath of file >>> MarkdownRemark",html:'<h3>아이템 14 타입 연산과 제너릭 사용으로 반복 줄이기</h3>\n<ul>\n<li>타입에 이름을 붙여서 반복을 피해야합니다. extends를 사용해서 인터페이스 필드의 반복을 피해야합니다.</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-tsx"><code class="language-tsx"><span class="token comment">// 1. 이름을 붙이세요</span>\n<span class="token keyword">interface</span> <span class="token class-name">Point2D</span> <span class="token punctuation">{</span>\n  x<span class="token punctuation">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  y<span class="token punctuation">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">distance</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> Point2D<span class="token punctuation">,</span> b<span class="token punctuation">:</span> Point2D<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">/*...*/</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">type</span> <span class="token function-variable function">HTTPFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span>url<span class="token punctuation">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> opts<span class="token punctuation">:</span> Options<span class="token punctuation">)</span> <span class="token operator">=></span> Promise<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Response</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token keyword">get</span><span class="token punctuation">:</span> <span class="token function-variable function">HTTPFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span>url<span class="token punctuation">,</span> opts<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">/*...*/</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> post<span class="token punctuation">:</span> <span class="token function-variable function">HTTPFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span>url<span class="token punctuation">,</span> opts<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">/*...*/</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 2. 확장하세요</span>\n<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  firstName<span class="token punctuation">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  lastName<span class="token punctuation">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">interface</span> <span class="token class-name">PersonWithBirthDate</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  birth<span class="token punctuation">:</span> Date<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">type</span> PersonWithBirthDate <span class="token operator">=</span> Person <span class="token operator">&amp;</span> <span class="token punctuation">{</span> birth<span class="token punctuation">:</span> Date <span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<ul>\n<li>타입들 간의 매핑을 위해 타입스크립트가 제공한 도구들을 공부하면 좋습니다. 여기에는 keyof, typeof, 인덱싱, 매핑된 타입들이 포함됩니다.</li>\n<li>Utility types: <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html">https://www.typescriptlang.org/docs/handbook/utility-types.html</a></li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-tsx"><code class="language-tsx"><span class="token comment">// 1. Pick을 잘쓰자</span>\n<span class="token keyword">type</span> TopNavState <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tuserId<span class="token punctuation">:</span> State<span class="token punctuation">[</span><span class="token string">\'userId\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\tpageTitle<span class="token punctuation">:</span> State<span class="token punctuation">[</span><span class="token string">\'pageTitle\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\trecentFiles<span class="token punctuation">:</span> State<span class="token punctuation">[</span><span class="token string">\'recentFiles\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">type</span> TopNavState <span class="token operator">=</span> <span class="token punctuation">{</span>\n\t<span class="token punctuation">[</span>k <span class="token keyword">in</span> <span class="token string">\'userId\'</span> <span class="token operator">|</span> <span class="token string">\'pageTitle\'</span> <span class="token operator">|</span> <span class="token string">\'recentFiles\'</span><span class="token punctuation">]</span><span class="token punctuation">:</span> State<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">type</span> Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>k <span class="token keyword">in</span> <span class="token constant">K</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token constant">T</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">type</span> TopNavState <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>State<span class="token punctuation">,</span> <span class="token string">\'userId\'</span> <span class="token operator">|</span> <span class="token string">\'pageTitle\'</span> <span class="token operator">|</span> <span class="token string">\'recentFiles\'</span><span class="token operator">></span><span class="token punctuation">;</span>\n\n<span class="token comment">// + 유니온 타입도 Pick 가능</span>\n<span class="token keyword">interface</span> <span class="token class-name">SaveAction</span> <span class="token punctuation">{</span> <span class="token keyword">type</span><span class="token punctuation">:</span> <span class="token string">\'save\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">interface</span> <span class="token class-name">LoadAction</span> <span class="token punctuation">{</span> <span class="token keyword">type</span><span class="token punctuation">:</span> <span class="token string">\'load\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">type</span> Action <span class="token operator">=</span> SaveAction <span class="token operator">|</span> LoadAction<span class="token punctuation">;</span>\n\n<span class="token keyword">type</span> ActionType <span class="token operator">=</span> Action<span class="token punctuation">[</span><span class="token string">\'type\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token operator">=></span> <span class="token comment">// "save" | "load"</span>\n<span class="token keyword">type</span> ActionRec <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>Action<span class="token punctuation">,</span> <span class="token string">\'type\'</span><span class="token operator">></span><span class="token punctuation">;</span> <span class="token comment">//{ type: "save" | "load" }</span>\n\n<span class="token comment">// 2. keyof를 잘쓰자</span>\n<span class="token keyword">interface</span> <span class="token class-name">Options</span> <span class="token punctuation">{</span>\n\twidth<span class="token punctuation">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n\theight<span class="token punctuation">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">type</span> OptionsUpdate <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>k <span class="token keyword">in</span> keyof Options<span class="token punctuation">]</span><span class="token operator">?</span><span class="token punctuation">:</span> Options<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// => 모두 optional로</span>\n<span class="token keyword">type</span> OptionsKeys <span class="token operator">=</span> keyof Options <span class="token comment">// => "width" | "height" | "color" | "label"</span>\n<span class="token comment">//모두 optional로 만들어주는건 표준라이브러리중 Partial</span>\n\n<span class="token comment">// typyof를 쓰면 객체의 타입도 한방에</span>\n<span class="token keyword">const</span> <span class="token constant">INIT_OPTIONS</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n\twidth<span class="token punctuation">:</span> <span class="token number">640</span><span class="token punctuation">;</span>\n\theight<span class="token punctuation">:</span> <span class="token number">480</span><span class="token punctuation">;</span>\n\tcolor<span class="token punctuation">:</span> <span class="token string">\'#fffff\'</span><span class="token punctuation">;</span>\n\tlabel<span class="token punctuation">:</span> <span class="token string">\'VGA\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">type</span> Options <span class="token operator">=</span> typof <span class="token constant">INIT_OPTIONS</span><span class="token punctuation">;</span>\n<span class="token comment">// { width: number, height: number, color: string, label: string }</span>\n\n<span class="token comment">// 함수의 메서드의 반환 값에 명명된 타입을 만들고 싶을때</span>\n<span class="token keyword">function</span> <span class="token function">getUserInfo</span><span class="token punctuation">(</span>userId<span class="token punctuation">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment">//...</span>\n\t<span class="token keyword">return</span> <span class="token punctuation">{</span>\n\t\tuserId<span class="token punctuation">,</span>\n\t\tname<span class="token punctuation">,</span>\n\t\tage<span class="token punctuation">,</span>\n\t\theight<span class="token punctuation">,</span>\n\t\tweight<span class="token punctuation">,</span>\n\t\tfavoriteColor\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">type</span> UserInfo <span class="token operator">=</span> ReturnType<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>typeof</span> <span class="token attr-name">getUserInfo</span><span class="token punctuation">></span></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<ul>\n<li>제너릭 타입은 타입을 위한 함수와 같습니다. 타입을 반복하는 대신 제너릭 타입을 사용하여 타입들 간에 매핑을 하는 것이 좋습니다. 제너릭 타입을 제한하려면 extends를 사용하면 됩니다.</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-tsx"><code class="language-tsx"><span class="token keyword">interface</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span>\n  first<span class="token punctuation">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  last<span class="token punctuation">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">type</span> DancingDuo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span> <span class="token attr-name">extends</span> <span class="token attr-name">Name</span><span class="token punctuation">></span></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> couple1<span class="token punctuation">:</span> DancingDuo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Name</span><span class="token punctuation">></span></span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> fisrt<span class="token punctuation">:</span> <span class="token string">\'Fred\'</span><span class="token punctuation">,</span> last<span class="token punctuation">:</span> <span class="token string">\'Astaire\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> first<span class="token punctuation">:</span> <span class="token string">\'Ginger\'</span><span class="token punctuation">,</span> last<span class="token punctuation">:</span> <span class="token string">\'Rogers\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> couple2<span class="token punctuation">:</span> DancingDuo<span class="token operator">&lt;</span><span class="token punctuation">{</span> first<span class="token punctuation">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> first<span class="token punctuation">:</span> <span class="token string">\'Sonny\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> first<span class="token punctuation">:</span> <span class="token string">\'Cher\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token comment">// => \'Name\' 타입에 필요한 \'last\'속성이 \'{ first: string; }\' 타입에 없습니다.</span>\n\n<span class="token keyword">type</span> Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>k <span class="token keyword">in</span> <span class="token constant">K</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token constant">T</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// ~\'K\' 타입은 \'string | number | symbol\' 타입에 할당할 수 없습니다.</span>\n\n<span class="token comment">// K는 실제로 T의 키의 부분 집합, 즉 keyof T가 되어야 합니다.</span>\n<span class="token keyword">type</span> Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token class-name">keyof</span> <span class="token constant">T</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>k <span class="token keyword">in</span> <span class="token constant">K</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token constant">T</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<ul>\n<li>표준 라이브러리에 정의된 Pick, Partial, ReturnType 같은 제너릭 타입에 익숙해져야 합니다.</li>\n</ul>\n<p>출처 <a href="https://www.yes24.com/Product/Goods/102124327">이펙티브 타입스크립트</a></p>',fields:{tagSlugs:["/tags/type-script/","/tags/java-script/","/tags/generic/"]},frontmatter:{title:"[이펙티브 타입스크립트] 아이템 14 - 타입 연산과 제너릭 사용으로 반복 줄이기",tags:["TypeScript","JavaScript","generic"],date:"2022-02-13T09:15:03.284Z",description:"타입에 이름을 붙여서 반복을 피해야합니다. extends를 사용해서 인터페이스 필드의 반복을 피해야합니다."}}},pathContext:{slug:"/posts/TypeScript/generic-type"}}}});
//# sourceMappingURL=path---posts-type-script-generic-type-2100493412a915baa954.js.map