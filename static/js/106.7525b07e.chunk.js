(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[106],{40:function(M,O,g){"use strict";g.r(O);var w=g(759),p=g.n(w),I=g(769),C=(o,l,n)=>new Promise((r,i)=>{var h=f=>{try{E(n.next(f))}catch(y){i(y)}},m=f=>{try{E(n.throw(f))}catch(y){i(y)}},E=f=>f.done?r(f.value):Promise.resolve(f.value).then(h,m);E((n=n.apply(o,l)).next())});const e=1024,t={dimensions:[e,e],animate:!0},v=o=>C(void 0,[o],function*({context:l,canvas:n}){let r=!0,i;const h=s=>{i=[];const P=p.a.range(e*.1,e*.9),d=p.a.range(e*.1,e*.9);if(s)for(let a=0;a<=e+10;a+=10){const u=P+(d-P)*(a/e);i.push([u+p.a.range(-5,5),a])}else for(let a=0;a<=e+10;a+=10){const u=P+(d-P)*(a/e);i.push([a,u+p.a.range(-5,5)])}l.lineWidth=4,Object(I.a)(l,i)};h(r);const m=document.createElement("canvas");m.width=e,m.height=e;const E=()=>{m.getContext("2d").drawImage(n,0,0)};E();let f=0,y;const L=()=>{y=`hsl(${p.a.range(0,360)}, 100%,80%)`};return L(),({context:s,time:P})=>{P-f>p.a.range(.08,.3)?(r=!r,f=P,L(),h(r),E()):(s.fillStyle=y,s.fillRect(0,0,e,e));const d=(P-f)*400;if(r)for(let a=0;a<2;a+=1){s.save();let u;a===0?u=[[0,0],...i.map(c=>[c[0]-d,c[1]]),[0,e]]:u=[[e,0],...i.map(c=>[c[0]+d,c[1]]),[e,e]],Object(I.b)(s,u,!0),s.clip(),a===0?s.drawImage(m,-d,0):s.drawImage(m,+d,0),s.restore()}else for(let a=0;a<2;a+=1){s.save();let u;a===0?u=[[0,0],...i.map(c=>[c[0],c[1]-d]),[e,0]]:u=[[0,e],...i.map(c=>[c[0],c[1]+d]),[e,e]],Object(I.b)(s,u,!0),s.clip(),a===0?s.drawImage(m,0,-d):s.drawImage(m,0,+d),s.restore()}}});O.default={sketch:v,settings:t}},769:function(M,O,g){"use strict";g.d(O,"b",function(){return w}),g.d(O,"a",function(){return p});function w(t,v,o=!1){t.beginPath();for(let l=0;l<v.length;l+=1){const n=v[l];l===0?t.moveTo(n[0],n[1]):t.lineTo(n[0],n[1])}o&&t.closePath()}const p=(t,v,o=!1)=>{w(t,v,o),t.stroke()};function I(t,v,o,l,n,r,i=255){const h=(~~v+~~o*t.width)*4;t.data[h]=~~l,t.data[h+1]=~~n,t.data[h+2]=~~r,t.data[h+3]=~~i}const C=[0,0,0,0];function e(t,v,o,l){const n=(~~v+~~o*t.width)*4;if(l!==void 0)return t.data[n+l];for(let r=0;r<4;r+=1)C[r]=n+r;return C}}}]);
