webpackJsonp([1],[,function(t,e,n){"use strict";var a=n(11);e.a={components:{VueTribute:a.a},data:function(){return{options:{values:[{key:"Collin Henderson",value:"syropian"},{key:"Sarah Drasner",value:"sarah_edo"},{key:"Evan You",value:"youyuxi"},{key:"Adam Wathan",value:"adamwathan"}]}}},methods:{append:function(){var t=Math.random().toString(36).slice(2);this.options.values.push({key:t,value:t})}}}},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),i=n(8);new a.a({el:"#app",render:function(t){return t(i.a)}})},,,,,function(t,e,n){"use strict";function a(t){n(9)}var i=n(1),r=n(13),o=n(10),u=a,s=o(i.a,r.a,!1,u,null,null);e.a=s.exports},function(t,e){},,function(t,e,n){"use strict";var a=n(12),i=n.n(a),r={name:"vue-tribute",props:{options:{type:Object,required:!0}},data:function(){return{tribute:null}},mounted:function(){var t=this,e=this.$slots.default[0].elm;this.tribute=new i.a(this.options),this.tribute.attach(e),e.addEventListener("tribute-replaced",function(e){t.$emit("tribute-replaced",e)}),e.addEventListener("tribute-no-match",function(e){t.$emit("tribute-no-match",e)})},render:function(t){return t("div",{staticClass:"v-tribute"},this.$slots.default)}};"undefined"!=typeof window&&window.Vue&&window.Vue.component(r.name,r),e.a=r},,function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("vue-tribute Demo")]),t._v(" "),n("h3",[t._v("Simple text input")]),t._v(" "),n("vue-tribute",{attrs:{options:t.options}},[n("input",{attrs:{type:"text",placeholder:"@..."}})]),t._v(" "),n("br"),t._v(" "),n("h3",[t._v("Textarea")]),t._v(" "),n("vue-tribute",{attrs:{options:t.options}},[n("textarea",{attrs:{placeholder:"@..."}})]),t._v(" "),n("br"),t._v(" "),n("h3",[t._v("contenteditable element")]),t._v(" "),n("vue-tribute",{attrs:{options:t.options}},[n("div",{staticClass:"content-editable",attrs:{contenteditable:"true",placeholder:"@..."}})]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"btn",on:{click:t.append}},[t._v("Append New Item")])],1)},i=[],r={render:a,staticRenderFns:i};e.a=r}],[2]);
//# sourceMappingURL=client.2ed01ca6.js.map