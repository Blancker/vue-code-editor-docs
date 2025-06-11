import{d as r,p as s,b as a,o as l,C as c}from"./framework.B1mQzHZN.js";const m=r({__name:"editorSimple",setup(p){const e=s(`const count = 0;

const increase = () => {
    count++;
}
`);return(u,o)=>{const n=c("vue-code-editor");return l(),a(n,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=t=>e.value=t),style:{height:"210px"},footer:!1,border:""},null,8,["modelValue"])}}});export{m as default};
