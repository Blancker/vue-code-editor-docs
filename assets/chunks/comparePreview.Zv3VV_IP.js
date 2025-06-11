import{d as u,p as r,b as l,o as c,C as s}from"./framework.B1mQzHZN.js";const d=u({__name:"comparePreview",setup(p){const t=r(`const count = 0;

const increase = () => {
    count++;
}
`),o=r(`const count = 0;

const increase = (): number => {
    count++;
    return count
}
`);return(i,e)=>{const a=s("vue-code-compare");return c(),l(a,{leftValue:t.value,"onUpdate:leftValue":e[0]||(e[0]=n=>t.value=n),rightValue:o.value,"onUpdate:rightValue":e[1]||(e[1]=n=>o.value=n),style:{height:"210px"},readonly:"",hideRollbackGutter:"",border:""},null,8,["leftValue","rightValue"])}}});export{d as default};
