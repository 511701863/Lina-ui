import LButton from "./Button";
import { App } from "vue";
import "uno.css";

// 导出Button组件
export { LButton };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(LButton.name, LButton);
  },
};
