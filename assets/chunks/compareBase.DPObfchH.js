import{d as i,p as n,c as V,o as _,G as t,w as a,C as u,F as v}from"./framework.B1mQzHZN.js";const U=i({__name:"compareBase",setup(g){const r=n(!0),o=n({left:!1,right:!0}),d=n(`const count = 0;

const increase = () => {
    count++;
}
`),p=n(`const count = 0;

const increase = (): number => {
    count++;
    return count
}
`);return(b,e)=>{const m=u("el-switch"),s=u("el-form-item"),c=u("el-form"),f=u("vue-code-compare");return _(),V(v,null,[t(c,{labelWidth:100,inline:""},{default:a(()=>[t(s,{label:"显示边框"},{default:a(()=>[t(m,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=l=>r.value=l)},null,8,["modelValue"])]),_:1}),t(s,{label:"只读左侧"},{default:a(()=>[t(m,{modelValue:o.value.left,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value.left=l)},null,8,["modelValue"])]),_:1}),t(s,{label:"只读右侧"},{default:a(()=>[t(m,{modelValue:o.value.right,"onUpdate:modelValue":e[2]||(e[2]=l=>o.value.right=l)},null,8,["modelValue"])]),_:1})]),_:1}),t(f,{leftValue:d.value,"onUpdate:leftValue":e[3]||(e[3]=l=>d.value=l),rightValue:p.value,"onUpdate:rightValue":e[4]||(e[4]=l=>p.value=l),style:{height:"210px"},readonly:o.value,border:r.value},null,8,["leftValue","rightValue","readonly","border"])],64)}}});export{U as default};
