import{d as f,T as c,c as w,w as n,o as _,a as o,u as s,Z as g,b as l,e as d,k as V,n as b,f as v}from"./app-48770772.js";import{_ as y}from"./GuestLayout.vue_vue_type_script_setup_true_lang-defc65c9.js";import{_ as t,a as m,b as i}from"./TextInput.vue_vue_type_script_setup_true_lang-2520fce3.js";import{P as x}from"./PrimaryButton-85489c6e.js";import"./ApplicationLogo-03c42d8c.js";import"./_plugin-vue_export-helper-c27b6911.js";const k=["onSubmit"],h={class:"mt-4"},q={class:"mt-4"},B={class:"mt-4"},C={class:"flex items-center justify-end mt-4"},j=f({__name:"Register",setup(N){const e=c({name:"",email:"",password:"",password_confirmation:""}),u=()=>{e.post(route("register"),{onFinish:()=>{e.reset("password","password_confirmation")}})};return(p,a)=>(_(),w(y,null,{default:n(()=>[o(s(g),{title:"Register"}),l("form",{onSubmit:v(u,["prevent"])},[l("div",null,[o(t,{for:"name",value:"Name"}),o(m,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":a[0]||(a[0]=r=>s(e).name=r),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),o(i,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),l("div",h,[o(t,{for:"email",value:"Email"}),o(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":a[1]||(a[1]=r=>s(e).email=r),required:"",autocomplete:"username"},null,8,["modelValue"]),o(i,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),l("div",q,[o(t,{for:"password",value:"Password"}),o(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":a[2]||(a[2]=r=>s(e).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(i,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),l("div",B,[o(t,{for:"password_confirmation",value:"Confirm Password"}),o(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":a[3]||(a[3]=r=>s(e).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(i,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),l("div",C,[o(s(V),{href:p.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:n(()=>[d(" Already registered? ")]),_:1},8,["href"]),o(x,{class:b(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:n(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],40,k)]),_:1}))}});export{j as default};
