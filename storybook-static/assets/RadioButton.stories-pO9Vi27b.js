import{j as e}from"./jsx-runtime-CRZB9wO2.js";import"./iframe-DAnRIDez.js";import"./preload-helper-PPVm8Dsz.js";function c({options:m,name:n,label:d,error:s,id:p,className:u="",...b}){const r=p??n;return e.jsxs("div",{className:"w-full",children:[d&&e.jsx("p",{className:"mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300",children:d}),e.jsx("div",{className:"flex flex-col gap-2",children:m.map(a=>e.jsxs("label",{htmlFor:`${r}-${a.value}`,className:"inline-flex cursor-pointer items-center gap-3",children:[e.jsx("input",{id:`${r}-${a.value}`,type:"radio",name:n,value:a.value,className:["h-4 w-4 border-neutral-300 text-primary-500","focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-0","disabled:opacity-50 disabled:cursor-not-allowed",s&&"border-red-500",u].filter(Boolean).join(" "),"aria-invalid":!!s,"aria-describedby":s?`${r}-error`:void 0,...b}),e.jsx("span",{className:"text-sm text-neutral-700 dark:text-neutral-300",children:a.label})]},a.value))}),s&&e.jsx("p",{id:`${r}-error`,className:"mt-1.5 text-sm text-red-500",role:"alert",children:s})]})}c.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioOption"}],raw:"RadioOption[]"},description:""},name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const z={title:"UI/RadioButton",component:c,tags:["autodocs"],argTypes:{label:{control:"text"},error:{control:"text"},disabled:{control:"boolean"}}},i=[{value:"sm",label:"Small"},{value:"md",label:"Medium"},{value:"lg",label:"Large"}],t={args:{name:"size",label:"Select size",options:i}},o={args:{name:"size-error",label:"Select size",options:i,error:"Please select an option"}},l={args:{name:"size-disabled",label:"Select size (disabled)",options:i,disabled:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    name: "size",
    label: "Select size",
    options: sizeOptions
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: "size-error",
    label: "Select size",
    options: sizeOptions,
    error: "Please select an option"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: "size-disabled",
    label: "Select size (disabled)",
    options: sizeOptions,
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};const v=["Default","WithError","Disabled"];export{t as Default,l as Disabled,o as WithError,v as __namedExportsOrder,z as default};
