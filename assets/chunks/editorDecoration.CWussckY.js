import{d as c,B as l,b as u,o as p,p as t}from"./framework.CSx3vDAv.js";const i=c({__name:"editorDecoration",setup(d){const e=t(`默认装饰器: [[default.user.name]] 

自定义样式装饰器: [[custom.user.name]] 

自定义显示内容装饰器: [[purple.user.name]] 

`),n=t([{class:"cm-purple-decorator",prefix:"purple",formater:o=>o.split(".")[1]},{class:"cm-custom-decorator",prefix:"custom"},{}]);return(o,r)=>{const a=l("vue-code-editor");return p(),u(a,{modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=s=>e.value=s),style:{height:"210px"},decorations:n.value,placeholder:"请输入内容",border:""},null,8,["modelValue","decorations"])}}});export{i as default};
