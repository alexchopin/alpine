import{u as m}from"./JaV3CgKY.js";import{M as c,I as p,d as i,aa as l,r as u,N as e,l as d}from"./B5HjCQhG.js";import f from"./Bhd7jyb9.js";import y from"./DIBcDYTC.js";import"./Bsg55CS1.js";import"./Cb8er0qY.js";import"./Bq3QMAco.js";import"./BaoO_CEq.js";import"./DUExAexP.js";import"./V47PTlPK.js";import"./BIeRx0aU.js";import"./CJ6ijC8C.js";import"./CmTSXIxJ.js";import"./CYDKjI9D.js";import"./tcpJmV1B.js";async function g(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>l(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=d(h,[["__scopeId","data-v-04bb036e"]]);export{V as default};
