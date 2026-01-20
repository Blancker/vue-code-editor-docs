import{d as f,c,o as v,G as o,w as t,C as l,p as s,a as u,F as V}from"./framework.DqtzHBVO.js";const z=f({__name:"editorTabSize",setup(b){const n=s(4),d=s(`const count = 0;

const increase = () => {
    count++;
}
`);return(x,e)=>{const a=l("el-radio"),m=l("el-radio-group"),i=l("el-form-item"),_=l("el-form"),p=l("vue-code-editor");return v(),c(V,null,[o(_,{labelWidth:100,inline:""},{default:t(()=>[o(i,{label:"缩进大小"},{default:t(()=>[o(m,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=r=>n.value=r)},{default:t(()=>[o(a,{value:2},{default:t(()=>[...e[2]||(e[2]=[u("2",-1)])]),_:1}),o(a,{value:4},{default:t(()=>[...e[3]||(e[3]=[u("4",-1)])]),_:1}),o(a,{value:6},{default:t(()=>[...e[4]||(e[4]=[u("6",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),o(p,{modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=r=>d.value=r),style:{height:"210px"},tabSize:n.value,border:"",footer:""},null,8,["modelValue","tabSize"])],64)}}});export{z as default};
