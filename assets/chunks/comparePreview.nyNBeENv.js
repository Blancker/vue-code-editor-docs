import{d as r,B as c,b as a,o as s,p as u}from"./framework.CSx3vDAv.js";const d=r({__name:"comparePreview",setup(l){const e=u([`const count = 0;

const increase = () => {
	count++;
}
`,`const count = 0;

const increase = (): number => {
	count++;
	return count
}
`]);return(p,n)=>{const o=c("vue-code-compare");return s(),a(o,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=t=>e.value=t),style:{height:"210px"},readonly:"",hideRollbackGutter:"",border:"",footer:""},null,8,["modelValue"])}}});export{d as default};
