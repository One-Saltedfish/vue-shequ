import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./components/Home.vue"
import Topic from "./components/Topic.vue"
import User from './components/User.vue'
import CreateTopic from "./components/CreateTopic.vue"
import PUBLICURL from './xxx'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [{
      path: PUBLICURL + "/",
      component: Home
    },
    {
      path: PUBLICURL + "/topic/create",
      component: CreateTopic
    },
    {
      path: PUBLICURL + "/topic/:id",
      component: Topic
    },
    {
      path: PUBLICURL + "/user/:loginname",
      component: User
    }
  ],
  mode: "history"
})