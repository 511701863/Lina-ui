import {App} from 'vue';
import LButton from './button/Button'
import SFCButton from './button/SFCButton.vue'
import JSXButton from './button/JSXButton.tsx'

export { LButton,SFCButton,JSXButton}

export default {
    install(app:App):void{
        app.component(LButton.name,LButton);
        app.component('SFCButton',SFCButton);
        app.component(JSXButton.name,JSXButton);
    }
}