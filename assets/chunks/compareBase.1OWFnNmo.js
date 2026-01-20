import{d as u,b as s,o as l,p as a,C as c}from"./framework.DqtzHBVO.js";const f=u({__name:"compareBase",setup(p){const t=a(`const count = 0;

const increase = () => {
    count++;
}
`),o=a(`const count = 0;

const increase = (): number => {
    count++;
    return count
}
`);return(m,e)=>{const r=c("vue-code-compare");return l(),s(r,{leftValue:t.value,"onUpdate:leftValue":e[0]||(e[0]=n=>t.value=n),rightValue:o.value,"onUpdate:rightValue":e[1]||(e[1]=n=>o.value=n),style:{height:"210px"},border:""},null,8,["leftValue","rightValue"])}}});export{f as default};
