(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[533],{9646:function(i,e,a){"use strict";a.d(e,{c:function(){return n}});var t=a(7462),s=a(7294),o=a(1884),u=a(9477);let r=i=>"function"==typeof i,n=s.forwardRef(({envMap:i,resolution:e=256,frames:a=1/0,makeDefault:n,children:l,...m},c)=>{var d;let p=(0,o.z)(({set:i})=>i),q=(0,o.z)(({camera:i})=>i),b=(0,o.z)(({size:i})=>i),h=s.useRef(null),f=s.useRef(null),v=function(i,e,a){let{gl:t,size:r,viewport:n}=(0,o.z)(),l="number"==typeof i?i:r.width*n.dpr,m="number"==typeof e?e:r.height*n.dpr,{samples:c,...d}=("number"==typeof i?void 0:i)||{},p=s.useMemo(()=>{let i;return(i=new u.WebGLRenderTarget(l,m,{minFilter:u.LinearFilter,magFilter:u.LinearFilter,encoding:t.outputEncoding,type:u.HalfFloatType,...d})).samples=c,i},[]);return s.useLayoutEffect(()=>{p.setSize(l,m),c&&(p.samples=c)},[c,p,l,m]),s.useEffect(()=>()=>p.dispose(),[]),p}(e);s.useLayoutEffect(()=>{m.manual||(h.current.aspect=b.width/b.height)},[b,m]),s.useLayoutEffect(()=>{h.current.updateProjectionMatrix()});let g=0,x=null,j=r(l);return(0,o.A)(e=>{j&&(a===1/0||g<a)&&(f.current.visible=!1,e.gl.setRenderTarget(v),x=e.scene.background,i&&(e.scene.background=i),e.gl.render(e.scene,h.current),e.scene.background=x,e.gl.setRenderTarget(null),f.current.visible=!0,g++)}),s.useLayoutEffect(()=>{if(n)return p(()=>({camera:h.current})),()=>p(()=>({camera:q}))},[h,n,p]),s.createElement(s.Fragment,null,s.createElement("perspectiveCamera",(0,t.Z)({ref:(d=[h,c],function(i){d.forEach(function(e){"function"==typeof e?e(i):null!=e&&(e.current=i)})})},m),!j&&l),s.createElement("group",{ref:f},j&&l(v.texture)))})},5978:function(i,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/domotique",function(){return a(7668)}])},9574:function(i,e,a){"use strict";a.r(e);var t=a(5893),s=a(1664),o=a.n(s),u=a(5675),r=a.n(u),n=a(7294),l=a(3765),m=a.n(l);let c=()=>{let[i,e]=(0,n.useState)(!1),a=a=>{e(!i)};return(0,t.jsx)("header",{className:m().header,children:(0,t.jsxs)("nav",{className:m().nav,children:[(0,t.jsxs)(o(),{href:"/","aria-label":"visit homepage","aria-current":"page",className:m().nav_icon,title:"HomePage",children:[(0,t.jsx)(r(),{width:"40",height:"40",src:"/logo.svg",alt:"logo gk-bat"}),(0,t.jsx)("span",{children:"GK-Bat"})]}),(0,t.jsxs)("div",{className:m().main_navlinks,children:[(0,t.jsxs)("button",{onClick:a,className:i?m().hamburger+" "+m().open:m().hamburger,type:"button","aria-label":"Toggle navigation","aria-expanded":i?"true":"false",children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{})]}),(0,t.jsxs)("div",{className:i?m().navlinks_container+" "+m().open:m().navlinks_container,children:[(0,t.jsx)(o(),{href:"/climatisation","aria-label":"climatisation",children:"Climatisation"}),(0,t.jsx)(o(),{href:"/electricite","aria-label":"\xe9lectricit\xe9",children:"Electricit\xe9"}),(0,t.jsx)(o(),{href:"/domotique","aria-label":"domotique",children:"Domotique"}),(0,t.jsx)(o(),{href:"/realisation","aria-label":"Nos r\xe9alisations",children:"Nos R\xe9alisations"})]})]}),(0,t.jsx)("div",{className:m().contact,title:"Contact",children:(0,t.jsx)(o(),{href:"/contact","aria-label":"contact",children:(0,t.jsx)(r(),{width:"40",height:"40",src:"/telephone.svg",alt:"contact"})})})]})})};e.default=c},2065:function(i,e,a){"use strict";a.r(e);var t=a(5893),s=a(5029),o=a(7294),u=a(8626),r=a(9646),n=a(6571),l=a.n(n);let m=i=>{let{nodes:e,materials:a}=(0,u.L)("/camera.gltf");return(0,t.jsxs)("group",{...i,dispose:null,position:[-160,10,-200],rotation:[0,.75,0],children:[(0,t.jsx)(r.c,{makeDefault:!0,position:[50,0,200],castShadow:!0}),(0,t.jsx)("group",{position:[24.96,-10.09,226.86],rotation:[1.53,0,0],scale:0}),(0,t.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.Plane.geometry,material:e.Plane.material,position:[-53.74,-12.46,69.56],rotation:[0,-.17,-Math.PI/2],scale:[82.41,35.48,123],"material-color":"lightblue"}),(0,t.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.base.geometry,material:a.Material__6,position:[-41.27,.21,0],rotation:[Math.PI/2,0,-2.97]}),(0,t.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.camera.geometry,material:a.Material__6,position:[-25.36,4.25,1.04],rotation:[i.cameraRotation.base,0,i.cameraRotation.cam]}),(0,t.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.socle.geometry,material:a.Material__6,position:[-25.36,4.25,1.04],rotation:[Math.PI/2,0,-2.97]})]})};e.default=function(){let[i,e]=(0,o.useState)({});return(0,o.useEffect)(()=>{let i=i=>{e({x:i.clientX,y:i.clientY})};return window.addEventListener("mousemove",i),()=>{window.removeEventListener("mousemove",i)}},[]),(0,t.jsx)("div",{className:l().canvas,children:(0,t.jsx)(s.Xz,{children:(0,t.jsxs)(o.Suspense,{fallback:null,children:[(0,t.jsx)("ambientLight",{position:[10,50,80]}),(0,t.jsx)("spotLight",{position:[10,80,100],angle:Math.PI/2,intensity:.9,penumbra:.8}),"/** calculer les rotations pour un effet plus realiste */",(0,t.jsx)(m,{cameraRotation:{cam:-i.x/1400+10,base:i.y/1400+-5}}),"/** no orbitControls(interactivity) when z-index is behind another element */"]})})})}},8147:function(i,e,a){"use strict";a.r(e);var t=a(5893);a(7294);var s=a(1664),o=a.n(s);e.default=function(){return(0,t.jsxs)("footer",{children:[(0,t.jsx)(o(),{href:"/mention","aria-label":"Mentions legales",title:"Mentions L\xe9gales",children:(0,t.jsx)("span",{children:"Mentions L\xe9gales"})}),(0,t.jsx)(o(),{href:"/plan","aria-label":"Plan du site",title:"Plan du site",children:(0,t.jsx)("span",{children:"Plan du Site"})}),(0,t.jsx)(o(),{href:"/administration","aria-label":"Administration",title:"Administration",children:(0,t.jsx)("span",{children:"Administration"})})]})}},1329:function(i,e,a){"use strict";a.r(e);var t=a(5893),s=a(5029),o=a(7294),u=a(8626),r=a(6665),n=a(5304),l=a.n(n);let m=i=>{let{nodes:e,materials:a}=(0,u.L)("/test.glb");return(0,t.jsxs)("group",{...i,dispose:null,children:[(0,t.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.Cube.geometry,material:a.Material}),(0,t.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.Sphere.geometry,material:e.Sphere.material,position:[2,0,0]}),(0,t.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.Cone.geometry,material:e.Cone.material,position:[0,2,0]})]})};e.default=function(){return(0,t.jsx)("div",{className:l().canvas,children:(0,t.jsx)(s.Xz,{children:(0,t.jsxs)(o.Suspense,{children:[(0,t.jsx)("ambientLight",{position:[10,50,80]}),(0,t.jsx)("spotLight",{position:[10,80,100],angle:Math.PI/2,intensity:.9,penumbra:.8}),(0,t.jsx)(m,{}),(0,t.jsx)(r.z,{})]})})})}},7668:function(i,e,a){"use strict";a.r(e);var t=a(5893);a(7294);var s=a(9008),o=a.n(s),u=a(9574),r=a(8147),n=a(7160),l=a.n(n),m=a(2065);a(1329),e.default=function(){return(0,t.jsxs)("div",{className:l().container,children:[(0,t.jsxs)(o(),{children:[(0,t.jsx)("title",{children:"GK-BAT - Domotique"}),(0,t.jsx)("meta",{name:"description",content:"Climatisation in Lille and around"}),(0,t.jsx)("link",{rel:"icon",href:"/logo.ico"})]}),(0,t.jsx)(u.default,{}),(0,t.jsxs)("main",{className:l().main,children:[(0,t.jsx)(m.default,{}),(0,t.jsx)("h1",{children:"domotique"}),(0,t.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat delectus voluptatum id, vero numquam repellat atque alias adipisci sed esse quod iure perferendis sit aliquam nulla ex molestias quia officiis. Dicta inventore deserunt quo perferendis optio obcaecati mollitia provident officia adipisci fugit, reprehenderit alias maiores possimus saepe explicabo voluptates itaque? Sunt dolore et, ex porro minima ratione quibusdam obcaecati dicta! Nihil alias perferendis cumque, ea dignissimos eos eligendi necessitatibus tempore, illum delectus adipisci quibusdam minima temporibus rem dolorum culpa. Repudiandae explicabo ab nostrum modi nemo ad commodi quaerat, at delectus. Doloribus obcaecati provident at eius ullam exercitationem quia quo nihil assumenda incidunt. Sed dolorum totam tempora delectus commodi incidunt, autem corporis, in, fugit consequuntur vitae cum facilis magni reiciendis ut. Numquam, at quo ipsam eos magnam optio. Quam, commodi. Ab quisquam facere, nisi debitis amet nihil voluptatibus accusamus quis aspernatur minima iusto inventore, magni quibusdam odio exercitationem quam dignissimos beatae! Laborum doloribus blanditiis ipsam omnis quo pariatur, in animi ab corporis sequi, dolore recusandae modi, iusto porro? Aut commodi aspernatur mollitia error suscipit dicta libero, cupiditate impedit unde, ab itaque? Dicta recusandae cumque dolores fugiat hic iusto odit itaque ab, reprehenderit culpa vel minima a perferendis, blanditiis nobis nemo, quisquam incidunt facilis aut voluptatibus aliquam quis. Voluptas consequatur quibusdam iusto. Ipsa ullam nisi et sit? Hic, eum. Reprehenderit quis sint illo nobis cum, veniam numquam, asperiores fugit ipsum perspiciatis nostrum corrupti. Id dolorum ipsam, suscipit animi odio eligendi quos ut! Animi, quia distinctio! Corporis odio sapiente tempora iusto vitae aut quod nihil deleniti porro unde, placeat eos, eligendi possimus totam adipisci. Alias blanditiis pariatur sequi quo quibusdam facilis cupiditate cumque! Doloribus quam iure, inventore earum sunt laboriosam sed quis, labore tempore dolor quos sequi? Eligendi amet voluptate qui quasi aliquid? Voluptatibus labore reiciendis qui similique sapiente iure doloremque tenetur repellendus. Autem minima quod totam error officiis, aliquid veritatis dolore molestias hic! Sed doloribus libero qui commodi, ut quas enim similique at reiciendis voluptatem perferendis incidunt quaerat eveniet iste magnam aliquam. Voluptas repellat, dolorem ipsum ex recusandae dignissimos corporis rerum quaerat cum minima eius optio. Laboriosam hic in omnis, voluptatem expedita illo alias excepturi ut veniam ab amet vero unde culpa."}),(0,t.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat delectus voluptatum id, vero numquam repellat atque alias adipisci sed esse quod iure perferendis sit aliquam nulla ex molestias quia officiis. Dicta inventore deserunt quo perferendis optio obcaecati mollitia provident officia adipisci fugit, reprehenderit alias maiores possimus saepe explicabo voluptates itaque? Sunt dolore et, ex porro minima ratione quibusdam obcaecati dicta! Nihil alias perferendis cumque, ea dignissimos eos eligendi necessitatibus tempore, illum delectus adipisci quibusdam minima temporibus rem dolorum culpa. Repudiandae explicabo ab nostrum modi nemo ad commodi quaerat, at delectus. Doloribus obcaecati provident at eius ullam exercitationem quia quo nihil assumenda incidunt. Sed dolorum totam tempora delectus commodi incidunt, autem corporis, in, fugit consequuntur vitae cum facilis magni reiciendis ut. Numquam, at quo ipsam eos magnam optio. Quam, commodi. Ab quisquam facere, nisi debitis amet nihil voluptatibus accusamus quis aspernatur minima iusto inventore, magni quibusdam odio exercitationem quam dignissimos beatae! Laborum doloribus blanditiis ipsam omnis quo pariatur, in animi ab corporis sequi, dolore recusandae modi, iusto porro? Aut commodi aspernatur mollitia error suscipit dicta libero, cupiditate impedit unde, ab itaque? Dicta recusandae cumque dolores fugiat hic iusto odit itaque ab, reprehenderit culpa vel minima a perferendis, blanditiis nobis nemo, quisquam incidunt facilis aut voluptatibus aliquam quis. Voluptas consequatur quibusdam iusto. Ipsa ullam nisi et sit? Hic, eum. Reprehenderit quis sint illo nobis cum, veniam numquam, asperiores fugit ipsum perspiciatis nostrum corrupti. Id dolorum ipsam, suscipit animi odio eligendi quos ut! Animi, quia distinctio! Corporis odio sapiente tempora iusto vitae aut quod nihil deleniti porro unde, placeat eos, eligendi possimus totam adipisci. Alias blanditiis pariatur sequi quo quibusdam facilis cupiditate cumque! Doloribus quam iure, inventore earum sunt laboriosam sed quis, labore tempore dolor quos sequi? Eligendi amet voluptate qui quasi aliquid? Voluptatibus labore reiciendis qui similique sapiente iure doloremque tenetur repellendus. Autem minima quod totam error officiis, aliquid veritatis dolore molestias hic! Sed doloribus libero qui commodi, ut quas enim similique at reiciendis voluptatem perferendis incidunt quaerat eveniet iste magnam aliquam. Voluptas repellat, dolorem ipsum ex recusandae dignissimos corporis rerum quaerat cum minima eius optio. Laboriosam hic in omnis, voluptatem expedita illo alias excepturi ut veniam ab amet vero unde culpa."}),(0,t.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat delectus voluptatum id, vero numquam repellat atque alias adipisci sed esse quod iure perferendis sit aliquam nulla ex molestias quia officiis. Dicta inventore deserunt quo perferendis optio obcaecati mollitia provident officia adipisci fugit, reprehenderit alias maiores possimus saepe explicabo voluptates itaque? Sunt dolore et, ex porro minima ratione quibusdam obcaecati dicta! Nihil alias perferendis cumque, ea dignissimos eos eligendi necessitatibus tempore, illum delectus adipisci quibusdam minima temporibus rem dolorum culpa. Repudiandae explicabo ab nostrum modi nemo ad commodi quaerat, at delectus. Doloribus obcaecati provident at eius ullam exercitationem quia quo nihil assumenda incidunt. Sed dolorum totam tempora delectus commodi incidunt, autem corporis, in, fugit consequuntur vitae cum facilis magni reiciendis ut. Numquam, at quo ipsam eos magnam optio. Quam, commodi. Ab quisquam facere, nisi debitis amet nihil voluptatibus accusamus quis aspernatur minima iusto inventore, magni quibusdam odio exercitationem quam dignissimos beatae! Laborum doloribus blanditiis ipsam omnis quo pariatur, in animi ab corporis sequi, dolore recusandae modi, iusto porro? Aut commodi aspernatur mollitia error suscipit dicta libero, cupiditate impedit unde, ab itaque? Dicta recusandae cumque dolores fugiat hic iusto odit itaque ab, reprehenderit culpa vel minima a perferendis, blanditiis nobis nemo, quisquam incidunt facilis aut voluptatibus aliquam quis. Voluptas consequatur quibusdam iusto. Ipsa ullam nisi et sit? Hic, eum. Reprehenderit quis sint illo nobis cum, veniam numquam, asperiores fugit ipsum perspiciatis nostrum corrupti. Id dolorum ipsam, suscipit animi odio eligendi quos ut! Animi, quia distinctio! Corporis odio sapiente tempora iusto vitae aut quod nihil deleniti porro unde, placeat eos, eligendi possimus totam adipisci. Alias blanditiis pariatur sequi quo quibusdam facilis cupiditate cumque! Doloribus quam iure, inventore earum sunt laboriosam sed quis, labore tempore dolor quos sequi? Eligendi amet voluptate qui quasi aliquid? Voluptatibus labore reiciendis qui similique sapiente iure doloremque tenetur repellendus. Autem minima quod totam error officiis, aliquid veritatis dolore molestias hic! Sed doloribus libero qui commodi, ut quas enim similique at reiciendis voluptatem perferendis incidunt quaerat eveniet iste magnam aliquam. Voluptas repellat, dolorem ipsum ex recusandae dignissimos corporis rerum quaerat cum minima eius optio. Laboriosam hic in omnis, voluptatem expedita illo alias excepturi ut veniam ab amet vero unde culpa."})]}),(0,t.jsx)(r.default,{})]})}},3765:function(i){i.exports={nav:"NavBar_nav__Ol5wn",nav_icon:"NavBar_nav_icon__7kfve",hamburger:"NavBar_hamburger__kh40m",navlinks_container:"NavBar_navlinks_container__iykXs",contact:"NavBar_contact__C3Gh2",main_navlinks:"NavBar_main_navlinks__AHuNP",open:"NavBar_open__j5zPC"}},6571:function(i){i.exports={canvas:"camera_canvas__P1KM7"}},5304:function(i){i.exports={canvas:"test3D_canvas__25dRo"}},7160:function(i){i.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",liste:"Home_liste__ox2r0"}},9008:function(i,e,a){i.exports=a(3121)}},function(i){i.O(0,[737,664,675,496,665,774,888,179],function(){return i(i.s=5978)}),_N_E=i.O()}]);