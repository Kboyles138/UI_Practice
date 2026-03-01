import{j as r}from"./jsx-runtime-CRZB9wO2.js";import{r as p}from"./iframe-DAnRIDez.js";import"./preload-helper-PPVm8Dsz.js";const l=p.forwardRef(({label:n,error:e,id:d,className:i="",...u},m)=>{const s=d??n?.toLowerCase().replace(/\s/g,"-");return r.jsxs("div",{className:"w-full",children:[r.jsxs("label",{htmlFor:s,className:"inline-flex cursor-pointer items-center gap-3",children:[r.jsx("input",{ref:m,id:s,type:"checkbox",className:["h-4 w-4 rounded border-neutral-300 text-primary-500","focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-0","disabled:opacity-50 disabled:cursor-not-allowed",e&&"border-red-500",i].filter(Boolean).join(" "),"aria-invalid":!!e,"aria-describedby":e?`${s}-error`:void 0,...u}),n&&r.jsx("span",{className:"text-sm font-medium text-neutral-700 dark:text-neutral-300",children:n})]}),e&&r.jsx("p",{id:`${s}-error`,className:"mt-1.5 text-sm text-red-500",role:"alert",children:e})]})});l.displayName="Checkbox";l.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const g={title:"UI/Checkbox",component:l,tags:["autodocs"],argTypes:{label:{control:"text"},error:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"}}},a={args:{label:"Accept terms and conditions"}},o={args:{label:"Subscribe to newsletter",defaultChecked:!0}},t={args:{label:"Required checkbox",error:"You must accept to continue"}},c={args:{label:"Disabled option",disabled:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Accept terms and conditions"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Subscribe to newsletter",
    defaultChecked: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Required checkbox",
    error: "You must accept to continue"
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled option",
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};const h=["Default","Checked","WithError","Disabled"];export{o as Checked,a as Default,c as Disabled,t as WithError,h as __namedExportsOrder,g as default};
