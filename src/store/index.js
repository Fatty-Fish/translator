import Vue from "vue"
import Vuex from "vuex"
import Axios from "axios";
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        Synonyms:"",
        Antonyms:"",
        text:""
    },
    mutations: {
        textMutations(state,text) {
            state.text = text;
        },
        relatedMutations(state, relatedObj) {
            state.Synonyms = relatedObj.syn[0].tr;
            state.Antonyms = relatedObj.ant;
        },
        relatedClear(state) {
            state.Synonyms = "";
            state.Antonyms = "";
        }
    },
    actions: {
        findActions({commit},obj) {
            Axios.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180803T055945Z.9942c977180b9b7c.b1b1d600161f7755e8bf255db0d7c44640b4bc97&text=" + obj.translateText + "&lang=" + obj.language)
                .then(function (res) {
                    // console.log(res.data.text[0])
                    commit("textMutations",res.data.text[0]);
                })
            Axios.get("https://dictionary.yandex.net/dicservice.json/lookupMultiple?ui=en&srv="+obj.translateText+"&text="+obj.translateText+"&dict=en.syn%2Cen.ant%2Cen.deriv&flags=39")
                .then(function (res) {
                    if (res.data.en.syn[0] || res.data.en.ant[0]) {
                        // console.log(res.data.en)
                        // console.log(111)
                        commit("relatedMutations",res.data.en);
                    }
                })
        }
    }
})
export default store;