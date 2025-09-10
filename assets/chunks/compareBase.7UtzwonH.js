import{d as u,p as a,b as s,o as l,C as c}from"./framework.PWM7RAmH.js";const f=u({__name:"compareBase",setup(p){const t=a(`const count = 0;

const increase = () => {
    count++;
}
`),o=a(`const count = 0;

const increase = (): number => {
    count++;
    return count
}
`);return(m,e)=>{const r=c("vue-code-compare");return l(),s(r,{leftValue:t.value,"onUpdate:leftValue":e[0]||(e[0]=n=>t.value=n),rightValue:o.value,"onUpdate:rightValue":e[1]||(e[1]=n=>o.value=n),style:{height:"210px"},border:""},null,8,["leftValue","rightValue"])}}});export{f as default};
