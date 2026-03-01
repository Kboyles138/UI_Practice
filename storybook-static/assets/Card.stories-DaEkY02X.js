import{j as e}from"./jsx-runtime-CRZB9wO2.js";import{r as x}from"./iframe-DAnRIDez.js";import{B as u}from"./Button-jEHZkc5e.js";import"./preload-helper-PPVm8Dsz.js";const f={elevated:"bg-white dark:bg-neutral-900 shadow-md hover:shadow-lg transition-shadow border border-neutral-200/50 dark:border-neutral-700/50",outlined:"bg-transparent border-2 border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors",filled:"bg-neutral-100 dark:bg-neutral-800/50 border border-transparent"},m=x.forwardRef(({variant:r="elevated",className:a="",children:p,...h},C)=>e.jsx("div",{ref:C,className:["rounded-xl p-6",f[r],a].filter(Boolean).join(" "),...h,children:p}));m.displayName="Card";const s=({className:r="",...a})=>e.jsx("div",{className:`mb-4 ${r}`,...a}),o=({className:r="",...a})=>e.jsx("h3",{className:`text-xl font-semibold text-neutral-900 dark:text-neutral-100 ${r}`,...a}),l=({className:r="",...a})=>e.jsx("p",{className:`mt-1 text-sm text-neutral-500 dark:text-neutral-400 ${r}`,...a}),i=({className:r="",...a})=>e.jsx("div",{className:r,...a}),c=({className:r="",...a})=>e.jsx("div",{className:`mt-4 flex items-center gap-2 pt-4 border-t border-neutral-200 dark:border-neutral-700 ${r}`,...a});m.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:'"elevated" | "outlined" | "filled"',elements:[{name:"literal",value:'"elevated"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"filled"'}]},description:"",defaultValue:{value:'"elevated"',computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["HTMLAttributes"]};s.__docgenInfo={description:"",methods:[],displayName:"CardHeader",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};o.__docgenInfo={description:"",methods:[],displayName:"CardTitle",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};l.__docgenInfo={description:"",methods:[],displayName:"CardDescription",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};i.__docgenInfo={description:"",methods:[],displayName:"CardContent",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};c.__docgenInfo={description:"",methods:[],displayName:"CardFooter",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};const N={title:"UI/Card",component:m,tags:["autodocs"],argTypes:{variant:{control:"select",options:["elevated","outlined","filled"]}}},t={args:{variant:"elevated",children:e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(o,{children:"Elevated Card"}),e.jsx(l,{children:"Card with shadow and subtle border. Best for primary content."})]}),e.jsx(i,{children:e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"This is the card content area."})}),e.jsx(c,{children:e.jsx(u,{size:"sm",children:"Action"})})]})}},n={args:{variant:"outlined",children:e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(o,{children:"Outlined Card"}),e.jsx(l,{children:"Card with border, no shadow. Good for secondary content."})]}),e.jsx(i,{children:e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"This is the card content area."})}),e.jsx(c,{children:e.jsx(u,{variant:"outline",size:"sm",children:"Action"})})]})}},d={args:{variant:"filled",children:e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(o,{children:"Filled Card"}),e.jsx(l,{children:"Card with muted background. Use for grouped content."})]}),e.jsx(i,{children:e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"This is the card content area."})}),e.jsx(c,{children:e.jsx(u,{variant:"ghost",size:"sm",children:"Action"})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "elevated",
    children: <>
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>
            Card with shadow and subtle border. Best for primary content.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-neutral-600 dark:text-neutral-400">
            This is the card content area.
          </p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Action</Button>
        </CardFooter>
      </>
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outlined",
    children: <>
        <CardHeader>
          <CardTitle>Outlined Card</CardTitle>
          <CardDescription>
            Card with border, no shadow. Good for secondary content.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-neutral-600 dark:text-neutral-400">
            This is the card content area.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">
            Action
          </Button>
        </CardFooter>
      </>
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "filled",
    children: <>
        <CardHeader>
          <CardTitle>Filled Card</CardTitle>
          <CardDescription>
            Card with muted background. Use for grouped content.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-neutral-600 dark:text-neutral-400">
            This is the card content area.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" size="sm">
            Action
          </Button>
        </CardFooter>
      </>
  }
}`,...d.parameters?.docs?.source}}};const T=["Elevated","Outlined","Filled"];export{t as Elevated,d as Filled,n as Outlined,T as __namedExportsOrder,N as default};
