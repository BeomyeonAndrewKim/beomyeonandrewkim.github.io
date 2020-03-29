webpackJsonp([0x900b8a9e4d42],{507:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, former marketer, interested in Data Visualization and PWA. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/beomyeonandreakim/Documents/dev/beomyeonandrewkim.github.io/src/pages/articles/2018-05-10_bubblesort-javascript/index.md absPath of file >>> MarkdownRemark",html:'<h2>버블 정렬 자바스크립트로 구현하기</h2>\n<p>JavaScript 로 개발에 입문을 하고 CS 를 공부하다보면 예시 코드가 C 계열 언어나 Java 계열의 언어인 설명이 대다수이다. JavaScript 가 위에 언급된 언어들이 할 수 있는 메모리 관리를 비롯한 몇몇 기능을 할 수 없다는 것이 이유 중 하나일 것 같다.</p>\n<p>JavaScript 개발자가 되기로 했기 때문에 가능하면 C 계열이나 Java 는 억지로 공부하고 싶지는 않다. 그래서 JavaScript 로 CS 의 예제를 하나하나씩 구현해보려 한다.</p>\n<p>그 첫번째는 Sorting Algorithm, 정렬 알고리즘이다.</p>\n<p>또 그 중에서도 1 번 개념이자, 조금은 외면(?)받는 버블 정렬이다.</p>\n<h3>버블 정렬(Bubble Sorting)</h3>\n<p>버블 정렬은 1 번째와 2 번째 원소를 비교하여 정렬하고, 2 번째와 3 번째, …, n-1 번째와 n 번째를 정렬한 뒤 다시 처음으로 돌아가 이번에는 n-2 번째와 n-1 번째까지, …해서 최대 n(n-1)/n 번 정렬한다. 한 번 돌 때마다 마지막 하나가 정렬되므로 원소들이 거품이 올라오는 것처럼 보여 거품정렬이다.</p>\n<p>거의 모든 상황에서 최악의 성능을 보여준다. 단, 이미 정렬된 자료에서는 1 번만 돌면 되기 때문에 최선의 성능을 보여준다. 가장 손쉽게 구현하여 사용할 수 있지만, 만들기가 쉽고 직관적일 뿐이지 알고리즘적 과점에서 보면 대단히 비효율적인 정렬방식이다.</p>\n<p>Reference: <a href="https://namu.wiki/w/%EC%A0%95%EB%A0%AC%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98">나무위키</a></p>\n<p><img src="http://codepumpkin.com/wp-content/uploads/2017/10/BubbleSort_Avg_case.gif" alt="Bubble Sorting"></p>\n<p>source: <a href="http://codepumpkin.com/bubble-sort/">code pumbkin</a></p>\n<h3>JavaScript 로 구현하기</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">bubbleSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> isSorted <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">>=</span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n      isSorted <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> isSorted <span class="token operator">?</span> <span class="token function">bubbleSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">:</span> arr<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> testArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token function">bubbleSort</span><span class="token punctuation">(</span>testArr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 1, 3, 4, 6, 7, 9 ]</span></code></pre>\n      </div>\n<p>오름차순으로 정렬이 될 때까지 정렬을 계속 해야하기 때문에 기본적으로 재귀를 활용했다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">let</span> isSorted <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>arr<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">>=</span>arr<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>arr<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n      isSorted <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>먼저 <code class="language-text">isSorted</code>라는 변수를 만들어 <code class="language-text">false</code>를 대입했다. 이는 정렬 작업이 이뤄졌을때는 <code class="language-text">true</code>로 재대입 될것이고 정렬 작업이 한 번도 일어나지 않았을 때 즉 오름차순 정렬이 완료되었을 때는 <code class="language-text">false</code>가 담긴 상태로 그대로 다음 코드로 넘어갈 것 이다.</p>\n<p>그리고 기본적으로 배열은 변수 <code class="language-text">i</code>에 담긴 <code class="language-text">0</code>부터 배열의 길이의 -1 만큼 루프를 돈다. <code class="language-text">i</code>는 배열의 <code class="language-text">index</code>로서 역할을 할 것이고 배열의 요소 2 개씩 대소 판단을 해서 앞의 요소가 뒤의 요소보다 크거나 같을 경우 위치를 바꿔준다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">return</span> isSorted <span class="token operator">?</span> <span class="token function">bubbleSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">:</span> arr<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>그리고 위에 언급된 대로 <code class="language-text">isSorted</code>가 <code class="language-text">true</code>가 되었을 때, 즉 정렬이 한 번 이루어 졌을 때는 다시 한 번 해당 함수를 호출해준다(재귀함수). 그리고 <code class="language-text">isSorted</code>가 그대로 <code class="language-text">false</code>일 때, 즉 정렬이 한 번도 적용이 안되었을때는 오름차순 정렬이 완료되었음을 의미하므로 해당 배열을 그대로 반환한다.</p>\n<p>주의할 점은 <code class="language-text">bubbleSort</code>를 호출할 때도 <code class="language-text">return</code>을 해주는 방식으로 해야하는 것이다. <code class="language-text">return</code>을 안하고 단순히 호출을 한다면 실행 컨텍스트 상 재귀적으로 호출되는 함수 내에서만 값이 <code class="language-text">return</code>될 뿐이지 가장 바깥의 컨텍스트에서는 <code class="language-text">return</code>될 값이 없기 때문에 <code class="language-text">undefined</code>만 나온다. 그렇기 때문에 재귀호출되는 함수도 꼭 <code class="language-text">return</code>을 하자!</p>',fields:{tagSlugs:["/tags/cs/","/tags/자바스크립트/","/tags/java-script/","/tags/버블-정렬/","/tags/정렬-알고리즘/"]},frontmatter:{title:"[CS] 버블 정렬 자바스크립트로 구현하기",tags:["CS","자바스크립트","JavaScript","버블 정렬","정렬 알고리즘"],date:"2018-05-10T18:15:03.284Z",description:"JavaScript로 개발에 입문을 하고 CS를 공부하다보면 예시 코드가 C계열 언어나 Java계열의 언어인 설명이 대다수이다. JavaScript가 위에 언급된 언어들이 할 수 있는 메모리 관리를 비롯한 몇몇 기능을 할 수 없다는 것이 이유 중 하나일 것 같다."}}},pathContext:{slug:"/posts/cs/bubblesort-javascript"}}}});
//# sourceMappingURL=path---posts-cs-bubblesort-javascript-f08cb4ef4d5b27280fae.js.map