export default {
    namespaced: true,
    state: {
        menuList: []
    },
    mutations:{
        saveMenu(state,value){
             console.log("保存menu",value)
             state.menuList=value;
        }
    }
}