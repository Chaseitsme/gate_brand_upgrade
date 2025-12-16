import{s as u,t as R,w as e,z as Y,G as U,I as C,C as A,J as O,K as F,Q as H,S as V,X,Y as Q,Z,_ as K,$ as J,a0 as W,a1 as ee,y as z,a2 as te,a3 as se,a4 as oe}from"./three-vendor-DprTmcNs.js";import{d as re,w as ae,q as ne,A as ie,B as ce}from"./postprocessing-vendor-CE15J9Rv.js";import"./react-vendor-Bzgz95E1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function l(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=l(a);fetch(a.href,o)}})();var w=(s=>(s.CHAOS="CHAOS",s.FORMED="FORMED",s))(w||{});const le=`
  uniform float uTime;
  uniform float uProgress;
  
  attribute vec3 aChaosPos;
  attribute vec3 aTargetPos;
  attribute float aRandom;
  
  varying vec3 vColor;
  varying float vAlpha;

  // Cubic Ease In Out
  float cubicInOut(float t) {
    return t < 0.5
      ? 4.0 * t * t * t
      : 1.0 - pow(-2.0 * t + 2.0, 3.0) / 2.0;
  }

  void main() {
    // Add some individual variation to the progress so they don't all move at once
    float localProgress = clamp(uProgress * 1.2 - aRandom * 0.2, 0.0, 1.0);
    float easedProgress = cubicInOut(localProgress);

    // Interpolate position
    vec3 newPos = mix(aChaosPos, aTargetPos, easedProgress);
    
    // Add a slight "breathing" wind effect when formed
    if (easedProgress > 0.9) {
      newPos.x += sin(uTime * 2.0 + newPos.y) * 0.05;
      newPos.z += cos(uTime * 1.5 + newPos.y) * 0.05;
    }

    vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
    
    // Size attenuation
    gl_PointSize = (4.0 * aRandom + 2.0) * (20.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;

    // Color logic: Mix between Chaos Gold and Formed Emerald
    vec3 goldColor = vec3(1.0, 0.84, 0.0);
    vec3 emeraldColor = vec3(0.0, 0.4, 0.1);
    vec3 brightGreen = vec3(0.1, 0.8, 0.2);
    
    // Sparkle effect
    float sparkle = sin(uTime * 5.0 + aRandom * 100.0);
    vec3 finalGreen = mix(emeraldColor, brightGreen, aRandom * 0.3);
    
    vColor = mix(goldColor, finalGreen, easedProgress);
    
    // Add sparkle to the tips
    if (sparkle > 0.9) {
      vColor += vec3(0.5);
    }

    vAlpha = 1.0;
  }
`,de=`
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    // Circular particle
    float r = distance(gl_PointCoord, vec2(0.5));
    if (r > 0.5) discard;

    // Soft edge
    float glow = 1.0 - (r * 2.0);
    glow = pow(glow, 1.5);

    gl_FragColor = vec4(vColor, vAlpha * glow);
  }
`,he=({mode:s,count:t})=>{const l=u.useRef(null),r=u.useRef(0),{chaosPositions:a,targetPositions:o,randoms:f}=u.useMemo(()=>{const c=new Float32Array(t*3),i=new Float32Array(t*3),n=new Float32Array(t),m=(1+Math.sqrt(5))/2,g=12,v=5;for(let d=0;d<t;d++){const x=25*Math.cbrt(Math.random()),M=Math.random()*2*Math.PI,h=Math.acos(2*Math.random()-1);c[d*3]=x*Math.sin(h)*Math.cos(M),c[d*3+1]=x*Math.sin(h)*Math.sin(M)+5,c[d*3+2]=x*Math.cos(h);const b=d/t,j=b*g,y=v*(1-b),P=2*Math.PI*m*d;i[d*3]=Math.cos(P)*y,i[d*3+1]=j,i[d*3+2]=Math.sin(P)*y,n[d]=Math.random()}return{chaosPositions:c,targetPositions:i,randoms:n}},[t]),p=u.useMemo(()=>({uTime:{value:0},uProgress:{value:0}}),[]);return R((c,i)=>{if(l.current){const n=l.current.material;n.uniforms.uTime.value=c.clock.elapsedTime;const m=s===w.FORMED?1:0;r.current=U.lerp(r.current,m,i*1.5),n.uniforms.uProgress.value=r.current}}),e.jsxs("points",{ref:l,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",count:t,array:a,itemSize:3}),e.jsx("bufferAttribute",{attach:"attributes-aChaosPos",count:t,array:a,itemSize:3}),e.jsx("bufferAttribute",{attach:"attributes-aTargetPos",count:t,array:o,itemSize:3}),e.jsx("bufferAttribute",{attach:"attributes-aRandom",count:t,array:f,itemSize:1})]}),e.jsx("shaderMaterial",{vertexShader:le,fragmentShader:de,uniforms:p,transparent:!0,depthWrite:!1,blending:Y})]})},ue=({mode:s,count:t})=>{const l=u.useRef(null),r=u.useRef(null),a=u.useRef(null),o=u.useMemo(()=>new C,[]),{ballsData:f,giftsData:p,lightsData:c}=u.useMemo(()=>{const i=[],n=[],m=[],d=new A("#D4AF37"),x=new A("#8B0000");new A("#004422");const M=new A("#F5E6BF"),h=[d,x,d,M];for(let b=0;b<t;b++){const j=Math.random();let y="ball";j>.8&&(y="gift"),j>.9&&(y="light");const P=Math.pow(Math.random(),2.5),k=P*11+.5,L=1-P,I=k*10+Math.random()*Math.PI*2,N=4.5*L+Math.random()*.5,_=new F(N*Math.cos(I),k,N*Math.sin(I)),S=15+Math.random()*15,T=Math.random()*Math.PI*2,D=Math.acos(2*Math.random()-1),q=new F(S*Math.sin(D)*Math.cos(T),S*Math.sin(D)*Math.sin(T)+5,S*Math.cos(D)),B=y==="light"?.15:.2+Math.random()*.25,$=y==="light"?new A("#FFFFAA"):h[Math.floor(Math.random()*h.length)],E={chaosPos:q,targetPos:_,type:y,color:$,scale:B,speed:.5+Math.random()*1.5,rotationOffset:new O(Math.random()*Math.PI,Math.random()*Math.PI,0)};y==="ball"?i.push(E):y==="gift"?n.push(E):m.push(E)}return{ballsData:i,giftsData:n,lightsData:m}},[t]);return u.useLayoutEffect(()=>{[{ref:l,data:f},{ref:r,data:p},{ref:a,data:c}].forEach(({ref:i,data:n})=>{i.current&&(n.forEach((m,g)=>{i.current.setColorAt(g,m.color)}),i.current.instanceColor.needsUpdate=!0)})},[f,p,c]),R((i,n)=>{const m=s===w.FORMED,g=i.clock.elapsedTime,v=(d,x)=>{if(!d.current)return;let M=!1;x.forEach((h,b)=>{const j=m?h.targetPos:h.chaosPos;d.current.getMatrixAt(b,o.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale);const y=n*h.speed;if(o.position.lerp(j,y),m&&o.position.distanceTo(h.targetPos)<.5&&(o.position.y+=Math.sin(g*2+h.chaosPos.x)*.002),h.type==="gift"?(o.rotation.x+=n*.5,o.rotation.y+=n*.2):o.lookAt(0,o.position.y,0),o.scale.setScalar(h.scale),h.type==="light"){const P=1+Math.sin(g*5+h.chaosPos.y)*.3;o.scale.multiplyScalar(P)}o.updateMatrix(),d.current.setMatrixAt(b,o.matrix),M=!0}),M&&(d.current.instanceMatrix.needsUpdate=!0)};v(l,f),v(r,p),v(a,c)}),e.jsxs(e.Fragment,{children:[e.jsxs("instancedMesh",{ref:l,args:[void 0,void 0,f.length],children:[e.jsx("sphereGeometry",{args:[1,32,32]}),e.jsx("meshStandardMaterial",{roughness:.1,metalness:.9,envMapIntensity:1.5})]}),e.jsxs("instancedMesh",{ref:r,args:[void 0,void 0,p.length],children:[e.jsx("boxGeometry",{args:[1,1,1]}),e.jsx("meshStandardMaterial",{roughness:.3,metalness:.5,color:"#white"})]}),e.jsxs("instancedMesh",{ref:a,args:[void 0,void 0,c.length],children:[e.jsx("sphereGeometry",{args:[1,8,8]}),e.jsx("meshStandardMaterial",{emissive:"white",emissiveIntensity:2,toneMapped:!1,color:"white"})]})]})},me=({data:s,mode:t,index:l})=>{const r=u.useRef(null),[a,o]=u.useState(null),[f,p]=u.useState(!1);u.useEffect(()=>{new H().load(s.url,n=>{n.colorSpace=V,o(n),p(!1)},void 0,n=>{console.warn(`Failed to load image: ${s.url}`,n),p(!0)})},[s.url]);const c=u.useMemo(()=>Math.random()*100,[]);return R((i,n)=>{if(!r.current)return;const m=t===w.FORMED,g=i.clock.elapsedTime,v=m?s.targetPos:s.chaosPos,d=n*s.speed;if(r.current.position.lerp(v,d),m){const x=new C;x.position.copy(r.current.position),x.lookAt(0,r.current.position.y,0),x.rotateY(Math.PI),r.current.quaternion.slerp(x.quaternion,d);const M=Math.sin(g*2+c)*.08,h=Math.cos(g*1.5+c)*.05,b=new O().setFromQuaternion(r.current.quaternion);r.current.rotation.z=b.z+M*.05,r.current.rotation.x=b.x+h*.05}else{const x=new F(0,9,20),M=new C;M.position.copy(r.current.position),M.lookAt(x),r.current.quaternion.slerp(M.quaternion,n*3);const h=Math.sin(g*1.5+c)*.03,b=Math.cos(g*1.2+c)*.03,j=new O().setFromQuaternion(r.current.quaternion);r.current.rotation.x=j.x+h,r.current.rotation.z=j.z+b}}),e.jsxs("group",{ref:r,children:[e.jsxs("mesh",{position:[0,1.2,-.1],children:[e.jsx("cylinderGeometry",{args:[.005,.005,1.5]}),e.jsx("meshStandardMaterial",{color:"#D4AF37",metalness:1,roughness:.2,transparent:!0,opacity:.6})]}),e.jsxs("group",{position:[0,0,0],children:[e.jsxs("mesh",{position:[0,0,0],children:[e.jsx("boxGeometry",{args:[1.2,1.5,.02]}),e.jsx("meshStandardMaterial",{color:"#fdfdfd",roughness:.8})]}),e.jsxs("mesh",{position:[0,.15,.025],children:[e.jsx("planeGeometry",{args:[1,1]}),a&&!f?e.jsx("meshBasicMaterial",{map:a}):e.jsx("meshStandardMaterial",{color:f?"#550000":"#cccccc"})]}),e.jsxs("mesh",{position:[0,.7,.025],rotation:[0,0,0],children:[e.jsx("boxGeometry",{args:[.1,.05,.05]}),e.jsx("meshStandardMaterial",{color:"#D4AF37",metalness:1,roughness:.2})]}),e.jsx(X,{position:[0,-.55,.03],fontSize:.12,color:"#333",anchorX:"center",anchorY:"middle",children:f?"Image not found":"Happy Memories"})]})]})},fe=({mode:s,uploadedPhotos:t})=>{const l=u.useMemo(()=>{if(t.length===0)return[];const r=[],a=9,o=5,f=t.length;for(let p=0;p<f;p++){const c=.2+p/f*.6,i=c*a,n=o*(1-c)+.8,m=p*2.4,g=n*Math.sin(m),v=n*Math.cos(m),d=new F(g,i,v),x=Math.random()*Math.PI*2,M=5+Math.random()*10,h=0,b=4,j=20,y=new F(h+(Math.random()-.5)*15,b+(Math.random()-.5)*10,j-4+M*Math.sin(x)*.5);r.push({id:p,url:t[p],chaosPos:y,targetPos:d,speed:.8+Math.random()*1.5})}return r},[t]);return e.jsx("group",{children:l.map((r,a)=>e.jsx(me,{index:a,data:r,mode:s},a))})},pe=({mode:s})=>{const t=u.useRef(null),l=u.useRef(null),r=Q(K,"./logo.svg"),a=u.useMemo(()=>r.paths.flatMap(c=>c.toShapes(!0)),[r]),o={depth:5,bevelEnabled:!0,bevelThickness:2,bevelSize:1,bevelSegments:5},f=new F(0,13,0),p=new F(Math.random()*20-10,15+Math.random()*10,Math.random()*20-10);return R((c,i)=>{if(!t.current)return;const n=s===w.FORMED,m=c.clock.elapsedTime,g=n?f:p;if(t.current.position.lerp(g,i*1.5),n?(t.current.rotation.y=m*.5,t.current.position.y=13+Math.sin(m*2)*.1):(t.current.rotation.x+=i*2,t.current.rotation.y+=i*3),l.current){const v=2+Math.sin(m*3)*.5;l.current.intensity=v}}),e.jsxs("group",{ref:t,position:[0,13,0],children:[e.jsx(Z,{scale:[.02,.02,.02],rotation:[0,0,0],children:e.jsx("group",{scale:[1,-1,1],children:a.map((c,i)=>e.jsxs("mesh",{rotation:[0,0,0],children:[e.jsx("extrudeGeometry",{args:[c,o]}),e.jsx("meshStandardMaterial",{color:"#D4AF37",emissive:"#FFD700",emissiveIntensity:2,metalness:.9,roughness:.1,toneMapped:!1})]},i))})}),e.jsx("pointLight",{ref:l,color:"#FFD700",intensity:2,distance:5,decay:2})]})},ge=({mode:s,uploadedPhotos:t})=>{const l=u.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(J,{ref:l,enablePan:!1,minPolarAngle:Math.PI/4,maxPolarAngle:Math.PI/1.8,minDistance:10,maxDistance:30,enableDamping:!0,dampingFactor:.05,enabled:!0}),e.jsx(W,{preset:"lobby",background:!1,blur:.8}),e.jsx("ambientLight",{intensity:.2,color:"#004422"}),e.jsx("spotLight",{position:[10,20,10],angle:.2,penumbra:1,intensity:2,color:"#fff5cc",castShadow:!0}),e.jsx("pointLight",{position:[-10,5,-10],intensity:1,color:"#D4AF37"}),e.jsxs("group",{position:[0,-5,0],children:[e.jsx(he,{mode:s,count:12e3}),e.jsx(ue,{mode:s,count:600}),e.jsx(fe,{mode:s,uploadedPhotos:t}),e.jsx(pe,{mode:s}),e.jsx(ee,{opacity:.7,scale:30,blur:2,far:4.5,color:"#000000"})]}),e.jsxs(re,{enableNormalPass:!1,children:[e.jsx(ae,{luminanceThreshold:.8,mipmapBlur:!0,intensity:1.5,radius:.6}),e.jsx(ne,{eskil:!1,offset:.1,darkness:.7}),e.jsx(ie,{opacity:.02,blendFunction:ce.OVERLAY})]})]})},xe=({mode:s,onToggle:t})=>{const l=s===w.FORMED;return e.jsxs("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-between p-8 z-10",children:[e.jsx("header",{className:"flex flex-col items-center",children:e.jsx("h1",{className:"text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F5E6BF] to-[#D4AF37] font-serif drop-shadow-lg tracking-wider text-center",children:"Merry Christmas"})}),e.jsx("div",{className:"flex flex-col items-center mb-8 pointer-events-auto",children:e.jsxs("button",{onClick:t,className:`
            group relative px-12 py-4 border-2 border-[#D4AF37] 
            bg-black/50 backdrop-blur-md overflow-hidden transition-all duration-500
            hover:shadow-[0_0_30px_#D4AF37] hover:border-[#fff]
          `,children:[e.jsx("div",{className:`absolute inset-0 bg-[#D4AF37] transition-transform duration-500 ease-in-out origin-left ${l?"scale-x-0":"scale-x-100"} opacity-10`}),e.jsx("span",{className:"relative z-10 font-serif text-xl md:text-2xl text-[#D4AF37] tracking-[0.2em] group-hover:text-white transition-colors",children:"REDEFINE CRYPTO"})]})}),e.jsx("div",{className:"absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37] opacity-50"}),e.jsx("div",{className:"absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#D4AF37] opacity-50"}),e.jsx("div",{className:"absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#D4AF37] opacity-50"}),e.jsx("div",{className:"absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37] opacity-50"})]})};class Me extends z.Component{constructor(t){super(t),this.state={hasError:!1}}static getDerivedStateFromError(t){return{hasError:!0}}componentDidCatch(t,l){console.error("Error loading 3D scene:",t,l)}render(){return this.state.hasError?e.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/80 text-[#D4AF37] font-serif p-8 text-center",children:e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl mb-2",children:"Something went wrong"}),e.jsx("p",{className:"opacity-70",children:"A resource failed to load (likely a missing image). Check the console for details."}),e.jsx("button",{onClick:()=>this.setState({hasError:!1}),className:"mt-4 px-4 py-2 border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors",children:"Try Again"})]})}):this.props.children}}[...Array.from({length:60},(s,t)=>`./photos/${t+3}.png`).filter((s,t)=>!0)];const be=["3.png","4.png","5.png","6.png","7.png","8.png","9.png",...Array.from({length:53},(s,t)=>`${t+10}.png`)].map(s=>`./photos/${s}`);function ye(){const[s,t]=u.useState(w.FORMED),l=()=>{s===w.FORMED?(t(w.CHAOS),window.parent.postMessage("navigate-home","*")):t(w.FORMED)};return e.jsxs("div",{className:"w-full h-screen relative bg-gradient-to-b from-black via-[#001a0d] to-[#0a2f1e]",children:[e.jsx(Me,{children:e.jsx(te,{dpr:[1,2],camera:{position:[0,4,20],fov:45},gl:{antialias:!1,stencil:!1,alpha:!1},shadows:!0,children:e.jsx(u.Suspense,{fallback:null,children:e.jsx(ge,{mode:s,uploadedPhotos:be})})})}),e.jsx(se,{containerStyles:{background:"#000"},innerStyles:{width:"300px",height:"10px",background:"#333"},barStyles:{background:"#D4AF37",height:"10px"},dataStyles:{color:"#D4AF37",fontFamily:"Cinzel"}}),e.jsx(xe,{mode:s,onToggle:l})]})}const G=document.getElementById("root");if(!G)throw new Error("Could not find root element to mount to");const ve=oe.createRoot(G);ve.render(e.jsx(z.StrictMode,{children:e.jsx(ye,{})}));
