import Vue from 'vue'
import vuex from 'vuex'
import tab from "./tab"
Vue.use(vuex)

const stroe=new vuex.Store({
    modules: {
        tab
    }
})
export default stroe