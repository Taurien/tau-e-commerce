(this["webpackJsonptau-e-commerce"]=this["webpackJsonptau-e-commerce"]||[]).push([[0],{18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(12),i=c.n(a),r=c(5),s=(c(18),c(2)),l=c(11),o=c.n(l),d=c(13),j=c(6),u=c(9),b=c(3),m=c(0),p=Object(n.createContext)(),O={items:null,cart:[],totalpay:0},x=function(e,t){switch(t.type){case"LOAD_ITEMS":return Object(b.a)(Object(b.a)({},e),{},{items:t.payload});case"ADD_TO_CART":if(e.cart.find((function(e){return e.id===t.payload.id}))){var c=e.cart.findIndex((function(e){return e.id===t.payload.id}));e.cart[c].quantity++}else e.cart.push(Object(b.a)(Object(b.a)({},t.payload),{},{quantity:1}));return Object(b.a)(Object(b.a)({},e),{},{cart:Object(u.a)(e.cart),totalpay:e.totalpay+t.payload.price});case"INCREASE_BY_ONE":var n=e.cart.findIndex((function(e){return e.id===t.payload.id}));return e.cart[n].quantity++,Object(b.a)(Object(b.a)({},e),{},{cart:Object(u.a)(e.cart),totalpay:e.totalpay+t.payload.price});case"DECREASE_N_DELETE_FROM_CART":if(1===t.payload.quantity)return Object(b.a)(Object(b.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id})),totalpay:e.totalpay-t.payload.price});if(t.payload.quantity>1){var a=e.cart.findIndex((function(e){return e.id===t.payload.id}));e.cart[a].quantity--}return Object(b.a)(Object(b.a)({},e),{},{cart:Object(u.a)(e.cart),totalpay:e.totalpay-t.payload.price});case"DELETE_AT_ALL":var i=t.payload.price*t.payload.quantity;return Object(b.a)(Object(b.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id})),totalpay:e.totalpay-i});case"CLEAR_CART":return Object(b.a)(Object(b.a)({},e),{},{cart:[],totalpay:0});default:return e}},f=function(e){var t=e.children,c=Object(n.useReducer)(x,O),a=Object(j.a)(c,2),i=a[0],r=a[1];Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://fakestoreapi.com/products",e.next=3,fetch("https://fakestoreapi.com/products");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,r({type:"LOAD_ITEMS",payload:c});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var s={state:i,dispatch:r};return Object(m.jsx)(p.Provider,{value:s,children:t})},h=p,y=c.p+"static/media/logo.631fbf4e.svg",v=c.p+"static/media/cart.93770646.svg",g=(c(21),function(){var e,t=Object(n.useContext)(h).state;return Object(m.jsxs)("nav",{className:"w-full inline-flex justify-between items-center",children:[Object(m.jsxs)("div",{className:"logo inline-flex items-center",children:[Object(m.jsx)(r.b,{to:"/tau-e-commerce",children:Object(m.jsx)("img",{src:y,alt:"Logo"})}),Object(m.jsx)("h1",{children:"Tau-Express"})]}),Object(m.jsxs)("ul",{className:"menu inline-flex justify-between items-center",children:[Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{to:"/tau-e-commerce",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{to:"/products",children:"Store"})}),Object(m.jsx)("li",{id:"cartCounter",children:Object(m.jsxs)(r.b,{to:"/cart",children:[Object(m.jsx)("img",{src:v,alt:"cart"}),(null===t||void 0===t||null===(e=t.cart)||void 0===e?void 0:e.length)>0&&Object(m.jsx)("span",{children:t.cart.reduce((function(e,t){return e+t.quantity}),0)})]})})]})]})}),C=function(e){var t=e.children;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{}),t]})},E=c.p+"static/media/plus.dec889e8.svg",N=c.p+"static/media/minus.0c8f8ef4.svg",_=c.p+"static/media/x-circle.a4735472.svg",A=c.p+"static/media/icons8-delete-bin.d0dbde46.svg",w=(c(22),function(e){var t=Object(s.e)().pathname,c=(e.id,e.item),a=e.image,i=e.title,r=e.price,l=e.quantity,o=Object(n.useContext)(h).dispatch,d=function(){o("/products"===t?{type:"ADD_TO_CART",payload:c}:{type:"DECREASE_N_DELETE_FROM_CART",payload:c})},j=function(){o({type:"INCREASE_BY_ONE",payload:c})};return Object(m.jsxs)("div",{className:"itemcard ".concat(l?"py-3 px-4 inline-flex items-center":"flex flex-col justify-between"),children:[l&&Object(m.jsx)("button",{onClick:function(){o({type:"DELETE_AT_ALL",payload:c})},children:Object(m.jsx)("img",{src:_,alt:""})}),Object(m.jsxs)("div",{className:"itemDetails\n                ".concat("/cart"!==t&&"h-full"," \n                ").concat(l?"w-full inline-flex items-center justify-evenly":"p-3 flex flex-col","\n                ").concat("/tau-e-commerce"===t||"/tau-e-commerce/"===t?"justify-center":"/products"===t?"justify-between":"","\n                "),children:[Object(m.jsx)("div",{className:"self-center\n                    ".concat("/tau-e-commerce"===t||"/tau-e-commerce/"===t?"imgCtn":"/products"===t?"imgCtnProducts":"imgCtnDefault","\n                    "),children:Object(m.jsx)("img",{src:a,alt:i})}),Object(m.jsx)("p",{className:"".concat(l?"test123":""),children:i}),Object(m.jsxs)("p",{className:"".concat("/tau-e-commerce"===t||"/tau-e-commerce/"===t?"self-center":""),children:["$ ",r]})]}),"/tau-e-commerce"===t||"/tau-e-commerce/"===t?null:Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"actions ".concat(l?"w-20 flex flex-col overflow-hidden rounded-lg":""),children:[l&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{onClick:j,className:"upBtn",children:Object(m.jsx)("img",{src:E,alt:""})}),Object(m.jsx)("span",{children:l})]}),Object(m.jsx)("button",{className:"".concat(l?"btBtn":"w-full"),onClick:d,children:"/products"===t?"Add to cart":1===l?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("img",{src:A,alt:""})}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("img",{src:N,alt:""})})})]})})]})}),T=(c(23),function(){var e=Object(n.useContext)(h).state;return Object(m.jsxs)("div",{className:"homeView flex flex-col items-center",children:[Object(m.jsx)("p",{className:"",children:"banner"}),Object(m.jsx)("div",{className:"entryItems w-full inline-flex justify-evenly",children:(null===e||void 0===e?void 0:e.items)?(null===e||void 0===e?void 0:e.items.sort((function(){return Math.random()-Math.random()})).slice(0,5)).map((function(e,t){return Object(m.jsx)(w,{id:e.id,image:e.image,price:e.price},t)})):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("p",{children:"magic incoming"})})}),Object(m.jsx)(r.b,{className:"",to:"/products",children:"click here"})]})}),D=c.p+"static/media/icons8-trash.addb94a5.svg",L=(c(24),function(){var e=Object(n.useContext)(h),t=e.state,c=e.dispatch,a=Object(s.f)();return Object(m.jsxs)("div",{className:"cartView flex flex-col",children:[Object(m.jsxs)("div",{className:"partialPrice self-center w-6/12 inline-flex justify-around items-center",children:[Object(m.jsxs)("span",{children:["u have to pay: $ ",0===(null===t||void 0===t?void 0:t.cart.length)?"0.00":null===t||void 0===t?void 0:t.totalpay.toFixed(2)," USD"]}),(null===t||void 0===t?void 0:t.cart.length)>0&&Object(m.jsx)("button",{onClick:function(){c({type:"CLEAR_CART"})},children:Object(m.jsx)("img",{src:D,alt:""})})]}),Object(m.jsx)("div",{className:"productsCtn self-center grid",children:t&&(null===t||void 0===t?void 0:t.cart.length)>0?t.cart.map((function(e,t){return Object(m.jsx)(w,{item:e,id:e.id,image:e.image,title:e.title,description:e.description,price:e.price,quantity:e.quantity},t)})):Object(m.jsx)("p",{children:"Empty"})}),(null===t||void 0===t?void 0:t.cart.length)>0&&Object(m.jsx)("button",{onClick:function(){a({pathname:"/checkout"})},className:"self-center",children:"Checkout"})]})}),R=(c(25),function(){var e,t=Object(n.useContext)(h).state;return Object(m.jsx)("div",{className:"productsView flex flex-col",children:Object(m.jsx)("div",{className:"productsCtn self-center grid",children:t&&(null===(e=t.items)||void 0===e?void 0:e.length)>0?t.items.map((function(e,t){return Object(m.jsx)(w,{item:e,id:e.id,image:e.image,title:e.title,description:e.description,price:e.price},t)})):Object(m.jsx)("p",{children:"cargando"})})})}),k=function(){return Object(m.jsxs)("div",{children:["im alive",Object(m.jsx)("p",{children:"test123"})]})};c(26);var F=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(f,{children:Object(m.jsx)(C,{children:Object(m.jsxs)(s.c,{children:[Object(m.jsx)(s.a,{exact:!0,path:"tau-e-commerce",element:Object(m.jsx)(T,{})}),Object(m.jsx)(s.a,{path:"products",element:Object(m.jsx)(R,{})}),Object(m.jsx)(s.a,{path:"cart",element:Object(m.jsx)(L,{})}),Object(m.jsx)(s.a,{path:"checkout",element:Object(m.jsx)(k,{})})]})})})})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};i.a.render(Object(m.jsx)(r.a,{children:Object(m.jsx)(F,{})}),document.getElementById("root")),q()}},[[27,1,2]]]);
//# sourceMappingURL=main.b04812e0.chunk.js.map