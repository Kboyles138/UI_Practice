import{j as r}from"./jsx-runtime-CRZB9wO2.js";import{B as d}from"./Button-jEHZkc5e.js";import"./iframe-DAnRIDez.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"UI/Button",component:d,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","danger"]},size:{control:"select",options:["sm","md","lg"]},fullWidth:{control:"boolean"},disabled:{control:"boolean"}}},e={args:{children:"Primary",variant:"primary"}},a={args:{children:"Secondary",variant:"secondary"}},s={args:{children:"Outline",variant:"outline"}},n={args:{children:"Ghost",variant:"ghost"}},t={args:{children:"Danger",variant:"danger"}},o={render:()=>r.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[r.jsx(d,{size:"sm",children:"Small"}),r.jsx(d,{size:"md",children:"Medium"}),r.jsx(d,{size:"lg",children:"Large"})]})},i={args:{children:"Disabled",disabled:!0}},c={args:{children:"Full Width",fullWidth:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Primary",
    variant: "primary"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Secondary",
    variant: "secondary"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Outline",
    variant: "outline"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Ghost",
    variant: "ghost"
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Danger",
    variant: "danger"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Disabled",
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Full Width",
    fullWidth: true
  }
}`,...c.parameters?.docs?.source}}};const h=["Primary","Secondary","Outline","Ghost","Danger","Sizes","Disabled","FullWidth"];export{t as Danger,i as Disabled,c as FullWidth,n as Ghost,s as Outline,e as Primary,a as Secondary,o as Sizes,h as __namedExportsOrder,g as default};
