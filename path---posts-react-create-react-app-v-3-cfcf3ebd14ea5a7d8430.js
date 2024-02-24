webpackJsonp([0xadab0bb19a10],{551:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, former marketer, interested in Data Visualization and making project alive. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/beomyeonandreakim/Documents/dev/beomyeonandrewkim.github.io/src/pages/articles/2019-04-28_create-react-app-v3/index.md absPath of file >>> MarkdownRemark",html:'<p>2019년 4월 22일,</p>\n<p><code class="language-text">create-react-app</code> 3.0이 정식 릴리즈되었습니다.</p>\n<p>2.0이 릴리즈된지 얼마 되지 않은것 같은데 벌써 3.0이라니..!</p>\n<p>2.0의 큰 변화 이후 빠르게 업데이트된 3.0버젼에는 어떠한 내용들이 있는지 살펴보겠습니다.</p>\n<h2>주요 변화</h2>\n<h4>1. Jest 24</h4>\n<p>기본 내장된 테스트 라이브러리인 Jest가 24버젼으로 업데이트 되었습니다. Jest 24버젼에 대한 내용은 <a href="https://jestjs.io/blog/2019/01/25/jest-24-refreshing-polished-typescript-friendly">링크</a>에서 확인할 수 있습니다. </p>\n<p>이전 버젼과 snapshot serialization에 차이가 있어서 기존의 테스트는 Jest 24 버젼에 맞게 업데이트를 해야할 수도 있습니다.</p>\n<h4>2. Hook 지원</h4>\n<p><code class="language-text">eslint-plugin-react-hooks</code> 플러그인을 기본 패키지에 포함시켜 <a href="https://ko.reactjs.org/docs/hooks-rules.html">Rules of Hooks</a> (제가 번역한..ㅎㅎ)을 강제합니다. Rules of Hooks에 관한 내용은 위 링크를 참고해주세요.</p>\n<h4>3. TypeScript Linting</h4>\n<p>TypeScript 파일에 대한 Lint를 제공합니다. 아래 <code class="language-text">eslint-config-react-app</code> 의 <code class="language-text">index.js</code> 파일 내용을 보면 TS파일의 어떤 룰에 대한 lint를 제공하는지 확인할 수 있습니다. </p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">    plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'@typescript-eslint\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token comment">// These ESLint rules are known to cause issues with typescript-eslint</span>\n      <span class="token comment">// See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json</span>\n      camelcase<span class="token punctuation">:</span> <span class="token string">\'off\'</span><span class="token punctuation">,</span>\n      indent<span class="token punctuation">:</span> <span class="token string">\'off\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'no-array-constructor\'</span><span class="token punctuation">:</span> <span class="token string">\'off\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'no-unused-vars\'</span><span class="token punctuation">:</span> <span class="token string">\'off\'</span><span class="token punctuation">,</span>\n\n      <span class="token string">\'@typescript-eslint/no-angle-bracket-type-assertion\'</span><span class="token punctuation">:</span> <span class="token string">\'warn\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'@typescript-eslint/no-array-constructor\'</span><span class="token punctuation">:</span> <span class="token string">\'warn\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'@typescript-eslint/no-namespace\'</span><span class="token punctuation">:</span> <span class="token string">\'error\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'@typescript-eslint/no-unused-vars\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token string">\'warn\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          args<span class="token punctuation">:</span> <span class="token string">\'none\'</span><span class="token punctuation">,</span>\n          ignoreRestSiblings<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span></code></pre>\n      </div>\n<h4>4. @babel/preset-env 내 <code class="language-text">browserlist</code> 지원</h4>\n<p><code class="language-text">package.json</code> 에서 <code class="language-text">browserlist</code> 를 설정할 수 있게 되었습니다. <code class="language-text">development</code> 와 <code class="language-text">production</code> 환경을 별도로 설정할 수 있습니다. <code class="language-text">async/await</code> 와 같이  <a href="https://browserl.ist/">https://browserl.ist</a> 에서 아래 default 설정 이외에 다양한 조건의 브라우저 환경에 대해 검색할 수 있습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">  <span class="token string">"browserslist"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"production"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token string">">0.2%"</span><span class="token punctuation">,</span>\n      <span class="token string">"not dead"</span><span class="token punctuation">,</span>\n      <span class="token string">"not op_mini all"</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token string">"development"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token string">"last 1 chrome version"</span><span class="token punctuation">,</span>\n      <span class="token string">"last 1 firefox version"</span><span class="token punctuation">,</span>\n      <span class="token string">"last 1 safari version"</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span></code></pre>\n      </div>\n<h4>5. <code class="language-text">-—no-watch flag</code> 제거</h4>\n<p>Jest 자체의 <code class="language-text">--watchAll=false</code> 옵션을 활용해 <code class="language-text">start</code> 스크립트에 <code class="language-text">--no-watch</code> 옵션을 제거했습니다.</p>\n<h2>새로운 기능</h2>\n<h4>1. <code class="language-text">jsconfig.json</code> / <code class="language-text">tsconfig.json</code> 활용</h4>\n<p><code class="language-text">jsconfig.json</code> / <code class="language-text">tsconfig.json</code> 파일을 통해 <code class="language-text">baseUrl</code> 을 설정할 수 있습니다. Root 디렉토리에 해당 파일을 아래와 같이 작성후 생성하면 <code class="language-text">baseUrl</code> 을 설정할 수 있습니다. 아직 <code class="language-text">src</code>와 <code class="language-text">node_modules</code> 만 설정 가능합니다.</p>\n<p>이제는 <code class="language-text">.env</code> 파일을 만들지 않고도 절대 경로를 설정할 수 있게 되었다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"src"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">"include"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src"</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h4>2. PostCSS Normalize</h4>\n<p>간단하게 .css 파일 최상단에 <code class="language-text">@import-normalize</code> 를 추가하면 Normalize.css를 적용할 수 있습니다. </p>\n<p>출처 <a href="https://github.com/facebook/create-react-app/releases/tag/v3.0.0">create-react-app github</a></p>',fields:{tagSlugs:["/tags/create-react-app/","/tags/v-3/","/tags/react/"]},frontmatter:{title:"create-react-app v3 릴리즈!",tags:["create-react-app","v3","React"],date:"2019-04-28T18:15:03.284Z",description:"2019년 4월 22일, `create-react-app` 3.0이 정식 릴리즈되었습니다."}}},pathContext:{slug:"/posts/react/create-react-app-v3"}}}});
//# sourceMappingURL=path---posts-react-create-react-app-v-3-cfcf3ebd14ea5a7d8430.js.map