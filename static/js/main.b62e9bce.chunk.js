(this.webpackJsonpassignment2=this.webpackJsonpassignment2||[]).push([[0],{32:function(e,t,a){e.exports=a(59)},59:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),s=a.n(r),o=a(30),c=a(7),i=a(8),u=a(10),m=a(9),p=a(3),d=a(1),h=a(13),g=a.n(h),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).setLoggedIn=function(){n.setState({isLoggedIn:n.props.isLoggedIn})},n.setUser=function(){n.setState({user:n.props.user})},n.state={isLoggedIn:n.props.isLoggedIn,user:n.props.user},n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.props.isLoggedIn!==e.isLoggedIn&&this.setLoggedIn(),this.props.user!==e.user&&this.setUser()}},{key:"render",value:function(){return console.log(this.props.isLoggedIn),l.a.createElement("div",{className:"tool-bar"},l.a.createElement("div",null,l.a.createElement(p.b,{to:"/"},"Home")," |",l.a.createElement(p.b,{to:"/aboutme"},"About Me")," |",l.a.createElement(p.b,{to:"/newpost"},"New Post")),this.state.isLoggedIn?l.a.createElement("div",null,l.a.createElement("span",{className:"user-name"}," Hello ",this.state.user," "),l.a.createElement(p.c,{to:"/",onClick:this.props.handleLogout},"Logout")):l.a.createElement("div",null,l.a.createElement(p.b,{to:"/login"},"Login")," |",l.a.createElement(p.b,{to:"/signin"},"Sign In")))}}]),a}(l.a.Component);var f=function(e){return l.a.createElement("div",{className:"blog-post"},l.a.createElement("div",{className:"blog-text"},l.a.createElement("div",{className:"blog-text-block"},l.a.createElement("h4",null,l.a.createElement(p.b,{to:"/post/".concat(e.id)},e.title)),l.a.createElement("p",null,e.content)),l.a.createElement("div",{className:"blog-published"},l.a.createElement("p",null,"Updated ",function(e){var t=new Date,a=new Date(e),n=Math.floor(t.getTime()/1e3-a.getTime()/1e3),l=Math.floor(n/60),r=Math.floor(l/60),s=Math.floor(r/24),o=Math.floor(s/30),c=Math.floor(o/15),i="";c>0?(i=c+" year",1!=c&&(i+="s")):o>0?(i=o+" month",1!=o&&(i+="s")):s>0?(i=s+" day",1!=s&&(i+="s")):r>0?(i=r+" hour",1!=r&&(i+="s")):l>0?(i=l+" minute",1!=l&&(i+="s")):n>0?(i=n+" second",1!=n&&(i+="s")):i="now";return i}(e.date)," ago by ",e.publisher))),l.a.createElement("div",{className:"avatar-img"},l.a.createElement("img",{src:e.avatarSrc,alt:""})))},b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.posts.map((function(e){return l.a.createElement(f,{key:e.id,id:e.id,title:e.title,content:e.content,date:e.last_update,publisher:e.user_name,avatarSrc:e.img_src})}));return l.a.createElement("div",{className:"blog-posts"},e)}}]),a}(l.a.Component);var v=function(e){return l.a.createElement("div",{className:"main-bar"},l.a.createElement("h1",null,"This is my blog"),l.a.createElement(b,{posts:e.posts}))};var I=function(e){var t=e.posts.map((function(e){return l.a.createElement("h3",{key:e},"Blog post #",e," ",l.a.createElement(p.b,{to:""},"go to page"))}));return l.a.createElement("div",null,l.a.createElement("h1",null,e.title),t)};var L=function(){return l.a.createElement("div",{className:"side-bar"},l.a.createElement(I,{title:"Latest",posts:[1,2,3]}),l.a.createElement("hr",null),l.a.createElement(I,{title:"Popular",posts:[3,1,2]}))};var S=function(e){return l.a.createElement("div",{className:"blog"},l.a.createElement(v,{posts:e.posts}),l.a.createElement(L,null))};var C=function(){return l.a.createElement("div",{className:"about"},l.a.createElement("h1",null,"About Me"),l.a.createElement("section",null,"Welcome!!!",l.a.createElement("br",null),"My name is Abotzvi Yadgarov from Holon, Israel, and this is my blog app",l.a.createElement("br",null),"I'm an undergraguate student from IDC majoring Computer Science",l.a.createElement("br",null),"Sign in and be part of our community."),l.a.createElement("br",null),l.a.createElement("section",null,"for more information:",l.a.createElement("br",null),l.a.createElement("ul",{id:"menu"},l.a.createElement("li",null,l.a.createElement("a",{href:"tel:+972549729340"},l.a.createElement("i",{className:"fa fa-phone"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:abotzvi.yadgarov@gmail.com"},l.a.createElement("i",{className:"fa fa-at"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/avi.yadgarov"},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"http://www.github.com/abotz11"},l.a.createElement("i",{className:"fa fa-github"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"http://www.linkedin.com/in/abotzvi-yadgarov-68ab45157/"},l.a.createElement("i",{className:"fa fa-linkedin"}))))))},y=a(15),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClick=function(){var e={title:document.getElementById("title").value,content:document.getElementById("content").value};n.props.handleAddPost(e)},n.handleClick=n.handleClick.bind(Object(y.a)(n)),n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"new-post"},l.a.createElement("h1",null,"Create new post"),l.a.createElement("input",{id:"title",type:"text",placeholder:"Post title goes here..."}),l.a.createElement("textarea",{id:"content",placeholder:"Post content goes here..."}),l.a.createElement("button",{onClick:this.handleClick},"Save post"))}}]),a}(l.a.Component);var k=function(e){var t=Object(d.f)().postId,a=function(e,t){var a=null;return e.forEach((function(e){e.id==t&&(a=e)})),a}(e.posts,t);return l.a.createElement("div",{className:"post"},l.a.createElement("h1",null,a.title),l.a.createElement("br",null),l.a.createElement("p",null,a.content))},O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"login"},"Username: ",l.a.createElement("input",{type:"text",name:"user",onChange:this.props.handleChange}),l.a.createElement("br",null),"Password: ",l.a.createElement("input",{type:"password",name:"pass",onChange:this.props.handleChange}),l.a.createElement("br",null),l.a.createElement("button",{to:"/",onClick:this.props.handleLogin},"Login"),l.a.createElement("br",null),l.a.createElement("br",null))}}]),a}(l.a.Component),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"sign-in"},"Full Name: ",l.a.createElement("input",{type:"text",name:"name",onChange:this.props.handleChange}),l.a.createElement("br",null),"Username: ",l.a.createElement("input",{type:"text",name:"user",onChange:this.props.handleChange}),l.a.createElement("br",null),"Password: ",l.a.createElement("input",{type:"password",name:"pass",onChange:this.props.handleChange}),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.props.handleSignIn},"Sign In"),l.a.createElement("br",null),l.a.createElement("br",null))}}]),a}(l.a.Component),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(o.a)({},e.target.name,e.target.value))},n.handleLogin=function(e){var t={user:n.state.user,pass:n.state.pass};g.a.post("/login",t).then((function(e){n.postsHandler(),n.setState({isLoggedIn:!0,resp:"Success: user logged in."})})).catch((function(e){n.setState({isLoggedIn:!1,resp:"Error: failed to login user."})}))},n.handleSignIn=function(e){var t={user:n.state.user,pass:n.state.pass,name:n.state.name};g.a.post("/signin",t).then((function(e){n.postsHandler(),n.setState({isLoggedIn:!0,resp:"Success: user signed in."})})).catch((function(e){n.setState({isLoggedIn:!1,resp:"Error: failed to signed user."})}))},n.handleLogout=function(){var e={user:n.state.user};g.a.post("/logout",e).then((function(e){n.setState({posts:[],user:null,pass:null,name:null,resp:"Success: user logged out.",isLoggedIn:!1})})).catch((function(e){n.setState({resp:"Error: failed to logout user."})})),setTimeout((function(){n.setState({resp:null})}),5e3)},n.handleAddPost=function(e){var t={user:n.state.user,title:e.title,content:e.content};g.a.post("/posts",t).then((function(e){n.postsHandler(),n.setState({resp:"Success: post added."})})).catch((function(e){n.setState({resp:"Error: failed to add post."})}))},n.postsHandler=function(){g.a.get("/posts").then((function(e){n.setState({posts:e.data})})).catch((function(e){n.setState({posts:[],resp:"Error: failed to get all posts, need to Login / Sign in."})})),setTimeout((function(){n.setState({resp:null})}),5e3)},n.checkIfLogedIn=function(){g.a.get("/login").then((function(e){n.postsHandler(),n.setState({user:e.data.user_name,name:e.data.full_name,isLoggedIn:!0})})).catch((function(e){n.setState({user:null,name:null,isLoggedIn:!1})}))},n.state={posts:[],user:null,pass:null,name:null,resp:null,isLoggedIn:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.checkIfLogedIn()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p.a,{basename:"/"},l.a.createElement(E,{isLoggedIn:this.state.isLoggedIn,user:this.state.user,handleLogout:this.handleLogout}),l.a.createElement("h3",{className:"resp"},this.state.resp),l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/login"},l.a.createElement(O,{handleChange:this.handleChange,handleLogin:this.handleLogin})),l.a.createElement(d.a,{path:"/signin"},l.a.createElement(N,{handleChange:this.handleChange,handleSignIn:this.handleSignIn})),l.a.createElement(d.a,{path:"/aboutme"},l.a.createElement(C,null)),l.a.createElement(d.a,{path:"/newpost"},l.a.createElement(j,{handleAddPost:this.handleAddPost})),l.a.createElement(d.a,{path:"/post/:postId"},l.a.createElement(k,{posts:this.state.posts})),l.a.createElement(d.a,{path:"/"},l.a.createElement(S,{posts:this.state.posts})))))}}]),a}(l.a.Component);s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.b62e9bce.chunk.js.map