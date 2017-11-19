import Vue from "vue";
import App from "./App.vue";

Vue.filter("to-lowercase", function(value) {
  return value.toLowerCase();
});

Vue.filter("counts", function(value) {
  if (!value) return value;
  const length = value.length;
  return `${value} (${length})`;
});

Vue.mixin({
  created() {
    console.log("Global Mixin - Created Hook");
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
