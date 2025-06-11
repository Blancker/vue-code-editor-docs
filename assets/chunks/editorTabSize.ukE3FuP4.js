import{d as f,p as _,c,o as v,G as o,w as t,C as l,a as u,F as V}from"./framework.B1mQzHZN.js";const z=f({__name:"editorTabSize",setup(b){const n=_(4),d=_(`const count = 0;

const increase = () => {
    count++;
}
`);return(x,e)=>{const a=l("el-radio"),s=l("el-radio-group"),m=l("el-form-item"),i=l("el-form"),p=l("vue-code-editor");return v(),c(V,null,[o(i,{labelWidth:100,inline:""},{default:t(()=>[o(m,{label:"缩进大小"},{default:t(()=>[o(s,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=r=>n.value=r)},{default:t(()=>[o(a,{value:2},{default:t(()=>e[2]||(e[2]=[u("2")])),_:1,__:[2]}),o(a,{value:4},{default:t(()=>e[3]||(e[3]=[u("4")])),_:1,__:[3]}),o(a,{value:6},{default:t(()=>e[4]||(e[4]=[u("6")])),_:1,__:[4]})]),_:1},8,["modelValue"])]),_:1})]),_:1}),o(p,{modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=r=>d.value=r),style:{height:"210px"},tabSize:n.value,border:""},null,8,["modelValue","tabSize"])],64)}}});export{z as default};
