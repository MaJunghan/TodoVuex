import Vue from "vue";
import Vuex from 'vuex';
import * as getters from './geters';
import * as mutations from './mutations';

Vue.use(Vuex);
// use는 vue의 플러그인 
// vue를 사용하는 모든영역에 특정 기능을 추가하고싶을떄 (전역)

const storage = {
    fetch() {
      const arr = [];
      if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
           arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          }
        }
      }
      return arr;
    },
};
export const store = new Vuex.Store({
    // data
    state: {
      todoItems: storage.fetch()
    },
    getters: getters,
    mutations: mutations
});