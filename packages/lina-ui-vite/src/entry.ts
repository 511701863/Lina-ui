import { App } from "vue";
import { LButton } from "./button/index";
import SFCButton from "./button/SFCButton.vue";
import JSXButton from "./button/JSXButton.tsx";
import "uno.css";

export { LButton, SFCButton, JSXButton };

export default {
  install(app: App): void {
    app.component(LButton.name, LButton);
    app.component("SFCButton", SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
