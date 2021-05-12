(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{27:function(e,n,t){"use strict";t.r(n);var r,a,i,c,o,s,u,l,d,b,p,f=t(0),g=t.n(f),j=t(12),h=t.n(j),x=t(4),m=t(2),O=t(3),v=O.a.div(r||(r=Object(m.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    margin: 0 0.5rem;\n"]))),y=O.a.div(a||(a=Object(m.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n"]))),w=O.a.span(i||(i=Object(m.a)(["\n    font-family: 'Lato', sans-serif;\n    font-weight: bold;\n    color: black;\n    font-size: ",";\n    padding: 0.5rem;\n    text-align: ","; ;\n"])),(function(e){return"".concat(e.size,"rem")||!1}),(function(e){return e.alignText?"center":"none"})),k=Object(O.a)(v)(c||(c=Object(m.a)(["\n    margin-bottom: 3rem;\n"]))),S="https://www.omdbapi.com/",C="8c913da8",P="#ffffff",z="#0366d6",L="#dddddd",N="#f5c516",T="#e2b616",q=O.a.div(o||(o=Object(m.a)(["\n    flex: 30% 1 auto;\n    display: flex;\n    flex-direction: row;\n    margin: 0.5rem 0;\n    padding: 1rem;\n    width: 25rem;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n    background-color: ",";\n    border-radius: 5px;\n\n    @media (max-width: 1199px) {\n        width: 20rem;\n    }\n"])),P),F=O.a.img(s||(s=Object(m.a)(["\n    width: 100%;\n    height: auto;\n    max-width: 200px;\n"]))),E=O.a.div(u||(u=Object(m.a)(["\n    width: 50%;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n"]))),D=O.a.button(l||(l=Object(m.a)(["\n    background-color: ",";\n    color: black;\n    font-weight: 900;\n    border: none;\n    border-radius: 5px;\n    padding: 0.3rem 0rem;\n    max-width: 100px;\n    cursor: pointer;\n\n    :hover {\n        background-color: ",";\n    }\n"])),N,T),I=O.a.div(d||(d=Object(m.a)(["\n    height: 270px;\n    max-width: 200px;\n    background-color: ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 3rem;\n    color: ",";\n    text-align: center;\n"])),L,P),R=t(1),J=function(e){var n=e.data,t="".concat(n.Title,"poster");return Object(R.jsxs)(q,{children:[Object(R.jsxs)(E,{children:[Object(R.jsx)(w,{size:2,children:n.Title}),Object(R.jsxs)(E,{children:[Object(R.jsx)(w,{size:1.7,children:n.Year}),Object(R.jsx)(w,{size:1.3,children:n.Type})]}),Object(R.jsx)(D,{type:"button",onClick:function(){return window.open("https://www.imdb.com/title/".concat(n.imdbID,"/"))},children:"Go to IMBb"})]}),Object(R.jsx)(E,{children:"N/A"!==n.Poster?Object(R.jsx)(F,{src:n.Poster,alt:t,width:"100",height:"200"}):Object(R.jsx)(I,{children:"No poster"})})]})},M=O.a.input(b||(b=Object(m.a)(["\n    font-family: 'Lato', sans-serif;\n    font-weight: bold;\n    font-size: 1rem;\n\n    width: 100%;\n    background-color: transparent;\n    margin: 0;\n    color: black;\n    word-wrap: break-word;\n    outline: none;\n    display: flex;\n    flex: 100%;\n    height: 34px;\n    padding: 0.4rem 1rem;\n    font-size: 1.5rem;\n    border-radius: 24px;\n    border: none;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n\n    :hover,\n    :focus {\n        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n    }\n"]))),Q=function(e){var n=e.query,t=e.handleSearch,r=e.placeholder;return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(M,{type:"text",onChange:t,value:n,placeholder:r})})},B=t(16),A=t.n(B),G=O.a.div(p||(p=Object(m.a)(["\n    ul {\n        list-style: none;\n        padding: 0;\n    }\n    .pagination {\n        color: ",";\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n    }\n    .pageClassName a {\n        border-radius: 4px;\n        font-size: 1rem;\n        height: 34px;\n        min-width: 34px;\n        padding: 0 0.5rem;\n        transition: 0.3s cubic-bezier(0, 0, 0.2, 1);\n        width: auto;\n        cursor: pointer;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border: 1px solid ",";\n        margin: 5px 5px;\n    }\n    .break-me {\n        cursor: default;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin: 5px 10px;\n    }\n    .active a {\n        border-color: transparent;\n        background-color: ",";\n        color: ",";\n    }\n    .page-navigation {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: relative;\n        height: 34px;\n        min-width: 34px;\n        padding: 0 0.5rem;\n        margin-left: -1px;\n        line-height: 1.42857143;\n        background-color: ",";\n        border: 1px solid ",";\n        cursor: pointer;\n        margin: 5px 0;\n    }\n"])),z,z,z,P,P,z),Y=function(e){var n=e.totalPages,t=e.currentPage,r=e.handlePageChange;return Object(R.jsx)(G,{children:Object(R.jsx)(A.a,{previousLabel:"<",nextLabel:">",breakLabel:"...",breakClassName:"break-me",pageCount:n,forcePage:t-1,marginPagesDisplayed:1,pageRangeDisplayed:3,onPageChange:r,pageClassName:"pageClassName",containerClassName:"pagination",activeClassName:"active",previousLinkClassName:"page-navigation",nextLinkClassName:"page-navigation"})})},H=function(e){var n=e.query,t=e.handleQuery;return Object(R.jsxs)(k,{children:[Object(R.jsx)(w,{size:5,alignText:!0,children:"Search movies"}),Object(R.jsx)(Q,{query:n,handleSearch:function(e){t(e.target.value)},placeholder:"Search movies"})]})},K=function(e,n){var t=e.movieService,r=Object(f.useState)([]),a=Object(x.a)(r,2),i=a[0],c=a[1],o=Object(f.useState)(0),s=Object(x.a)(o,2),u=s[0],l=s[1],d=Object(f.useState)(1),b=Object(x.a)(d,2),p=b[0],g=b[1],j=Object(f.useState)(""),h=Object(x.a)(j,2),m=h[0],O=h[1],v=function(e,n,t){O(t),c(e),l((function(){return n/10}))};return Object(f.useEffect)((function(){g(1)}),[n,g]),Object(f.useEffect)((function(){t.getMovieList({s:n,page:p}).then((function(e){return"False"===e.Response?v([],0,e.Error):v(function(e){var n=e.map((function(e){return JSON.stringify(e)})),t=new Set(n);return Array.from(t).map((function(e){return JSON.parse(e)}))}(e.Search),Number(e.totalResults),"")})).catch((function(e){O(e.msg)}))}),[n,p,t]),{movieList:i,totalPages:u,currentPage:p,setCurrentPage:g,error:m}},U=t(5),V=t(6),W=function(){function e(){Object(U.a)(this,e)}return Object(V.a)(e,[{key:"get",value:function(n,t){var r="".concat(n,"?").concat(e.objectToQueryString(t));return e.makeRequest(r)}}],[{key:"makeRequest",value:function(e){return fetch(e).then((function(e){return e.ok&&e.json()})).catch((function(e){throw new Error("Failed to fatch movie list")}))}},{key:"objectToQueryString",value:function(e){return Object.keys(e).map((function(n){return"".concat(n,"=").concat(e[n])})).join("&")}}]),e}(),X=t(11),Z={movieService:new(function(){function e(n,t,r){Object(U.a)(this,e),this.httpService=n,this.url=t,this.apikey=r}return Object(V.a)(e,[{key:"getMovieList",value:function(e){return this.httpService.get(this.url,Object(X.a)(Object(X.a)({},e),{},{apikey:this.apikey}))}}]),e}())(new W,S,C)},$=function(e){var n=e.query,t=K(Z,n),r=t.movieList,a=t.totalPages,i=t.currentPage,c=t.setCurrentPage,o=t.error;return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(v,{children:[!o&&r.map((function(e){return Object(R.jsx)(J,{data:e},e.imdbID)})),o&&Object(R.jsx)(w,{size:2,children:o})]}),Object(R.jsx)(Y,{totalPages:a,currentPage:i,handlePageChange:function(e){var n=e.selected;c(n+1)}})]})},_=function(){var e=function(e,n){var t=Object(f.useState)(e),r=Object(x.a)(t,2),a=r[0],i=r[1],c=Object(f.useState)(e),o=Object(x.a)(c,2),s=o[0],u=o[1];return Object(f.useEffect)((function(){var e=setTimeout((function(){u(a)}),n);return function(){clearTimeout(e)}}),[a,n]),[s,a,i]}("",500),n=Object(x.a)(e,3),t=n[0],r=n[1],a=n[2];return Object(R.jsxs)(y,{children:[Object(R.jsx)(H,{query:r,handleQuery:a}),Object(R.jsx)($,{query:t})]})},ee=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),r(e),a(e),i(e),c(e)}))};h.a.render(Object(R.jsx)(g.a.StrictMode,{children:Object(R.jsx)(_,{})}),document.getElementById("root")),ee()}},[[27,1,2]]]);
//# sourceMappingURL=main.5e87f85a.chunk.js.map