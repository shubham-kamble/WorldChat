(this["webpackJsonpworld-chat"]=this["webpackJsonpworld-chat"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(3),a=n.n(c),i=n(14),s=n.n(i),o=(n(22),n(9)),u=(n(23),n(7)),j=(n(24),n(27),n(15)),d=n(12);var h=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"SignUp Page"}),Object(r.jsx)("button",{onClick:function(){var t=new u.a.auth.GoogleAuthProvider;e.auth.signInWithPopup(t)},children:"Sign in with Google"})]})},b=n(13),l=n.n(b),p=n(16);var O=function(e){var t=e.message,n=t.text,c=t.uid,a=t.photoURL,i=c===e.auth.currentUser.uid?"sent":"received";return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"message ".concat(i),children:[Object(r.jsx)("img",{src:a}),Object(r.jsx)("p",{children:n})]})})};var f=function(e){var t=e.firestore.collection("messages"),n=t.orderBy("createdAt").limit(25),a=Object(d.a)(n,{idField:"id"}),i=Object(o.a)(a,1)[0],s=Object(c.useState)(""),j=Object(o.a)(s,2),h=j[0],b=j[1],f=function(){var n=Object(p.a)(l.a.mark((function n(r){var c,a,i;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),c=e.auth.currentUser,a=c.uid,i=c.photoURL,n.next=4,t.add({text:h,createdAt:u.a.firestore.FieldValue.serverTimestamp(),uid:a,photoURL:i});case 4:b(""),g.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=Object(c.useRef)();return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{children:[Object(r.jsxs)("main",{children:[i&&i.map((function(t){return Object(r.jsx)(O,{message:t,auth:e.auth},t.id)})),Object(r.jsx)("div",{ref:g})]}),Object(r.jsxs)("form",{onSubmit:f,children:[Object(r.jsx)("input",{value:h,onChange:function(e){return b(e.target.value)}}),Object(r.jsx)("button",{type:"submit",children:"Send"})]})]})})};u.a.initializeApp({apiKey:"AIzaSyCKTEaHJRbv8t0FML55XzBpFIa6aynSSgs",authDomain:"w0rld-chat.firebaseapp.com",databaseURL:"https://w0rld-chat.firebaseio.com",projectId:"w0rld-chat",storageBucket:"w0rld-chat.appspot.com",messagingSenderId:"291093871584",appId:"1:291093871584:web:f9606751ca4295ecb60985",measurementId:"G-C60XF8QLJC"});var g=u.a.auth(),m=u.a.firestore();var x=function(){var e=Object(j.a)(g),t=Object(o.a)(e,1)[0];return Object(c.useEffect)((function(){console.log(t)})),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("h1",{children:"WorldChat"}),t?Object(r.jsx)("button",{onClick:function(){return g.signOut()},children:"Logout"}):Object(r.jsx)("p",{})]}),Object(r.jsx)("section",{children:t?Object(r.jsx)(f,{auth:g,firestore:m,user:t}):Object(r.jsx)(h,{auth:g})})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),v()}},[[30,1,2]]]);
//# sourceMappingURL=main.196688b4.chunk.js.map