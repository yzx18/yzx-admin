export default {
    namespaced:true,
    state:{
        isCollapse:false
    },
    mutations:{
        changeCollaps(state){
            console.log("我被调用了")
            console.log("current state",state)
             state.isCollapse=!state.isCollapse
             console.log(!state.isCollapse)
             console.log(state.isCollapse)
             console.log("change current state",state)
        }
    }
}