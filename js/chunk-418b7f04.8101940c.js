(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-418b7f04"],{"0e5c":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form_part_2"},[r("div",{staticClass:"form_part_title"},[e._v("運送方式")]),r("div",{staticClass:"form_part-2"},[r("div",{staticClass:"form_part-2_deliver_list"},[r("div",{staticClass:"form_part-2_deliver_item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.delivery,expression:"user.delivery"}],staticClass:"form_part-2_deliver_item_btn",attrs:{name:"ta-gender",type:"radio",checked:""},domProps:{value:0,checked:e._q(e.user.delivery,0)},on:{change:function(t){return e.$set(e.user,"delivery",0)}}}),e._m(0)])]),r("div",{staticClass:"form_part-2_deliver_list"},[r("div",{staticClass:"form_part-2_deliver_item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.delivery,expression:"user.delivery"}],staticClass:"form_part-2_deliver_item_btn",attrs:{name:"ta-gender",type:"radio"},domProps:{value:500,checked:e._q(e.user.delivery,500)},on:{change:function(t){return e.$set(e.user,"delivery",500)}}}),e._m(1)])]),r("div",{staticClass:"form_part-2_btn"},[r("div",{staticClass:"form_part-2_btn-prev btn-prev",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.PrevStep.apply(null,arguments)}}},[e._v(" ← 上一步 ")]),r("div",{staticClass:"form_part-2_btn-next btn-next",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.NextStep.apply(null,arguments)}}},[e._v(" 下一步 → ")])])])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form_part-2_deliver_detail"},[r("div",{staticClass:"form_part-2_deliver-info"},[r("h4",[e._v("標準運送")]),r("p",[e._v("約 3~7 的工作天")])]),r("div",{staticClass:"form_part-2_deliver_info_fee"},[r("p",[e._v("免費")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form_part-2_deliver_detail"},[r("div",{staticClass:"form_part-2_deliver-info"},[r("h4",[e._v("DHL 貨運")]),r("p",[e._v("48小時內送達")])]),r("div",{staticClass:"form_part-2_deliver_info_fee"},[r("p",[e._v("$500")])])])}],s={name:"delivery",props:{initialUser:{type:Object,default:function(){return{delivery:0}}}},data:function(){return{user:this.initialUser}},methods:{NextStep:function(){this.$emit("after-submit"),this.$router.push({name:"payment"})},PrevStep:function(){this.$emit("before-submit"),this.$router.push({name:"address"})}}},n=s,l=(r("883a"),r("2877")),o=Object(l["a"])(n,i,a,!1,null,"64620431",null);t["default"]=o.exports},"883a":function(e,t,r){"use strict";r("c40e")},c40e:function(e,t,r){}}]);
//# sourceMappingURL=chunk-418b7f04.8101940c.js.map