// const s:string="hello Typescript"
// console.log(s);
// import LButton from './button'
// import SFCButton from './button/SFCButton.vue'
import JSXButton from "./button/JSXButton.jsx";
import { createApp } from "vue/dist/vue.esm-bundler.js";
import LinaUi from "./entry";
console.log(LinaUi, 1234);

createApp({
  template: `
        <div style="margin-bottom:20px;">
            <SFCButton color="blue">主要按钮</SFCButton>
            <SFCButton color="green">绿色按钮</SFCButton>
            <SFCButton color="gray">灰色按钮</SFCButton>
            <SFCButton color="yellow">黄色按钮</SFCButton>
            <SFCButton color="red">红色按钮</SFCButton>
        </div>
        <div style="margin-bottom:20px;">
            <SFCButton color="pink" plain>粉色按钮</SFCButton>
            <SFCButton color="blue" plain>主要按钮</SFCButton>
            <SFCButton color="green" plain>绿色按钮</SFCButton>
            <SFCButton color="gray" plain>灰色按钮</SFCButton>
            <SFCButton color="yellow" plain>黄色按钮</SFCButton>
            <SFCButton color="red" plain>红色按钮</SFCButton>
        </div>
        <div style="margin-bottom:20px;">
            <SFCButton color="pink" size="small">粉色按钮</SFCButton>
            <SFCButton color="pink">粉色按钮</SFCButton>
            <SFCButton color="pink" size="large">粉色按钮</SFCButton>
        </div>
        <div style="margin-bottom:20px;">
            <SFCButton color="pink" plain round>粉色按钮</SFCButton>
            <SFCButton color="blue" plain round>主要按钮</SFCButton>
            <SFCButton color="green" plain round>绿色按钮</SFCButton>
            <SFCButton color="gray" round>灰色按钮</SFCButton>
            <SFCButton color="yellow" round>黄色按钮</SFCButton>
            <SFCButton color="red" round>红色按钮</SFCButton>
        </div>
        <div style="margin-bottom:20px;">
            <SFCButton color="blue" icon="search"></SFCButton>
            <SFCButton color="green" icon="edit"></SFCButton>
            <SFCButton color="gray" icon="account-circle"></SFCButton>
            <SFCButton color="yellow" icon="local-play"></SFCButton>
            <SFCButton color="red" icon="liquor" round></SFCButton>
        </div>
        `,
})
  .use(LinaUi)
  .mount("#app");
