import{j as e}from"./jsx-runtime-CRZB9wO2.js";import{r as f}from"./iframe-DAnRIDez.js";import"./preload-helper-PPVm8Dsz.js";const u=f.forwardRef(({options:m,label:c,placeholder:p,error:r,hint:i,id:b,className:h="",...y},g)=>{const o=b??c?.toLowerCase().replace(/\s/g,"-");return e.jsxs("div",{className:"w-full",children:[c&&e.jsx("label",{htmlFor:o,className:"mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300",children:c}),e.jsxs("select",{ref:g,id:o,className:["w-full rounded-lg border px-3 py-2 text-base","bg-white dark:bg-neutral-900","border-neutral-300 dark:border-neutral-600","focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500","disabled:opacity-50 disabled:cursor-not-allowed",r&&"border-red-500 focus:ring-red-500/50 focus:border-red-500",h].filter(Boolean).join(" "),"aria-invalid":!!r,"aria-describedby":r?`${o}-error`:i?`${o}-hint`:void 0,...y,children:[p&&e.jsx("option",{value:"",disabled:!0,children:p}),m.map(d=>e.jsx("option",{value:d.value,children:d.label},d.value))]}),r&&e.jsx("p",{id:`${o}-error`,className:"mt-1.5 text-sm text-red-500",role:"alert",children:r}),i&&!r&&e.jsx("p",{id:`${o}-hint`,className:"mt-1.5 text-sm text-neutral-500",children:i})]})});u.displayName="Select";u.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["SelectHTMLAttributes"]};const v={title:"UI/Select",component:u,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},error:{control:"text"},disabled:{control:"boolean"}}},n=[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"}],a={args:{options:n,placeholder:"Select a country"}},t={args:{label:"Country",options:n,placeholder:"Choose..."}},s={args:{label:"Country",options:n,placeholder:"Choose...",error:"Please select a country"}},l={args:{label:"Country",options:n,placeholder:"Choose...",disabled:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    options: countryOptions,
    placeholder: "Select a country"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Country",
    options: countryOptions,
    placeholder: "Choose..."
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Country",
    options: countryOptions,
    placeholder: "Choose...",
    error: "Please select a country"
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Country",
    options: countryOptions,
    placeholder: "Choose...",
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};const j=["Default","WithLabel","WithError","Disabled"];export{a as Default,l as Disabled,s as WithError,t as WithLabel,j as __namedExportsOrder,v as default};
