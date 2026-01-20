import{d as p,c as _,o as f,G as o,w as d,C as t,p as r,F as v}from"./framework.DqtzHBVO.js";const w=p({__name:"editorBase",setup(V){const n=r(!0),a=r(!1),u=r(`const count = 0;

const increase = () => {
    count++;
}
`);return(b,e)=>{const s=t("el-switch"),m=t("el-form-item"),c=t("el-form"),i=t("vue-code-editor");return f(),_(v,null,[o(c,{labelWidth:100,inline:""},{default:d(()=>[o(m,{label:"显示边框"},{default:d(()=>[o(s,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=l=>n.value=l)},null,8,["modelValue"])]),_:1}),o(m,{label:"只读状态"},{default:d(()=>[o(s,{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=l=>a.value=l)},null,8,["modelValue"])]),_:1})]),_:1}),o(i,{modelValue:u.value,"onUpdate:modelValue":e[2]||(e[2]=l=>u.value=l),style:{height:"210px"},placeholder:"请输入内容",readonly:a.value,border:n.value},null,8,["modelValue","readonly","border"])],64)}}});export{w as default};
