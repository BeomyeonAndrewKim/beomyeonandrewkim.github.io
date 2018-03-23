webpackJsonp([70397330249673],{430:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, fomer marketer, interested in Data Visualization and PWA",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/BeomyeonaAndrewKim.github.io/src/pages/articles/2018-03-16--Level1. 피보나치 수/index.md absPath of file >>> MarkdownRemark",html:'<p>[Daily Algorithm_JavaScript] Level1. 피보나치 수</p>\n<h3>Question</h3>\n<h4>Source <a href="https://programmers.co.kr/learn/challenge_codes/6">https://programmers.co.kr/learn/challenge_codes/6</a></h4>\n<blockquote>\n<p>피보나치 수는 F(0) = 0, F(1) = 1일 때, 2 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 점화식입니다. 2 이상의 n이 입력되었을 때, fibonacci 함수를 제작하여 n번째 피보나치 수를 반환해 주세요. 예를 들어 n = 3이라면 2를 반환해주면 됩니다.</p>\n</blockquote>\n<h3>My solution</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">var</span> newArr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>num<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> newArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newArr<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">+</span>newArr<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> newArr<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>사실 피보나치 수열이라는 단어를 처음 볼 땐 매우 당황스러웠다. 심지어 나무위키를 봤을 때도 한 번에 이해되지가 않아서 더 당황했다. 수포자의 늪은 쉽게 빠져나올 수 있는게 아니다…</p>\n<p>간단히 설명하자면 아래와 같다.</p>\n<blockquote>\n<p>피보나치 수열이란, 첫 번째 항의 값이 0이고 두 번째 항의 값이 1일 때, 이후의 항들은 이전의 두 항을 더한 값으로 이루어지는 수열을 말한다.</p>\n<p>예) 0, 1, 1, 2, 3, 5, 8, 13</p>\n</blockquote>\n<p>나는 위 설명에 충실했다. 처음에 0과 1이 들어있는 배열을 만들었다. 그리고 해당 배열의 index를 활용해 문제를 풀려고했다. 그래서 <code class="language-text">i</code>는 2로 정의해주고 인자로 받은 Number값 만큼 반복문을 돌렸다. 반복이 돌아갈 때 마다 배열에 새로운 값을 <code class="language-text">push</code>해줬고, 새로운 값은 문제 그대로 배열의 index <code class="language-text">i-2</code>의 값과 <code class="language-text">i-1</code>의 값을 더한 값으로 처리했다. 즉 배열에 이전이전 값과 이전 값을 더해준 값을 새로운 배열로 추가한다는 것!</p>\n<p>그렇게 새로운 배열에 <code class="language-text">push</code>를 해주면 피보나치 수열이 완성된 배열이 만들어진다. 그리고 그 배열의 마지막 수를 <code class="language-text">return</code>하는 문제이기에 배열의 <code class="language-text">index</code>에 인자로 받은 숫자를 넣어 해당 값이 나오도록 했다.</p>\n<h4>Other Solutions</h4>\n<h4>Best of Best</h4>\n<blockquote>\n<p>잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,‘80일간의 세계 일주’ 중에서</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>num<span class="token operator">&lt;</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">?</span>num<span class="token punctuation">:</span><span class="token function">fibonacci</span><span class="token punctuation">(</span>num<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token function">fibonacci</span><span class="token punctuation">(</span>num<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>사실 피보나치 수열 문제는 재귀함수의 1번 예제로 많이 활용된다. 항상 언급했듯이 아름다운 함수에 재귀함수는 꼭 들어가있다. 항상 그렇게 마음에 새기면서도 재귀함수의 예시 1번 문제를 풀 때 막상 생각을 하지 못했다. 반성!</p>\n<p>먼저 삼항연산자를 활용했다. 조건은 ”인자로 받은 Number값이 2보다 작나?”이다. <code class="language-text">true</code>라면 해당 숫자가 그대로 반환된다. 그리고 2보다 클 경우 즉 <code class="language-text">false</code>일 경우에 해당 피보나치 함수의 인자로 받은 Number값의 각각 -1과 -2된 수가 인자로 들어간 피보나치 함수를 반환한다. 말로는 어렵다. 그림으로 풀자면 아래와 같다.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/IMG_20180114_212955-9e44bec5cfefbdf07b9ec5bf35da155a-62d5c.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75.01315097317202%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB6UtnCih//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAQABBQIc2//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABkQAQEAAwEAAAAAAAAAAAAAAAEAEBEhMf/aAAgBAQABPyFcEN+TxLLf/9oADAMBAAIAAwAAABBP/wD/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAZEAEBAQADAAAAAAAAAAAAAAAAARExQZH/2gAIAQEAAT8QVRZweNC3bWv/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="fibonacci"\n        title=""\n        src="/static/IMG_20180114_212955-9e44bec5cfefbdf07b9ec5bf35da155a-d564d.jpg"\n        srcset="/static/IMG_20180114_212955-9e44bec5cfefbdf07b9ec5bf35da155a-865fd.jpg 240w,\n/static/IMG_20180114_212955-9e44bec5cfefbdf07b9ec5bf35da155a-d40a0.jpg 480w,\n/static/IMG_20180114_212955-9e44bec5cfefbdf07b9ec5bf35da155a-d564d.jpg 960w,\n/static/IMG_20180114_212955-9e44bec5cfefbdf07b9ec5bf35da155a-c67c1.jpg 1440w,\n/static/IMG_20180114_212955-9e44bec5cfefbdf07b9ec5bf35da155a-62d5c.jpg 1901w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>​\t\t\t\t\t\t\t\t\t(그림이 매우 조악..;;)</p>\n<p>재귀함수에 대해 설명이 잘 나와있는 <a href="http://webclub.tistory.com/72">링크</a>(출처: 웹클럽)를 소개한다.</p>',fields:{tagSlugs:["/tags/algorithm/","/tags/알고리즘/","/tags/javascript/","/tags/자바스크립트/","/tags/피보나치-수/"]},frontmatter:{title:"[Daily Algorithm_JavaScript] Level1. 피보나치 수",tags:["Algorithm","알고리즘","Javascript","자바스크립트","피보나치 수"],date:"2018-03-16T22:12:03.284Z",description:"피보나치 수는 F(0) = 0, F(1) = 1일 때, 2 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 점화식입니다. 2 이상의 n이 입력되었을 때, fibonacci 함수를 제작하여 n번째 피보나치 수를 반환해 주세요."}}},pathContext:{slug:"/posts/algorithm/fibonacci"}}}});
//# sourceMappingURL=path---posts-algorithm-fibonacci-95d0dcdbcf0f88350871.js.map