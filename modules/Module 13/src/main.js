import Vue from "vue";
import App from "./App.vue";

Vue.filter("to-lowercase", value => {
  if (!value) return value;
  return value.toLowerCase();
});

new Vue({
  el: "#app",
  render: h => h(App)
});
