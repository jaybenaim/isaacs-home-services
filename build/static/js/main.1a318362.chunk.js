(this.webpackJsonpagw=this.webpackJsonpagw||[]).push([[0],{36:function(e,a,t){e.exports=t.p+"static/media/grass-top-view.2aaa528a.jpg"},43:function(e,a,t){e.exports=t(83)},50:function(e,a,t){},51:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(17),i=t.n(r),l=t(14),c=t(10),o=(t(50),t(2));t(51);var m=()=>s.a.createElement(s.a.Fragment,null,s.a.createElement("nav",{className:"navbar navbar-expand-sm  justify-content-between"},s.a.createElement(o.b,{className:"navbar-brand",to:"/"},"Isaac's Home Services"),s.a.createElement("div",{className:"navbar-nav"},s.a.createElement(o.b,{className:"nav-item nav-link active ",to:"/"},"Home")))),d=t(7);var h=t(12),p=t.n(h),u=p.a.create({baseURL:"https://isaacs-home-services.herokuapp.com/api"}),g=p.a.create({baseURL:"https://network-king-5740f.firebaseio.com"});const E=e=>({type:"SET_DATA",payload:e});var v=t(42);t(72);var f=e=>{const a=Object(n.useState)(!1),t=Object(v.a)(a,2),r=t[0],i=t[1];return s.a.createElement("div",{style:{backgroundImage:"url(".concat(e.image,") ")},className:(()=>{let a=e.imageClassId;const t={1:"animate__animated animate__slower hero-image animate__fadeInTopLeft",2:"animate__animated animate__slower hero-image animate__fadeInTopRight",3:"animate__animated animate__slower hero-image animate__fadeInBottomLeft",4:"animate__animated animate__slower hero-image animate__fadeInBottomRight"};return window.innerWidth>=450?t[a]:"hero-image"})(),id:"hero-image-".concat(e.imageClassId),onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)},r&&s.a.createElement("div",{className:"hero-image-content"},s.a.createElement("h4",{className:"hero-image-title"},e.innerTitle),s.a.createElement("p",{className:"hero-image-details"},e.innerDetails)))};t(73);var b=()=>{const e=[{alt:"",image:"https://instagram.fyto1-1.fna.fbcdn.net/v/t51.2885-15/e35/60377574_429824677578879_1121704308546265055_n.jpg?_nc_ht=instagram.fyto1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=k-GXbjsfFNAAX_67tu-&oh=8956aa60da0a3f827fb450606aaf1282&oe=5F1271D1",innerTitle:"Seeding and Fertilization",innerDetails:"We'll help find the right seeds and fertilizer to suit your garden needs"},{alt:"",image:"https://instagram.fyto1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/66841667_347873812816850_8783785032617102072_n.jpg?_nc_ht=instagram.fyto1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=N-MC-yU8NdAAX_1wP9e&oh=c56c91cd891f9c42f3def2b8baa02a9a&oe=5F12EC07",innerTitle:"Driveway Sealing",innerDetails:"Starts at $40 per car"},{alt:"",image:"https://instagram.fyto1-2.fna.fbcdn.net/v/t51.2885-15/e35/60745783_2311190382436850_8726553293238409545_n.jpg?_nc_ht=instagram.fyto1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=srQvVUy-J_kAX_XT4S_&oh=8624f139ddc0bc0eafa3690244d2ba4f&oe=5F157890",innerTitle:"Detaching",innerDetails:"Ask for our package deals, with aertion"},{alt:"",image:"https://instagram.fyto1-1.fna.fbcdn.net/v/t51.2885-15/e35/58468378_2083778311915660_7814727794596265222_n.jpg?_nc_ht=instagram.fyto1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=OEda1pO15lAAX_d_YPB&oh=ab8306f05b8756be2627628a224ddf95&oe=5F147C88",innerTitle:"Gardening",innerDetails:"Mulch, grass seed, top soil, and much more"}].map((e,a)=>{const t=e.image,n=e.alt,r=e.innerTitle,i=e.innerDetails;return s.a.createElement(f,{key:a,imageClassId:a+1,image:t,alt:n,innerTitle:r,innerDetails:i})});return s.a.createElement("div",{className:"hero-container"},e)},w=(t(74),t(36)),_=t.n(w);t(75),t(76);var y=e=>{const a=e.service;return s.a.createElement("div",{className:"service-content"},s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{src:a.image,alt:a.title,className:"img-thumbnail"})),s.a.createElement("div",{className:"details"},s.a.createElement("h5",{className:"title"},a.title),s.a.createElement("p",{className:"service-short-description"},a.shortDescription)))};var N=Object(d.b)(e=>({services:e.data.services}),{})(e=>s.a.createElement("div",{className:"what-we-offer-section",style:{background:"linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(".concat(_.a,")"),minHeight:"1200px",width:"100%",objectFit:"cover",backgroundAttachment:"fixed"}},s.a.createElement("div",{className:"inner-container"},s.a.createElement("h2",null,"What We Offer"),s.a.createElement("div",{className:"services"},e.services.map((e,a)=>s.a.createElement(y,{key:a,service:e}))))));var S=Object(c.f)(Object(d.b)(e=>({services:e.services}),{refreshData:()=>e=>{u.get("/services?refresh=true").then(a=>{let t=JSON.stringify(a.data);localStorage.removeItem("services"),localStorage.setItem("services",t),e(E(a.data))}).catch(a=>{console.log(a),e({type:"GET_ERRORS",payload:a})})},getData:()=>e=>{g.get("/services.json").then(a=>{e(E(a.data))}).catch(e=>console.log(e))}})(e=>(Object(n.useEffect)(()=>{e.getData()},[]),s.a.createElement("main",{id:"mainContent"},s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row justify-content-center p-0"},s.a.createElement("h1",null,"Network King"),s.a.createElement(b,null),s.a.createElement(N,null)))))));var x=e=>{e?p.a.defaults.headers.common.Authorization=e:delete p.a.defaults.headers.common.Authorization},j=t(37),O=t.n(j);const k=e=>a=>{u.post("/users/login",e).then(e=>{const t=e.data.token;localStorage.setItem("jwtToken",t),x(t);const n=O()(t);a(C(n))}).catch(e=>{a({type:"GET_ERRORS",payload:e})})},C=e=>({type:"SET_CURRENT_USER",payload:e});var R=t(11),T=t.n(R);class D extends n.Component{constructor(...e){super(...e),this.state={email:"",password:"",errors:{}},this.onChange=e=>{this.setState({[e.target.id]:e.target.value})},this.onSubmit=e=>{e.preventDefault();const a={email:this.state.email,password:this.state.password};this.props.loginUser(a)},this.showErrors=e=>{let a=Object.keys(e);for(let t=0;t<a.length;t++)return s.a.createElement("li",null,e[a[t]])}}static getDerivedStateFromProps(e){return e.auth.isAuthenticated&&e.history.push("/"),e.errors?{errors:e.errors}:null}componentDidMount(){this.setState({errors:{}})}componentDidUpdate(e,a){e.auth.isAuthenticated&&e.history.push("/"),a.errors.length>=1&&this.setState({errors:a})}render(){const e=this.state.errors;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{style:{marginTop:"4rem"},className:"row"},s.a.createElement("div",{className:"col s8 offset-s2"},s.a.createElement(o.b,{to:"/",className:"btn-flat waves-effect"},s.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),s.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},s.a.createElement("h4",null,s.a.createElement("b",null,"Login")," below"),s.a.createElement("p",{className:"grey-text text-darken-1"},"Don't have an account? ",s.a.createElement(o.b,{to:"/register"},"Register"))),e.response&&s.a.createElement("div",null,this.showErrors(e.response.data)),s.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",placeholder:"Email",className:T()("",{invalid:e.email||e.emailnotfound})}),s.a.createElement("label",{htmlFor:"email",style:{display:"none"}},"Email"),s.a.createElement("span",{className:"red-text"},e.email,e.emailnotfound))," ",s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,className:T()("",{invalid:e.password||e.passwordincorrect}),id:"password",type:"password",placeholder:"Password"}),s.a.createElement("label",{htmlFor:"password",style:{display:"none"}},"Password"),s.a.createElement("span",{className:"red-text"},e.password,e.passwordincorrect)),s.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},s.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Login"))))))}}var A=Object(d.b)(e=>({auth:e.auth,errors:e.errors}),{loginUser:k})(D);t(79);class F extends n.Component{constructor(...e){super(...e),this.state={name:"",email:"",password:"",password2:"",errors:{}},this.onChange=e=>{this.setState({[e.target.id]:e.target.value})},this.onSubmit=e=>{e.preventDefault();const a={name:this.state.name,email:this.state.email,password:this.state.password,password2:this.state.password2};this.props.registerUser(a,this.props.history)}}static getDerivedStateFromProps(e){return e.errors?{errors:e.errors}:null}componentDidUpdate(e,a){e.auth.isAuthenticated&&e.history.push("/")}render(){const e=this.state.errors;return s.a.createElement("div",{className:"container register-container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s8 offset-s2"},s.a.createElement(o.b,{to:"/",className:"btn-flat waves-effect"},s.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),s.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},s.a.createElement("h4",null,s.a.createElement("b",null,"Register")," below"),s.a.createElement("p",{className:"grey-text text-darken-1"},"Already have an account? ",s.a.createElement(o.b,{to:"/login"},"Log in"))),s.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{onChange:this.onChange,value:this.state.name,error:e.name,id:"name",type:"text",className:T()("",{invalid:e.name})}),s.a.createElement("label",{htmlFor:"name"},"Name"),s.a.createElement("span",{className:"red-text"},e.name)),s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:T()("",{invalid:e.email})}),s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("span",{className:"red-text"},e.email)),s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:T()("",{invalid:e.password})}),s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("span",{className:"red-text"},e.password)),s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password",className:T()("",{invalid:e.password2})}),s.a.createElement("label",{htmlFor:"password2"},"Confirm Password"),s.a.createElement("span",{className:"red-text"},e.password2)),s.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},s.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Sign up"))))))}}var U=Object(d.b)(e=>({auth:e.auth,errors:e.errors}),{registerUser:(e,a)=>t=>{u.post("/users/register",e).then(n=>{t(k(e)),a.push("/")}).catch(e=>{t({type:"GET_ERRORS",payload:e})})}})(Object(c.f)(F));t(80);var I=()=>s.a.createElement("div",{id:"notfound"},s.a.createElement("div",{className:"notfound"},s.a.createElement("div",{className:"notfound-404"},s.a.createElement("h1",null,"404")),s.a.createElement("h2",null,"Oops, The Page you are looking for can't be found!"),s.a.createElement(o.b,{to:"/"},s.a.createElement("span",{className:"arrow"}),"Return To Homepage")));var L=Object(d.b)(e=>e,{})(()=>s.a.createElement(s.a.Fragment,null,s.a.createElement(m,null),s.a.createElement(c.c,null,s.a.createElement(c.a,{exact:!0,path:"/",component:S}),s.a.createElement(c.a,{exact:!0,path:"/services",component:S}),s.a.createElement(c.a,{exact:!0,path:"/register",render:e=>s.a.createElement(U,e)}),s.a.createElement(c.a,{exact:!0,path:"/login",render:e=>s.a.createElement(A,e)}),s.a.createElement(c.a,{exact:!0,path:"/404",render:e=>s.a.createElement(I,e)}))));class P extends s.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,a){}render(){return this.state.hasError?s.a.createElement(I,null):this.props.children}}var M=Object(c.f)(P),B=t(41),G=t(9),W=t(38),X=t(15);const z=t(81),H={isAuthenticated:!1,user:{},loading:!1};const J={};const V={services:[]};var $=Object(G.c)({auth:function(e=H,a){switch(a.type){case"SET_CURRENT_USER":return Object(X.a)(Object(X.a)({},e),{},{isAuthenticated:!z(a.payload),user:a.payload});case"USER_LOADING":return Object(X.a)(Object(X.a)({},e),{},{loading:!0});default:return e}},errors:function(e=J,a){switch(a.type){case"GET_ERRORS":return a.payload;default:return e}},data:function(e=V,a){switch(a.type){case"SET_DATA":let t=a.payload,n=[];for(let e in t){let a=t[e];a.id=e,n.push(a)}return Object.assign({},e,{services:n});default:return e}}}),K=t(39);const Q=Object(K.createLogger)(),Y=[W.a,Q];var q=Object(G.e)($,{},Object(G.d)(Object(G.a)(...Y))),Z=t(40),ee=t.n(Z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(82);Object(B.a)().listen(e=>{l.a.set({page:e.pathname}),l.a.pageview(e.pathname)}),l.a.initialize("UA-151372187-4"),l.a.pageview(window.location.hash),ee.a.startMagic([{url:"https://isaacs-home-services.herokuapp.com/#/services",isFullMatch:!1},{url:"https://isaacs-home-services.herokuapp.com/#/404",isFullMatch:!1}],(function(){i.a.render(s.a.createElement(d.a,{store:q},s.a.createElement(o.a,null,s.a.createElement(M,null,s.a.createElement(L,null)))),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.1a318362.chunk.js.map