import Vue from "vue"
import Router from 'vue-router';
import Synonyms from "@/components/SynonymsTemp"
import Antonyms from "@/components/AntonymsTemp"
Vue.use(Router)
export default new Router({
    mode:"history",
    routes:[{
        path:"/synonyms",
        name:"Synonyms",
        component:Synonyms,
        meta:{
            index:1
        }
    },{
        path:"/antonyms",
        name:"Antonyms",
        component:Antonyms,
        meta:{
            index:2
        }
    }],
    linkActiveClass: "btn-primary"
})