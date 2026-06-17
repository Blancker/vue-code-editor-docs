import{d as c,B as s,b as r,o as a,p as u}from"./framework.CSx3vDAv.js";const d=c({__name:"compareBase",setup(p){const e=u([`const count = 0;

const increase = () => {
	count++;
}
`,`const count = 0;

const increase = (): number => {
	count++;
	return count
}
`]);return(l,n)=>{const o=s("vue-code-compare");return a(),r(o,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=t=>e.value=t),style:{height:"210px"},border:""},null,8,["modelValue"])}}});export{d as default};
