(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{M7zF:function(t,e,n){"use strict";var o=n("aCrv"),l=n.n(o);const i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};function s(){l.a.update()&&i(s)}i(s);l.a.Easing;const c=(t,e)=>{if(c.installed)return;const n={};Object.defineProperty(n,"scrollTop",{get:()=>document.body.scrollTop||document.documentElement.scrollTop,set(t){document.body.scrollTop=t,document.documentElement.scrollTop=t}}),Object.defineProperty(n,"scrollHeight",{get:()=>document.body.scrollHeight||document.documentElement.scrollHeight}),Object.defineProperty(n,"offsetHeight",{get:()=>window.innerHeight});const o="@@scrollSpyContext",i={},r={},u={},d={},a={};function f(t,e){if(!e)return t.children;const n=p(t),o=[];for(const l of t.querySelectorAll(e))w(l)===n&&o.push(l);return o}function p(t){return t.getAttribute("data-scroll-spy-id")||t.getAttribute("scroll-spy-id")||"default"}function m(t){return!!t.getAttribute("data-scroll-spy-id")||!!t.getAttribute("scroll-spy-id")}function w(t){do{if(m(t))return p(t);t=t.parentElement}while(t);return"default"}function g(t,e){const l=p(t),i=t[o],s=f(t,e);r[l]=s,s[0]&&s[0].offsetParent!==t&&(i.eventEl=window,i.scrollEl=n)}function v(t,e){let n=0;do{isNaN(t.offsetTop)||(n+=t.offsetTop),t=t.offsetParent}while(t&&t!==e);return n}function b(t,e){const n=p(t),i=r[n],{scrollEl:c,options:u}=t[o],d=c.scrollTop;if(i[e]){const t=v(i[e])-u.offset;if(u.easing)return void function(t,e,n,o,i){new l.a.Tween({postion:e}).to({postion:n},o).easing(i).onUpdate((function(e){t.scrollTop=e.postion})).start(),s()}(c,d,t,u.time,u.easing);const n=u.time,o=u.steps,r=parseInt(n/o),a=t-d;for(let t=0;t<=o;t++){const e=d+a/o*t;setTimeout(()=>{c.scrollTop=e},r*t)}}}function h(t,n){!function(t,e){const n=p(t);d[n]=f(t,e.selector);[...d[n]].map(t=>{t[o]={options:e}})}(t,Object.assign({},e.active,n.value))}function y(t,e,n){b(i[e],t)}function E(t,e){const n=p(t),l=f(t,e);for(let t=0;t<l.length;t++){const e=l[t],i=y.bind(null,t,n);e[o]||(e[o]={}),e[o].click||(e.addEventListener("click",i),e[o].click=i)}}e=Object.assign({allowNoActive:!1,sectionSelector:null,data:null,offset:0,time:500,steps:30,easing:null,active:{selector:null,class:"active"},link:{selector:"a"}},e||{}),t.directive("scroll-spy",{bind:function(n,l,s){s.context.$scrollTo=b.bind(null,n);const c=p(n);n[o]={onScroll:function(){const e=p(n),l=r[e],{scrollEl:i,options:c}=n[o];let f;if(i.offsetHeight+i.scrollTop>=i.scrollHeight-10)f=l.length;else for(f=0;f<l.length&&!(v(l[f],i)-c.offset>i.scrollTop);f++);if(f-=1,f<0?f=c.allowNoActive?null:0:c.allowNoActive&&f>=l.length-1&&v(l[f])+l[f].offsetHeight<i.scrollTop&&(f=null),f!==a[e]){let n=u[e];n&&(n.classList.remove(n[o].options.class),u[e]=null),a[e]=f,void 0!==a&&Object.keys(d).length>0&&(n=d[e][a[e]],u[e]=n,n&&n.classList.add(n[o].options.class)),c.data&&t.set(s.context,c.data,f)}},options:Object.assign({},e,l.value),id:p(n),eventEl:n,scrollEl:n},i[c]=n,delete a[c]},inserted:function(t){const{options:{sectionSelector:e}}=t[o];g(t,e);const{eventEl:n,onScroll:l}=t[o];n.addEventListener("scroll",l),l()},componentUpdated:function(t,n){t[o].options=Object.assign({},e,n.value);const{onScroll:l,options:{sectionSelector:i}}=t[o];g(t,i),l()},unbind:function(t){const{eventEl:e,onScroll:n}=t[o];e.removeEventListener("scroll",n)}}),t.directive("scroll-spy-active",{inserted:h,componentUpdated:h}),t.directive("scroll-spy-link",{inserted:function(t,n){E(t,Object.assign({},e.link,n.value).selector)},componentUpdated:function(t,n){E(t,Object.assign({},e.link,n.value).selector)},unbind(t){const e=f(t);for(let n=0;n<e.length;n++){const l=e[n],i=p(t),s=y.bind(null,n,i);l[o]||(l[o]={}),l[o].click&&(l.removeEventListener("click",s),delete l[o].click)}}})};"undefined"!=typeof window&&window.Vue&&c(window.Vue);e.a=c}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlMi1zY3JvbGxzcHkvc3JjL2FuaW1hdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZTItc2Nyb2xsc3B5L3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3aW5kb3ciLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsInNldFRpbWVvdXQiLCJhbmltYXRlIiwidXBkYXRlIiwiRWFzaW5nIiwiaW5zdGFsbCIsIlZ1ZSIsIm9wdGlvbnMiLCJpbnN0YWxsZWQiLCJib2R5U2Nyb2xsRWwiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsInZhbCIsInNjcm9sbEhlaWdodCIsImlubmVySGVpZ2h0Iiwic2Nyb2xsU3B5Q29udGV4dCIsInNjcm9sbFNweUVsZW1lbnRzIiwic2Nyb2xsU3B5U2VjdGlvbnMiLCJhY3RpdmVFbGVtZW50IiwiYWN0aXZhYmxlRWxlbWVudHMiLCJjdXJyZW50SW5kZXgiLCJmaW5kRWxlbWVudHMiLCJjb250YWluZXIiLCJzZWxlY3RvciIsImNoaWxkcmVuIiwiaWQiLCJzY3JvbGxTcHlJZCIsImVsZW1lbnRzIiwiZWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2Nyb2xsU3B5SWRGcm9tQW5jZXN0b3JzIiwicHVzaCIsImdldEF0dHJpYnV0ZSIsInNjcm9sbFNweUlkRGVmaW5lZCIsInBhcmVudEVsZW1lbnQiLCJpbml0U2Nyb2xsU2VjdGlvbnMiLCJzZWN0aW9uU2VsZWN0b3IiLCJzY3JvbGxTcHlDb250ZXh0RWwiLCJpZFNjcm9sbFNlY3Rpb25zIiwib2Zmc2V0UGFyZW50IiwiZXZlbnRFbCIsInNjcm9sbEVsIiwiZ2V0T2Zmc2V0VG9wIiwiZWxlbSIsInVudGlsUGFyZW50Iiwib2Zmc2V0VG9wIiwiaXNOYU4iLCJzY3JvbGxUbyIsImluZGV4IiwiY3VycmVudCIsInRhcmdldCIsIm9mZnNldCIsImVhc2luZyIsInRpbWUiLCJUd2VlbiIsInBvc3Rpb24iLCJ0byIsIm9uVXBkYXRlIiwic3RhcnQiLCJzY3JvbGxXaXRoQW5pbWF0aW9uIiwic3RlcHMiLCJ0aW1lbXMiLCJwYXJzZUludCIsImdhcCIsImkiLCJwb3MiLCJzY3JvbGxTcHlBY3RpdmUiLCJiaW5kaW5nIiwiYWN0aXZlT3B0aW9ucyIsIm1hcCIsImluaXRTY3JvbGxBY3RpdmVFbGVtZW50IiwiYXNzaWduIiwiYWN0aXZlIiwidmFsdWUiLCJzY3JvbGxMaW5rQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJpbml0U2Nyb2xsTGluayIsImxpbmtFbGVtZW50cyIsImxlbmd0aCIsImxpbmtFbGVtZW50IiwibGlzdGVuZXIiLCJiaW5kIiwiY2xpY2siLCJhZGRFdmVudExpc3RlbmVyIiwiYWxsb3dOb0FjdGl2ZSIsImRhdGEiLCJjbGFzcyIsImxpbmsiLCJkaXJlY3RpdmUiLCJ2bm9kZSIsImNvbnRleHQiLCIkc2Nyb2xsVG8iLCJvblNjcm9sbCIsIm9mZnNldEhlaWdodCIsImlkQWN0aXZlRWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImtleXMiLCJhZGQiLCJzZXQiLCJpbnNlcnRlZCIsImNvbXBvbmVudFVwZGF0ZWQiLCJ1bmJpbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoicUhBRUEsTUFBTUEsRUFDR0MsT0FBT0QsdUJBQ1pDLE9BQU9DLDZCQUNQRCxPQUFPRSwwQkFDUEYsT0FBT0csd0JBQ1BILE9BQU9JLHlCQUNQLFNBQVVDLEdBQ1JMLE9BQU9NLFdBQVdELEVBQVUsSUFBTyxLQUl6QyxTQUFTRSxJQUNILElBQU1DLFVBQ1JULEVBQXNCUSxHQUkxQlIsRUFBc0JRLEdBRUEsSUFBTUUs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QUM1QyxNQUFNZSxFQUFjRixFQUFhYixHQUMzQnZDLEVBQUtDLEVBQVlFLEdBQ2pCb0QsRUFBV04sRUFBdUJPLEtBQUssS0FBTWpCLEVBQUd2QyxHQUNqRHNELEVBQVloRSxLQUNmZ0UsRUFBWWhFLEdBQW9CLElBRzlCZ0UsRUFBWWhFLEdBQWtCbUUsUUFDaENILEVBQVl3QixvQkFBb0IsUUFBU3ZCLFVBQ2xDRCxFQUFZaEUsR0FBeUIsWUFPaEMsb0JBQVh6QixRQUEwQkEsT0FBT1csS0FDMUNELEVBQVFWLE9BQU9XLEtBR0YiLCJmaWxlIjoibnBtLnZ1ZTItc2Nyb2xsc3B5LmUwOGNmMjFhNTJkMGY1MTNlOGU0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRXRUVOIGZyb20gJ0B0d2VlbmpzL3R3ZWVuLmpzJ1xyXG5cclxuY29uc3QgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApXHJcbiAgICB9XHJcbn0pKClcclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGUgKCkge1xyXG4gIGlmIChUV0VFTi51cGRhdGUoKSkge1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXHJcbiAgfVxyXG59XHJcblxyXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcclxuXHJcbmV4cG9ydCBjb25zdCBFYXNpbmcgPSBUV0VFTi5FYXNpbmdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxXaXRoQW5pbWF0aW9uIChzY3JvbGxFbCwgY3VycmVudCwgdGFyZ2V0LCB0aW1lLCBlYXNpbmcpIHtcclxuICBuZXcgVFdFRU4uVHdlZW4oeyBwb3N0aW9uOiBjdXJyZW50IH0pXHJcbiAgICAudG8oeyBwb3N0aW9uOiB0YXJnZXQgfSwgdGltZSlcclxuICAgIC5lYXNpbmcoZWFzaW5nKVxyXG4gICAgLm9uVXBkYXRlKGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgc2Nyb2xsRWwuc2Nyb2xsVG9wID0gdmFsLnBvc3Rpb25cclxuICAgIH0pXHJcbiAgICAuc3RhcnQoKVxyXG5cclxuICBhbmltYXRlKClcclxufVxyXG4iLCJpbXBvcnQgeyBzY3JvbGxXaXRoQW5pbWF0aW9uLCBFYXNpbmcgfSBmcm9tICcuL2FuaW1hdGUuanMnXHJcblxyXG5jb25zdCBpbnN0YWxsID0gKFZ1ZSwgb3B0aW9ucykgPT4ge1xyXG4gIGlmIChpbnN0YWxsLmluc3RhbGxlZCkgcmV0dXJuXHJcblxyXG4gIGNvbnN0IGJvZHlTY3JvbGxFbCA9IHt9XHJcblxyXG4gIC8vIEZvciBmZiwgaWVcclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYm9keVNjcm9sbEVsLCAnc2Nyb2xsVG9wJywge1xyXG4gICAgZ2V0ICgpIHtcclxuICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcclxuICAgIH0sXHJcbiAgICBzZXQgKHZhbCkge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IHZhbFxyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gdmFsXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGJvZHlTY3JvbGxFbCwgJ3Njcm9sbEhlaWdodCcsIHtcclxuICAgIGdldCAoKSB7XHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGJvZHlTY3JvbGxFbCwgJ29mZnNldEhlaWdodCcsIHtcclxuICAgIGdldCAoKSB7XHJcbiAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBzY3JvbGxTcHlDb250ZXh0ID0gJ0BAc2Nyb2xsU3B5Q29udGV4dCdcclxuICBjb25zdCBzY3JvbGxTcHlFbGVtZW50cyA9IHt9XHJcbiAgY29uc3Qgc2Nyb2xsU3B5U2VjdGlvbnMgPSB7fVxyXG4gIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSB7fVxyXG4gIGNvbnN0IGFjdGl2YWJsZUVsZW1lbnRzID0ge31cclxuICBjb25zdCBjdXJyZW50SW5kZXggPSB7fVxyXG5cclxuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICBhbGxvd05vQWN0aXZlOiBmYWxzZSxcclxuICAgIHNlY3Rpb25TZWxlY3RvcjogbnVsbCxcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICBvZmZzZXQ6IDAsXHJcbiAgICB0aW1lOiA1MDAsXHJcbiAgICBzdGVwczogMzAsXHJcbiAgICBlYXNpbmc6IG51bGwsXHJcbiAgICBhY3RpdmU6IHtcclxuICAgICAgc2VsZWN0b3I6IG51bGwsXHJcbiAgICAgIGNsYXNzOiAnYWN0aXZlJ1xyXG4gICAgfSxcclxuICAgIGxpbms6IHtcclxuICAgICAgc2VsZWN0b3I6ICdhJ1xyXG4gICAgfVxyXG4gIH0sIG9wdGlvbnMgfHwge30pXHJcblxyXG4gIGZ1bmN0aW9uIGZpbmRFbGVtZW50cyAoY29udGFpbmVyLCBzZWxlY3Rvcikge1xyXG4gICAgaWYgKCFzZWxlY3Rvcikge1xyXG4gICAgICByZXR1cm4gY29udGFpbmVyLmNoaWxkcmVuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaWQgPSBzY3JvbGxTcHlJZChjb250YWluZXIpXHJcblxyXG4gICAgY29uc3QgZWxlbWVudHMgPSBbXVxyXG5cclxuICAgIGZvciAoY29uc3QgZWwgb2YgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKSB7XHJcbiAgICAgIC8vIEZpbHRlciBvdXQgZWxlbWVudHMgdGhhdCBhcmUgb3duZWQgYnkgYW5vdGhlciBkaXJlY3RpdmVcclxuICAgICAgaWYgKHNjcm9sbFNweUlkRnJvbUFuY2VzdG9ycyhlbCkgPT09IGlkKSB7XHJcbiAgICAgICAgZWxlbWVudHMucHVzaChlbClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlbGVtZW50c1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2Nyb2xsU3B5SWQgKGVsKSB7XHJcbiAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNjcm9sbC1zcHktaWQnKSB8fCBlbC5nZXRBdHRyaWJ1dGUoJ3Njcm9sbC1zcHktaWQnKSB8fCAnZGVmYXVsdCdcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNjcm9sbFNweUlkRGVmaW5lZCAoZWwpIHtcclxuICAgIHJldHVybiAhIWVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtc3B5LWlkJykgfHwgISFlbC5nZXRBdHRyaWJ1dGUoJ3Njcm9sbC1zcHktaWQnKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2Nyb2xsU3B5SWRGcm9tQW5jZXN0b3JzIChlbCkge1xyXG4gICAgZG8ge1xyXG4gICAgICBpZiAoc2Nyb2xsU3B5SWREZWZpbmVkKGVsKSkge1xyXG4gICAgICAgIHJldHVybiBzY3JvbGxTcHlJZChlbClcclxuICAgICAgfVxyXG4gICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnRcclxuICAgIH0gd2hpbGUgKGVsKVxyXG4gICAgcmV0dXJuICdkZWZhdWx0J1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5pdFNjcm9sbFNlY3Rpb25zIChlbCwgc2VjdGlvblNlbGVjdG9yKSB7XHJcbiAgICBjb25zdCBpZCA9IHNjcm9sbFNweUlkKGVsKVxyXG4gICAgY29uc3Qgc2Nyb2xsU3B5Q29udGV4dEVsID0gZWxbc2Nyb2xsU3B5Q29udGV4dF1cclxuICAgIGNvbnN0IGlkU2Nyb2xsU2VjdGlvbnMgPSBmaW5kRWxlbWVudHMoZWwsIHNlY3Rpb25TZWxlY3RvcilcclxuICAgIHNjcm9sbFNweVNlY3Rpb25zW2lkXSA9IGlkU2Nyb2xsU2VjdGlvbnNcclxuXHJcbiAgICBpZiAoaWRTY3JvbGxTZWN0aW9uc1swXSAmJiBpZFNjcm9sbFNlY3Rpb25zWzBdLm9mZnNldFBhcmVudCAhPT0gZWwpIHtcclxuICAgICAgc2Nyb2xsU3B5Q29udGV4dEVsLmV2ZW50RWwgPSB3aW5kb3dcclxuICAgICAgc2Nyb2xsU3B5Q29udGV4dEVsLnNjcm9sbEVsID0gYm9keVNjcm9sbEVsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRPZmZzZXRUb3AgKGVsZW0sIHVudGlsUGFyZW50KSB7XHJcbiAgICBsZXQgb2Zmc2V0VG9wID0gMFxyXG4gICAgZG8ge1xyXG4gICAgICBpZiAoIWlzTmFOKGVsZW0ub2Zmc2V0VG9wKSkge1xyXG4gICAgICAgIG9mZnNldFRvcCArPSBlbGVtLm9mZnNldFRvcFxyXG4gICAgICB9XHJcbiAgICAgIGVsZW0gPSBlbGVtLm9mZnNldFBhcmVudFxyXG4gICAgfSB3aGlsZSAoZWxlbSAmJiBlbGVtICE9PSB1bnRpbFBhcmVudClcclxuICAgIHJldHVybiBvZmZzZXRUb3BcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNjcm9sbFRvIChlbCwgaW5kZXgpIHtcclxuICAgIGNvbnN0IGlkID0gc2Nyb2xsU3B5SWQoZWwpXHJcbiAgICBjb25zdCBpZFNjcm9sbFNlY3Rpb25zID0gc2Nyb2xsU3B5U2VjdGlvbnNbaWRdXHJcblxyXG4gICAgY29uc3QgeyBzY3JvbGxFbCwgb3B0aW9ucyB9ID0gZWxbc2Nyb2xsU3B5Q29udGV4dF1cclxuICAgIGNvbnN0IGN1cnJlbnQgPSBzY3JvbGxFbC5zY3JvbGxUb3BcclxuXHJcbiAgICBpZiAoaWRTY3JvbGxTZWN0aW9uc1tpbmRleF0pIHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZ2V0T2Zmc2V0VG9wKGlkU2Nyb2xsU2VjdGlvbnNbaW5kZXhdKSAtIG9wdGlvbnMub2Zmc2V0XHJcbiAgICAgIGlmIChvcHRpb25zLmVhc2luZykge1xyXG4gICAgICAgIHNjcm9sbFdpdGhBbmltYXRpb24oc2Nyb2xsRWwsIGN1cnJlbnQsIHRhcmdldCwgb3B0aW9ucy50aW1lLCBvcHRpb25zLmVhc2luZylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdGltZSA9IG9wdGlvbnMudGltZVxyXG4gICAgICBjb25zdCBzdGVwcyA9IG9wdGlvbnMuc3RlcHNcclxuICAgICAgY29uc3QgdGltZW1zID0gcGFyc2VJbnQodGltZSAvIHN0ZXBzKVxyXG4gICAgICBjb25zdCBnYXAgPSB0YXJnZXQgLSBjdXJyZW50XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHN0ZXBzOyBpKyspIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBjdXJyZW50ICsgKGdhcCAvIHN0ZXBzKSAqIGlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHNjcm9sbEVsLnNjcm9sbFRvcCA9IHBvc1xyXG4gICAgICAgIH0sIHRpbWVtcyAqIGkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIFZ1ZS5kaXJlY3RpdmUoJ3Njcm9sbC1zcHknLCB7XHJcbiAgICBiaW5kOiBmdW5jdGlvbiAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XHJcbiAgICAgIGZ1bmN0aW9uIG9uU2Nyb2xsICgpIHtcclxuICAgICAgICBjb25zdCBpZCA9IHNjcm9sbFNweUlkKGVsKVxyXG4gICAgICAgIGNvbnN0IGlkU2Nyb2xsU2VjdGlvbnMgPSBzY3JvbGxTcHlTZWN0aW9uc1tpZF1cclxuXHJcbiAgICAgICAgY29uc3QgeyBzY3JvbGxFbCwgb3B0aW9ucyB9ID0gZWxbc2Nyb2xsU3B5Q29udGV4dF1cclxuXHJcbiAgICAgICAgbGV0IGluZGV4XHJcblxyXG4gICAgICAgIGlmICgoc2Nyb2xsRWwub2Zmc2V0SGVpZ2h0ICsgc2Nyb2xsRWwuc2Nyb2xsVG9wKSA+PSBzY3JvbGxFbC5zY3JvbGxIZWlnaHQgLSAxMCkge1xyXG4gICAgICAgICAgaW5kZXggPSBpZFNjcm9sbFNlY3Rpb25zLmxlbmd0aFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBpZFNjcm9sbFNlY3Rpb25zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZiAoZ2V0T2Zmc2V0VG9wKGlkU2Nyb2xsU2VjdGlvbnNbaW5kZXhdLCBzY3JvbGxFbCkgLSBvcHRpb25zLm9mZnNldCA+IHNjcm9sbEVsLnNjcm9sbFRvcCkge1xyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluZGV4ID0gaW5kZXggLSAxXHJcblxyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAgIGluZGV4ID0gb3B0aW9ucy5hbGxvd05vQWN0aXZlID8gbnVsbCA6IDBcclxuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuYWxsb3dOb0FjdGl2ZSAmJiBpbmRleCA+PSBpZFNjcm9sbFNlY3Rpb25zLmxlbmd0aCAtIDEgJiZcclxuICAgICAgICAgIGdldE9mZnNldFRvcChpZFNjcm9sbFNlY3Rpb25zW2luZGV4XSkgKyBpZFNjcm9sbFNlY3Rpb25zW2luZGV4XS5vZmZzZXRIZWlnaHQgPCBzY3JvbGxFbC5zY3JvbGxUb3ApIHtcclxuICAgICAgICAgIGluZGV4ID0gbnVsbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSBjdXJyZW50SW5kZXhbaWRdKSB7XHJcbiAgICAgICAgICBsZXQgaWRBY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudFtpZF1cclxuICAgICAgICAgIGlmIChpZEFjdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWRBY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoaWRBY3RpdmVFbGVtZW50W3Njcm9sbFNweUNvbnRleHRdLm9wdGlvbnMuY2xhc3MpXHJcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnRbaWRdID0gbnVsbFxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGN1cnJlbnRJbmRleFtpZF0gPSBpbmRleFxyXG4gICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50SW5kZXggIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5rZXlzKGFjdGl2YWJsZUVsZW1lbnRzKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlkQWN0aXZlRWxlbWVudCA9IGFjdGl2YWJsZUVsZW1lbnRzW2lkXVtjdXJyZW50SW5kZXhbaWRdXVxyXG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50W2lkXSA9IGlkQWN0aXZlRWxlbWVudFxyXG5cclxuICAgICAgICAgICAgaWYgKGlkQWN0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgIGlkQWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGlkQWN0aXZlRWxlbWVudFtzY3JvbGxTcHlDb250ZXh0XS5vcHRpb25zLmNsYXNzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSkge1xyXG4gICAgICAgICAgICBWdWUuc2V0KHZub2RlLmNvbnRleHQsIG9wdGlvbnMuZGF0YSwgaW5kZXgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB2bm9kZS5jb250ZXh0LiRzY3JvbGxUbyA9IHNjcm9sbFRvLmJpbmQobnVsbCwgZWwpXHJcblxyXG4gICAgICBjb25zdCBpZCA9IHNjcm9sbFNweUlkKGVsKVxyXG5cclxuICAgICAgZWxbc2Nyb2xsU3B5Q29udGV4dF0gPSB7XHJcbiAgICAgICAgb25TY3JvbGwsXHJcbiAgICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgYmluZGluZy52YWx1ZSksXHJcbiAgICAgICAgaWQ6IHNjcm9sbFNweUlkKGVsKSxcclxuICAgICAgICBldmVudEVsOiBlbCxcclxuICAgICAgICBzY3JvbGxFbDogZWxcclxuICAgICAgfVxyXG5cclxuICAgICAgc2Nyb2xsU3B5RWxlbWVudHNbaWRdID0gZWxcclxuICAgICAgZGVsZXRlIGN1cnJlbnRJbmRleFtpZF1cclxuICAgIH0sXHJcbiAgICBpbnNlcnRlZDogZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBvcHRpb25zOiB7IHNlY3Rpb25TZWxlY3RvciB9XHJcbiAgICAgIH0gPSBlbFtzY3JvbGxTcHlDb250ZXh0XVxyXG4gICAgICBpbml0U2Nyb2xsU2VjdGlvbnMoZWwsIHNlY3Rpb25TZWxlY3RvcilcclxuICAgICAgY29uc3QgeyBldmVudEVsLCBvblNjcm9sbCB9ID0gZWxbc2Nyb2xsU3B5Q29udGV4dF1cclxuICAgICAgZXZlbnRFbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbClcclxuXHJcbiAgICAgIG9uU2Nyb2xsKClcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRVcGRhdGVkOiBmdW5jdGlvbiAoZWwsIGJpbmRpbmcpIHtcclxuICAgICAgZWxbc2Nyb2xsU3B5Q29udGV4dF0ub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIGJpbmRpbmcudmFsdWUpXHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBvblNjcm9sbCwgb3B0aW9uczogeyBzZWN0aW9uU2VsZWN0b3IgfVxyXG4gICAgICB9ID0gZWxbc2Nyb2xsU3B5Q29udGV4dF1cclxuXHJcbiAgICAgIGluaXRTY3JvbGxTZWN0aW9ucyhlbCwgc2VjdGlvblNlbGVjdG9yKVxyXG4gICAgICBvblNjcm9sbCgpXHJcbiAgICB9LFxyXG4gICAgdW5iaW5kOiBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgY29uc3QgeyBldmVudEVsLCBvblNjcm9sbCB9ID0gZWxbc2Nyb2xsU3B5Q29udGV4dF1cclxuICAgICAgZXZlbnRFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbClcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBmdW5jdGlvbiBzY3JvbGxTcHlBY3RpdmUgKGVsLCBiaW5kaW5nKSB7XHJcbiAgICBjb25zdCBhY3RpdmVPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucy5hY3RpdmUsIGJpbmRpbmcudmFsdWUpXHJcbiAgICBpbml0U2Nyb2xsQWN0aXZlRWxlbWVudChlbCwgYWN0aXZlT3B0aW9ucylcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRTY3JvbGxBY3RpdmVFbGVtZW50IChlbCwgYWN0aXZlT3B0aW9ucykge1xyXG4gICAgY29uc3QgaWQgPSBzY3JvbGxTcHlJZChlbClcclxuICAgIGFjdGl2YWJsZUVsZW1lbnRzW2lkXSA9IGZpbmRFbGVtZW50cyhlbCwgYWN0aXZlT3B0aW9ucy5zZWxlY3RvcilcclxuICAgIGNvbnN0IGFyciA9IFsuLi5hY3RpdmFibGVFbGVtZW50c1tpZF1dXHJcbiAgICBhcnIubWFwKGVsID0+IHtcclxuICAgICAgZWxbc2Nyb2xsU3B5Q29udGV4dF0gPSB7XHJcbiAgICAgICAgb3B0aW9uczogYWN0aXZlT3B0aW9uc1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgVnVlLmRpcmVjdGl2ZSgnc2Nyb2xsLXNweS1hY3RpdmUnLCB7XHJcbiAgICBpbnNlcnRlZDogc2Nyb2xsU3B5QWN0aXZlLFxyXG4gICAgY29tcG9uZW50VXBkYXRlZDogc2Nyb2xsU3B5QWN0aXZlXHJcbiAgfSlcclxuXHJcbiAgZnVuY3Rpb24gc2Nyb2xsTGlua0NsaWNrSGFuZGxlciAoaW5kZXgsIHNjcm9sbFNweUlkLCBldmVudCkge1xyXG4gICAgc2Nyb2xsVG8oc2Nyb2xsU3B5RWxlbWVudHNbc2Nyb2xsU3B5SWRdLCBpbmRleClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRTY3JvbGxMaW5rIChlbCwgc2VsZWN0b3IpIHtcclxuICAgIGNvbnN0IGlkID0gc2Nyb2xsU3B5SWQoZWwpXHJcblxyXG4gICAgY29uc3QgbGlua0VsZW1lbnRzID0gZmluZEVsZW1lbnRzKGVsLCBzZWxlY3RvcilcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBsaW5rRWxlbWVudCA9IGxpbmtFbGVtZW50c1tpXVxyXG5cclxuICAgICAgY29uc3QgbGlzdGVuZXIgPSBzY3JvbGxMaW5rQ2xpY2tIYW5kbGVyLmJpbmQobnVsbCwgaSwgaWQpXHJcbiAgICAgIGlmICghbGlua0VsZW1lbnRbc2Nyb2xsU3B5Q29udGV4dF0pIHtcclxuICAgICAgICBsaW5rRWxlbWVudFtzY3JvbGxTcHlDb250ZXh0XSA9IHt9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghbGlua0VsZW1lbnRbc2Nyb2xsU3B5Q29udGV4dF0uY2xpY2spIHtcclxuICAgICAgICBsaW5rRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyKVxyXG4gICAgICAgIGxpbmtFbGVtZW50W3Njcm9sbFNweUNvbnRleHRdLmNsaWNrID0gbGlzdGVuZXJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgVnVlLmRpcmVjdGl2ZSgnc2Nyb2xsLXNweS1saW5rJywge1xyXG4gICAgaW5zZXJ0ZWQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZykge1xyXG4gICAgICBjb25zdCBsaW5rT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMubGluaywgYmluZGluZy52YWx1ZSlcclxuICAgICAgaW5pdFNjcm9sbExpbmsoZWwsIGxpbmtPcHRpb25zLnNlbGVjdG9yKVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudFVwZGF0ZWQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZykge1xyXG4gICAgICBjb25zdCBsaW5rT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMubGluaywgYmluZGluZy52YWx1ZSlcclxuICAgICAgaW5pdFNjcm9sbExpbmsoZWwsIGxpbmtPcHRpb25zLnNlbGVjdG9yKVxyXG4gICAgfSxcclxuICAgIHVuYmluZCAoZWwpIHtcclxuICAgICAgY29uc3QgbGlua0VsZW1lbnRzID0gZmluZEVsZW1lbnRzKGVsKVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBsaW5rRWxlbWVudCA9IGxpbmtFbGVtZW50c1tpXVxyXG4gICAgICAgIGNvbnN0IGlkID0gc2Nyb2xsU3B5SWQoZWwpXHJcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBzY3JvbGxMaW5rQ2xpY2tIYW5kbGVyLmJpbmQobnVsbCwgaSwgaWQpXHJcbiAgICAgICAgaWYgKCFsaW5rRWxlbWVudFtzY3JvbGxTcHlDb250ZXh0XSkge1xyXG4gICAgICAgICAgbGlua0VsZW1lbnRbc2Nyb2xsU3B5Q29udGV4dF0gPSB7fVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxpbmtFbGVtZW50W3Njcm9sbFNweUNvbnRleHRdLmNsaWNrKSB7XHJcbiAgICAgICAgICBsaW5rRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyKVxyXG4gICAgICAgICAgZGVsZXRlIGxpbmtFbGVtZW50W3Njcm9sbFNweUNvbnRleHRdWydjbGljayddXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcclxuICBpbnN0YWxsKHdpbmRvdy5WdWUpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnN0YWxsXHJcblxyXG5leHBvcnQge1xyXG4gIEVhc2luZyxcclxuICBpbnN0YWxsXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==