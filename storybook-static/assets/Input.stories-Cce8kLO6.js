import{j as a}from"./jsx-runtime-CRZB9wO2.js";import{r as h}from"./iframe-DAnRIDez.js";import"./preload-helper-PPVm8Dsz.js";const c=h.forwardRef(({label:d,error:e,hint:i,id:p,className:u="",...m},b)=>{const r=p??d?.toLowerCase().replace(/\s/g,"-");return a.jsxs("div",{className:"w-full",children:[d&&a.jsx("label",{htmlFor:r,className:"mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300",children:d}),a.jsx("input",{ref:b,id:r,className:["w-full rounded-lg border px-3 py-2 text-base","bg-white dark:bg-neutral-900","border-neutral-300 dark:border-neutral-600","placeholder:text-neutral-400 dark:placeholder:text-neutral-500","focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500","disabled:opacity-50 disabled:cursor-not-allowed",e&&"border-red-500 focus:ring-red-500/50 focus:border-red-500",u].filter(Boolean).join(" "),"aria-invalid":!!e,"aria-describedby":e?`${r}-error`:i?`${r}-hint`:void 0,...m}),e&&a.jsx("p",{id:`${r}-error`,className:"mt-1.5 text-sm text-red-500",role:"alert",children:e}),i&&!e&&a.jsx("p",{id:`${r}-hint`,className:"mt-1.5 text-sm text-neutral-500",children:i})]})});c.displayName="Input";c.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["InputHTMLAttributes"]};const y={title:"UI/Input",component:c,tags:["autodocs"],argTypes:{label:{control:"text"},error:{control:"text"},hint:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"}}},t={args:{placeholder:"Enter text..."}},s={args:{label:"Email",type:"email",placeholder:"you@example.com"}},o={args:{label:"Password",type:"password",placeholder:"••••••••",hint:"Must be at least 8 characters"}},l={args:{label:"Username",placeholder:"johndoe",error:"This field is required"}},n={args:{label:"Disabled",placeholder:"Cannot edit",disabled:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text..."
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    type: "email",
    placeholder: "you@example.com"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    type: "password",
    placeholder: "••••••••",
    hint: "Must be at least 8 characters"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "johndoe",
    error: "This field is required"
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled",
    placeholder: "Cannot edit",
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};const j=["Default","WithLabel","WithHint","WithError","Disabled"];export{t as Default,n as Disabled,l as WithError,o as WithHint,s as WithLabel,j as __namedExportsOrder,y as default};
