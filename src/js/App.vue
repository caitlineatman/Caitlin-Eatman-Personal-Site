<template>
  <div>
    <Navbar></Navbar>

    <transition name="slide">
      <router-view></router-view>
    </transition>

    <Footer></Footer>

  </div>
</template>

<script>
  import VueRouter from "vue-router";
  
  import Navbar from "./Navbar.vue";
  import Footer from "./Footer.vue";

  import Home from "./pages/Home.vue";
  import About from "./pages/About.vue";
  import Contact from "./pages/Contact.vue";
  import Portfolio from "./pages/Portfolio.vue";

  const routes = [
    { path: '/', component: Home }, 
    { path: '/about', component: About }, 
    { path: '/contact', component: Contact }, 
    { path: '/portfolio', component: Portfolio }
  ];

  const router = new VueRouter({
    routes
  });

  export default {
    name: 'App',
    components: {
      Navbar, 
      Footer
    },
    router: router,
    mounted(){
    },
    data() {
      return {
      }
    }
  }
</script>