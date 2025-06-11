import{d as g,p as a,c,o as s,G as n,w as u,C as l,F as m,B as x,b as V}from"./framework.B1mQzHZN.js";const h=g({__name:"editorLanguage",setup(b){const t=a("javascript"),d=a(["javascript","json","html","vue","css","less","sass","markdown","python","java","sql","xml","yaml"]),r=a(`const count = 0;

const increase = () => {
    count++;
}
`);return(k,o)=>{const p=l("el-option"),_=l("el-select"),i=l("el-form-item"),v=l("el-form"),f=l("vue-code-editor");return s(),c(m,null,[n(v,{labelWidth:100,inline:""},{default:u(()=>[n(i,{label:"语言模式"},{default:u(()=>[n(_,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e),style:{width:"240px"}},{default:u(()=>[(s(!0),c(m,null,x(d.value,e=>(s(),V(p,{key:e,label:e,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),n(f,{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=e=>r.value=e),style:{height:"210px"},language:t.value,border:""},null,8,["modelValue","language"])],64)}}});export{h as default};
