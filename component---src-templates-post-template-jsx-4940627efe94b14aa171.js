webpackJsonp([0x623bdfc73907],{629:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function u(e,t){var n=t.onNewComment,a=t.language,r=s(t,["onNewComment","language"]);for(var o in r)e.page[o]=r[o];e.language=a,n&&(e.callbacks={onNewComment:[n]})}Object.defineProperty(t,"__esModule",{value:!0});var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=n(2),d=a(p),m=n(8),_=a(m),h=["shortname","identifier","title","url","category_id","onNewComment","language"],g=!1,b=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),c(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,n){return h.some(function(e){return e===n})?t:f({},t,r({},n,e.props[n]))},{});return d.default.createElement("div",t,d.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!g){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),g=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};h.forEach(function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){u(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){u(this,t)},this.addDisqusScript())}}]),t}(d.default.Component);b.displayName="DisqusThread",b.propTypes={id:_.default.string,shortname:_.default.string.isRequired,identifier:_.default.string,title:_.default.string,url:_.default.string,category_id:_.default.string,onNewComment:_.default.func,language:_.default.string},b.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=b},630:function(e,t,n){"use strict";e.exports=n(629)},227:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(2),s=a(l),u=n(630),f=a(u),c=function(e){function t(n){r(this,t);var a=o(this,e.call(this,n));return a.state={toasts:[]},a.notifyAboutComment=a.notifyAboutComment.bind(a),a.onSnackbarDismiss=a.onSnackbarDismiss.bind(a),a}return i(t,e),t.prototype.onSnackbarDismiss=function(){var e=this.state.toasts,t=e.slice(1);this.setState({toasts:t})},t.prototype.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},t.prototype.render=function(){var e=this.props,t=e.postNode,n=e.siteMetadata;if(!n.disqusShortname)return null;var a=t.frontmatter,r=n.url+t.fields.slug;return s.default.createElement(f.default,{shortname:n.disqusShortname,identifier:a.title+"_"+(new Date).getTime(),title:a.title,url:r,category_id:a.category_id,onNewComment:this.notifyAboutComment})},t}(l.Component);t.default=c,e.exports=t.default},230:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(2),s=a(l),u=n(14),f=a(u),c=n(78),p=a(c),d=n(227),m=a(d),_=n(218),h=a(_);n(624);var g=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.subtitle,n=e.author,a=this.props.data.markdownRemark,r=a.fields.tagSlugs,o={instagram:n.instagram,facebook:n.facebook,github:n.github,linkedin:n.linkedin,rss:n.rss,email:n.email},i=s.default.createElement("div",null,s.default.createElement(f.default,{className:"post-single__home-button",to:"/"},"Home")),l=s.default.createElement("div",{className:"post-single__tags"},s.default.createElement("ul",{className:"post-single__tags-list"},r&&r.map(function(e,t){return s.default.createElement("li",{className:"post-single__tags-list-item",key:e},s.default.createElement(f.default,{to:e,className:"post-single__tags-list-item-link"},a.frontmatter.tags[t]))}))),u=s.default.createElement("div",{className:"post-single__footer__profile"},s.default.createElement("div",{className:"post-single__footer__profile-imgWrapper"},s.default.createElement("img",{src:h.default,className:"post-single__footer__profile-img",width:"120",height:"120",alt:n.name})),s.default.createElement("span",{className:"post-single__footer__profile-name"},s.default.createElement("strong",null,n.name)),s.default.createElement("a",{className:"post-single__footer__profile-link",href:"https://www.facebook.com/"+o.facebook,target:"_blank"},s.default.createElement("i",{className:"icon-facebook"})),s.default.createElement("a",{className:"post-single__footer__profile-link",href:"https://www.github.com/"+o.github,target:"_blank"},s.default.createElement("i",{className:"icon-github"})),s.default.createElement("a",{className:"post-single__footer__profile-link",href:"https://www.linkedin.com/in/"+o.linkedin,target:"_blank"},s.default.createElement("i",{className:"icon-linkedin"})),s.default.createElement("a",{className:"post-single__footer__profile-link",href:"mailto:"+o.email},s.default.createElement("i",{className:"icon-mail"})),s.default.createElement("a",{className:"post-single__footer__profile-link",href:"https://www.instagram.com/"+o.instagram,target:"_blank"},s.default.createElement("i",{className:"icon-instagram"})),s.default.createElement("a",{className:"post-single__footer__profile-link",href:o.rss},s.default.createElement("i",{className:"icon-rss"})),s.default.createElement("p",{className:"post-single__footer__profile-subtitle"},t),s.default.createElement("hr",null));s.default.createElement("div",null,s.default.createElement(m.default,{postNode:a,siteMetadata:this.props.data.site.siteMetadata}));return s.default.createElement("div",null,i,s.default.createElement("div",{className:"post-single"},s.default.createElement("div",{className:"post-single__inner"},s.default.createElement("h1",{className:"post-single__title"},a.frontmatter.title),s.default.createElement("div",{className:"post-single__body",dangerouslySetInnerHTML:{__html:a.html}}),s.default.createElement("div",{className:"post-single__date"},s.default.createElement("em",null,"Published ",(0,p.default)(a.frontmatter.date).format("D MMM YYYY")))),s.default.createElement("div",{className:"post-single__footer"},l,s.default.createElement("hr",null),u)))},t}(s.default.Component);t.default=g,e.exports=t.default},624:function(e,t){},238:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=n(2),s=a(l),u=n(25),f=a(u),c=n(230),p=a(c),d=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.title,n=e.subtitle,a=this.props.data.markdownRemark,r=a.frontmatter,o=r.title,i=r.description,l=null!==i?i:n;return s.default.createElement("div",null,s.default.createElement(f.default,null,s.default.createElement("title",null,o+" - "+t),s.default.createElement("meta",{name:"description",content:l})),s.default.createElement(p.default,this.props))},t}(s.default.Component);t.default=d;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-post-template-jsx-4940627efe94b14aa171.js.map