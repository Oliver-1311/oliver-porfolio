import{r as n,j as e}from"./jsx-runtime-CbkKSL4Y.js";import{u as z,t as B,T as Q,G as X,a as ee}from"./theme-provider-DjYxPUYU.js";import{E as te}from"./error-B8IQRfdf.js";import{V as se}from"./visually-hidden-jbcz4BFI.js";import{c as ne,B as D,I as M,d as ae,b as oe,m as E,a as re,n as ie}from"./heading-D8Tt-9AR.js";import{c as x,t as q}from"./config-Bk0ALTY1.js";import{u as le}from"./useScrollToHash-Cv59gfDf.js";import{u as ce}from"./useWindowSize-MDlHk0QV.js";import{q as me,u as F,t as he,v as de,_ as ue,L as C,w as G,c as fe,x as ge,M as J,y as W,O as pe,S as U,b as xe}from"./components-BUNpIsrb.js";import"./decoder-text-BlfBsFFf.js";import"./use-spring-C8-hVHuT.js";/**
 * @remix-run/react v2.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let R="positions";function Y({getKey:t,...s}){let{isSpaMode:a}=me(),i=F(),o=he();de({getKey:t,storageKey:R});let l=n.useMemo(()=>{if(!t)return null;let r=t(i,o);return r!==i.key?r:null},[]);if(a)return null;let m=((r,p)=>{if(!window.history.state||!window.history.state.key){let v=Math.random().toString(32).slice(2);window.history.replaceState({key:v},"")}try{let k=JSON.parse(sessionStorage.getItem(r)||"{}")[p||window.history.state.key];typeof k=="number"&&window.scrollTo(0,k)}catch(v){console.error(v),sessionStorage.removeItem(r)}}).toString();return n.createElement("script",ue({},s,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${JSON.stringify(R)}, ${JSON.stringify(l)})`}}))}const ve="_monogram_1jhi1_3",je="_highlight_1jhi1_13",O={monogram:ve,highlight:je},be=n.forwardRef(({highlight:t,className:s,...a},i)=>{const l=`${n.useId()}monogram-clip`;return e.jsxs("svg",{"aria-hidden":!0,className:ne(O.monogram,s),width:"38.8",height:"29.8",viewBox:"0 0 388 298",ref:i,...a,children:[e.jsx("defs",{children:e.jsxs("clipPath",{id:l,children:[e.jsx("path",{d:"M32 60C32 39 0 31 0 31H40C58 31 64 51 64 60V269H32V60Z",fill:"black"}),e.jsx("path",{d:"M312 282V100L255 207C255 207 288 157 288 173C288 189 276 282 276 282L255 296H387C387 296 387 282 372 282H312Z",fill:"black"}),e.jsx("path",{d:"M128 282H114C114 282 86 161 100 173C114 185 134 207 134 207L82 100V282H20C8 282 8 296 8 296H140C140 296 140 282 128 282Z",fill:"black"}),e.jsx("path",{d:"M360 60V269H332V60C332 39 342 31 352 31H387C387 31 360 44 360 60Z",fill:"black"}),e.jsx("path",{d:"M196 207L235 124L282 107L196 296L105 100L158 124L196 207Z",fill:"black"}),e.jsx("path",{d:"M242 107L288 87C288 87 298 70 312 39C326 8 352 0 352 0H312C312 0 294 5.72205e-06 282 22C270 44 242 107 242 107Z",fill:"black"}),e.jsx("path",{d:"M100 87L150 107C150 107 118 43 114 31C110 19 105 0 88 0H32C32 0 64 0 77 31C90 62 100 87 100 87Z",fill:"black"}),e.jsx("path",{d:"M269 0L196 157L114 0H150L196 95L235 0H269Z"})]})}),e.jsx("rect",{clipPath:`url(#${l})`,width:"100%",height:"100%"}),t&&e.jsx("g",{clipPath:`url(#${l})`,children:e.jsx("rect",{className:O.highlight,width:"100%",height:"100%"})})]})}),_e="_toggle_h91zx_3",ke="_inner_h91zx_33",ye="_icon_h91zx_49",N={toggle:_e,inner:ke,icon:ye},Ne=({menuOpen:t,...s})=>e.jsx(D,{iconOnly:!0,className:N.toggle,"aria-label":"Menu","aria-expanded":t,...s,children:e.jsxs("div",{className:N.inner,children:[e.jsx(M,{className:N.icon,"data-menu":!0,"data-open":t,icon:"menu"}),e.jsx(M,{className:N.icon,"data-close":!0,"data-open":t,icon:"close"})]})}),Le="_toggle_y3n84_3",we="_circle_y3n84_57",Ce="_mask_y3n84_107",Me="_path_y3n84_143",j={toggle:Le,circle:we,mask:Ce,path:Me},A=({isMobile:t,...s})=>{const a=n.useId(),{toggleTheme:i}=z(),o=`${a}theme-toggle-mask`;return e.jsx(D,{iconOnly:!0,className:j.toggle,"data-mobile":t,"aria-label":"Toggle theme",onClick:()=>i(),...s,children:e.jsxs("svg",{"aria-hidden":!0,className:j.svg,width:"38",height:"38",viewBox:"0 0 38 38",children:[e.jsx("defs",{children:e.jsxs("mask",{id:o,children:[e.jsx("circle",{className:j.circle,"data-mask":!0,cx:"19",cy:"19",r:"13"}),e.jsx("circle",{className:j.mask,cx:"25",cy:"14",r:"9"})]})}),e.jsx("path",{className:j.path,d:"M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"}),e.jsx("circle",{className:j.circle,mask:`url(#${o})`,cx:"19",cy:"19",r:"12"})]})})},V=[{label:"Projects",pathname:"/#project-1"},{label:"Details",pathname:"/#details"},{label:"Articles",pathname:"/articles"},{label:"Contact",pathname:"/contact"}],Se=[{label:"Twitter",url:`https://twitter.com/${x.twitter}`,icon:"twitter"},{label:"Figma",url:`https://www.figma.com/${x.figma}`,icon:"figma"},{label:"Github",url:`https://github.com/${x.github}`,icon:"github"}],Te="_navbar_1qbli_3",Ie="_logo_1qbli_53",$e="_nav_1qbli_3",He="_navList_1qbli_101",Ee="_navLink_1qbli_117",qe="_navIcons_1qbli_203",Re="_navIconLink_1qbli_251",Oe="_navIcon_1qbli_203",Ae="_mobileNav_1qbli_293",Ve="_mobileNavLink_1qbli_353",f={navbar:Te,logo:Ie,nav:$e,navList:He,navLink:Ee,navIcons:qe,navIconLink:Re,navIcon:Oe,mobileNav:Ae,mobileNavLink:Ve},Pe=()=>{const[t,s]=n.useState(),[a,i]=n.useState(!1),[o,l]=n.useState(),{theme:m}=z(),r=F(),p=ce(),v=n.useRef(),k=p.width<=ae.mobile||p.height<=696,S=le();n.useEffect(()=>{s(`${r.pathname}${r.hash}`)},[r]),n.useEffect(()=>{!o||r.pathname!=="/"||(s(`${r.pathname}${o}`),S(o,()=>l(null)))},[r.pathname,S,o]),n.useEffect(()=>{const c=document.querySelectorAll("[data-navbar-item]"),h=m==="dark"?"light":"dark",{innerHeight:y}=window;let b=[],_=[];const K=(u,g,d)=>!(u.bottom-d<g.top||u.top-d>g.bottom),H=()=>{for(const u of _)u.element.dataset.theme=""},L=()=>{const u=document.querySelectorAll(`[data-theme='${h}'][data-invert]`);if(!u)return;b=Array.from(u).map(d=>({element:d,top:d.offsetTop,bottom:d.offsetTop+d.offsetHeight}));const{scrollY:g}=window;H();for(const d of b)if(!(d.top-g>y||d.bottom-g<0))for(const w of _)K(d,w,g)?w.element.dataset.theme=h:w.element.dataset.theme=""};return m==="light"&&(_=Array.from(c).map(u=>{const g=u.getBoundingClientRect();return{element:u,top:g.top,bottom:g.bottom}}),document.addEventListener("scroll",L),L()),()=>{document.removeEventListener("scroll",L),H()}},[m,p,r.key]);const T=(c="")=>{const h=t!=null&&t.endsWith("/")?t==null?void 0:t.slice(0,-1):t;return c===h?"page":""},I=c=>{const h=c.currentTarget.href.split("#")[1];l(null),h&&r.pathname==="/"&&(l(`#${h}`),c.preventDefault())},$=c=>{I(c),a&&i(!1)};return e.jsxs("header",{className:f.navbar,ref:v,children:[e.jsx(C,{prefetch:"intent",to:r.pathname==="/"?"/#intro":"/","data-navbar-item":!0,className:f.logo,"aria-label":`${x.name}, ${x.role}`,onClick:$,children:e.jsx(be,{highlight:!0})}),e.jsx(Ne,{onClick:()=>i(!a),menuOpen:a}),e.jsxs("nav",{className:f.nav,children:[e.jsx("div",{className:f.navList,children:V.map(({label:c,pathname:h})=>e.jsx(C,{prefetch:"intent",to:h,"data-navbar-item":!0,className:f.navLink,"aria-current":T(h),onClick:I,children:c},c))}),e.jsx(P,{desktop:!0})]}),e.jsx(oe,{unmount:!0,in:a,timeout:E(q.base.durationL),children:({visible:c,nodeRef:h})=>e.jsxs("nav",{className:f.mobileNav,"data-visible":c,ref:h,children:[V.map(({label:y,pathname:b},_)=>e.jsx(C,{unstable_viewTransition:!0,prefetch:"intent",to:b,className:f.mobileNavLink,"data-visible":c,"aria-current":T(b),onClick:$,style:re({transitionDelay:ie(Number(E(q.base.durationS))+_*50)}),children:y},y)),e.jsx(P,{}),e.jsx(A,{isMobile:!0})]})}),!k&&e.jsx(A,{"data-navbar-item":!0})]})},P=({desktop:t})=>e.jsx("div",{className:f.navIcons,children:Se.map(({label:s,url:a,icon:i})=>e.jsx("a",{"data-navbar-item":t||void 0,className:f.navIconLink,"aria-label":s,href:a,target:"_blank",rel:"noopener noreferrer",children:e.jsx(M,{className:f.navIcon,icon:i})},s))}),Ze="_progress_brpaj_3",ze={progress:Ze};function Be(){const[t,s]=n.useState(!1),[a,i]=n.useState(!1),{state:o}=G(),l=n.useRef(),m=n.useRef(0);return n.useEffect(()=>{clearTimeout(m.current),o!=="idle"?m.current=setTimeout(()=>{i(!0)},500):t&&(m.current=setTimeout(()=>{i(!1)},300))},[o,t]),n.useEffect(()=>{if(!l.current)return;const r=new AbortController;return o!=="idle"?s(!1):(Promise.all(l.current.getAnimations({subtree:!0}).map(p=>p.finished)).then(()=>{r.signal.aborted||s(!0)}),()=>{r.abort()})},[o]),e.jsx("div",{className:ze.progress,"data-status":o,"data-visible":a,"data-complete":t,ref:l})}const De="_container_1g4r3_3",Fe="_skip_1g4r3_23",Z={container:De,skip:Fe},nt=()=>[{rel:"preload",href:X,as:"font",type:"font/woff2",crossOrigin:""},{rel:"preload",href:ee,as:"font",type:"font/woff2",crossOrigin:""},{rel:"manifest",href:"/manifest.json"},{rel:"icon",href:"/favicon.ico"},{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"},{rel:"shortcut_icon",href:"/shortcut.png",type:"image/png",sizes:"64x64"},{rel:"apple-touch-icon",href:"/icon-256.png",sizes:"256x256"},{rel:"author",href:"/humans.txt",type:"text/plain"}];function at(){var l;let{canonicalUrl:t,theme:s}=fe();const a=ge(),{state:i}=G();(l=a.formData)!=null&&l.has("theme")&&(s=a.formData.get("theme"));function o(m){a.submit({theme:m||(s==="dark"?"light":"dark")},{action:"/api/set-theme",method:"post"})}return n.useEffect(()=>{console.info(`${x.ascii}
`,`Taking a peek huh? Check out the source code: ${x.repo}

`)},[]),e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("meta",{name:"theme-color",content:s==="dark"?"#111":"#F2F2F2"}),e.jsx("meta",{name:"color-scheme",content:s==="light"?"light dark":"dark light"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:B}}),e.jsx(J,{}),e.jsx(W,{}),e.jsx("link",{rel:"canonical",href:t})]}),e.jsxs("body",{"data-theme":s,children:[e.jsxs(Q,{theme:s,toggleTheme:o,children:[e.jsx(Be,{}),e.jsx(se,{showOnFocus:!0,as:"a",className:Z.skip,href:"#main-content",children:"Skip to main content"}),e.jsx(Pe,{}),e.jsx("main",{id:"main-content",className:Z.container,tabIndex:-1,"data-loading":i==="loading",children:e.jsx(pe,{})})]}),e.jsx(Y,{}),e.jsx(U,{})]})]})}function ot(){const t=xe();return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("meta",{name:"theme-color",content:"#111"}),e.jsx("meta",{name:"color-scheme",content:"dark light"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:B}}),e.jsx(J,{}),e.jsx(W,{})]}),e.jsxs("body",{"data-theme":"dark",children:[e.jsx(te,{error:t}),e.jsx(Y,{}),e.jsx(U,{})]})]})}export{ot as ErrorBoundary,at as default,nt as links};