(function(e){function t(t){for(var r,i,s=t[0],o=t[1],u=t[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&f.push(c[i][0]),c[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var o=n[s];0!==c[o]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/rick-morty/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=o;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0af2":function(e,t,n){},"0ec2":function(e,t,n){"use strict";n("dbf6")},"3cac":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"container"};function a(e,t){var n=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["e"])("div",c,[Object(r["g"])(n)])}n("8c37");var i=n("6b0d"),s=n.n(i);const o={},u=s()(o,[["render",a]]);var l=u,d=n("1da1"),f=(n("96cf"),n("99af"),n("d81d"),n("fb6a"),n("159b"),n("b0c0"),n("5502")),p=n("bc3a"),b=n.n(p),h=n("bfa9"),O=new h["a"]({storage:window.localStorage}),j=Object(f["a"])({state:{characters:[],filtered:[]},getters:{getCharacters:function(e){return e.characters},getFiltered:function(e){return e.filtered}},mutations:{SET_CHARACTERS:function(e,t){e.characters=e.characters.concat(t.results.map((function(e){return e.lastFiveEpisodes=[],e})))},SET_FILTERED:function(e,t){e.filtered=e.filtered.concat(t.results.map((function(e){return e.lastFiveEpisodes=[],e})))},PUT_INTO_CHARACTERS:function(e,t){e.characters.map((function(e){return t.heroID===e.id&&e.lastFiveEpisodes.push(t),e}))},PUT_INTO_FILTERED:function(e,t){e.filtered.map((function(e){return t.heroID===e.id&&e.lastFiveEpisodes.push(t),e}))},CLEAR_FILTERED:function(e){e.filtered=[]}},actions:{fetchCharacters:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function n(){var r,c,a,i,s,o,u,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,c=t.page,a=t.input,i=t.select,""===a&&""===i){n.next=16;break}return n.prev=3,n.next=6,b()("https://rickandmortyapi.com/api/character/?page=".concat(c,"&name=").concat(a,"&status=").concat(i));case 6:s=n.sent,o=s.data,r("SET_FILTERED",o),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](3),console.log(n.t0);case 14:n.next=27;break;case 16:return n.prev=16,n.next=19,b()("https://rickandmortyapi.com/api/character/?page=".concat(c));case 19:u=n.sent,l=u.data,r("SET_CHARACTERS",l),n.next=27;break;case 24:n.prev=24,n.t1=n["catch"](16),console.log(n.t1);case 27:case"end":return n.stop()}}),n,null,[[3,11],[16,24]])})))()},fetchLastFiveEpisodes:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function n(){var r,c,a,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,c=t.episodes,a=t.id,i=t.isFilter,n.prev=2,s=c.slice(-5),n.next=6,s.forEach(function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(t);case 2:n=e.sent,c=n.data,r(i?"PUT_INTO_FILTERED":"PUT_INTO_CHARACTERS",{name:c.name,heroID:a,id:c.id});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](2),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[2,8]])})))()},fetchHeroInfoByUrl:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b()(t);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},fetchHeroInfoById:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b()("https://rickandmortyapi.com/api/character/".concat(t));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},fetchEpisodeInfo:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b()("https://rickandmortyapi.com/api/episode/".concat(t));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},plugins:[O.plugin]}),v=n("6c02"),m=function(e){return Object(r["s"])("data-v-d3ee04f8"),e=e(),Object(r["q"])(),e},g={class:"main-wrapper"},_={class:"header"},w=m((function(){return Object(r["f"])("h1",{class:"main-title"},"Characters",-1)})),k={class:"form"},x=m((function(){return Object(r["f"])("option",{class:"select__item",value:"",selected:""},"All",-1)})),y=m((function(){return Object(r["f"])("option",{class:"select__item",value:"alive"},"Alive",-1)})),E=m((function(){return Object(r["f"])("option",{class:"select__item",value:"dead"},"Dead",-1)})),R=m((function(){return Object(r["f"])("option",{class:"select__item",value:"unknown"},"Unknown",-1)})),C=[x,y,E,R],F=m((function(){return Object(r["f"])("button",{class:"form-btn"},"Filter",-1)})),I={class:"main-content"},T={class:"person-cards"},A={key:0,class:"loading"};function L(e,t,n,c,a,i){var s=Object(r["w"])("person"),o=Object(r["w"])("loading");return Object(r["p"])(),Object(r["e"])("div",g,[Object(r["f"])("header",_,[w,Object(r["f"])("div",k,[Object(r["f"])("form",{class:"input",onSubmit:t[2]||(t[2]=Object(r["E"])((function(e){return i.setFilter()}),["prevent"]))},[Object(r["D"])(Object(r["f"])("input",{class:"input__name",type:"text",placeholder:"name","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.inputArea=e})},null,512),[[r["B"],a.inputArea]]),Object(r["D"])(Object(r["f"])("select",{name:"status",class:"status","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.selectConfig=e})},C,512),[[r["A"],a.selectConfig]]),F],32),Object(r["f"])("button",{class:"form-btn reset",onClick:t[3]||(t[3]=function(e){return i.removeFilter()})},"Reset")])]),Object(r["f"])("main",I,[Object(r["f"])("ul",T,[(Object(r["p"])(!0),Object(r["e"])(r["a"],null,Object(r["v"])(a.characters,(function(e){return Object(r["p"])(),Object(r["e"])("li",{class:"person-item",key:e.id},[Object(r["g"])(s,{hero:e,isFilter:a.isFilter},null,8,["hero","isFilter"])])})),128))]),a.loading?(Object(r["p"])(),Object(r["e"])("div",A,[Object(r["g"])(o)])):Object(r["d"])("",!0)])])}var P=n("5530"),S=function(e){return Object(r["s"])("data-v-77f9ee6d"),e=e(),Object(r["q"])(),e},H={class:"card"},D={class:"card__photo"},U=["src"],B={class:"card__content"},M={class:"card__header"},$={class:"card__species"},q={class:"card__episodes episodes"},N=S((function(){return Object(r["f"])("h2",{class:"episodes__title"},"Last 5 episodes",-1)})),J={key:0,class:"episodes__list"},V=["onClick"];function z(e,t,n,c,a,i){return Object(r["p"])(),Object(r["e"])("div",H,[Object(r["f"])("div",D,[Object(r["f"])("img",{src:n.hero.image,alt:"",class:"card__img"},null,8,U)]),Object(r["f"])("div",B,[Object(r["f"])("div",M,[Object(r["f"])("div",{class:"card__name",onClick:t[0]||(t[0]=function(t){return e.$router.push({name:"character",params:{id:n.hero.id}})})},Object(r["y"])(n.hero.name),1),Object(r["f"])("div",$,Object(r["y"])(n.hero.species),1)]),Object(r["f"])("section",q,[N,a.lastFiveEpisodes?(Object(r["p"])(),Object(r["e"])("ul",J,[(Object(r["p"])(!0),Object(r["e"])(r["a"],null,Object(r["v"])(a.lastFiveEpisodes,(function(t){return Object(r["p"])(),Object(r["e"])("li",{class:"episodes__item",key:t.id,onClick:function(n){return e.$router.push({name:"episode",params:{id:t.id}})}},Object(r["y"])(t.name),9,V)})),128))])):Object(r["d"])("",!0)])])])}var G={name:"person",data:function(){return{lastFiveEpisodes:null}},props:{hero:Object,isFilter:Boolean},methods:Object(P["a"])({},Object(f["b"])(["fetchLastFiveEpisodes"])),created:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.lastFiveEpisodes=e.hero.lastFiveEpisodes,0!==e.hero.lastFiveEpisodes.length){t.next=4;break}return t.next=4,e.fetchLastFiveEpisodes({episodes:e.hero.episode,id:e.hero.id,isFilter:e.isFilter});case 4:case"end":return t.stop()}}),t)})))()}};n("b905");const K=s()(G,[["render",z],["__scopeId","data-v-77f9ee6d"]]);var Q=K,W=function(e){return Object(r["s"])("data-v-c7ceb2e8"),e=e(),Object(r["q"])(),e},X={class:"loading-container"},Y=W((function(){return Object(r["f"])("div",{class:"dot"},null,-1)})),Z=W((function(){return Object(r["f"])("div",{class:"dot"},null,-1)})),ee=W((function(){return Object(r["f"])("div",{class:"dot"},null,-1)})),te=[Y,Z,ee];function ne(e,t,n,c,a,i){return Object(r["p"])(),Object(r["e"])("div",X,te)}var re={name:"loading"};n("652a");const ce=s()(re,[["render",ne],["__scopeId","data-v-c7ceb2e8"]]);var ae=ce,ie={data:function(){return{page:1,filterPage:1,loading:!1,inputArea:"",selectConfig:"",characters:[],isFilter:!1}},components:{person:Q,loading:ae},computed:Object(P["a"])({},Object(f["c"])(["getCharacters","getFiltered"])),methods:Object(P["a"])(Object(P["a"])(Object(P["a"])({},Object(f["b"])(["fetchCharacters","fetchFiltered"])),Object(f["d"])(["CLEAR_FILTERED"])),{},{setFilter:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""===e.inputArea&&""===e.selectConfig){t.next=7;break}return e.isFilter=!0,e.filterPage=1,t.next=5,e.fetchCharacters({page:e.filterPage,input:e.inputArea,select:e.selectConfig});case 5:e.characters=e.getFiltered,e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()},removeFilter:function(){this.isFilter=!1,this.inputArea="",this.selectConfig="",this.characters=this.getCharacters,this.filterPage=1,this.CLEAR_FILTERED()},loadMore:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=document.documentElement.scrollTop,r=document.documentElement.scrollHeight,c=document.documentElement.clientHeight,!(r-c<=n)){t.next=16;break}if(e.loading=!0,!e.isFilter){t.next=12;break}return++e.filterPage,t.next=9,e.fetchCharacters({page:e.filterPage,input:e.inputArea,select:e.selectConfig});case 9:e.characters=e.getFiltered,t.next=16;break;case 12:return++e.page,t.next=15,e.fetchCharacters({page:e.page,input:e.inputArea,select:e.selectConfig});case 15:e.characters=e.getCharacters;case 16:case"end":return t.stop()}}),t)})))()}}),created:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.characters=e.getCharacters,e.CLEAR_FILTERED(),0!==e.characters.length){t.next=7;break}return e.loading=!0,t.next=6,e.fetchCharacters({page:e.page,input:e.inputArea,select:e.selectConfig});case 6:e.characters=e.getCharacters;case 7:window.addEventListener("scroll",e.loadMore);case 8:case"end":return t.stop()}}),t)})))()},unmounted:function(){window.removeEventListener("scroll",this.loadMore)}};n("5760");const se=s()(ie,[["render",L],["__scopeId","data-v-d3ee04f8"]]);var oe=se,ue=function(e){return Object(r["s"])("data-v-059719f6"),e=e(),Object(r["q"])(),e},le={class:"main-wrapper"},de={key:0,class:"loading"},fe={key:1,class:"character"},pe={class:"header"},be={key:0,class:"main-title"},he={key:0,class:"main-content"},Oe={class:"avatar"},je=["src"],ve={class:"info"},me=ue((function(){return Object(r["f"])("div",{class:"info__text"},"Species",-1)})),ge={class:"info__value"},_e=ue((function(){return Object(r["f"])("div",{class:"info__text"},"Status",-1)})),we={class:"info__value"},ke=ue((function(){return Object(r["f"])("div",{class:"info__text"},"Location",-1)})),xe={class:"info__value"};function ye(e,t,n,c,a,i){var s=Object(r["w"])("loading");return Object(r["p"])(),Object(r["e"])("div",le,[a.loading?(Object(r["p"])(),Object(r["e"])("div",de,[Object(r["g"])(s)])):(Object(r["p"])(),Object(r["e"])("div",fe,[Object(r["f"])("div",pe,[a.hero?(Object(r["p"])(),Object(r["e"])("h1",be,Object(r["y"])(a.hero.name),1)):Object(r["d"])("",!0),Object(r["f"])("div",{class:"home",onClick:t[0]||(t[0]=function(t){return e.$router.push({name:"index"})})},"Home")]),a.hero?(Object(r["p"])(),Object(r["e"])("main",he,[Object(r["f"])("div",Oe,[Object(r["f"])("img",{src:a.hero.image,alt:""},null,8,je)]),Object(r["f"])("div",ve,[me,Object(r["f"])("div",ge,Object(r["y"])(a.hero.species),1),_e,Object(r["f"])("div",we,Object(r["y"])(a.hero.status),1),ke,Object(r["f"])("div",xe,Object(r["y"])(a.hero.location.name),1)])])):Object(r["d"])("",!0)]))])}var Ee={data:function(){return{hero:null,loading:!1}},components:{loading:ae},methods:Object(P["a"])({},Object(f["b"])(["fetchHeroInfoById"])),created:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.fetchHeroInfoById(e.$route.params.id);case 3:e.hero=t.sent,e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()}};n("0ec2");const Re=s()(Ee,[["render",ye],["__scopeId","data-v-059719f6"]]);var Ce=Re,Fe={class:"main-wrapper"},Ie={key:0,class:"loading"},Te={key:1,class:"episode"},Ae={class:"header"},Le={key:0,class:"main-title"},Pe={key:0,class:"main-content"},Se={class:"hero__list"},He={class:"text"},De={class:"ep-heroes"},Ue=["onClick"],Be={class:"hero__photo"},Me=["src"],$e={class:"hero__name"};function qe(e,t,n,c,a,i){var s=Object(r["w"])("loading");return Object(r["p"])(),Object(r["e"])("div",Fe,[a.loading?(Object(r["p"])(),Object(r["e"])("div",Ie,[Object(r["g"])(s)])):(Object(r["p"])(),Object(r["e"])("div",Te,[Object(r["f"])("div",Ae,[a.episode?(Object(r["p"])(),Object(r["e"])("h1",Le,"Hero list")):Object(r["d"])("",!0),Object(r["f"])("div",{class:"home",onClick:t[0]||(t[0]=function(t){return e.$router.push({name:"index"})})},"Home")]),a.episode?(Object(r["p"])(),Object(r["e"])("main",Pe,[Object(r["f"])("div",Se,Object(r["y"])(a.episode.name),1),Object(r["f"])("div",He,"Released "+Object(r["y"])(a.episode.air_date),1),Object(r["f"])("ul",De,[(Object(r["p"])(!0),Object(r["e"])(r["a"],null,Object(r["v"])(a.heros,(function(t){return Object(r["p"])(),Object(r["e"])("li",{class:"ep-hero",key:t.id,onClick:function(n){return e.$router.push({name:"character",params:{id:t.id}})}},[Object(r["f"])("div",Be,[Object(r["f"])("img",{src:t.image,alt:"",class:"hero__img"},null,8,Me)]),Object(r["f"])("div",$e,Object(r["y"])(t.name),1)],8,Ue)})),128))])])):Object(r["d"])("",!0)]))])}var Ne=n("b85c"),Je={data:function(){return{episode:null,loading:!1,heros:[]}},components:{loading:ae},methods:Object(P["a"])({},Object(f["b"])(["fetchEpisodeInfo","fetchHeroInfoByUrl"])),created:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.fetchEpisodeInfo(e.$route.params.id);case 3:if(e.episode=t.sent,0!==e.heros.length){t.next=25;break}n=Object(Ne["a"])(e.episode.characters),t.prev=6,n.s();case 8:if((r=n.n()).done){t.next=17;break}return c=r.value,t.t0=e.heros,t.next=13,e.fetchHeroInfoByUrl(c);case 13:t.t1=t.sent,t.t0.push.call(t.t0,t.t1);case 15:t.next=8;break;case 17:t.next=22;break;case 19:t.prev=19,t.t2=t["catch"](6),n.e(t.t2);case 22:return t.prev=22,n.f(),t.finish(22);case 25:e.loading=!1;case 26:case"end":return t.stop()}}),t,null,[[6,19,22,25]])})))()}};n("d578");const Ve=s()(Je,[["render",qe],["__scopeId","data-v-1ce30f23"]]);var ze=Ve,Ge=[{path:"/",name:"index",component:oe},{path:"/character/:id",name:"character",component:Ce},{path:"/episode/:id",name:"episode",component:ze}],Ke=Object(v["a"])({history:Object(v["b"])("/rick-morty/"),routes:Ge}),Qe=Ke;Object(r["c"])(l).use(Qe).use(j).mount("#app")},5760:function(e,t,n){"use strict";n("5d47")},"5d47":function(e,t,n){},"652a":function(e,t,n){"use strict";n("bf30")},"8c37":function(e,t,n){"use strict";n("3cac")},b905:function(e,t,n){"use strict";n("0af2")},bf30:function(e,t,n){},d578:function(e,t,n){"use strict";n("dd89")},dbf6:function(e,t,n){},dd89:function(e,t,n){}});
//# sourceMappingURL=app.6ce2da0e.js.map