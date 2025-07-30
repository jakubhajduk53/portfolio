import { createApp } from "vue";
import { router } from "./router";
import "./style.css";
import App from "./App.vue";
import "boxicons/css/boxicons.min.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
