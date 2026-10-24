import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Dashboard from "../views/DashBoard.vue";
import Login from "../views/LogIn.vue";
import TheMeal from "../views/TheMeal.vue";

const routes = [
   {
     path: "/", 
     name: "home", 
     component: Home 
    },
    { 
    path: "/dashboard", 
    name: "dashboard",
     component: Dashboard
    },
    {     
    path: "/login",
    name: "login", 
    component: Login
    },
    {
      path: "/meal",
      name: "meal",
      component: TheMeal 
    }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;