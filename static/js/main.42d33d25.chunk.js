(this["webpackJsonpcat-search"]=this["webpackJsonpcat-search"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),s=a.n(c),o=(a(18),a(1)),i=a(2),l=a(4),h=a(3),u=a(5),m=a(10),d=a(6),f=a(12),p=a.n(f);a(22);function b(){var e=Object(m.a)(["\n    display: block;\n    margin: 0 auto;\n    border-color: red;\n"]);return b=function(){return e},e}var v=Object(d.css)(b()),E=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).state={loading:!0},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{className:"card-img"},r.a.createElement(p.a,{css:v,sizeUnit:"px",size:50,color:"#FFFFFF",loading:this.state.loading}),r.a.createElement("img",{src:"https://robohash.org/".concat(this.props.character.name.toLowerCase(),"?set=set4&size=180x180"),style:this.state.loading?{display:"none"}:{},onLoad:function(){return e.setState({loading:!1})},alt:"Cat"})),r.a.createElement("div",{className:"card-text"},r.a.createElement("h1",null,this.props.character.name)))}}]),t}(n.Component),g=(a(23),function(e){return r.a.createElement("div",{className:"card-list"},e.characters.map((function(e){return r.a.createElement(E,{key:e.id,character:e})})))}),C=(a(24),function(e){return r.a.createElement("div",{className:"search-box-container"},r.a.createElement("input",{className:"search-box",type:"search",placeholder:e.placeholder,onChange:e.handleChange}))}),j=a(7),w=a.n(j),y=(a(25),function(e){return r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{className:"refresh-button",onClick:e.handleRefresh},r.a.createElement("i",{className:"fas fa-sync-alt ".concat(e.spin?"fa-spin":"")})," Refresh"))}),O=(a(26),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.handleRefresh=function(){e.setState({spin:!0}),setTimeout((function(){e.setState({spin:!1})}),3e3),e.fetchData()},e.state={characters:[],searchField:"",spin:!1},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"fetchData",value:function(){var e=this;return fetch("https://randomuser.me/api/?results=16&inc=name").then((function(e){return e.json()})).then((function(t){Object(j.setPrefix)(""),t=t.results.map((function(e){return e.id=w()(),e.name=e.name.first+" "+e.name.last,e})),e.setState({characters:t})})),!0}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this.state,t=e.characters,a=e.searchField,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return 0===n.length&&(n[1]={name:a,email:a.toLowerCase().replace(" ","")+"@example.com",id:0}),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Cat Search"),r.a.createElement(y,{handleRefresh:this.handleRefresh,spin:this.state.spin}),r.a.createElement(C,{handleChange:this.handleChange,placeholder:"Search your cat"}),r.a.createElement(g,{characters:n}),r.a.createElement("p",{className:"footer"},"Created by ",r.a.createElement("a",{href:"https://pawankolhe.com",className:"underline"},"Pawan Kolhe")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.42d33d25.chunk.js.map