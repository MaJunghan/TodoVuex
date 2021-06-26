import Vue from "vue";
import Vuex from 'vuex';

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
    getters: {
      getTodoItem(state) {
        return state.todoItems;
      }
    },
    mutations: {
      addOneItem(state,newTodoItem) {
        const obj = {completed: false, item: newTodoItem};
        localStorage.setItem(newTodoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
      },
      removeOneItem(state, payload) {
        state.todoItems.splice(payload.index, 1);
        localStorage.removeItem(payload.todoItem.item);
      },
      toggleOneItem(state, payload) {
        payload.todoItem.completed = !payload.todoItem.completed;
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
      },
      clearAllItems(state) {
        state.todoItems = [];
        localStorage.clear();
      }
    }
});