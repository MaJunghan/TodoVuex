export const addOneItem = (state,newTodoItem) => {
    const obj = {completed: false, item: newTodoItem};
    localStorage.setItem(newTodoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}
export const  removeOneItem = (state, payload) => {
    state.todoItems.splice(payload.index, 1);
    localStorage.removeItem(payload.todoItem.item);
}
export const toggleOneItem = (state, payload) => {
    payload.todoItem.completed = !payload.todoItem.completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}
export const clearAllItems = (state) => {
    state.todoItems = [];
    localStorage.clear();
}

