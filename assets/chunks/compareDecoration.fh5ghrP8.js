import{d as a,B as s,b as u,o as p,p as n}from"./framework.CSx3vDAv.js";const i=a({__name:"compareDecoration",setup(l){const t=n([{}]),e=n([`const [[count]] = 0;

const increase = () => {
	count++;
}
`,`const count = 0;

const increase = (): number => {
	[[count]]++;
	return count
}
`]);return(m,o)=>{const c=s("vue-code-compare");return p(),u(c,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=r=>e.value=r),style:{height:"210px"},decorations:t.value,border:""},null,8,["modelValue","decorations"])}}});export{i as default};
