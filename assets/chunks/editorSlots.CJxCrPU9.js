import{d as l,b as s,o as c,p as e,C as u}from"./framework.DqtzHBVO.js";const f=l({__name:"editorSlots",setup(p){const t=e(!0),r=e(!1),o=e(`const count = 0;

const increase = () => {
    count++;
}
`);return(i,n)=>{const a=u("vue-code-editor");return c(),s(a,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=d=>o.value=d),style:{height:"210px"},placeholder:"请输入内容",before:"function(<code>params</code>: Record<string, any>) {",after:"}",readonly:r.value,border:t.value,footer:""},null,8,["modelValue","readonly","border"])}}});export{f as default};
