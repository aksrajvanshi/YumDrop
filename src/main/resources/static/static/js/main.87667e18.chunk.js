(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{173:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),s=t.n(l),i=(t(77),t(50)),o=t(51),c=t(70),m=t(52),d=t(71),u=(t(78),t(79),t(53)),p=t.n(u),g=(t(90),t(91),t(176)),h=t(177),E=t(54),N=t.n(E),v=t(55),f=t.n(v),y=t(56),b=t.n(y),w=t(57),P=t.n(w),x=t(27),R=t.n(x),U=t(58),F=t.n(U),C=t(59),S=t.n(C),j=t(28),D=t.n(j),L=t(60),I=t.n(L),k=t(61),A=t.n(k),T=t(62),B=t.n(T),M=(t(92),t(63)),H=t.n(M),O=t(64),J=t.n(O),q=t(65),K=t.n(q),_=t(66),z=t(29),Y=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={SelectLogin:!1,UserLogin:!1,RestaurantLogin:!1,DeliveryLogin:!1,RegisterSelect:!1,UserRegister:!1,RestaurantRegister:!1,DeliveryRegister:!1,signUpPassword:"",signUpConfirmPassword:"",signUpEmail:"",signUpPhoneNum:"",signUpPhoneNum2:"",signUpName:"",signUpRestaurantName:"",useremail:"",userpassword:"",userphonenumber:"",username:""},t.SelectLogin=function(){t.setState({SelectLogin:!0})},t.UserLogin=function(){t.setState({UserLogin:!0,SelectLogin:!1,RestaurantLogin:!1,DeliveryLogin:!1})},t.RestaurantLogin=function(){t.setState({UserLogin:!1,SelectLogin:!1,RestaurantLogin:!0,DeliveryLogin:!1})},t.DeliveryLogin=function(){t.setState({UserLogin:!1,SelectLogin:!1,RestaurantLogin:!1,DeliveryLogin:!0})},t.RegisterSelect=function(){t.setState({UserRegister:!1,RegisterSelect:!0,RestaurantRegister:!1,DeliveryRegister:!1})},t.login=function(){var e={};e.email=t.state.email,fetch("/login",{header:{Accept:"application/json","Content-Type":"application/json"},method:"POST",type:"cors",body:JSON.stringify({obj:e})}).then((function(e){return e.json()})).then((function(e){console.log(JSON.stringify(e))}))},t.register=function(){var e={};e.user_email=t.state.useremail,e.user_name=t.state.username,e.userPassword=t.state.userpassword,e.user_phonenum=t.state.userphonenumber,fetch("/userRegistration",{header:{Accept:"application/json","Content-Type":"application/json"},method:"POST",type:"cors",body:JSON.stringify({user_email:t.state.useremail,user_name:t.state.username,userPassword:t.state.userpassword,user_phonenum:t.state.userphonenumber})}).then((function(e){return e.json()})).then((function(e){console.log(JSON.stringify(e))}))},t.handleUserNameChange=function(e){t.setState({username:e.target.value})},t.handleUserPhoneNumberChange=function(e){t.setState({userphonenumber:e.target.value})},t.handleUserPasswordChange=function(e){t.setState({userpassword:e.target.value})},t.handleUserEmailIdChange=function(e){t.setState({useremail:e.target.value})},t.UserRegister=function(){t.setState({UserRegister:!0,RegisterSelect:!1,RestaurantRegister:!1,DeliveryRegister:!1})},t.RestaurantRegister=function(){t.setState({UserRegister:!1,RegisterSelect:!1,RestaurantRegister:!0,DeliveryRegister:!1})},t.DeliveryRegister=function(){t.setState({UserRegister:!1,RegisterSelect:!1,RestaurantRegister:!1,DeliveryRegister:!0})},t.CloseAll=function(){t.setState({UserLogin:!1,SelectLogin:!1,RestaurantLogin:!1,DeliveryLogin:!1,RegisterSelect:!1,UserRegister:!1,RestaurantRegister:!1,DeliveryRegister:!1})},t.validateUserName=function(){return t.state.signUpName?!!/^[A-Za-z]+$/.test(t.state.signUpName)||"Please only use letters. ":"Name cannot be empty. "},t.validateRestuarantName=function(){return t.state.signUpRestaurantName?!!/^[A-Za-z]+$/.test(t.state.signUpName)||"Please only use letters. ":"Restaurant name cannot be empty. "},t.validateEmail=function(){return!!_.validate(t.state.signUpEmail)||"Please enter a valid email. "},t.validatePassword=function(){return/[a-z]/.test(t.state.signUpPassword)?/[A-Z]/.test(t.state.signUpPassword)?!/^[A-Za-z]+$/.test(t.state.signUpPassword)||"Password must contain atleast one unique non-letter character. ":"Password must have atleast one upper case letter. ":"Password must have atleast one lower case letter. "},t.validateConfirmPassword=function(){return t.state.signUpConfirmPassword==t.state.signUpPassword||"Passwords do not match. "},t.validatePhoneNum=function(){return!t.state.signUpPhoneNum||(Object(z.isMobilePhone)("+"+t.state.signUpPhoneNum,"any",{strictMode:!0})?void 0:"Please enter a valid phone number. ")},t.handleUserChange=function(e){t.setState({username:e.target.value})},t.validatePhoneNum2=function(){return!t.state.signUpPhoneNum2||(Object(z.isMobilePhone)("+"+t.state.signUpPhoneNum2,"any",{strictMode:!0})?void 0:"Please enter a second valid phone number. ")},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"getTitle",value:function(){return this.state.UserLogin?"User Login":this.state.RestaurantLogin?"Restaurant Login":this.state.DeliveryLogin?"Delivery Login":void 0}},{key:"updateEmail",value:function(e){this.setState({signUpEmail:e.target.value})}},{key:"updateName",value:function(e){this.setState({signUpName:e.target.value})}},{key:"updateRestaurantName",value:function(e){this.setState({signUpRestaurantName:e.target.value})}},{key:"updatePassword",value:function(e){this.setState({signUpPassword:e.target.value})}},{key:"updateConfirmPassword",value:function(e){this.setState({signUpConfirmPassword:e.target.value})}},{key:"updatePhoneNum",value:function(e){this.setState({signUpPhoneNum:e.target.value})}},{key:"updatePhoneNum2",value:function(e){this.setState({signUpPhoneNum2:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("link",{href:"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",rel:"stylesheet",id:"bootstrap-css"}),r.a.createElement("script",{src:"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"}),r.a.createElement("script",{src:"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"}),r.a.createElement("link",{href:"//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css",rel:"stylesheet",id:"bootstrap-css"}),r.a.createElement("script",{src:"//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"}),r.a.createElement("script",{src:"//code.jquery.com/jquery-1.11.1.min.js"}),r.a.createElement("link",{href:"//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css",rel:"stylesheet",id:"bootstrap-css"}),r.a.createElement("script",{src:"//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"}),r.a.createElement("script",{src:"//code.jquery.com/jquery-1.11.1.min.js"}),r.a.createElement("link",{rel:"stylesheet",href:"http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css"}),r.a.createElement("nav",{className:"NavigationBar"},r.a.createElement("h2",{className:"menu_logo"},"YumDrops"),r.a.createElement("div",{className:"menuright"},r.a.createElement("ul",{className:"menulist"},r.a.createElement("li",{className:"menulist-item"}," ",r.a.createElement("a",{className:"NavBarA",href:"#",onClick:this.SelectLogin},"Login")," "),r.a.createElement("li",{className:"menulist-item"},r.a.createElement("a",{className:"NavBarB",href:"#",onClick:this.RegisterSelect},"Sign Up"," ")))))),r.a.createElement("form",{onSubmit:this.login},r.a.createElement("input",{type:"text",value:this.state.email,onChange:this.handleUserChange}),r.a.createElement("button",{onClick:this.login},"ClickME!")),r.a.createElement(g.a,{show:this.state.SelectLogin,onHide:this.CloseAll,className:"modal",animation:!1,centered:!0},r.a.createElement(g.a.Header,{className:"modelheader",id:"containerModal"},r.a.createElement(g.a.Title,{className:"modeltitle",id:"modeltitle"},r.a.createElement("strong",null,"Select Login"))),r.a.createElement(g.a.Body,{id:"CheckSelection"},r.a.createElement(h.a,{id:"UserID",onClick:this.UserLogin},r.a.createElement("strong",null,"USER"))," ",r.a.createElement("br",null),r.a.createElement(h.a,{id:"RestaurantId",onClick:this.RestaurantLogin},r.a.createElement("strong",null,"RESTAURANT"))," ",r.a.createElement("br",null),r.a.createElement(h.a,{id:"DeliveryId",onClick:this.DeliveryLogin},r.a.createElement("strong",null,"DELIVERY")))),r.a.createElement(g.a,{show:this.state.DeliveryLogin||this.state.UserLogin||this.state.RestaurantLogin,onHide:this.CloseAll,animation:!1},r.a.createElement(g.a.Header,null,r.a.createElement(g.a.Title,{id:"modeltitle"},this.getTitle())),r.a.createElement(g.a.Body,null,r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"username"},"Username:"),r.a.createElement("input",{type:"text",id:"username"})," ",r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{type:"text",id:"password"}))),r.a.createElement(g.a.Footer,null,r.a.createElement("a",{id:"button",href:"#"},"Sign UP"))),r.a.createElement(g.a,{show:this.state.RegisterSelect,onHide:this.CloseAll,animation:!1,centered:!0},r.a.createElement(g.a.Header,{className:"modelheader",id:"containerModal"},r.a.createElement(g.a.Title,{className:"modeltitle",id:"modeltitle"},r.a.createElement("strong",null,"Select Account Type"))),r.a.createElement(g.a.Body,{id:"CheckSelection"},r.a.createElement(h.a,{id:"UserID",onClick:this.UserRegister},r.a.createElement("strong",null,"USER"))," ",r.a.createElement("br",null),r.a.createElement(h.a,{id:"RestaurantId",onClick:this.RestaurantRegister},r.a.createElement("strong",null,"RESTAURANT"))," ",r.a.createElement("br",null),r.a.createElement(h.a,{id:"DeliveryId",onClick:this.DeliveryRegister},r.a.createElement("strong",null,"DELIVERY")))),r.a.createElement(g.a,{show:this.state.UserRegister,onHide:this.CloseAll,animation:!1,id:"Trying"},r.a.createElement(g.a.Header,{id:"UserHead"},r.a.createElement(g.a.Title,{id:"modeltitle"},"User Register")),r.a.createElement(g.a.Body,{id:"modelBody"},r.a.createElement("form",{onSubmit:this.login},r.a.createElement("input",{type:"text",value:this.state.email,onChange:this.handleUserChange}),r.a.createElement("button",{onClick:this.login},"ClickME!")),r.a.createElement("form",{onSubmit:this.register},r.a.createElement("label",{htmlFor:"username"},"Name: "),r.a.createElement("input",{value:this.state.username,onChange:this.handleUserNameChange,type:"text",id:"username"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"username"},"Email:"),r.a.createElement("input",{type:"text",id:"username",value:this.state.useremail,onChange:this.handleUserEmailIdChange}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{type:"text",id:"password",value:this.state.userpassword,onChange:this.handleUserPasswordChange}),r.a.createElement("label",{htmlFor:"password"},"Phone:"),r.a.createElement("input",{type:"text",id:"password",value:this.state.userphonenumber,onChange:this.handleUserPhoneNumberChange}),r.a.createElement("br",null))),r.a.createElement(g.a.Footer,{id:"modelBody"},r.a.createElement("button",{onClick:this.register},"Register NOW!"))),r.a.createElement(g.a,{show:this.state.DeliveryRegister,onHide:this.CloseAll,animation:!1},r.a.createElement(g.a.Header,null,r.a.createElement(g.a.Title,{id:"modeltitle"},"Delivery Agent Registration")),r.a.createElement(g.a.Body,null,r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"username"},"Name"),r.a.createElement("input",{type:"text",id:"username",onChange:function(a){return e.updateName(a)}}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"username"},"Email ID"),r.a.createElement("input",{type:"text",id:"username",onChange:function(a){return e.updateEmail(a)}}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{type:"text",id:"password",onChange:function(a){return e.updatePassword(a)}}),r.a.createElement("label",{htmlFor:"password"},"Confirm Password:"),r.a.createElement("input",{type:"text",id:"password",onChange:function(a){return e.updateConfirmPassword(a)}}),r.a.createElement("label",{htmlFor:"password"},"Phone Number:"),r.a.createElement("input",{type:"text",id:"password",onChange:function(a){return e.updatePhoneNum(a)}}))),r.a.createElement(g.a.Footer,null,r.a.createElement("a",{id:"button",href:"#"},"Submit"))),r.a.createElement(g.a,{show:this.state.RestaurantRegister,onHide:this.CloseAll,animation:!1,centered:!0,id:"RestaurantModel"},r.a.createElement(g.a.Header,null,r.a.createElement(g.a.Title,{id:"modeltitle"},"Restaurant Registration")),r.a.createElement(g.a.Body,null,r.a.createElement("form",null,r.a.createElement("label",null,this.validateRestuarantName(),this.validateUserName()," ",this.validateEmail(),this.validatePassword()," ",this.validateConfirmPassword(),this.validatePhoneNum()," ",this.validatePhoneNum2()),r.a.createElement("label",{htmlFor:"username"}," Restaurant Name"),r.a.createElement("input",{type:"text",id:"username",onChange:function(a){return e.updateRestaurantName(a)}}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"username"}," Manager's/Contact Person's Name"),r.a.createElement("input",{type:"text",id:"username",onChange:function(a){return e.updateName(a)}}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"username"},"Email ID"),r.a.createElement("input",{type:"text",id:"username",onChange:function(a){return e.updateEmail(a)}}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{type:"text",id:"password",onChange:function(a){return e.updatePassword(a)}}),r.a.createElement("label",{htmlFor:"password"},"Confirm Password:"),r.a.createElement("input",{type:"text",id:"password",onChange:function(a){return e.updateConfirmPassword(a)}}),r.a.createElement("label",{htmlFor:"password"},"Phone Number 1:"),r.a.createElement("input",{type:"text",id:"password",onChange:function(a){return e.updatePhoneNum(a)}}),r.a.createElement("label",{htmlFor:"password"},"Phone Number 2:"),r.a.createElement("input",{type:"text",id:"password",onChange:function(a){return e.updatePhoneNum2(a)}}))),r.a.createElement(g.a.Footer,null,r.a.createElement("a",{id:"button",href:"#"},"Submit"))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"carousel-example-generic",className:"carousel slide","data-ride":"carousel"},r.a.createElement("ol",{className:"carousel-indicators"},r.a.createElement("li",{"data-target":"#carousel-example-generic","data-slide-to":"0",className:"active"}),r.a.createElement("li",{"data-target":"#carousel-example-generic","data-slide-to":"1"}),r.a.createElement("li",{"data-target":"#carousel-example-generic","data-slide-to":"2"})),r.a.createElement("div",{className:"carousel-inner"},r.a.createElement("div",{className:"item active"},r.a.createElement("img",{src:p.a,className:"widepic",alt:"First slide"}),r.a.createElement("div",{className:"header-text hidden-xs"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("h2",null,r.a.createElement("span",null," ",r.a.createElement("strong",null,"Welcome to YumDrop"))),r.a.createElement("br",null),r.a.createElement("h3",null,r.a.createElement("span",null,r.a.createElement("strong",null,"Delivering deliciouness at your doorstep"))),r.a.createElement("br",null))))),r.a.createElement("a",{className:"left carousel-control",href:"#carousel-example-generic","data-slide":"prev"},r.a.createElement("span",{className:"glyphicon glyphicon-chevron-left"})),r.a.createElement("a",{className:"right carousel-control",href:"#carousel-example-generic","data-slide":"next"},r.a.createElement("span",{className:"glyphicon glyphicon-chevron-right"}))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"polaroid"},r.a.createElement("img",{src:f.a,alt:"IndianFood",width:"200px",height:"200px",className:"ImageDisplay"}),r.a.createElement("div",{className:"ParagraphForPolaroid"},r.a.createElement("p",null,r.a.createElement("strong",null,"Indian Food"))))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"polaroid"},r.a.createElement("img",{src:b.a,alt:"ItalianFood",width:"200px",height:"200px",className:"ImageDisplay"}),r.a.createElement("div",{className:"ParagraphForPolaroid"},r.a.createElement("p",null,r.a.createElement("strong",null,"Italian Food"))))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"polaroid"},r.a.createElement("img",{src:P.a,alt:"JapaneseFood",width:"200px",height:"200px",className:"ImageDisplay"}),r.a.createElement("div",{className:"ParagraphForPolaroid"},r.a.createElement("p",null,r.a.createElement("strong",null,"Japanese Food"))))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"polaroid"},r.a.createElement("img",{src:R.a,alt:"KoreanFood",width:"200px",height:"200px",className:"ImageDisplay"}),r.a.createElement("div",{className:"ParagraphForPolaroid"},r.a.createElement("p",null,r.a.createElement("strong",null,"Korean Food")))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"polaroid"},r.a.createElement("img",{src:R.a,alt:"KoreanFood",width:"200px",height:"200px",className:"ImageDisplay"}),r.a.createElement("div",{className:"ParagraphForPolaroid"},r.a.createElement("p",null,r.a.createElement("strong",null,"Korean Food"))))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"polaroid"},r.a.createElement("img",{src:F.a,alt:"Mexican",width:"200px",height:"200px",className:"ImageDisplay"}),r.a.createElement("div",{className:"ParagraphForPolaroid"},r.a.createElement("p",null,r.a.createElement("strong",null,"Mexican Food"))))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"polaroid"},r.a.createElement("img",{src:S.a,alt:"Thai",width:"200px",height:"200px",className:"ImageDisplay"}),r.a.createElement("div",{className:"ParagraphForPolaroid"},r.a.createElement("p",null,r.a.createElement("strong",null,"Thai Food"))))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"polaroid"},r.a.createElement("img",{src:D.a,alt:"AfricanFood",width:"200px",height:"200px",className:"ImageDisplay"}),r.a.createElement("div",{className:"ParagraphForPolaroid"},r.a.createElement("p",null,r.a.createElement("strong",null,"African Food")))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"polaroid"},r.a.createElement("img",{src:D.a,alt:"AfricanFood",width:"200px",height:"200px",className:"ImageDisplay"}),r.a.createElement("div",{className:"ParagraphForPolaroid"},r.a.createElement("p",null,r.a.createElement("strong",null,"African Food"))))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"polaroid"},r.a.createElement("img",{src:N.a,alt:"Forest",width:"200px",height:"200px",className:"ImageDisplay"}),r.a.createElement("div",{className:"ParagraphForPolaroid"},r.a.createElement("p",null,r.a.createElement("strong",null,"Indian Food"))))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"polaroid"},r.a.createElement("img",{src:J.a,alt:"Mountains",width:"200px",height:"200px",className:"ImageDisplay"}),r.a.createElement("div",{className:"ParagraphForPolaroid"},r.a.createElement("p",null,r.a.createElement("strong",null,"Desserts"))))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"polaroid"},r.a.createElement("img",{src:K.a,alt:"Mountains",width:"200px",height:"200px",className:"ImageDisplay"}),r.a.createElement("div",{className:"ParagraphForPolaroid"},r.a.createElement("p",null,r.a.createElement("strong",null,"Burgers")))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"polaroid"},r.a.createElement("img",{src:H.a,alt:"Snow",width:"200px",height:"200px",className:"ImageDisplay"}),r.a.createElement("div",{className:"ParagraphForPolaroid"},r.a.createElement("p",null,r.a.createElement("strong",null,"Bengali Food"))))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"polaroid"},r.a.createElement("img",{src:I.a,alt:"Forest",width:"200px",height:"200px",className:"ImageDisplay"}),r.a.createElement("div",{className:"ParagraphForPolaroid"},r.a.createElement("p",null,r.a.createElement("strong",null,"South Indian"))))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"polaroid"},r.a.createElement("img",{src:A.a,alt:"Mountains",width:"200px",height:"200px",className:"ImageDisplay"}),r.a.createElement("div",{className:"ParagraphForPolaroid"},r.a.createElement("p",null,r.a.createElement("strong",null,"Food")," ")))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"polaroid"},r.a.createElement("img",{src:B.a,width:"200px",height:"200px",className:"ImageDisplay"}),r.a.createElement("div",{className:"ParagraphForPolaroid"},r.a.createElement("p",null,r.a.createElement("strong",null,"Hong Kong Cuisine")))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Y,null),document.getElementById("root"))},27:function(e,a,t){e.exports=t.p+"static/media/KoreanFood.b5c84532.jpg"},28:function(e,a,t){e.exports=t.p+"static/media/WestAfricanFood.91597969.jpg"},53:function(e,a,t){e.exports=t.p+"static/media/pic1.cff237ec.jpg"},54:function(e,a,t){e.exports=t.p+"static/media/trying2.2840b496.jfif"},55:function(e,a,t){e.exports=t.p+"static/media/IndianFood.87813d79.jpg"},56:function(e,a,t){e.exports=t.p+"static/media/ItalianFood.721be022.jpg"},57:function(e,a,t){e.exports=t.p+"static/media/JapaneseFood.5253d59c.jpg"},58:function(e,a,t){e.exports=t.p+"static/media/MexicanFood.63637abf.jpg"},59:function(e,a,t){e.exports=t.p+"static/media/ThaiFood.c74e0449.jpg"},60:function(e,a,t){e.exports=t.p+"static/media/AddImage1.2863329e.jpg"},61:function(e,a,t){e.exports=t.p+"static/media/AddImage2.532c5824.jpg"},62:function(e,a,t){e.exports=t.p+"static/media/addHongKong.a78fad83.jpg"},63:function(e,a,t){e.exports=t.p+"static/media/BengaliFood.35572dfa.jpg"},64:function(e,a,t){e.exports=t.p+"static/media/chocolate-lasagna-4.547b23be.jpg"},65:function(e,a,t){e.exports=t.p+"static/media/Burgers.d8de2176.jpg"},72:function(e,a,t){e.exports=t(173)},77:function(e,a,t){},78:function(e,a,t){},90:function(e,a,t){e.exports=t.p+"static/media/pic2.a62333da.jpg"},92:function(e,a,t){e.exports=t.p+"static/media/1502296790.92.31a32970.jpg"}},[[72,1,2]]]);
//# sourceMappingURL=main.87667e18.chunk.js.map