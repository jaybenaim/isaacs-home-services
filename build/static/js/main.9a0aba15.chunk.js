(this.webpackJsonpagw=this.webpackJsonpagw||[]).push([[0],{58:function(e,a,t){e.exports=t(98)},65:function(e,a,t){},87:function(e,a,t){},89:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(15),l=t.n(r),c=t(18),o=t(13),i=(t(65),t(5)),m=t(11),d=t.n(m);var h=e=>{e?d.a.defaults.headers.common.Authorization=e:delete d.a.defaults.headers.common.Authorization},p=t(41),u=t.n(p);var g=d.a.create({baseURL:"https://jaybenaim.github.io/isaacs-home-services/api"});const E=e=>a=>{g.post("/users/login",e).then(e=>{const t=e.data.token;localStorage.setItem("jwtToken",t),h(t);const n=u()(t);a(f(n))}).catch(e=>{a({type:"GET_ERRORS",payload:e})})},f=e=>({type:"SET_CURRENT_USER",payload:e});var b=t(8);t(87);var v=Object(o.f)(Object(b.b)(e=>({auth:e.auth,errors:e.errors}),{logoutUser:()=>e=>{localStorage.removeItem("jwtToken"),h(!1),e(f({}))}})(e=>{const a=e.auth,t=a.user.name,n=a.isAuthenticated,r=e.logoutUser;return n?s.a.createElement("div",{className:"auth-content"},s.a.createElement("button",{id:"logout",onClick:e=>(e=>{e.preventDefault(),r()})(e),className:" auth-link"},"Logout ",s.a.createElement("span",{className:"auth-content--name"}," ",t,"?"))):s.a.createElement("div",{className:"auth-content"},s.a.createElement(i.b,{to:"/login",className:"auth-link"},"Log In"),s.a.createElement(i.b,{to:"/register",className:"auth-link"},"Register"))})),_=t(103);t(89);var w=()=>s.a.createElement(s.a.Fragment,null,s.a.createElement("nav",{className:"navbar navbar-expand-sm  justify-content-between"},s.a.createElement(i.b,{className:"navbar-brand",to:"/"},"Isaac's Home Services"),s.a.createElement("div",{className:"navbar-nav"},s.a.createElement(i.b,{className:"nav-item nav-link active ",to:"/"},"Home"),s.a.createElement(_.a,null,s.a.createElement(_.a.Toggle,{id:"navbar-toggle"},"Account"),s.a.createElement(_.a.Menu,null,s.a.createElement(v,null)))))),y=d.a.create({baseURL:"http://localhost:5000/api"}),N=d.a.create({baseURL:"https://network-king-5740f.firebaseio.com"});const j=e=>e=>{N.get("/services.json").then(a=>e(S(a.data))).catch(e=>console.log(e))},S=e=>({type:"SET_DATA",payload:e});var x=t(56);t(91);var O=e=>{const a=Object(n.useState)(!1),t=Object(x.a)(a,2),r=t[0],l=t[1];return s.a.createElement("div",{style:{backgroundImage:"url(".concat(e.image,") ")},className:(()=>{let a=e.imageClassId;const t={1:"animate__animated animate__slower hero-image animate__fadeInTopLeft",2:"animate__animated animate__slower hero-image animate__fadeInTopRight",3:"animate__animated animate__slower hero-image animate__fadeInBottomLeft",4:"animate__animated animate__slower hero-image animate__fadeInBottomRight"};return window.innerWidth>=450?t[a]:"hero-image"})(),id:"hero-image-".concat(e.imageClassId),onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1)},r&&s.a.createElement("div",{className:"hero-image-content"},s.a.createElement("p",{className:"hero-image-title"},e.innerTitle)))};t(92);var R=()=>{const e=[{alt:"",image:"https://instagram.fyto1-1.fna.fbcdn.net/v/t51.2885-15/e35/60377574_429824677578879_1121704308546265055_n.jpg?_nc_ht=instagram.fyto1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=k-GXbjsfFNAAX_67tu-&oh=8956aa60da0a3f827fb450606aaf1282&oe=5F1271D1",innerTitle:"Seeding and Fertilization",innerDetails:""},{alt:"",image:"https://instagram.fyto1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/66841667_347873812816850_8783785032617102072_n.jpg?_nc_ht=instagram.fyto1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=N-MC-yU8NdAAX_1wP9e&oh=c56c91cd891f9c42f3def2b8baa02a9a&oe=5F12EC07",innerTitle:"Driveway Sealing",innerDetails:""},{alt:"",image:"https://instagram.fyto1-2.fna.fbcdn.net/v/t51.2885-15/e35/60745783_2311190382436850_8726553293238409545_n.jpg?_nc_ht=instagram.fyto1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=srQvVUy-J_kAX_XT4S_&oh=8624f139ddc0bc0eafa3690244d2ba4f&oe=5F157890",innerTitle:"Detaching",innerDetails:""},{alt:"",image:"https://instagram.fyto1-1.fna.fbcdn.net/v/t51.2885-15/e35/58468378_2083778311915660_7814727794596265222_n.jpg?_nc_ht=instagram.fyto1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=OEda1pO15lAAX_d_YPB&oh=ab8306f05b8756be2627628a224ddf95&oe=5F147C88",innerTitle:"Gardening",innerDetails:""}].map((e,a)=>{const t=e.image,n=e.alt,r=e.innerTitle,l=e.innerDetails;return s.a.createElement(O,{key:a,imageClassId:a+1,image:t,alt:n,innerTitle:r,innerDetails:l})});return s.a.createElement("div",{className:"hero-container"},e)};t(93);var T=Object(o.f)(Object(b.b)(e=>({services:e.services}),{refreshData:()=>e=>{y.get("/services?refresh=true").then(a=>{e(j())}).catch(a=>{console.log(a),e({type:"GET_ERRORS",payload:a})})},getData:j})(e=>(Object(n.useEffect)(()=>{e.getData()},[]),s.a.createElement("main",{id:"mainContent"},s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row justify-content-center p-0"},s.a.createElement(R,null),s.a.createElement("h1",null,"Network King"))))))),k=t(4),C=t.n(k);class D extends n.Component{constructor(...e){super(...e),this.state={email:"",password:"",errors:{}},this.onChange=e=>{this.setState({[e.target.id]:e.target.value})},this.onSubmit=e=>{e.preventDefault();const a={email:this.state.email,password:this.state.password};this.props.loginUser(a)},this.showErrors=e=>{let a=Object.keys(e);for(let t=0;t<a.length;t++)return s.a.createElement("li",null,e[a[t]])}}static getDerivedStateFromProps(e){return e.auth.isAuthenticated&&e.history.push("/"),e.errors?{errors:e.errors}:null}componentDidMount(){this.setState({errors:{}})}componentDidUpdate(e,a){e.auth.isAuthenticated&&e.history.push("/"),a.errors.length>=1&&this.setState({errors:a})}render(){const e=this.state.errors;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{style:{marginTop:"4rem"},className:"row"},s.a.createElement("div",{className:"col s8 offset-s2"},s.a.createElement(i.b,{to:"/",className:"btn-flat waves-effect"},s.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),s.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},s.a.createElement("h4",null,s.a.createElement("b",null,"Login")," below"),s.a.createElement("p",{className:"grey-text text-darken-1"},"Don't have an account? ",s.a.createElement(i.b,{to:"/register"},"Register"))),e.response&&s.a.createElement("div",null,this.showErrors(e.response.data)),s.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",placeholder:"Email",className:C()("",{invalid:e.email||e.emailnotfound})}),s.a.createElement("label",{htmlFor:"email",style:{display:"none"}},"Email"),s.a.createElement("span",{className:"red-text"},e.email,e.emailnotfound))," ",s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,className:C()("",{invalid:e.password||e.passwordincorrect}),id:"password",type:"password",placeholder:"Password"}),s.a.createElement("label",{htmlFor:"password",style:{display:"none"}},"Password"),s.a.createElement("span",{className:"red-text"},e.password,e.passwordincorrect)),s.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},s.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Login"))))))}}var A=Object(b.b)(e=>({auth:e.auth,errors:e.errors}),{loginUser:E})(D);t(94);class F extends n.Component{constructor(...e){super(...e),this.state={name:"",email:"",password:"",password2:"",errors:{}},this.onChange=e=>{this.setState({[e.target.id]:e.target.value})},this.onSubmit=e=>{e.preventDefault();const a={name:this.state.name,email:this.state.email,password:this.state.password,password2:this.state.password2};this.props.registerUser(a,this.props.history)}}static getDerivedStateFromProps(e){return e.errors?{errors:e.errors}:null}componentDidUpdate(e,a){e.auth.isAuthenticated&&e.history.push("/")}render(){const e=this.state.errors;return s.a.createElement("div",{className:"container register-container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s8 offset-s2"},s.a.createElement(i.b,{to:"/",className:"btn-flat waves-effect"},s.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),s.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},s.a.createElement("h4",null,s.a.createElement("b",null,"Register")," below"),s.a.createElement("p",{className:"grey-text text-darken-1"},"Already have an account? ",s.a.createElement(i.b,{to:"/login"},"Log in"))),s.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{onChange:this.onChange,value:this.state.name,error:e.name,id:"name",type:"text",className:C()("",{invalid:e.name})}),s.a.createElement("label",{htmlFor:"name"},"Name"),s.a.createElement("span",{className:"red-text"},e.name)),s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:C()("",{invalid:e.email})}),s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("span",{className:"red-text"},e.email)),s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:C()("",{invalid:e.password})}),s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("span",{className:"red-text"},e.password)),s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password",className:C()("",{invalid:e.password2})}),s.a.createElement("label",{htmlFor:"password2"},"Confirm Password"),s.a.createElement("span",{className:"red-text"},e.password2)),s.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},s.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Sign up"))))))}}var U=Object(b.b)(e=>({auth:e.auth,errors:e.errors}),{registerUser:(e,a)=>t=>{g.post("/users/register",e).then(n=>{t(E(e)),a.push("/")}).catch(e=>{t({type:"GET_ERRORS",payload:e})})}})(Object(o.f)(F));t(95);var L=()=>s.a.createElement("div",{id:"notfound"},s.a.createElement("div",{className:"notfound"},s.a.createElement("div",{className:"notfound-404"},s.a.createElement("h1",null,"404")),s.a.createElement("h2",null,"Oops, The Page you are looking for can't be found!"),s.a.createElement(i.b,{to:"/"},s.a.createElement("span",{className:"arrow"}),"Return To Homepage")));var I=Object(b.b)(e=>e,{})(()=>s.a.createElement(s.a.Fragment,null,s.a.createElement(w,null),s.a.createElement(o.c,null,s.a.createElement(o.a,{exact:!0,path:"/",component:T}),s.a.createElement(o.a,{exact:!0,path:"/services",component:T}),s.a.createElement(o.a,{exact:!0,path:"/register",render:e=>s.a.createElement(U,e)}),s.a.createElement(o.a,{exact:!0,path:"/login",render:e=>s.a.createElement(A,e)}),s.a.createElement(o.a,{exact:!0,path:"/404",render:e=>s.a.createElement(L,e)}))));class P extends s.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,a){}render(){return this.state.hasError?s.a.createElement(L,null):this.props.children}}var M=Object(o.f)(P),G=t(54),B=t(12),X=t(51),z=t(20);const H=t(96),J={isAuthenticated:!1,user:{},loading:!1};const V={};const K={services:[]};var Q=Object(B.c)({auth:function(e=J,a){switch(a.type){case"SET_CURRENT_USER":return Object(z.a)(Object(z.a)({},e),{},{isAuthenticated:!H(a.payload),user:a.payload});case"USER_LOADING":return Object(z.a)(Object(z.a)({},e),{},{loading:!0});default:return e}},errors:function(e=V,a){switch(a.type){case"GET_ERRORS":return a.payload;default:return e}},data:function(e=K,a){switch(a.type){case"SET_DATA":return Object.assign({},e,{services:Array(a.payload)});default:return e}}}),W=t(52);const Y=Object(W.createLogger)(),q=[X.a,Y];var Z=Object(B.e)(Q,{},Object(B.d)(Object(B.a)(...q))),$=t(53),ee=t.n($);t(97);Object(G.a)().listen(e=>{c.a.set({page:e.pathname}),c.a.pageview(e.pathname)}),c.a.initialize("UA-151372187-4"),c.a.pageview(window.location.hash),ee.a.startMagic([{url:"https://isaacs-home-services.herokuapp.com/#/services",isFullMatch:!1},{url:"https://isaacs-home-services.herokuapp.com/#/404",isFullMatch:!1}],(function(){l.a.render(s.a.createElement(b.a,{store:Z},s.a.createElement(i.a,null,s.a.createElement(M,null,s.a.createElement(I,null)))),document.getElementById("root"))}))}},[[58,1,2]]]);
//# sourceMappingURL=main.9a0aba15.chunk.js.map