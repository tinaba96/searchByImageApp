var __values=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],i=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};!function(){function t(t){function r(){if(t.querySelector('[aria-pressed="true"]')){var r=t.querySelector('[aria-pressed="true"]').parentNode,i=r.parentNode,a=Array.prototype.indexOf.call(i.children,r);e.announce("Slide "+(a+1)+" displayed")}}var i,a,l,o,n,u,s,b,c,d,v,y,A,f;if(t.slick){var p=t.slick.options;if(p&&p.autoplay){var g=function(){t.slick.paused||"undefined"==typeof jQuery||jQuery(t).slick("slickPause")},m=function(){t.slick.paused&&"undefined"!=typeof jQuery&&jQuery(t).slick("slickPlay")};document.addEventListener("userway:feature_enabled_s13",function(){g()}),document.addEventListener("userway:feature_disabled_s13",function(){m()}),"1"===localStorage.getItem("userway-s13")&&g(),"0"===localStorage.getItem("userway-s13")&&m()}}"region"!==t.getAttribute("role")&&t.setAttribute("role","region"),"carousel"!==t.getAttribute("aria-roledescription")&&t.setAttribute("aria-roledescription","carousel");var h=t.querySelectorAll(".slick-slide");try{for(var x=__values(h),_=x.next();!_.done;_=x.next()){var k=_.value;"group"!==k.getAttribute("role")&&k.setAttribute("role","group"),"slide"!==k.getAttribute("aria-roledescription")&&k.setAttribute("aria-roledescription","slide"),k.classList.contains("slick-active")||("-1"!==k.getAttribute("tabindex")&&k.setAttribute("tabindex","-1"),"true"!==k.getAttribute("aria-hidden")&&k.setAttribute("aria-hidden","true")),k.classList.contains("slick-active")&&(k.removeAttribute("tabindex"),k.removeAttribute("aria-hidden"))}}catch(t){i={error:t}}finally{try{_&&!_.done&&(a=x.return)&&a.call(x)}finally{if(i)throw i.error}}var w=t.querySelectorAll("[aria-live]");try{for(var S=__values(w),L=S.next();!L.done;L=S.next()){L.value.removeAttribute("aria-live")}}catch(t){l={error:t}}finally{try{L&&!L.done&&(o=S.return)&&o.call(S)}finally{if(l)throw l.error}}var q=t.querySelectorAll("[aria-describedby]");try{for(var E=__values(q),N=E.next();!N.done;N=E.next()){N.value.removeAttribute("aria-describedby")}}catch(t){n={error:t}}finally{try{N&&!N.done&&(u=E.return)&&u.call(E)}finally{if(n)throw n.error}}var j=t.querySelectorAll(".slick-dots > li");try{for(var T=__values(j),O=T.next();!O.done;O=T.next()){var P=O.value;P.removeAttribute("aria-hidden"),P.removeAttribute("aria-selected"),P.removeAttribute("aria-controls")}}catch(t){s={error:t}}finally{try{O&&!O.done&&(b=T.return)&&b.call(T)}finally{if(s)throw s.error}}var Q=t.querySelectorAll(".slick-dots > li > button");try{for(var W=__values(Q),z=W.next();!z.done;z=W.next()){var C=z.value;"button"!==C.getAttribute("role")&&C.setAttribute("role","button"),"button"!==C.getAttribute("type")&&C.setAttribute("type","button"),C.removeAttribute("tabindex"),C.removeAttribute("aria-selected");var I=C.parentNode.classList.contains("slick-active").toString();C.getAttribute("aria-pressed")!==I&&C.setAttribute("aria-pressed",I),C.getAttribute("aria-current")!==I&&C.setAttribute("aria-current",I);var U=C.parentNode,F=U.parentNode,M=Array.prototype.indexOf.call(F.children,U),B="Carousel Slide "+(M+1);B!==C.getAttribute("aria-label")&&C.setAttribute("aria-label",B)}}catch(t){c={error:t}}finally{try{z&&!z.done&&(d=W.return)&&d.call(W)}finally{if(c)throw c.error}}var D=t.querySelectorAll("button.slick-arrow");try{for(var G=__values(D),H=G.next();!H.done;H=G.next()){var J=H.value;J.removeAttribute("tabindex"),J.classList.contains("slick-disabled")&&"true"!==J.getAttribute("aria-disabled")&&J.setAttribute("aria-disabled","true"),J.classList.contains("slick-disabled")||J.removeAttribute("aria-disabled")}}catch(t){v={error:t}}finally{try{H&&!H.done&&(y=G.return)&&y.call(G)}finally{if(v)throw v.error}}var K=t.querySelector("button.slick-arrow.slick-prev");K&&"Previous Slide"!==K.getAttribute("aria-label")&&(K.setAttribute("aria-label","Previous Slide"),K.addEventListener("click",r)),K&&"button"!==K.getAttribute("role")&&K.setAttribute("role","button"),K&&"button"!==K.getAttribute("type")&&K.setAttribute("type","button");var R=t.querySelector("button.slick-arrow.slick-next");R&&"Next Slide"!==R.getAttribute("aria-label")&&(R.setAttribute("aria-label","Next Slide"),R.addEventListener("click",r)),R&&"button"!==R.getAttribute("role")&&R.setAttribute("role","button"),R&&"button"!==R.getAttribute("type")&&R.setAttribute("type","button");var V=t.querySelectorAll("button[class*=photoswipe]");try{for(var X=__values(V),Y=X.next();!Y.done;Y=X.next()){var Z=Y.value;"zoom image"!==Z.getAttribute("aria-label")&&Z.setAttribute("aria-label","zoom image")}}catch(t){A={error:t}}finally{try{Y&&!Y.done&&(f=X.return)&&f.call(X)}finally{if(A)throw A.error}}e.loopThroughElements(".pswp button.pswp__button--arrow--left",function(t){t.removeAttribute("tabindex"),t.removeAttribute("title"),"previous image"!==t.getAttribute("aria-label")&&t.setAttribute("aria-label","previous image")}),e.loopThroughElements(".pswp button.pswp__button--arrow--right",function(t){t.removeAttribute("tabindex"),t.removeAttribute("title"),"next image"!==t.getAttribute("aria-label")&&t.setAttribute("aria-label","next image")}),e.loopThroughElements(".pswp button.pswp__button--close",function(t){t.removeAttribute("tabindex"),t.removeAttribute("title"),"close"!==t.getAttribute("aria-label")&&t.setAttribute("aria-label","close")})}var e=UserWayWidgetApp.getLib("remediation_util"),r=UserWayWidgetApp.getLib("remediationConfig").slickSlider;(null===r||void 0===r?void 0:r.enabled)&&e.loopThroughElements(".slick-slider:not(.slick-slide)",function(e){t(e),new MutationObserver(function(){t(e)}).observe(e,{attributes:!0,attributeFilter:["class"],childList:!0,subtree:!0})})}();