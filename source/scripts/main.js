!function(e){function t(a){if(s[a])return s[a].exports;var n=s[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var s={};t.m=e,t.c=s,t.p="",t(0)}([function(e,t,s){"use strict";var a=s(1),n=s(2),o=s(3),i=s(4),r=s(5);console.info("hexo-theme-archer: v201701020"),(0,a.init)(),(0,n.toggleHeader)(),(0,i.sidebarInit)(),(0,r.initTag)(),(0,o.initMobile)()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});document.addEventListener("DOMContentLoaded",function(){document.getElementsByClassName("container")[0].classList.remove("container-unloaded"),document.getElementsByClassName("container")[0].classList.add("container-footer-fade-in"),document.getElementsByClassName("footer")[0].classList.remove("footer-unloaded"),document.getElementsByClassName("footer")[0].classList.add("container-footer-fade-in"),document.getElementsByClassName("loading")[0].style.display="none"},!1),t.init=function(){var e=$(".site-intro-img:first"),t=$(".site-intro-placeholder:first"),s=e.css("background-image").match(/url\("*([^"]*)"*\)/);if(s.length<2)console.log(s);else{var a=s[1],n=new Image;n.onload=function(){t.remove(),console.info("PLACEHOLDER REMOVED")},n.src=a}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.toggleHeader=function(){function e(e){return(m+=e-h)>30?(m=0,1):m<-800?(m=0,-1):0}function t(e){if(e>f){if(1!==v)return v=1,p=!1,1}else if(-1!==v)return v=-1,p=!0,-1;return 0}function s(s){g||(requestAnimationFrame(function(){var a=$(document).scrollTop(),i=t(a);if(1==i?(u.addClass("toc-fixed"),l.addClass("home-link-hide"),d.addClass("back-top-show"),c.addClass("header-sidebar-menu-black")):-1==i&&(u.removeClass("toc-fixed"),l.removeClass("home-link-hide"),o.removeClass("banner-show"),d.removeClass("back-top-show"),c.removeClass("header-sidebar-menu-black")),n){var r=e(a);1==r?o.removeClass("banner-show"):-1!=r||p||o.addClass("banner-show")}h=$(s).scrollTop(),g=!1}),g=!0)}function a(e){e.preventDefault();var t=setInterval(function(){var e=$(document).scrollTop();window.scrollTo(0,Math.max(Math.floor(.8*e))),0===e&&clearInterval(t)},20)}var n=0;void 0!==document.getElementsByClassName("post-body")[0]&&(n=1);var o=$(".banner:first"),i=o.find(".post-title a"),r=$(".site-intro:first"),l=$(".home-link:first"),d=$(".back-top:first"),c=$(".header-sidebar-menu:first"),f=r.offset().top+r.outerHeight(),u=$(".toc-wrapper:first");u.find(".toc-catalog").on("click",function(){u.find(".toc").toggleClass("toc-hide")});var h=0,m=0,v=-1,p=!0,g=!1;$(document).on("scroll",function(){s(this)}),[i,d].forEach(function(e){e.on("click",a)})}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.initMobile=function(){function e(e){e.matches?(console.log("mobile"),document.body.addEventListener("touchstart",function(){})):console.log("desktop")}if(window.matchMedia){var t=window.matchMedia("(max-width: 900px)");t.addListener(e),e(t)}else window.addListener("resize",function(){e((window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)>900?{matches:!1}:{matches:!0})},!1)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.sidebarInit=function(){function e(e){n.addClass("sidebar-show"),o.addClass("wrapper-show-sidebar"),f.addClass("header-slide"),c.addClass("toc-slide"),e.stopPropagation()}function t(e){this.scrollHeight==this.clientHeight?window.event.preventDefault():this.scrollTop<=0?e.originalEvent.wheelDelta>0&&window.event.preventDefault():this.scrollTop>=this.scrollHeight-this.clientHeight&&e.originalEvent.wheelDelta<0&&window.event.preventDefault()}function s(){var e=!1,t=new MouseEvent("click",{bubbles:!0,cancelable:!0});e=!(!u.hasClass("sidebar-header-show-archive")||n.hasClass("sidebar-show")),i[0].dispatchEvent(t),d[0].dispatchEvent(t),e&&(u.addClass("sidebar-show-immediately"),r.addClass("sidebar-show-immediately"))}function a(e){var t=new MouseEvent("click",{bubbles:!0,cancelable:!0});i[0].dispatchEvent(t),h.currTagName=e,h.dispatchEvent(t)}var n=$(".sidebar:first"),o=$(".wrapper:first"),i=$(".header-sidebar-menu:first"),r=n.find(".sidebar-content:first"),l=n.find(".sidebar-archive-link:first"),d=n.find(".sidebar-tags-link:first"),c=$(".toc-wrapper:first"),f=$(".header:first"),u=n.find(".sidebar-header:first");i.on("click",function(t){e(t)}),n.on("click",function(e){e.stopPropagation()}),o.on("click",function(e){n.hasClass("sidebar-show")&&(e.preventDefault(),n.removeClass("sidebar-show"),f.removeClass("header-slide"),o.removeClass("wrapper-show-sidebar"),c.removeClass("toc-slide"))}),l.on("click",function(){r.addClass("sidebar-content-show-archive").removeClass("sidebar-content-show-tags sidebar-show-immediately"),u.addClass("sidebar-header-show-archive").removeClass("sidebar-header-show-tags sidebar-show-immediately")}),d.on("click",function(){r.addClass("sidebar-content-show-tags").removeClass("sidebar-content-show-archive sidebar-show-immediately"),u.addClass("sidebar-header-show-tags").removeClass("sidebar-header-show-archive sidebar-show-immediately")}),n.on("mousewheel",function(e){var s=e.target,a=n.find(".sidebar-tag-list:first"),o=n.find(".sidebar-archive:first");$.contains(a[0],s)||a===s?t.call(a[0],e):$.contains(o[0],s)||o===s?t.call(o[0],e):e.preventDefault()});var h=$(".sidebar-tags-name:first")[0];$(".post-tag").on("click",function(e){s(),a(e.target.dataset.href),e.stopPropagation()})}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initTag=void 0;var a=s(6);t.initTag=function(){function e(e){e[0].style.display="block"}function t(e){for(var t=this,s=0;s<e.length;s++)!function(s){var a=e[s].tags;a.length&&a.forEach(function(e){if(o.has(e.name)){var t=o.get(e.name)+","+s.toString();o.set(e.name,t)}else o.set(e.name,s.toString())},t)}(s)}function s(e){var t=$('<li class="tag-post-item"><span class="tag-post-date">'+a.archerUtil.dateFormater(new Date(Date.parse(e.date)),"yyyy/MM/dd")+"</span></li>"),s=$('<a class="tag-post-title" href="'+jsInfo.root+e.path+'">'+e.title+"</a>");return t.append(s),t}var n=void 0,o=new Map;!function(){var s=jsInfo.root+"content.json?t="+ +new Date,a=new XMLHttpRequest;a.responseType="",a.open("get",s,!0);var o=$(".tag-load-fail:first");a.onload=function(){200==this.status||304==this.status?(o.remove(),t(n=JSON.parse(this.responseText))):(e(o),$(".sidebar-tags-name:first").remove())},a.send()}(),$(".sidebar-tags-name:first").on("click",function(e){e.preventDefault();var t=e.target;16&this.compareDocumentPosition(t)&&("SPAN"===t.tagName?this.currTagName=t.firstChild.innerHTML:this.currTagName=t.innerHTML);var a=o.get(this.currTagName);if(a){$(this).find(".sidebar-tag-name-focus").removeClass("sidebar-tag-name-focus");for(var i=this.children,r=0;r<i.length;r++)this.currTagName===i[r].firstChild.innerHTML&&i[r].classList.add("sidebar-tag-name-focus");var l=a.split(","),d=document.createDocumentFragment(),c=document.getElementsByClassName("sidebar-tag-list")[0];c.innerHTML="",l.forEach(function(e){d.appendChild(s(n[e])[0])}),c.appendChild(d)}})}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={backTop:function(){var e=setInterval(function(){var t=document.body.scrollTop;document.body.scrollTop-=Math.max(Math.ceil(t/9)+2),0===t&&clearInterval(e)},20)},getScrollTop:function(){return document.documentElement.scrollTop||document.body.scrollTop},getAbsPosition:function(e){for(var t=e.offsetLeft,s=e.offsetTop;e=e.offsetParent;)t+=e.offsetLeft,s+=e.offsetTop;return{x:t,y:s}},dateFormater:function(e,t){var s={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var a in s)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?s[a]:("00"+s[a]).substr((""+s[a]).length)));return t},toggler:function(e,t,s,a,n,o){e&&"undefined"!=typeof window&&(e===window||e.nodeType)&&s.addEventListener(t,function(t){if(a)for(var s=a.split(/[, ]/),i=s.length;i--;)e.classList.add(s[i]);if(n)for(var r=n.split(/[, ]/),l=r.length;l--;)e.classList.remove(r[l]);o&&o(t)})}};t.archerUtil=s}]);