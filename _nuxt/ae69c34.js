(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{676:function(t,n,e){var r=e(10),o=Math.ceil,c=Math.floor;r({target:"Math",stat:!0},{trunc:function(t){return(t>0?c:o)(t)}})},684:function(t,n,e){"use strict";e.r(n);e(41),e(676);var r={name:"Timer",mounted:function(){var t=this;window.setInterval((function(){t.now=Math.trunc((new Date).getTime()/1e3)}),1e3)},props:["date"],data:function(){return{timerdate:Math.trunc(new Date(this.date).getTime()/1e3),now:Math.trunc((new Date).getTime()/1e3)}},computed:{seconds:function(){return(this.timerdate-this.now)%60},minutes:function(){return Math.trunc((this.timerdate-this.now)/60)%60},hours:function(){return Math.trunc((this.timerdate-this.now)/60/60)%24},days:function(){return Math.trunc((this.timerdate-this.now)/60/60/24)}}},o=e(40),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"timer"},[e("ul",{attrs:{id:"demo"}},[e("li",[e("span",{staticClass:"timer-num"},[t._v(t._s(t.days))]),t._v("Days\n      ")]),t._v(" "),e("li",[e("span",{staticClass:"timer-num"},[t._v(t._s(t.hours))]),t._v("Hours\n      ")]),t._v(" "),e("li",[e("span",{staticClass:"timer-num"},[t._v(t._s(t.minutes))]),t._v("Minutes\n      ")]),t._v(" "),e("li",[e("span",{staticClass:"timer-num"},[t._v(t._s(t.seconds))]),t._v("Seconds\n      ")])])])])}),[],!1,null,null,null);n.default=component.exports}}]);