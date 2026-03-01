import{j as r}from"./jsx-runtime-CRZB9wO2.js";import"./iframe-DAnRIDez.js";import"./preload-helper-PPVm8Dsz.js";const m={default:"bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200",primary:"bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-200",success:"bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200",warning:"bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200",error:"bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200",outline:"border-2 border-neutral-300 bg-transparent dark:border-neutral-600"};function e({variant:l="default",className:d="",...u}){return r.jsx("span",{className:["inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",m[l],d].filter(Boolean).join(" "),...u})}e.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "primary" | "success" | "warning" | "error" | "outline"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"outline"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["HTMLAttributes"]};const f={title:"UI/Badge",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","success","warning","error","outline"]}}},a={args:{children:"Default",variant:"default"}},n={args:{children:"Primary",variant:"primary"}},s={args:{children:"Success",variant:"success"}},t={args:{children:"Warning",variant:"warning"}},i={args:{children:"Error",variant:"error"}},o={args:{children:"Outline",variant:"outline"}},c={render:()=>r.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.jsx(e,{variant:"default",children:"Default"}),r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"success",children:"Success"}),r.jsx(e,{variant:"warning",children:"Warning"}),r.jsx(e,{variant:"error",children:"Error"}),r.jsx(e,{variant:"outline",children:"Outline"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Default",
    variant: "default"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Primary",
    variant: "primary"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Success",
    variant: "success"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Warning",
    variant: "warning"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Error",
    variant: "error"
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Outline",
    variant: "outline"
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
}`,...c.parameters?.docs?.source}}};const x=["Default","Primary","Success","Warning","Error","Outline","AllVariants"];export{c as AllVariants,a as Default,i as Error,o as Outline,n as Primary,s as Success,t as Warning,x as __namedExportsOrder,f as default};
