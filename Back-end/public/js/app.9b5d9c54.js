(function(t){function e(e){for(var n,r,i=e[0],l=e[1],u=e[2],s=0,d=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],n=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(n=!1)}n&&(c.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},o={app:0},c=[];function i(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0c26949c"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"94561f75"}[t]+".css",o=l.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===n||s===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],s=u.getAttribute("data-href");if(s===n||s===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete r[t],p.parentNode.removeChild(p),a(c)},p.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(p)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=c);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(t);var d=new Error;u=function(e){s.onerror=s.onload=null,clearTimeout(p);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}o[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=s;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00c4":function(t,e,a){},"0418":function(t,e,a){"use strict";var n=a("7a23"),r={class:"nav"},o=Object(n["h"])("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},[Object(n["h"])("div",{class:"container-fluid"},[Object(n["h"])("img",{class:"img-fluid col-2",src:"https://desarrollaweb.com.ar/assets/images/logo-sin-fondo.png",alt:""}),Object(n["h"])("button",{class:"navbar-toggler ",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["h"])("span",{class:"navbar-toggler-icon"})]),Object(n["h"])("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},[Object(n["h"])("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0"},[Object(n["h"])("li",{class:"nav-item"},[Object(n["h"])("a",{class:"nav-link active","aria-current":"page",href:"#"},"Inicio")]),Object(n["h"])("li",{class:"nav-item"},[Object(n["h"])("a",{class:"nav-link",href:"#"},"Metodos de Pago")]),Object(n["h"])("li",{class:"nav-item dropdown"},[Object(n["h"])("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Productos "),Object(n["h"])("ul",{class:"dropdown-menu","aria-labelledby":"navbarDropdown"},[Object(n["h"])("li",null,[Object(n["h"])("a",{class:"dropdown-item",href:"#"},"Remeras Hombre")]),Object(n["h"])("li",null,[Object(n["h"])("a",{class:"dropdown-item",href:"#"},"Remeras Dama")]),Object(n["h"])("li",null,[Object(n["h"])("a",{class:"dropdown-item",href:"#"},"Canguro Hombre")]),Object(n["h"])("li",null,[Object(n["h"])("a",{class:"dropdown-item",href:"#"},"Pantalon deportivo")])])]),Object(n["h"])("a",{href:"http://",class:"btn btn-secondary btn-md-block my-3"},[Object(n["g"])("Mi Carrito "),Object(n["h"])("i",{class:"fas fa-shopping-cart"})])]),Object(n["h"])("form",{class:"d-flex"},[Object(n["h"])("input",{class:"form-control me-2",type:"search",placeholder:"Buscar Productos","aria-label":"Search"}),Object(n["h"])("button",{class:"btn btn-outline-success",type:"submit"},"Buscar")])])])],-1);function c(t,e,a,c,i,l){return Object(n["q"])(),Object(n["d"])("div",r,[o])}var i={name:"Header"};i.render=c;e["a"]=i},1486:function(t,e,a){},"1f68":function(t,e,a){},"44ac":function(t,e,a){"use strict";a("1486")},4942:function(t,e,a){"use strict";var n=a("7a23"),r=Object(n["g"])("Crear ");function o(t,e,a,o,c,i){var l=Object(n["x"])("router-link"),u=Object(n["x"])("router-view");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["h"])("div",null,[Object(n["h"])(l,{to:"/Crear"},{default:Object(n["D"])((function(){return[r]})),_:1})]),Object(n["h"])(u)],64)}var c={name:"NavbarCreate"};c.render=o;e["a"]=c},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r={key:0,id:"nav"},o=Object(n["g"])("Home "),c=Object(n["g"])("| Panel"),i=Object(n["g"])(" | "),l={key:1,id:"nav"},u=Object(n["g"])("Home "),s=Object(n["g"])("Login ");function d(t,e,a,d,p,b){var f=Object(n["x"])("router-link"),h=Object(n["x"])("router-view");return Object(n["q"])(),Object(n["d"])(n["a"],null,[p.token?(Object(n["q"])(),Object(n["d"])("div",r,[Object(n["h"])(f,{to:"/"},{default:Object(n["D"])((function(){return[o]})),_:1}),Object(n["h"])(f,{to:"/Administracion"},{default:Object(n["D"])((function(){return[c]})),_:1}),i,Object(n["h"])("button",{onClick:e[1]||(e[1]=function(){return b.logout&&b.logout.apply(b,arguments)}),class:"btn btn-primary ml-5"},"Logout ")])):(Object(n["q"])(),Object(n["d"])("div",l,[p.token?(Object(n["q"])(),Object(n["d"])(f,{key:0,to:"/"},{default:Object(n["D"])((function(){return[u]})),_:1})):Object(n["e"])("",!0),Object(n["h"])(f,{to:"/Login"},{default:Object(n["D"])((function(){return[s]})),_:1})])),Object(n["h"])(h)],64)}var p=a("5530"),b=a("5502"),f={data:function(){return{token:""}},methods:Object(p["a"])(Object(p["a"])({},Object(b["b"])(["leerToken"])),{},{logout:function(){localStorage.clear(),location.reload()}}),created:function(){this.leerToken();var t=localStorage.getItem("token");this.token=t}};a("6151");f.render=d;var h=f,m=(a("45fc"),a("d3b7"),a("6c02")),j={id:"app"},O={class:"row container mx-auto"};function g(t,e,a,r,o,c){var i=Object(n["x"])("Header"),l=Object(n["x"])("Card"),u=Object(n["x"])("List");return Object(n["q"])(),Object(n["d"])("div",j,[Object(n["h"])("header",null,[Object(n["h"])(i)]),Object(n["h"])("main",null,[Object(n["h"])("div",O,[Object(n["h"])(l),Object(n["h"])(u)])])])}var v=a("0418"),y={class:"row container mx-auto"},k={class:"card col-12 my-1 mx-auto"},w={class:"card-body"},x={class:"card-title"},E={class:"card-text"},C=Object(n["h"])("a",{href:"#",class:"btn btn-primary"},"Agregar a Carrito",-1);function P(t,e,a,r,o,c){return Object(n["q"])(),Object(n["d"])("div",y,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(o.productos,(function(t,e){return Object(n["q"])(),Object(n["d"])("div",{key:e},[Object(n["h"])("div",k,[Object(n["h"])("img",{src:t.imagen,class:"card-img-top",alt:t.titulo},null,8,["src","alt"]),Object(n["h"])("div",w,[Object(n["h"])("h5",x,Object(n["z"])(t.titulo),1),Object(n["h"])("h6",null,"$"+Object(n["z"])(t.precio),1),Object(n["h"])("p",E,Object(n["z"])(t.descripcion),1),C])])])})),128))])}var S=a("bc3a"),I=a.n(S),A={name:"Cards",props:{},data:function(){return{productos:[]}},mounted:function(){this.leerApi()},methods:{leerApi:function(){var t=this;I.a.get("https://mini-ecommerce-api.herokuapp.com/api/productos").then((function(e){t.productos=e.data})).catch((function(t){return console.log(t)}))}}};A.render=P;var T=A,q=Object(n["f"])('<ul class="list-group my-3 col-12"><h2>Mi Carrito <i class="fas fa-shopping-cart"></i></h2><li class="list-group-item d-flex justify-content-between align-items-center"> Cras justo odio <span class="badge bg-primary rounded-pill">14</span></li><li class="list-group-item d-flex justify-content-between align-items-center"> Dapibus ac facilisis in <span class="badge bg-primary rounded-pill">2</span></li><li class="list-group-item d-flex justify-content-between align-items-center"> Morbi leo risus <span class="badge bg-primary rounded-pill">1</span></li></ul><button type="button" class="btn btn-secondary btn-md-block my-3"> Pagar </button>',2);function D(t,e,a,r,o,c){return Object(n["q"])(),Object(n["d"])("div",null,[q])}var _={name:"List"};_.render=D;var L=_,B={components:{Header:v["a"],Card:T,List:L}};B.render=g;var F=B;function H(t,e,a,r,o,c){var i=Object(n["x"])("Formulario");return Object(n["q"])(),Object(n["d"])(i)}var N=Object(n["G"])("data-v-3ff2521a");Object(n["t"])("data-v-3ff2521a");var V={class:"wrapper fadeInDown"},M={id:"formContent"},U=Object(n["h"])("div",{class:"fadeIn first"},null,-1),G=Object(n["h"])("div",{id:"formFooter"},[Object(n["h"])("a",{class:"underlineHover",href:"#"},"Forgot Password?")],-1);Object(n["r"])();var R=N((function(t,e,a,r,o,c){return Object(n["q"])(),Object(n["d"])("div",V,[Object(n["h"])("div",M,[U,Object(n["h"])("form",{onSubmit:e[4]||(e[4]=Object(n["F"])((function(e){return t.login(o.usuario)}),["prevent"]))},[Object(n["E"])(Object(n["h"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.usuario.email=t}),type:"text",class:"fadeIn second mt-4",placeholder:"Email"},null,512),[[n["B"],o.usuario.email]]),Object(n["E"])(Object(n["h"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return o.usuario.password=t}),type:"password",class:"fadeIn third",placeholder:"Password"},null,512),[[n["B"],o.usuario.password]]),Object(n["h"])("input",{type:"submit",onClick:e[3]||(e[3]=function(){return c.login2&&c.login2.apply(c,arguments)}),class:"fadeIn fourth",value:"Log In"})],32),G])])})),z={data:function(){return{usuario:{email:"",password:""}}},methods:Object(p["a"])(Object(p["a"])({},Object(b["b"])(["login"])),{},{login2:function(){setInterval((function(){location.reload()}),2e3)}}),name:"Login",props:{msg:String}};a("44ac");z.render=R,z.__scopeId="data-v-3ff2521a";var J=z,K={components:{Formulario:J}};K.render=H;var $=K,Q=(a("fa75"),Object(b["a"])({state:{state:{token:null,productosStorage:null,alertGuardar:!1,alertEditar:!1,alertBorrar:!1}},mutations:{setToken:function(t,e){t.token=e},setProductosStorage:function(t,e){t.productosStorage=e},setAlertGuardarStorage:function(t,e){t.alertGuardar=e},setAlertEditarStorage:function(t,e){t.alertEditar=e},setAlertBorrarStorage:function(t,e){t.alertBorrar=e}},actions:{login:function(t,e){var a=t.commit,n=e,r="https://mini-ecommerce-api.herokuapp.com/api/usuarios/login";I()({method:"POST",url:r,headers:{"x-access-token":this.token},data:n}).then((function(t){a("setToken",t.data.token),localStorage.setItem("token",t.data.token)})).catch((function(t){return console.log(t)}))},leerToken:function(t){var e=t.commit;localStorage.getItem("token")?e("setToken",localStorage.getItem("token")):e("setToken",null)}},modules:{}})),W=[{path:"/",name:"Home",component:F},{path:"/login",name:"Login",component:$},{path:"/editar",name:"Editar",component:function(){return a.e("about").then(a.bind(null,"fa75"))}},{path:"/crear",name:"Crear",component:function(){return a.e("about").then(a.bind(null,"a839"))}},{path:"/Administracion",name:"Panel de Administrador",component:function(){return a.e("about").then(a.bind(null,"6307"))},meta:{rutaProtegida:!0}}],X=Object(m["a"])({history:Object(m["b"])("/"),routes:W});X.beforeEach((function(t,e,a){var n=t.matched.some((function(t){return t.meta.rutaProtegida}));n&&null===Q.state.token?a("/login"):a()}));var Y=X;a("1157"),a("4989"),a("1f68");Object(n["c"])(h).use(Q).use(Y).mount("#app")},6151:function(t,e,a){"use strict";a("00c4")},a21f:function(t,e,a){},d517:function(t,e,a){"use strict";a("a21f")},fa75:function(t,e,a){"use strict";a.r(e);var n=a("7a23");function r(t,e,a,r,o,c){var i=Object(n["x"])("NavbarCreate"),l=Object(n["x"])("Editar");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(i),Object(n["h"])(l)],64)}var o=Object(n["G"])("data-v-2982ab39");Object(n["t"])("data-v-2982ab39");var c={class:"wrapper fadeInDown"},i={id:"formContent"},l=Object(n["h"])("div",{class:"fadeIn first"},null,-1),u=Object(n["h"])("h3",null,"Editar productos",-1),s={key:0,class:"alert alert-success",role:"alert"};Object(n["r"])();var d=o((function(t,e,a,r,o,d){return Object(n["q"])(),Object(n["d"])("div",c,[Object(n["h"])("div",i,[l,u,Object(n["h"])("form",{onSubmit:e[6]||(e[6]=Object(n["F"])((function(){return d.editarProductos&&d.editarProductos.apply(d,arguments)}),["prevent"]))},[Object(n["E"])(Object(n["h"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.producto.titulo=t}),type:"text",class:"fadeIn second mt-4",placeholder:"Nombre del producto","aria-label":"Nombre del producto"},null,512),[[n["B"],o.producto.titulo]]),Object(n["E"])(Object(n["h"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return o.producto.precio=t}),type:"text",class:"fadeIn third",placeholder:"Precio",style:{padding:"0 65px"},min:"0","aria-label":"Precio"},null,512),[[n["B"],o.producto.precio]]),Object(n["E"])(Object(n["h"])("textarea",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return o.producto.descripcion=t}),type:"text",class:"fadeIn second mt-4","aria-label":"descripcion del producto",placeholder:"Describa el producto...",cols:"30"},null,512),[[n["B"],o.producto.descripcion]]),Object(n["h"])("input",{onChange:e[4]||(e[4]=function(){return d.selecFileEdit&&d.selecFileEdit.apply(d,arguments)}),type:"file"},null,32),Object(n["h"])("input",{type:"submit",class:"fadeIn fourth",value:"Editar",onClick:e[5]||(e[5]=function(){return d.editarAlert&&d.editarAlert.apply(d,arguments)})})],32),o.alertEditar?(Object(n["q"])(),Object(n["d"])("div",s," PRODUCTO EDITADO ")):Object(n["e"])("",!0)])])})),p=a("bc3a"),b=a.n(p),f=a("0418"),h={components:{Header:f["a"]},name:"Editar",data:function(){return{producto:{titulo:"",descripcion:"",precio:"",imagen:"",imgVieja:""},alertEditar:!1}},mounted:function(){this.leerApiId()},methods:{selecFileEdit:function(t){this.producto.imagen=t.target.files[0],console.log(this.producto)},leerApiId:function(){var t=this,e=localStorage.getItem("idPRoducto");this.id=e,b()({method:"GET",headers:{"Content-Type":"application/json"},url:"https://mini-ecommerce-api.herokuapp.com/api/productos/".concat(e)}).then((function(e){t.producto={titulo:e.data.titulo,descripcion:e.data.descripcion,precio:e.data.precio,imagen:e.data.imagen,imgVieja:e.data.imagen},console.log(t.producto)})).catch((function(t){return console.log(t)}))},editarProductos:function(){var t=localStorage.getItem("token"),e=localStorage.getItem("idPRoducto"),a="https://mini-ecommerce-api.herokuapp.com/api/productos/".concat(e),n=new FormData;n.append("imagen",this.producto.imagen),n.append("titulo",this.producto.titulo),n.append("descripcion",this.producto.descripcion),n.append("precio",this.producto.precio),n.append("imgVieja",this.producto.imgVieja);var r=n;b()({method:"PUT",headers:{"x-access-token":t},url:a,data:r}).then((function(t){console.log(t.data)})).catch((function(t){return console.log(t)}))},editarAlert:function(){var t=this;this.alertEditar=!0,setInterval((function(){t.alert=!1}),300),setInterval((function(){window.location.href="https://mini-ecommerce-api.herokuapp.com/Administracion"}),1e3)}}};a("d517");h.render=d,h.__scopeId="data-v-2982ab39";var m=h,j=a("4942"),O={components:{Editar:m,NavbarCreate:j["a"]}};O.render=r;e["default"]=O}});
//# sourceMappingURL=app.9b5d9c54.js.map