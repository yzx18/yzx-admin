import Vrouter from "vue-router"
import Vue from "vue"
const routes = [
    {
        path: "/",
        component: () => import("../view/main.vue"),
        children: [{
            path: "/Home/Home",
            component: () => import("../view/Home.vue")
        }, {
            path: "/MallManage/MallManage",
            component: () => import("../view/MallManage.vue")
        }, {
            path: "/UserManage/UserManage",
            component: () => import("../view/UserManage.vue")
        }, {
            path: "/Other/PageOne",
            component: () => import("../view/Other/PageOne.vue")
        }, {
            path: "/Other/PageTwo",
            component: () => import("../view/Other/PageTwo.vue")
        }]
    }
]

const router = new Vrouter({
    routes
})
Vue.use(Vrouter)
export default router