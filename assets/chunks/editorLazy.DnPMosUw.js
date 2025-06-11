import{d as l,p as r,v as c,b as d,o as u,C as i}from"./framework.B1mQzHZN.js";const m=l({__name:"editorLazy",setup(p){const o=r(),n=r(`const count = 0;

const increase = () => {
    count++;
}
`);return c(()=>{var e;(e=o.value)==null||e.init()}),(e,t)=>{const a=i("vue-code-editor");return u(),d(a,{ref_key:"editorRef",ref:o,modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=s=>n.value=s),style:{height:"210px"},border:"",lazy:""},null,8,["modelValue"])}}});export{m as default};
