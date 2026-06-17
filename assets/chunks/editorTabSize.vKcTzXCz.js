import{d as v,B as l,c as V,o as b,G as o,w as t,p as r,a as s,F as x}from"./framework.CSx3vDAv.js";const z=v({__name:"editorTabSize",setup(S){const a=r(4),d=r(!1),m=r(`const count = 0;

const increase = () => {
    count++;
}
`);return(g,e)=>{const u=l("el-radio"),p=l("el-radio-group"),i=l("el-form-item"),_=l("el-switch"),f=l("el-form"),c=l("vue-code-editor");return b(),V(x,null,[o(f,{labelWidth:100,inline:""},{default:t(()=>[o(i,{label:"缩进大小"},{default:t(()=>[o(p,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=n=>a.value=n)},{default:t(()=>[o(u,{value:2},{default:t(()=>[...e[3]||(e[3]=[s("2",-1)])]),_:1}),o(u,{value:4},{default:t(()=>[...e[4]||(e[4]=[s("4",-1)])]),_:1}),o(u,{value:6},{default:t(()=>[...e[5]||(e[5]=[s("6",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(i,{label:"使用空格缩进"},{default:t(()=>[o(_,{modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=n=>d.value=n)},null,8,["modelValue"])]),_:1})]),_:1}),o(c,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=n=>m.value=n),style:{height:"210px"},tabSize:a.value,spaceIndent:d.value,border:"",footer:""},null,8,["modelValue","tabSize","spaceIndent"])],64)}}});export{z as default};
