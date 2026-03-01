import{j as e}from"./jsx-runtime-CRZB9wO2.js";import{r as p}from"./iframe-DAnRIDez.js";import"./preload-helper-PPVm8Dsz.js";const n=p.forwardRef(({checked:l,defaultChecked:m=!1,onChange:f,disabled:i=!1,label:t,id:g,className:b=""},h)=>{const[k,x]=p.useState(m),c=l!==void 0,a=c?l:k,y=()=>{if(i)return;const u=!a;c||x(u),f?.(u)},d=g??t?.toLowerCase().replace(/\s/g,"-");return e.jsx("div",{className:"w-full",children:e.jsxs("label",{htmlFor:d,className:"inline-flex cursor-pointer items-center gap-3",children:[e.jsx("button",{ref:h,id:d,type:"button",role:"switch","aria-checked":a,disabled:i,onClick:y,className:["relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors","focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2","disabled:opacity-50 disabled:cursor-not-allowed",a?"bg-primary-500":"bg-neutral-300 dark:bg-neutral-600",b].filter(Boolean).join(" "),children:e.jsx("span",{className:["pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition-transform","translate-x-0.5 translate-y-0.5",a&&"translate-x-5"].filter(Boolean).join(" ")})}),t&&e.jsx("span",{className:"text-sm font-medium text-neutral-700 dark:text-neutral-300",children:t})]})})});n.displayName="Toggle";n.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const v={title:"UI/Toggle",component:n,tags:["autodocs"],argTypes:{label:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"}}},s={args:{label:"Enable notifications"}},r={args:{label:"Dark mode",checked:!0}},o={args:{label:"Disabled toggle",disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Enable notifications"
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Dark mode",
    checked: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled toggle",
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};const C=["Default","Checked","Disabled"];export{r as Checked,s as Default,o as Disabled,C as __namedExportsOrder,v as default};
