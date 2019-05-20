import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

// import Bootstrap and its dependencies
import "jquery";
import "popper.js";
import "bootstrap";


// import CSS and fonts
import 'typeface-roboto';
import 'ti-icons/css/themify-icons.css';
import '../../dist/style.css';

// initialize router
Vue.use(VueRouter);

// initialize app
var app = new Vue({
  el: "#app",
  render: html => html(App)
});
