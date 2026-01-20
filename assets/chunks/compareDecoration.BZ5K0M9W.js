import{d as s,b as u,o as l,p as o,C as p}from"./framework.DqtzHBVO.js";const f=s({__name:"compareDecoration",setup(i){const r=o([{}]),t=o(`const [[count]] = 0;

const increase = () => {
    count++;
}
`),a=o(`const count = 0;

const increase = (): number => {
    [[count]]++;
    return count
}
`);return(m,e)=>{const c=p("vue-code-compare");return l(),u(c,{leftValue:t.value,"onUpdate:leftValue":e[0]||(e[0]=n=>t.value=n),rightValue:a.value,"onUpdate:rightValue":e[1]||(e[1]=n=>a.value=n),style:{height:"210px"},decorations:r.value,border:""},null,8,["leftValue","rightValue","decorations"])}}});export{f as default};
