(this["webpackJsonpcat-search"]=this["webpackJsonpcat-search"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),i=(a(18),a(1)),s=a(2),l=a(4),h=a(3),u=a(5),m=a(10),d=a(6),p=a(12),f=a.n(p);a(22);function v(){var e=Object(m.a)(["\n    display: block;\n    margin: 0 auto;\n    border-color: red;\n"]);return v=function(){return e},e}var b=Object(d.css)(v()),g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).state={loading:!0},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{className:"card-img"},r.a.createElement(f.a,{css:b,sizeUnit:"px",size:50,color:"#FFFFFF",loading:this.state.loading}),r.a.createElement("img",{src:"https://robohash.org/".concat(this.props.character.name,"?set=set4&size=180x180"),style:this.state.loading?{display:"none"}:{},onLoad:function(){return e.setState({loading:!1})},alt:"Cat"})),r.a.createElement("div",{className:"card-text"},r.a.createElement("h1",null,this.props.character.name)))}}]),t}(n.Component),E=(a(23),function(e){return r.a.createElement("div",{className:"card-list"},e.characters.map((function(e){return r.a.createElement(g,{key:e.id,character:e})})))}),j=(a(24),function(e){return r.a.createElement("div",{className:"search-box-container"},r.a.createElement("input",{className:"search-box",type:"search",placeholder:e.placeholder,onChange:e.handleChange}))}),C=a(7),O=a.n(C),w=(a(25),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={characters:[],searchField:""},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://uinames.com/api/?region=india&amount=40&ext").then((function(e){return e.json()})).then((function(t){Object(C.setPrefix)(""),t=t.map((function(e){return e.id=O()(),e.name+=" "+e.surname,e})),e.setState({characters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.characters,a=e.searchField,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return 0===n.length&&(n[1]={name:a,email:a.toLowerCase().replace(" ","")+"@example.com",id:0}),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Cat Search"),r.a.createElement(j,{handleChange:this.handleChange,placeholder:"Search your cat"}),r.a.createElement(E,{characters:n}),r.a.createElement("p",{className:"footer"},"Created by Pawan Kolhe"))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.25436117.chunk.js.map