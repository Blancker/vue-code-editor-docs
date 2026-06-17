import{d as g,B as l,c,o as a,G as n,w as s,p as u,F as m,C as x,b as V}from"./framework.CSx3vDAv.js";const h=g({__name:"editorLanguage",setup(b){const t=u("javascript"),d=u(["javascript","json","html","vue","css","less","sass","markdown","python","java","sql","xml","yaml"]),r=u(`const count = 0;

const increase = () => {
	count++;
}
`);return(k,o)=>{const p=l("el-option"),_=l("el-select"),i=l("el-form-item"),v=l("el-form"),f=l("vue-code-editor");return a(),c(m,null,[n(v,{labelWidth:100,inline:""},{default:s(()=>[n(i,{label:"语言模式"},{default:s(()=>[n(_,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e),style:{width:"240px"}},{default:s(()=>[(a(!0),c(m,null,x(d.value,e=>(a(),V(p,{key:e,label:e,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),n(f,{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=e=>r.value=e),style:{height:"210px"},language:t.value,border:""},null,8,["modelValue","language"])],64)}}});export{h as default};
