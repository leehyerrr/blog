import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";
import Autor from "./components/Autor.vue";
import Comment from "./components/Comment.vue";

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/detail/:id",
    component: Detail,
    children:[
      {
        path: "autor",
        component: Autor,
      },
      {
        path: "comment",
        component: Comment,
      },            
    ]    
  }  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 